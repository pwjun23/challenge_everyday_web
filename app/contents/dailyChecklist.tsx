"use client";

import React, { useState } from 'react';

interface Child {
  name: string;
  photo: string;
  checklist: string[];
}
const DailyChecklist: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const children: Child[] = [
    { name: '온겸', photo: '', checklist: ['Brush teeth', 'Make bed'] },
    { name: '소빈', photo: '', checklist: ['Homework', 'Clean room'] },
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
              src={child.photo===''?'/profile_default.svg':child.photo}
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

export default DailyChecklist;
