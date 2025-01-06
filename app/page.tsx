"use client";

import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { format, addDays, startOfMonth, endOfMonth } from 'date-fns';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'daily'>('monthly');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md mx-auto">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-lg bg-blue-500 p-1">
            <Tab
              className={({ selected }: { selected: boolean }) =>
                `w-full py-2.5 text-sm font-medium leading-5 text-white rounded-lg ${
                  selected ? 'bg-white text-blue-500' : 'text-white'
                }`
              }
              onClick={() => setActiveTab('monthly')}
            >
              Monthly View
            </Tab>
            <Tab
              className={({ selected }: { selected: boolean }) =>
                `w-full py-2.5 text-sm font-medium leading-5 text-white rounded-lg ${
                  selected ? 'bg-white text-blue-500' : 'text-white'
                }`
              }
              onClick={() => setActiveTab('daily')}
            >
              Today Checklist
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

const MonthlyView: React.FC = () => {
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const daysInMonth: Date[] = [];

  for (let day = monthStart; day <= monthEnd; day = addDays(day, 1)) {
    daysInMonth.push(day);
  }

  const totalScore = 120; // Example total score

  return (
    <div className="p-4">
      <div className="text-center text-lg font-bold">Total Score: {totalScore}</div>
      <div className="grid grid-cols-7 gap-2 mt-4">
        {daysInMonth.map((day, idx) => (
          <div
            key={idx}
            className="border border-gray-300 p-2 rounded-lg bg-white text-center"
          >
            <div className="text-sm font-bold">{format(day, 'd')}</div>
            <div className="text-xs mt-1">
              <div>Anna: 5pts</div>
              <div>Jack: 7pts</div>
            </div>
          </div>
        ))}
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
    { name: 'Anna', photo: '/anna.jpg', checklist: ['Brush teeth', 'Make bed'] },
    { name: 'Jack', photo: '/jack.jpg', checklist: ['Homework', 'Clean room'] },
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
        Total Score: {score}
      </div>
    </div>
  );
};

export default Home;
