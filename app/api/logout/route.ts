// app/api/logout/route.ts
import { NextResponse } from 'next/server';
import { adminAuth } from '@/app/lib/firebase/firebaseAdmin'; // adminAuth 경로 수정 필요

export async function POST() {
  const response = NextResponse.json({ status: 'success' });
  // 'session_token' 쿠키를 삭제합니다.
  response.cookies.set('session_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0, // maxAge를 0으로 설정하여 즉시 쿠키를 만료시킵니다.
    path: '/',
  });
  return response;
}