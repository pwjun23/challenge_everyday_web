"use client";

import React, { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import { format, startOfMonth, endOfMonth, addDays } from 'date-fns';

interface HolidayItem {
  locdate: string; // 공휴일 날짜 (yyyyMMdd 형식의 문자열)
}

const MonthlyView: React.FC = () => {
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const [holidays, setHolidays] = useState<Date[]>([]);

  // 월의 첫 날이 어떤 요일인지 확인
  const startDayOfWeek = monthStart.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일

  // 공휴일을 동적으로 불러오는 함수
  const fetchHolidays = async () => {
    const apiKey = 'YbUdghHTg29kUnFKrBWyh%2FQA7Au%2FUkVCGu2BvtR3qIoRUv5z2reuuRGWKhPyhGIS7IKDCvp22B4vbayKQoOVGw%3D%3D'; // 공공데이터 API 키
    const year = today.getFullYear();
    const month = format(today, 'MM');
    const url = `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?solYear=${year}&solMonth=${month}&ServiceKey=${apiKey}&_type=json`;

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

  useEffect(() => {
    fetchHolidays(); // 컴포넌트가 마운트되었을 때 공휴일 데이터를 가져옵니다.
  }, []); // 의존성 배열이 비어 있으므로 컴포넌트 마운트 시에만 실행됩니다.

  // 공휴일인지 체크하는 함수
  const isHoliday = (date: Date): boolean => {
    return holidays.some(
      (holiday) =>
        holiday.getDate() === date.getDate() &&
        holiday.getMonth() === date.getMonth() &&
        holiday.getFullYear() === date.getFullYear()
    );
  };

  const daysInMonth: Date[] = [];

  // 달력의 각 날짜를 계산하여 daysInMonth 배열에 넣기
  for (let day = monthStart; day <= monthEnd; day = addDays(day, 1)) {
    daysInMonth.push(day);
  }

  const totalScore = 120; // Example total score

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className="p-4">
      <div className="text-center text-xl font-extrabold text-blue-600">
        {format(today, 'M')} 월
      </div>
      <div className="text-center text-lg font-bold mt-2">총점: {totalScore}</div>

      {/* 요일을 표시하는 부분 */}
      <div className="grid grid-cols-7 gap-0 mt-0 text-center">
        {weekDays.map((day, idx) => (
          <div key={idx} className="text-sm font-bold text-gray-600 bg-slate-50">
            {day}
          </div>
        ))}
      </div>

      {/* 날짜를 표시하는 부분 */}
      <div className="grid grid-cols-7 gap-0 mt-0">
        {/* 빈 칸을 추가하여 첫 번째 날짜가 올바른 요일에 맞춰지게 조정 */}
        {Array.from({ length: startDayOfWeek }).map((_, idx) => (
          <div key={idx} className="text-center"></div>
        ))}

        {daysInMonth.map((day, idx) => (
          <div key={idx} className={`p-1 text-center border`}>
            <div
              className={`text-sm font-bold ${
                isHoliday(day) ? 'text-red-600' : 'text-stone-600'
              }`}
            >
              {format(day, 'd')}
            </div>
            <div className="text-xs mt-0">
              <div>온겸 5</div>
              <div>소빈 7</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'daily'>('monthly');

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
              오늘 체크
            </Tab>
          </Tab.List>
          <Tab.Panels>
            {activeTab === 'monthly' && <MonthlyView />}
            {activeTab === 'daily' && <DailyChecklist />}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

interface Child {
  name: string;
  photo: string;
  checklist: string[];
}

const DailyChecklist: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const children: Child[] = [
    { name: '온겸', photo: '/anna.jpg', checklist: ['Brush teeth', 'Make bed'] },
    { name: '소빈', photo: '/jack.jpg', checklist: ['Homework', 'Clean room'] },
  ];

  const handleCheck = (points: number): void => {
    setScore(score + points);
  };

  return (
    <div className="p-4">
      {children.map((child, idx) => (
        <div key={idx} className="mb-4 border border-gray-300 rounded-lg bg-white p-4">
          <div className="flex items-center">
            <img
              src={child.photo}
              alt={child.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="font-bold text-lg">{child.name}</div>
          </div>
          <div className="mt-4">
            {child.checklist.map((task, i) => (
              <div key={i} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`checkbox-${idx}-${i}`}
                  onChange={(e) => handleCheck(e.target.checked ? 5 : -5)}
                  className="mr-2"
                />
                <label htmlFor={`checkbox-${idx}-${i}`}>{task}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="fixed bottom-4 left-0 right-0 p-4 bg-blue-500 text-white text-center text-lg font-bold">
        오늘의 총점: {score}
      </div>
    </div>
  );
};

export default Home;
