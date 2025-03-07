// pages/login.tsx
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import useAuthStore from '../store/authStore';
import { auth } from '../commonService';

const LoginPage = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setLoading, setError, setUser } = useAuthStore();

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
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
        <button
          onClick={handleLogin}
          className="w-full p-2 text-white bg-blue-500 rounded-md"
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;