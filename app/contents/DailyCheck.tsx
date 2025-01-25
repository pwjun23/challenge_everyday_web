"use client";

import React, { useEffect, useState } from 'react';
import { DailyChecklistProp } from '../common_type';
import Checklist from './Checklist';
import _ from 'lodash';

const DailyChecklist = (props : DailyChecklistProp) => {
  const {today_str, checkLists, updateItem} = props;
  const {users_to_check, tasks, tasks_template} = checkLists || {};
  const [selectedDate, setSelectedDate] = useState('');
  const [tasks_by_date, setTask_by_date] = useState<{[k:string]:any}>({});

  const getBlankTasks = (value:string)=>{
    const template = Object.keys(tasks_template).map((dt, i)=>{
      if(i===0){ // TODO : 우선은 가장 최근한 탬플릿으로.
        return tasks_template[dt]
      }
    })[0];
    
    const newTasks:{[k:string]:any} =  _.cloneDeep(template);
    Object.keys(newTasks).map((user_id)=>
      newTasks[user_id].map((task:any)=>task.completed = false)
    );
    if(Object.keys(tasks).includes(value)){
      Object.keys(tasks[value]).map((user_id)=>{
        if(tasks[value][user_id].length !== 0){
          newTasks[user_id] = tasks[value][user_id];
        }
      });
    }
    return newTasks
  }
  const onChangeHandler = (value:string)=>{
    /* 여기서 날짜를 변경하면
    해당 날짜의 tasks가 있는지 확인.
    없으면 양식을 불러와서 새로 만든다.
    있으면 불러온다.
    */
    const newTasks:{[k:string]:any} = getBlankTasks(value);
    setTask_by_date(newTasks);
    setSelectedDate(value);
  }
  
  useEffect(()=>{
    setSelectedDate(today_str);
    setTask_by_date(getBlankTasks(today_str));
  },[])

  return (
    <div className="p-4">
      <div className="pb-4">
        <label htmlFor='date_id' className='mr-2 text-sm text-stone-700'>체크 할 날짜</label>
        <input 
          className='text-sm text-stone-700'
          type='date'
          id="date_id"
          value={selectedDate}
          onChange={(e) => onChangeHandler(e.target.value)}
        />
      </div>
      {selectedDate && users_to_check && users_to_check.map((child, idx) => (
        <Checklist
          user_to_check ={child}
          tasks = {tasks_by_date?.[child.user_id] || []}
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
