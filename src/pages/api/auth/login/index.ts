import bcrypt from 'bcrypt';
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { Auth } from '@/models/auth';
import dbConnect from '@/utils/db';
import { createToken } from '@/utils/jwt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end();

    await dbConnect();

    const { email, password } = JSON.parse(req.body);
    const user = await Auth.findOne({ email });
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = await createToken(user._id);
    res.setHeader('Set-Cookie', serialize('token', token, {
        httpOnly: true,
        secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60, // 1 hour
    }));

    return res.status(200).json({ token });
}
