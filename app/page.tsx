"use client";

import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";

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
  const [activeTab, setActiveTab] = useState<'monthly' | 'daily' | 'checkadm'>('daily');
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const today_str = '2025-01-13';//`${year}-${month}-${day}`;//DO TO : 임시로 날짜 고정
  
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

}

async function fetchDocumentById(collectionName:string, documentId:string) {
  try {
    // 특정 컬렉션과 문서 ID를 참조
    const docRef = doc(db, collectionName, documentId);

    // 문서 가져오기
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // 문서 데이터 가져오기
      console.log("문서 데이터:", docSnap.data());
      return docSnap.data(); // 문서 데이터 반환
    } else {
      console.log("해당 문서를 찾을 수 없습니다.");
      return null;
    }
  } catch (error) {
    console.error("문서 가져오기 중 오류 발생:", error);
    throw error;
  }
}

const handleFetch = () => {
  const collectionName = "Checklists"; // 컬렉션 이름
  const documentId = "C00000000"; // 문서 ID

  fetchDocumentById(collectionName, documentId)
    .then((data) => {
      if (data) {
        console.log("가져온 데이터:", data);
        setCheckLists(data);
      }
    })
    .catch((error) => {
      console.error("오류 발생:", error);
    });
};

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

// 날짜를 YYYY-MM-DD 형식으로 변환하는 함수
const getFormattedDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

async function updateItem(documentId:string, day_str:string, updatedData:any) {
  try {
    const itemRef = doc(db, "Checklists", documentId, "tasks", day_str);

    // Firestore에서 해당 아이템 업데이트
    await updateDoc(itemRef, updatedData);

    console.log("특정 객체가 성공적으로 업데이트되었습니다.");
  } catch (error) {
    console.error("업데이트 중 오류 발생:", error);
  }
}

async function addDocumentWithId() {
  // const documentId = getFormattedDate(); // 문서 ID를 날짜로 설정
  const documentId = "C00000000";
  const users = user_won;
  const checkLists = checkLists_collection;

  try {
    // Firestore에 문서를 추가
    await setDoc(doc(db, "CheckLists", documentId), checkLists);
    console.log("문서가 성공적으로 추가되었습니다!");
  } catch (error) {
    console.error("문서 추가 중 오류 발생:", error);
  }
}

  useEffect(() => {
  
    fetchData();
    // addUserData();
    // addDocumentWithId();
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
          <h2 className= {`uppercase font-extrabold text-center m-2`}>{checkLists && checkLists.title ?checkLists.title:'제목을 넣어주세요.'}</h2>
          <Tab.Panels>
            {activeTab === 'monthly' && checkLists && <MonthlyView
            today={today}
            startDayOfWeek={startDayOfWeek}
            daysInMonth={daysInMonth}
            checkLists={checkLists}
            holidays={holidays}
            today_str={today_str}
             />}
            {activeTab === 'daily' && checkLists && <DailyChecklist
              today_str={today_str}
              checkLists={checkLists}
              key={'daily'}
              updateItem={updateItem}
            />}
            {activeTab === 'checkadm' && <CheckAdm/>}
          </Tab.Panels>
          <Tab.List className="fixed w-full left-0 bottom-0 rounded-lg bg-blue-500 p-1">
            <Tab
              className={({ selected }: { selected: boolean }) =>
                `w-1/3 py-2.5 text-sm font-medium leading-5 rounded-lg ${
                  selected ? 'bg-white text-blue-500' : 'text-white'
                }`
              }
              onClick={() => setActiveTab('monthly')}
            >
              월별
            </Tab>
            <Tab
              className={({ selected }: { selected: boolean }) =>
                `w-1/3 py-2.5 text-sm font-medium leading-5 rounded-lg ${
                  selected ? 'bg-white text-blue-500' : 'text-white'
                }`
              }
              onClick={() => setActiveTab('daily')}
            >
              미션 체크
            </Tab>
            <Tab
              className={({ selected }: { selected: boolean }) =>
                `w-1/3 py-2.5 text-sm font-medium leading-5 rounded-lg ${
                  selected ? 'bg-white text-blue-500' : 'text-white'
                }`
              }
              onClick={() => setActiveTab('checkadm')}
            >
              미션리스트 관리
            </Tab>
          </Tab.List>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Home;
