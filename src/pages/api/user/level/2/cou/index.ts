import { NextApiRequest, NextApiResponse } from 'next';

import { Data } from '@/models/data';
import { UserDataType } from '@/types';
import dbConnect from '@/utils/db';
import { verifyToken } from '@/utils/jwt';
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

            // Verify token
            const decoded = await verifyToken(token);
            if (!decoded) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            // Fetch the user data from the Data model
            const userData = await Data.findOne<UserDataType>({ userId: decoded.userId });
            if (!userData) {
                return res.status(404).json({ message: "User data not found!" });
            }

            const { answers } = JSON.parse(req.body);


            // Check if the user has already completed it.
            if (userData.progress && userData.progress.level2 && userData.progress.level2.cou && userData.progress.level2.cou.completed) {
                return res.status(400).json({ message: "Already completed!" });
            }

            // Update the user's progress in the Data collection
            const update = {
                $set: {
                    'progress.level2.cou': {
                        answers,
                        completed: true
                    }
                }
            };

            const result = await Data.updateOne({ userId: decoded.userId }, update, { upsert: true });
            return res.status(200).json(result);
        } catch (err: unknown) {
            Logger.error("API/LEVEL", err as string);
            res.status(500).json({ message: "Something went wrong!" });
        }
    } else {
        return res.status(405).json({ message: "Method not allowed!" });
    }
}
