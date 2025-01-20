"use client";

import React, { useEffect, useState } from 'react';
import { DailyChecklistProp } from '../common_type';
import Checklist from './Checklist';

interface Child {
  name: string;
  photo: string;
  checklist: string[];
}
const DailyChecklist = (props : DailyChecklistProp) => {
  const {today, checkLists} = props;
  const {users_to_check, tasks} = checkLists || {};
  const [score, setScore] = useState<number>(0);
  // const children: Child[] = [
  //   { name: '온겸', photo: '', checklist: ['Brush teeth', 'Make bed'] },
  //   { name: '소빈', photo: '', checklist: ['Homework', 'Clean room'] },
  // ];

  const handleCheck = (points: number): void => {
    setScore(score + points);
  };
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(()=>{
    if(today){
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const td = `${year}-${month}-${day}`;
      setSelectedDate(td);
    }
  },[today]);
  
  return (
    <div className="p-4">
      <div className="p-4">
        <label htmlFor='date_id' className='mr-2'>체크 할 날짜</label>
        <input 
          type='date'
          id="date_id"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      {users_to_check && users_to_check.map((child, idx) => (
        <Checklist
          user_to_check ={child}
          tasks = {tasks}
        />
        // <div key={idx} className="mb-4 border border-gray-300 rounded-lg bg-white p-4">
        //   <div className="flex items-center">
        //     <img
        //       src={child.user_name===''?'/profile_default.svg':child.photo}
        //       alt={child.name}
        //       className="w-12 h-12 rounded-full mr-4"
        //     />
        //     <div className="font-bold text-lg">{child.user_name} 총{score}점</div>
        //   </div>
        //   <div className="mt-4">
        //     {
        //       tasks.map((task, i)=>{
        //           if(child.user_id === task.user_id_to_check && task.used){
        //             return(
        //               <div key={i} className="flex items-center mb-2">
        //                 <input
        //                   type="checkbox"
        //                   id={`checkbox-${idx}-${i}`}
        //                   onChange={(e) => handleCheck(e.target.checked ? task.task_point : -task.task_point)}
        //                   className="mr-2"
        //                 />
        //                 <label htmlFor={`checkbox-${idx}-${i}`}>{task.task_name} ({task.task_point}점)</label>
        //               </div>
        //             )
        //           }
        //         })
        //     }
        //   </div>
        // </div>
      ))}
      {/* <div className="fixed bottom-4 left-0 right-0 p-4 bg-blue-500 text-white text-center text-lg font-bold">
        오늘의 총점: {score}
      </div> */}
    </div>
  );
};

export default DailyChecklist;
