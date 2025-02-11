import { NextApiRequest, NextApiResponse } from 'next';

import { Data } from '@/models/data';
import dbConnect from '@/utils/db';
import { verifyToken } from '@/utils/jwt';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        await dbConnect();

        try {
            // Extract token from Authorization header
            const token = req.cookies.token
            if (!token) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            // Verify token
            const decoded = await verifyToken(token);
            if (!decoded) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            // Check if user already has associated data
            const userData = await Data.findOne({ userId: decoded.userId });
            if (!userData) {
                return res.status(404).json({ message: "User not found" });
            }

            return res.status(200).json(userData);
        } catch {
            return res.status(500).json({ message: "Something went wrong!" });
        }
    } else {
        return res.status(405).json({ message: "Method not allowed!" });
    }
}
