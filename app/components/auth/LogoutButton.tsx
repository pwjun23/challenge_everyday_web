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
      toast.success('로그아웃되었습니다.');
      router.push('/login'); // 로그아웃 후 로그인 페이지로 리다이렉트
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
      toast.error('로그아웃에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;