"use client";

import React, { useEffect, useState } from 'react';
import { DailyChecklistProp } from '../common_type';
import Checklist from './Checklist';

const DailyChecklist = (props : DailyChecklistProp) => {
  const {today_str, checkLists, updateItem} = props;
  const {users_to_check, tasks, tasks_template} = checkLists || {};
  const [selectedDate, setSelectedDate] = useState('');
  const [tasks_by_date, setTask_by_date] = useState<{[k:string]:any}>({});

  const onChangeHandler = (value:string)=>{
    /* 여기서 날짜를 변경하면
    해당 날짜의 tasks가 있는지 확인.
    없으면 양식을 불러와서 새로 만든다.
    있으면 불러온다.
    */
    if(Object.keys(tasks).includes(value)){
      console.log('task가 있어 그대로 불러오자!');
      setTask_by_date(tasks[value]);
    }else{
      console.log('task가 없어서 새로 만들자!');
      /*
      TODO : 탭플릿을 날짜로 불러오고 현재는 최근 꺼로 ... 더 추가 하는 기능은 아직 없지만. 
      */
      let newTasks =  tasks[tasks_template[0]];
      Object.keys(newTasks).map((user_id)=>
        newTasks[user_id].map((task:any)=>task.completed = false)
      );
      setTask_by_date(newTasks);
    }
    setSelectedDate(value);
  }
  
  useEffect(()=>{
    setSelectedDate(today_str);
    setTask_by_date(tasks[today_str]);
  },[])

  return (
    <div className="p-4">
      <div className="p-4">
        <label htmlFor='date_id' className='mr-2'>체크 할 날짜</label>
        <input 
          type='date'
          id="date_id"
          value={selectedDate}
          onChange={(e) => onChangeHandler(e.target.value)}
        />
      </div>
      {selectedDate && users_to_check && users_to_check.map((child, idx) => (
        <Checklist
          user_to_check ={child}
          tasks = {tasks_by_date[child.user_id] || []}
          key = {idx}
          selectedDate = {selectedDate}
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
