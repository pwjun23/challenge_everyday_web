import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

const withPWA = require('next-pwa')({
  dest: 'public', // service worker 파일이 생성될 디렉토리
  register: true, // service worker 등록
  skipWaiting: true, // service worker 업데이트 시 대기 없이 바로 적용
  disable: process.env.NODE_ENV === 'development', // 개발 환경에서는 PWA 기능 비활성화
  // runtimeCaching: [], // 추가적인 캐싱 설정 (필요한 경우)
})

module.exports = withPWA(nextConfig)