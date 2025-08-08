'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
} from "firebase/auth";

import FloatingInput from '@/app/components/FloatingInput';
import { auth } from '@/app/lib/firebase/firebase';

const actionCodeSettings = {
  url: 'http://localhost:3000/signup/password', // 이메일 인증 후 이동할 URL (비밀번호 설정 페이지)
  handleCodeInApp: true,
};

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1); // 1: 이메일 입력, 2: 비밀번호 설정
  const router = useRouter();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods && signInMethods.length > 0) {
        // 3. 중복된 이메일이 있는 경우
        toast.error('이미 존재하는 이메일입니다.');
        return;
      }

      // 4. 중복이 없는 경우, 인증 메일 발송
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      window.localStorage.setItem('emailForSignIn', email);
      toast.success('인증 메일이 발송되었습니다. 메일을 확인해 주세요.');

      // 메일 인증 확인 메시지 출력
      // (실제 비밀번호 설정 단계로 이동은 메일 클릭 후 자동으로 이루어짐)
    } catch (error) {
      console.error('이메일 인증 과정에서 오류 발생:', error);
      toast.error('오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const emailForSignIn = window.localStorage.getItem('emailForSignIn');

      if (!emailForSignIn) {
        toast.error('이메일 인증이 필요합니다.');
        return;
      }
      
      // 5. 이메일 인증이 완료되었으므로 비밀번호로 계정 생성
      await createUserWithEmailAndPassword(auth, emailForSignIn, password);
      
      // 로컬 스토리지 데이터 정리
      window.localStorage.removeItem('emailForSignIn');

      toast.success('회원가입이 완료되었습니다.');
      router.push('/'); // 회원가입 완료 후 메인 페이지로 이동
    } catch (error) {
      console.error('비밀번호 설정 중 오류 발생:', error);
      toast.error('오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  // 이메일 인증 후 비밀번호 설정 페이지로 이동하는 로직
  // 메일 링크를 통해 접속했을 때 실행되는 코드
  useState(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      setStep(2);
    }
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-center">회원가입</h2>
            <form className="mt-8" onSubmit={handleEmailSubmit}>
              <FloatingInput 
                id="email" 
                label="이메일 주소" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                메일 인증하기
              </button>
            </form>
          </div>
        )}
        
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-center">비밀번호 설정</h2>
            <form className="mt-8" onSubmit={handlePasswordSubmit}>
              <FloatingInput 
                id="password" 
                label="비밀번호" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                비밀번호 설정
              </button>
            </form>
          </div>
        )}
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}