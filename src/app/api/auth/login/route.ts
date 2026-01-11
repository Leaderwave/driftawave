import { NextRequest, NextResponse } from 'next/server';
import { createDirectus, rest, authentication } from '@directus/sdk';

const directus = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL as string)
  .with(rest())
  .with(authentication('json'));

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Attempt login with Directus using direct API call
    const response = await fetch(`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.data?.access_token) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create response with auth cookie
    const nextResponse = NextResponse.json({
      success: true,
      message: 'Logged in successfully'
    });

    // Set cookie for authentication
    nextResponse.cookies.set('directus_token', data.data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return nextResponse;
  } catch (error) {
    console.error('Login API error:', error);
    
    return NextResponse.json(
      { success: false, error: 'Invalid email or password' },
      { status: 401 }
    );
  }
}

