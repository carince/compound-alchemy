import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { Auth } from '@/models/auth';
import { Data } from '@/models/data';
import dbConnect from '@/utils/db';
import { createToken } from '@/utils/jwt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end();

    await dbConnect();

    const { email, password } = JSON.parse(req.body);

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    const user = await Auth.create({ email, password });
    await Data.create({ userId: user._id });

    const token = await createToken(user._id);
    res.setHeader('Set-Cookie', serialize('token', token, {
        httpOnly: true,
        secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60, // 1 hour
    }));

    return res.status(201).json({ message: 'User registered successfully' });
}
