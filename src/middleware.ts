import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export function middleware(request: NextRequest) {
    const isLogin  = cookies().get('isLogin');
    if(!isLogin) return NextResponse.redirect(new URL('/auth/login', request.url));
}

export const config = {
    matcher: '/chats/:path*',
}