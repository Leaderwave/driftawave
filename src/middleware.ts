import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if accessing dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Allow access to login page
    if (request.nextUrl.pathname === '/dashboard/login') {
      return NextResponse.next();
    }

    // Check for auth token
    const token = request.cookies.get('directus_token');

    if (!token) {
      // Redirect to login if no token
      const loginUrl = new URL('/dashboard/login', request.url);
      loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};

