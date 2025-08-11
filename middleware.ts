// middleware.ts

import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session_token'); // 세션 토큰을 쿠키에서 가져옴
  
  console.log('Session Token:', session);
  // 로그인 상태를 체크하는 로직
  // Firebase SDK는 서버 미들웨어에서 직접 상태를 확인하기 어려우므로,
  // 세션 쿠키와 같은 방식으로 로그인 상태를 확인해야 합니다.
  // 이 예제에서는 단순화하여 '로그인된 상태'라는 가정하에 진행합니다.
  const isLoggedIn = !!session;

  const pathname = request.nextUrl.pathname;

  // 보호된 경로 설정
  const protectedRoutes = ['/dashboard'];

  // 로그인이 필요한 페이지인데, 로그인하지 않은 경우
  if (protectedRoutes.includes(pathname) && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 로그인 페이지인데, 이미 로그인한 경우
  if (isLoggedIn && (pathname === '/login' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
}