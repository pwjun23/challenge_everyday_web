'use client';

import React, { useState, useEffect } from 'react'; // useEffect 추가
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
} from 'firebase/auth';

import FloatingInput from '@/app/components/FloatingInput';
import { auth } from '@/app/lib/firebase/firebase';

const actionCodeSettings = {
  url: 'http://localhost:3000/signup/password',
  handleCodeInApp: true,
};

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);
  const router = useRouter();

  // ✅ 해결책: useEffect 훅을 사용해 클라이언트 측에서만 실행되도록 수정
  useEffect(() => {
    // window 객체가 존재하고, 이메일 인증 링크로 접속했을 경우
    if (typeof window !== 'undefined' && isSignInWithEmailLink(auth, window.location.href)) {
      setStep(2); // 비밀번호 설정 단계로 변경
    }
  }, []); // 의존성 배열을 비워 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods && signInMethods.length > 0) {
        toast.error('이미 존재하는 이메일입니다.');
        return;
      }

      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      toast.success('인증 메일이 발송되었습니다. 메일을 확인해 주세요.');
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
      
      await createUserWithEmailAndPassword(auth, emailForSignIn, password);
      window.localStorage.removeItem('emailForSignIn');

      toast.success('회원가입이 완료되었습니다.');
      router.push('/');
    } catch (error) {
      console.error('비밀번호 설정 중 오류 발생:', error);
      toast.error('오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

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