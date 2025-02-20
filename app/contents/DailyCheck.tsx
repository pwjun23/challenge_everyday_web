"use client";

import React, { useEffect, useState } from 'react';
// import { DailyChecklistProp } from '../common_type';
import Checklist from './Checklist';
import _ from 'lodash';
import { useCheckListsStore } from '../store/checklistStore';
import { Timestamp } from 'firebase/firestore';

const DailyChecklist = () => {//DailyChecklistProp
  const {checklist, tasks, checklists, selectedDate, setSelectedDate} = useCheckListsStore();
  const {targets} = checklist || {};
  const {users_to_check, tasks_template} = checklists || {};
  const [inputSelectedDate, setInputSelectedDate] = useState('');
  const [tasks_by_date, setTask_by_date] = useState<any>({});
  
  const getTask = (selectedDate:string)=>{
    const taskTargets:any = {};
    targets.forEach((target:any)=>{
      const targetUserId:string = target.userId;
      if(tasks.findIndex((task:any)=> task.formattedDate === selectedDate && task.targetId === targetUserId) !== -1){
        const taskTarget:any = tasks.filter((task:any)=> task.formattedDate === selectedDate && task.targetId === targetUserId)[0]['tasks'];
        taskTargets[targetUserId] = taskTarget;
      }else{
        taskTargets[targetUserId] = target.tasks;
      }
    });
     /* 여기서 날짜를 변경하면
    해당 날짜의 tasks가 있는지 확인.
    없으면 양식을 불러와서 새로 만든다.
    있으면 불러온다.
    */
    return taskTargets;
  }

  const onChangeHandler = (selectedDate:string)=>{
    const newTasks:any= getTask(selectedDate)
    setTask_by_date(newTasks);
    setInputSelectedDate(selectedDate);
    setSelectedDate(selectedDate);
  }
  
  useEffect(()=>{
    if(selectedDate && targets){
      setInputSelectedDate(selectedDate);
      const newTask:any = getTask(selectedDate);
      setTask_by_date(newTask);
    }
  },[selectedDate, targets])//tasks_template

  return (
    <div className="p-4">
      <div className="pb-4">
        <label htmlFor='date_id' className='mr-2 text-sm text-stone-700'>체크 할 날짜</label>
        <input 
          className='text-sm text-stone-700'
          type='date'
          id="date_id"
          value={inputSelectedDate}
          onChange={(e) => onChangeHandler(e.target.value)}
        />
      </div>
      {selectedDate && checklist && checklist.targets 
      && tasks_by_date && Object.keys(tasks_by_date).length > 0
      && checklist.targets.map((target:any, idx:number) => (
        <Checklist
          target = {target}
          tasks = {tasks_by_date[target.userId]}
          key = {idx}
        />
      ))}
    </div>
  );
};

export default DailyChecklist;
