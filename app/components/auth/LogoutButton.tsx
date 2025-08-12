//component/auth/LogoutButton.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase/firebase';
import { toast } from 'react-toastify';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);

       // ✅ 세션 쿠키를 삭제하는 API 라우트 호출
      await fetch('/api/logout', { method: 'POST' });
      
      toast.success('로그아웃되었습니다.');
      router.push('/login'); // 로그아웃 후 로그인 페이지로 리다이렉트
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
      toast.error('로그아웃에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-end mt-8">
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-black text-sm rounded-sm hover:bg-gray-200 transition-colors duration-300"
    >
      로그아웃
    </button>
    </div>
  );
};

export default LogoutButton;