import { NextApiRequest, NextApiResponse } from 'next';

import { Data } from '@/models/data';
import dbConnect from '@/utils/db';
import { verifyToken } from '@/utils/jwt'; // Import the verifyToken function
import { Logger } from '@/utils/logger';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        await dbConnect();

        try {
            const token = req.cookies.token
            if (!token) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            const decoded = await verifyToken(token);
            if (!decoded) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            const { unlocked } = JSON.parse(req.body);

            if (typeof unlocked !== 'object') {
                return res.status(400).json({ message: "Invalid parameters" });
            }

            // Fetch the user data from the Data model
            const userData = await Data.findOne({ userId: decoded.userId });
            if (!userData) {
                return res.status(404).json({ message: "User data not found!" });
            }

            // Update the user's progress in the Data collection
            const update = {
                $set: {
                    ["progress.elements"]: {
                        unlocked
                    }
                }
            };

            const result = await Data.updateOne({ userId: decoded.userId }, update, { upsert: true });
            return res.status(200).json(result);
        } catch (err: unknown) {
            Logger.error("API/ELEMENTS", err as string);
            res.status(500).json({ message: "Something went wrong!" });
        }
    } else {
        return res.status(405).json({ message: "Method not allowed!" });
    }
}
