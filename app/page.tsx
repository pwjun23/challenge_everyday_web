"use client";

import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";

import { Tab } from '@headlessui/react';
import MonthlyView from './contents/monthlyview';

import { format, startOfMonth, endOfMonth, addDays } from 'date-fns';
import DailyChecklist from './contents/dailyChecklist';
import CheckAdm from './contents/checkadm';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import {checkLists_collection, user_won} from "./db";
import { CheckLists } from './common_type';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOioNA2npe8VpMtFlOLXJjIYzTbiu3hWY",
  authDomain: "molespapa2025.firebaseapp.com",
  projectId: "molespapa2025",
  storageBucket: "molespapa2025.firebasestorage.app",
  messagingSenderId: "601631315534",
  appId: "1:601631315534:web:9b8853fdefab730388551f",
  measurementId: "G-ZH69TWC3DJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

interface HolidayItem {
  locdate: string; // 공휴일 날짜 (yyyyMMdd 형식의 문자열)
}

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'daily' | 'checkadm'>('monthly');
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const [checkLists, setCheckLists] = useState<any>();
  const [holidays, setHolidays] = useState<Date[]>([]);
  // 월의 첫 날이 어떤 요일인지 확인
  const startDayOfWeek = monthStart.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일

  // 공휴일을 동적으로 불러오는 함수
  const fetchHolidays = async () => {
    const apiKey = 'YbUdghHTg29kUnFKrBWyh%2FQA7Au%2FUkVCGu2BvtR3qIoRUv5z2reuuRGWKhPyhGIS7IKDCvp22B4vbayKQoOVGw%3D%3D'; // 공공데이터 API 키
    const year = today.getFullYear();
    const month = format(today, 'MM');
    const url = `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?solYear=${year}&solMonth=${month}&ServiceKey=${apiKey}&_type=json`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.response && data.response.body && data.response.body.items) {
        const holidayDates = data.response.body.items.item.map((item: HolidayItem) => {
          const dateString = String(item.locdate);
          const formattedDateString = `${dateString.slice(0, 4)}-${dateString.slice(4, 6)}-${dateString.slice(6)}`;
          return new Date(formattedDateString);
        });
        setHolidays(holidayDates); // 공휴일 배열 저장
      }
    } catch (error) {
      console.error('공휴일 데이터를 불러오는 데 실패했습니다.', error);
    }
  };
// 수정된 코드
async function fetchData() {
  const users = await getDocs(collection(db, "Users"));
  let checkLists = await getDocs(collection(db, "CheckLists"));
  // users.forEach((doc) => {
  //   console.log(doc.id + ' | ' , doc.data());
  // });
  checkLists.forEach((doc) => {
    console.log('page > fetchData : '+doc.id + ' | ' , doc.data());
    setCheckLists(doc.data());
  });
  // console.log(result);
}

const addUserData = async() =>{
  const users = user_won;
  const checkLists = checkLists_collection;
  try {
    // const docRef = await addDoc(collection(db, "users"), users);
    // console.log("docRef : ", {docRef});
    const docRef = await addDoc(collection(db, "CheckLists"), checkLists);
    console.log("docRef : ", {docRef});
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

  useEffect(() => {
  
    fetchData();
    // addUserData();
    fetchHolidays(); // 컴포넌트가 마운트되었을 때 공휴일 데이터를 가져옵니다.
  }, []); // 의존성 배열이 비어 있으므로 컴포넌트 마운트 시에만 실행됩니다.


  const daysInMonth: Date[] = [];

  // 달력의 각 날짜를 계산하여 daysInMonth 배열에 넣기
  for (let day = monthStart; day <= monthEnd; day = addDays(day, 1)) {
    daysInMonth.push(day);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md mx-auto">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-lg bg-blue-500 p-1">
            <Tab
              className={({ selected }: { selected: boolean }) =>
                `w-full py-2.5 text-sm font-medium leading-5 rounded-lg ${
                  selected ? 'bg-white text-blue-500' : 'text-white'
                }`
              }
              onClick={() => setActiveTab('monthly')}
            >
              월별
            </Tab>
            <Tab
              className={({ selected }: { selected: boolean }) =>
                `w-full py-2.5 text-sm font-medium leading-5 rounded-lg ${
                  selected ? 'bg-white text-blue-500' : 'text-white'
                }`
              }
              onClick={() => setActiveTab('daily')}
            >
              미션 체크
            </Tab>
            <Tab
              className={({ selected }: { selected: boolean }) =>
                `w-full py-2.5 text-sm font-medium leading-5 rounded-lg ${
                  selected ? 'bg-white text-blue-500' : 'text-white'
                }`
              }
              onClick={() => setActiveTab('checkadm')}
            >
              미션리스트 관리
            </Tab>
          </Tab.List>
          <h2 className= {`uppercase font-extrabold text-center m-2`}>{checkLists && checkLists.name ?checkLists.name:'제목을 넣어주세요.'}</h2>
          <Tab.Panels>
            {activeTab === 'monthly' 
            && checkLists && <MonthlyView
            today={today}
            startDayOfWeek={startDayOfWeek}
            daysInMonth={daysInMonth}
            checkLists={checkLists}
            holidays={holidays}
             />}
            {activeTab === 'daily' && <DailyChecklist />}
            {activeTab === 'checkadm' && <CheckAdm/>}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Home;
