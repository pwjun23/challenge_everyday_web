"use client";

import React, { useEffect } from 'react';
import LoginPage from './contents/login';
import useAuthStore from './store/authStore';
import MonthlyView from './contents/Monthly';
import Main from './Main';

// const { user } = useAuthStore();

const Home: React.FC= () => {
  return (
    <LoginPage/>
  );
};

export default Home;
