"use client";

import React, { useEffect, useState } from 'react';
import { DailyChecklistProp } from '../common_type';
import Checklist from './Checklist';

const DailyChecklist = (props : DailyChecklistProp) => {
  const {today_str, checkLists, updateItem} = props;
  const {users_to_check, tasks} = checkLists || {};
  const [selectedDate, setSelectedDate] = useState('');

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
          tasks = {tasks[today_str][child.user_id]}
          key = {idx}
          today_str = {today_str}
          updateItem = {updateItem}
          user_id_to_check ={child.user_id}
        />
      ))}
      {/* <div className="fixed bottom-4 left-0 right-0 p-4 bg-blue-500 text-white text-center text-lg font-bold">
        오늘의 총점: {score}
      </div> */}
    </div>
  );
};

export default DailyChecklist;
