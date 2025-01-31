import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/utils/mongodb';

export async function POST(req: NextRequest) {
    console.log("API request received!");
    if (req.method === "POST") {
        const client = await dbConnect();

        try {
            const collection = client.collection("users");

            const { email, answers, score, test } = JSON.parse(await req.text());

            console.log("Request body: ", { email, answers, score, test });

            if (typeof email !== 'string') {
                return NextResponse.json({ message: "Invalid email parameter!" }, { status: 400 });
            }

            const user = await collection.findOne({ email });

            if (!user) return NextResponse.json("User not found!", { status: 404 });

            const testType = test ? "posttest" : "pretest";

            if (user.progress[testType].completed)
                return NextResponse.json({ message: "Test already completed!" }, { status: 200 });

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
            console.log("Result: ", result);
            return NextResponse.json(result, { status: 200 });
        } catch (err: unknown) {
            NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
            throw new Error(`${err}`)
        }
    } else {
        return NextResponse.json({ message: "Method not allowed!" }, { status: 405 });
    }
}