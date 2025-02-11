import { NextApiRequest, NextApiResponse } from 'next';

import { Auth } from '@/models/auth';
import dbConnect from '@/utils/db';
import { verifyToken } from '@/utils/jwt';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end();

    await dbConnect();

    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    // Verify token
    const decoded = await verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    // Fetch user data (excluding password)
    const user = await Auth.findById(decoded.userId).select('-password');

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({ user });
}
