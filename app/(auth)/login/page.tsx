"use client";

import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import useAuthStore from '../../store/authStore';
import ModalPrivacy from './modal/ModalPrivacy';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '@/app/lib/firebase/firebase';
import { useAuth } from '@/app/lib/firebase/AuthContext';

const LoginPage = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setLoading, setError, setUser, user } = useAuthStore();
  const [rememberMe, setRememberMe] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() =>{
    const storedUser:string = localStorage.getItem('user') || "";

    if(storedUser){
      setUser(JSON.parse(storedUser));
    }

  },[]);

  useEffect(() =>{
    console.log({currentUser});
    if (currentUser !== undefined && currentUser !== null) {
        router.push('/dashboard'); // 이미 로그인된 상태라면 대시보드로 리다이렉트
      }
  },[currentUser]);


  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);

      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify(userCredential.user));
      } else {
        localStorage.removeItem('user');
      }

      const idToken = await userCredential.user.getIdToken();
      console.log('로그인 성공, idToken:', idToken);
      
      // ✅ 로그인 성공 후 API 라우트 호출
      await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken }),
      });

      toast.success('로그인에 성공했습니다.');
      router.push('/dashboard'); // 로그인 성공 시 대시보드로 이동
    } catch (error: any) {
      setError(error.message);

      console.error('로그인 중 오류 발생:', error);
      
      let errorMessage = '로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.';
      // Firebase 에러 코드에 따라 더 상세한 메시지를 보여줄 수 있습니다.
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = '유효하지 않은 이메일 주소입니다.';
          break;
        case 'auth/user-disabled':
          errorMessage = '비활성화된 계정입니다.';
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          errorMessage = '이메일 또는 비밀번호가 일치하지 않습니다.';
          break;
      }
      toast.error(errorMessage);

    } finally {
      setLoading(false);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // 페이지 로드 시 모달 바로 열기
  const router = useRouter();

  const handleAgreeAndProceed = () => {
    setIsModalOpen(false);
    router.push('/signup');
    console.log("개인정보 동의 완료. 다음 단계로 진행합니다.");
  };

  const handleKeyDown = (event:any) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <ModalPrivacy
          showModal={isModalOpen}
          onAgree={handleAgreeAndProceed}
          onCancel={() => setIsModalOpen(false)}
        />
        <div className="w-full max-w-md p-8 space-y-4 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center">로그인</h2>
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md text-black"
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full p-2 border rounded-md text-black"
            />
            {/* ... 로그인 입력 필드 ... */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="rememberMe">로그인 상태 유지</label>
            </div>
            <button
              onClick={handleLogin}
              className="w-full p-2 text-white bg-blue-500 rounded-md"
            >
              로그인
            </button>          
            <hr></hr>
            <button
              onClick={()=>setIsModalOpen(true)}
              className="w-full p-2 text-white rounded-md"
            >
              회원가입
            </button>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};

export default LoginPage;