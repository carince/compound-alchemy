import { dbConnect } from '@/utils/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    if (req.method === "POST") {
        const client = await dbConnect();

        try {
            const collection = client.collection("users");

            const { email, answers, score, test } = JSON.parse(req.body);

            if (typeof email !== 'string') {
                return res.status(400).json({ message: "Invalid email parameter!" });
            }

            const user = await collection.findOne({ email });

            if (!user) return res.status(404).json("User not found!");

            const testType = test ? "posttest" : "pretest";

            if (user.progress[testType].completed)
                return res.status(200).json({ message: "Test already completed!" });

            const update = {
                $set: {
                    [`progress.${test ? "posttest" : "pretest"}`]: {
                        completed: true,
                        score,
                        answers
                    }
                }
            }

            const result = await collection.updateOne({ email }, update, { upsert: true });
            return res.status(200).json(result);
        } catch (err: unknown) {
            res.status(500).json({ message: "Something went wrong!" });
            throw new Error(`${err}`)
        }
    } else {
        return res.status(405).json({ message: "Method not allowed!" });
    }
}