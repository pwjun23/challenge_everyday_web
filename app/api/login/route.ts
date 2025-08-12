// app/api/login/route.ts
import { NextResponse } from 'next/server';
import { adminAuth } from '@/app/lib/firebase/firebaseAdmin';

export async function POST(request: Request) {
  try {
    const { idToken } = await request.json();

    if (!idToken) {
      return NextResponse.json({ message: 'No ID token provided' }, { status: 401 });
    }

    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5일
    const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });

    const response = NextResponse.json({ status: 'success' });
    response.cookies.set({
      name: 'session_token',
      value: sessionCookie,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: expiresIn / 1000,
      path: '/',
    });
    
    return response;
  } catch (error) {
    console.error('Failed to create session cookie:', error);
    return NextResponse.json({ message: 'Invalid ID token' }, { status: 401 });
  }
}