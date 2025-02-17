import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { verifyToken } from '@/utils/jwt'

// 1. Specify protected and public routes
const protectedRoutes = ['/game', '/tests', 'end']
const publicRoutes = ['/login', '/register']

export default async function middleware(req: NextRequest) {
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    // 3. Decrypt the session from the cookie
    const token = (await cookies()).get('token')
    if (!token) {
        if (isProtectedRoute) {
            return NextResponse.redirect(new URL('/login', req.nextUrl))
        }
        return NextResponse.next()
    }
    const session = await verifyToken(token.value)

    // 4. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // 5. Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        session?.userId &&
        !req.nextUrl.pathname.startsWith('/game')
    ) {
        return NextResponse.redirect(new URL('/game', req.nextUrl))
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}