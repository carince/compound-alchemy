import { JWTPayload, SignJWT, jwtVerify } from 'jose';

import { SessionType } from '@/types';

export const createToken = async (userId: string): Promise<string> => {
    return new SignJWT({ userId })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1d')
        .sign(new TextEncoder().encode(process.env.AUTH_SECRET as string));
};

export const verifyToken = async (token: string): Promise<SessionType & JWTPayload | null> => {
    try {
        const { payload } = await jwtVerify<SessionType>(token, new TextEncoder().encode(process.env.AUTH_SECRET as string));
        return payload;
    } catch {
        return null;
    }
};
