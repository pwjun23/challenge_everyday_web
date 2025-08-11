// app/api/login/route.ts
import { adminAuth } from '@/app/lib/firebase/firebaseAdmin';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { idToken } = await request.json();

  // 토큰 유효성 검사 및 세션 쿠키 생성
  try {
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5일
    const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });
    
    // 응답 객체에 쿠키 설정
    const response = NextResponse.json({ status: 'success' });
    response.cookies.set({
      name: 'session_token',
      value: sessionCookie,
      httpOnly: true, // JavaScript 접근 방지
      secure: process.env.NODE_ENV === 'production',
      maxAge: expiresIn / 1000,
      path: '/',
    });
    return response;
  } catch (error) {
    return NextResponse.json({ status: 'error', message: 'Failed to create session cookie' }, { status: 401 });
  }
}