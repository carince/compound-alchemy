import { NextApiRequest, NextApiResponse } from 'next';

import { UserType } from '@/types';
import { dbConnect } from '@/utils/mongodb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {
    if (req.method === "POST") {
        const client = await dbConnect();

        try {
            const collection = client.collection("users");

            const userEmail = JSON.parse(req.body).email;
            if (typeof userEmail !== 'string') {
                return res.json({ message: "Invalid email parameter!" });
            }

            const user = await collection.findOne({ email: userEmail });
            if (!user) {
                const newUser: UserType = {
                    email: userEmail
                };

                await collection.insertOne(newUser);
                return res.status(200).json(newUser);
            }

            return res.status(200).json(user);
        } catch {
            return res.status(500).json({ message: "Something went wrong!" });
        }
    } else {
        return res.status(405).json({ message: "Method not allowed!" });
    }
}