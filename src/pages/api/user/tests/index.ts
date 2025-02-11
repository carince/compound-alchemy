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

            const { answers, score, test } = JSON.parse(req.body);


            // Fetch the user data from the Data model
            const userData = await Data.findOne<UserDataType>({ userId: decoded.userId });
            if (!userData) {
                return res.status(404).json({ message: "User data not found!" });
            }

            // Determine whether the test is pretest or posttest
            const testType = test ? "posttest" : "pretest";

            // Check if the user has already completed the test
            if (userData.progress && userData.progress[testType]?.answers) {
                return res.status(400).json({ message: "Test already completed!" });
            }


            // if (userData.progress && userData.progress[testType] !== undefined) {
            //     return res.status(400).json({ message: "Test already completed!" });
            // }

            // Update the user's progress in the Data collection
            const update = {
                $set: {
                    [`progress.${testType}`]: {
                        score,
                        answers
                    }
                }
            };

            const result = await Data.updateOne({ userId: decoded.userId }, update, { upsert: true });
            return res.status(200).json(result);
        } catch (err: unknown) {
            Logger.error("API/TESTS", err as string);
            res.status(500).json({ message: "Something went wrong!" });
        }
    } else {
        return res.status(405).json({ message: "Method not allowed!" });
    }
}
