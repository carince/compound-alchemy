import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end();
    res.setHeader('Set-Cookie', serialize('token', "", {
        httpOnly: true,
        secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        expires: new Date(0),
    }));

    return res.redirect(302, '/');
}
