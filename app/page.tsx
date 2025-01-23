"use client";

import React, { JSX, useEffect, useRef, useState } from 'react';
import { collection, addDoc, getDocs, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";

import { Tab } from '@headlessui/react';

import { format, startOfMonth, endOfMonth, addDays } from 'date-fns';
import _ from 'lodash';

// import CheckAdm from './ontents/Checkadm';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import {checklists_collection, user_won} from "./db";
import { CheckLists, TabType } from './common_type';
import ScoreSheet from './contents/ScoreSheet';
import MonthlyView from './contents/Monthly';
import DailyChecklist from './contents/DailyCheck';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { AppProps } from 'next/app';

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

const Home: React.FC= () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  const [activeTab, setActiveTab] = useState<string>('monthly');
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const today_str = `${year}-${month}-${day}`;
  
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const [checkLists, setCheckLists] = useState<any>();
  const [holidays, setHolidays] = useState<Date[]>([]);
  // 월의 첫 날이 어떤 요일인지 확인
  const startDayOfWeek = monthStart.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
          setDeferredPrompt(null);
          setShowInstallButton(false);
        } else {
          console.log('User dismissed the A2HS prompt');
        }
      });
    }
  };

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
  const checklists = await getDocs(collection(db, "Checklists"));
  // users.forEach((doc) => {
  //   console.log(doc.id + ' | ' , doc.data());
  // });
  checklists.forEach((doc) => {
    console.log('page > fetchData : '+doc.id + ' | ' , doc.data());
    let _checklists:any= _.cloneDeep(doc.data())
    let tasks:any= _checklists.tasks;
    let totalPoint = 0;
    let users:{[k:string]:number} = {};
    Object.keys(tasks).map((d)=>{
      Object.keys(tasks[d]).map((n)=>{
        if(!users[n]) users[n] = 0;
        tasks[d][n].forEach((check:any)=>{
            if(check.used && check.completed){
              totalPoint += check.task_point;
              users[n] += check.task_point;
            }
        });
      })
    });
    _checklists["total_point"] = {"total": totalPoint,"users": users};

    setCheckLists(_checklists);
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

// 날짜를 YYYY-MM-DD 형식으로 변환하는 함수
const getFormattedDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

async function updateItem(documentId:string, root:string, updatedData:any) {
  try {
    const docRef = doc(db, "Checklists", documentId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("문서 데이터:", docSnap.data());
    } else {
      console.log("해당 문서는 존재하지 않습니다.");
    }
  
    // Firestore에서 해당 아이템 업데이트
    await updateDoc(docRef, {[root] : updatedData});

    console.log("특정 객체가 성공적으로 업데이트되었습니다.");
  } catch (error) {
    console.error("업데이트 중 오류 발생:", error);
  }
}

async function addDocumentWithId() {
  // const documentId = getFormattedDate(); // 문서 ID를 날짜로 설정
  const documentId = "C00000000";
  const users = user_won;
  const checklists = checklists_collection;

  try {
    // Firestore에 문서를 추가
    await setDoc(doc(db, "Checklists", documentId), checklists);
    console.log("문서가 성공적으로 추가되었습니다!");
  } catch (error) {
    console.error("문서 추가 중 오류 발생:", error);
  }
}

  useEffect(() => {
    // addDocumentWithId();
    fetchData();
    fetchHolidays(); // 컴포넌트가 마운트되었을 때 공휴일 데이터를 가져옵니다.
  }, []); // 의존성 배열이 비어 있으므로 컴포넌트 마운트 시에만 실행됩니다.


  const daysInMonth: Date[] = [];

  // 달력의 각 날짜를 계산하여 daysInMonth 배열에 넣기
  for (let day = monthStart; day <= monthEnd; day = addDays(day, 1)) {
    daysInMonth.push(day);
  }
  const tabs:{[k:string]:any}[] = [{tab_id :'monthly', label : '월별'} ,{tab_id :'missionCheck' , label : '미션체크'} , {tab_id :'score_sheet' , label : '점수표'}];

  const onClickTab = (tab_id:string)=>{
    fetchData();
    setActiveTab(tab_id);
    const index = tabs.findIndex((v)=> v.tab_id === tab_id);
    if (swiperRef.current && swiperRef.current) {
      swiperRef.current.slideTo(index); // 특정 인덱스로 이동
    }
  }
  const onSlideChangese = (index:number)=>{
    const tab_id:string = tabs[index].tab_id;
    fetchData();
    setActiveTab(tab_id);
  }
  // const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null); // Swiper ref 생성
  const classHandleForTab = (tab_id:string)=>{
    let className = `w-1/3 py-2.5 text-sm font-medium leading-5 rounded-lg `;
    if(tab_id === activeTab){
      className += 'bg-white text-blue-500';
    }else{
      className += 'text-white';
    }
    return className;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {showInstallButton && (
        <button id="installButton" onClick={handleInstallClick}>
          앱 설치
        </button>
      )}
      <div className="w-full max-w-md mx-auto">
          <h2 className= {`uppercase font-extrabold text-center m-2 text-white rounded-b-full bg-blue-500 drop-shadow-xl`}>{checkLists && checkLists.title ?checkLists.title:'제목을 넣어주세요.'}</h2>
          <Swiper
          // initialSlide={activeIndex}
          modules={[Navigation]}
        // pagination={pagination}
        // modules={[Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Swiper 인스턴스 저장
        }}
        className="mySwiper"
        slidesPerView={1}
        onSlideChange={(swiper) => onSlideChangese(swiper.activeIndex)}
      >
          <SwiperSlide>
            {checkLists &&<MonthlyView
              today={today}
              startDayOfWeek={startDayOfWeek}
              daysInMonth={daysInMonth}
              checkLists={checkLists}
              holidays={holidays}
              today_str={today_str}
             />}
          </SwiperSlide>
          <SwiperSlide>
          {checkLists &&
            <DailyChecklist
              today_str={today_str}
              checkLists={checkLists}
              key={'daily'}
              updateItem={updateItem}
            />}
          </SwiperSlide>
          <SwiperSlide>
          {checkLists &&<ScoreSheet
              checkLists={checkLists}
             />}
          </SwiperSlide>
          </Swiper>
        <Tab.Group className={`nav-tab`}>
          
          <Tab.List className="fixed w-full left-0 bottom-0 rounded-t-lg bg-blue-500 drop-shadow-[20px_0_20px_rgba(0,0,0,0.25)] p-1">
            {tabs && tabs.map((tab)=>
            <Tab
              key={`tab-${tab.tab_id}`}
              className={classHandleForTab(tab.tab_id)}    
              onClick={() => onClickTab(tab.tab_id)}
            >{tab.label}
            </Tab>
            )}
          </Tab.List> 
        </Tab.Group>
      </div>
    </div>
  );
};

export default Home;
