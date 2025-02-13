import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { verifyToken } from '@/utils/jwt'

const protectedRoutes = ['/game', '/tests', 'end']

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)

    const token = (await cookies()).get('token')
    if (!token) {
        if (isProtectedRoute) {
            return NextResponse.redirect(new URL('/login', req.nextUrl))
        }
        return NextResponse.next()
    }
    const session = await verifyToken(token.value)

    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}