import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/utils/mongodb';
import { User } from '@/types';

export async function POST(req: NextRequest) {
    console.log("API request received!");
    if (req.method === "POST") {
        const client = await dbConnect();

        try {
            const collection = client.collection("users");

            const body = await req.text();
            const userEmail = JSON.parse(body).email;
            if (typeof userEmail !== 'string') {
                return NextResponse.json({ message: "Invalid email parameter!" });
            }

            const user = await collection.findOne({ email: userEmail });
            if (!user) {
                const newUser: User = {
                    email: userEmail,
                    progress: {
                        pretest: {
                            completed: false,
                            score: 0,
                            answers: {}
                        },
                        posttest: {
                            completed: false,
                            score: 0,
                            answers: {}
                        },
                        level: 0
                    }
                };

                await collection.insertOne(newUser);
                return NextResponse.json(newUser);
            }

            return NextResponse.json(user);
        } catch {
            return NextResponse.json({ message: "Something went wrong!" });
        }
    } else {
        return NextResponse.json({ message: "Method not allowed!" });
    }
}