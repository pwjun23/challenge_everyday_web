"use client";

import React, {useEffect, useRef, useState } from 'react';
import { Tab } from '@headlessui/react';
import _ from 'lodash';
import MonthlyView from './contents/Monthly';
import DailyChecklist from './contents/DailyCheck';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ScoreSheets from './contents/ScoreSheets';
import { addDocumentWithId, fetchData, fetchHolidays, updateTasksToTimestamp } from './commonService';
import { useCheckListsStore } from './store/checklistStore';


const Home: React.FC= () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  const [activeTab, setActiveTab] = useState<string>('daily');//'monthly' | 'daily' | 'checkadm'| 'score_sheet';
  
  const today = new Date();
  const totalMonthCount = today.getMonth();// 1월 : 0, 2월 : 1

  const {checklists, currentSlideIndex, editing, setReward, setChecklists, setIsEdit, setSlideIndex, selectedDate, tasks, setTasks, setChecklist} = useCheckListsStore();
  

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // addDocumentWithId();//데이터 밀어넣기 or 배치
    fetchData(selectedDate)
    .then((res)=>{
      setTasks(res.tasks);
      setChecklist(res.checklist)
      setReward(res.reward)
    });
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  useEffect(() => {
    // 스토어의 index가 변경될 때마다 Swiper 슬라이드 이동
    setIsEdit(false);
    
  }, [currentSlideIndex, selectedDate]);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current;

      swiperInstance.on('beforeSlideChangeStart', () => {//beforeSlideChangeStart
        // 특정 조건 확인 (예: 현재 슬라이드가 마지막 슬라이드가 아니고, 특정 값이 false인 경우)
        // const isLastSlide = swiperInstance.isEnd;
        // const someValue = false; // 실제 조건으로 대체해야 함
        
        // if (!isLastSlide && someValue) {
        if (editing) {
          // swiperInstance.preventSlide(); // 슬라이드 전환 막기
          // swiperInstance.destroy(); // 슬라이드 전환 막기
          setShowModal(true); // 모달 표시
          // alert('특정 조건을 충족해야 다음 슬라이드로 이동할 수 있습니다.'); // 알림 표시 (모달 대신 사용 가능)
        } else {
            setShowModal(false);
        }
      });
    }
    if (swiperRef.current) {
      swiperRef.current.off('beforeSlideChange');
    }

  }, [editing]);

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

  const tabs:{[k:string]:any}[] = [{tab_id :'monthly', label : '월별'} ,{tab_id :'missionCheck' , label : '미션체크'} , {tab_id :'score_sheet' , label : '점수표'}];
  
  const onClickTab = (tab_id:string)=>{
    // fetchData();
    setActiveTab(tab_id);
    const index = tabs.findIndex((v)=> v.tab_id === tab_id);
    if (swiperRef.current && swiperRef.current) {
      swiperRef.current.slideTo(index); // 특정 인덱스로 이동
    }
  }
  const onSlideChangese = (index:number)=>{
    const tab_id:string = tabs[index].tab_id;
    setActiveTab(tab_id);
    setSlideIndex(index);
  }

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
  const [showModal, setShowModal] = useState(true); // 모달 표시 여부 상태
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {showInstallButton && (
        <div className={`absolute z-[999] text-center bg-white p-4 shadow-lx rounded-b-xl w-full`}>
          <div className=''>
            <button className={`rounded-full text-white px-4 py-2 bg-green-600`}id="installButton" onClick={handleInstallClick}>
             Install App
            </button>
            <p className='text-stone-600 mt-4 text-sm'>원활한 사용을 위해서 앱을 설치하시겠습니까?</p>
          </div>
          <button type="button"
                  onClick={()=>setShowInstallButton(false)}
                  className="absolute right-5 top-5 text-stone-700 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>
        </div>
      )}
      <div className="w-full max-w-md mx-auto">
          <h2 className= {`font-OwnglyphWiseelistRg uppercase font-extralight text-center p-1 text-white rounded-b-full bg-blue-500 drop-shadow-xl`}>{checklists && checklists.title ?checklists.title:''}</h2>
          <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
          swiperRef.current = swiper; // Swiper 인스턴스 저장
        }}
        className="mySwiper"
        slidesPerView={1}
        onSlideChange={(swiper) => onSlideChangese(swiper.activeIndex)}
      >
          <SwiperSlide>
            {swiperRef &&<MonthlyView
              totalMonthCount = {totalMonthCount}
              swiperRef={swiperRef}
             />}
          </SwiperSlide>
          <SwiperSlide><DailyChecklist/></SwiperSlide>
          <SwiperSlide><ScoreSheets/></SwiperSlide>
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
      {/* 모달 */}
      {/* {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p className='text-stone-900'>특정 조건을 충족해야 합니다.</p>
            <button className='text-stone-900' onClick={closeModal}>닫기</button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Home;
