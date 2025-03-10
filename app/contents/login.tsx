// pages/login.tsx
import { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import useAuthStore from '../store/authStore';
import { app } from '../commonService';
import MonthlyView from './Monthly';
import Main from '../Main';

const LoginPage = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setLoading, setError, setUser, user } = useAuthStore();
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() =>{
    const storedUser:string = localStorage.getItem('user') || "";
    // const auth = getAuth(app);
    if(storedUser){
      setUser(JSON.parse(storedUser));
    }
  },[]);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const auth = getAuth(app);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
       // ...
      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify(userCredential.user));
      } else {
        localStorage.removeItem('user');
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    {!user && 
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 space-y-4 border rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">로그인</h2>
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md"
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
      </div>
    </div>
    }
    {user && <Main/>}
    </>
  );
};

export default LoginPage;