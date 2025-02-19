"use client";

import React, { useEffect, useState } from 'react';
import { DailyChecklistProp } from '../common_type';
import Checklist from './Checklist';
import _ from 'lodash';
import { useCheckListsStore } from '../store/checklistStore';
import { Timestamp } from 'firebase/firestore';

const DailyChecklist = (props : DailyChecklistProp) => {
  const {checklist, tasks, checklists, selectedDate, setSelectedDate} = useCheckListsStore();
  const {targets} = checklist || {};
  const {users_to_check, tasks_template} = checklists || {};
  const [inputSelectedDate, setInputSelectedDate] = useState('');
  const [tasks_by_date, setTask_by_date] = useState<any>({});
  
//checklist.tasks.filter((task:any)=> task.formattedDate === selectedDate && task.targetId === child.userId)
  const getBlankTasks = (value:string)=>{
    // if(Object.keys(tasks_template).length ===0)return{};
    // const template = Object.keys(tasks_template).map((dt, i)=>{
    //   if(i===0){ // TODO : 우선은 가장 최근한 탬플릿으로.
    //     return tasks_template[dt]
    //   }
    // })[0];
    
    // const newTasks:{[k:string]:any} =  _.cloneDeep(template);
    // Object.keys(newTasks).map((user_id)=>{
    //   newTasks[user_id].map((task:any)=>{
    //     const date = new Date(selectedDate); // Date 객체 생성
    //     const year = date.getFullYear();
    //     const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1, 2자리로 맞춤
    //     const day = String(date.getDate()).padStart(2, '0'); // 2자리로 맞춤
    //     const formattedDate = `${year}-${month}-${day}`; // YYYY-MM-DD 형식 문자열
    //     const timestamp = Timestamp.fromDate(date); // Date 객체를 Timestamp 객체로 변환
    //     task.completed = false;
    //     task["user_id"] = task.user_id_to_check;
    //     task["date"] = timestamp;
    //     task["formattedDate"] = formattedDate;
    //   });
    // });

    // Object.keys(newTasks).forEach((user_id)=>{
    //   const count = tasks.filter((task:any)=> task.user_id === user_id && task.formattedDate === value).length;
    //   if(count !== 0){

    //     newTasks[user_id] = tasks.filter((task:any)=> task.user_id === user_id && task.formattedDate === value);
    //   }
    // });
    // return newTasks
  }
  const getTask = (selectedDate:string)=>{
    let isCheck = false;
    let taskTargets:any;
    Object.keys(targets).forEach((target:any)=>{
      if(tasks.findIndex((task:any)=> task.formattedDate === selectedDate && task.userId === target.userId) !== -1){
        isCheck = true;
      }
    });
    if(isCheck){
      taskTargets = tasks.filter((task:any)=> task.formattedDate === selectedDate);
    }else{
      taskTargets = checklist.tasks;
    }
    return taskTargets;
  }

  const onChangeHandler = (selectedDate:string)=>{
    /* 여기서 날짜를 변경하면
    해당 날짜의 tasks가 있는지 확인.
    없으면 양식을 불러와서 새로 만든다.
    있으면 불러온다.
    */
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
    // if(selectedDate && tasks_template && tasks_template){
    //   setInputSelectedDate(selectedDate);
    //   setTask_by_date(getBlankTasks(selectedDate));
    // }
    // 선택된 날짜에 체크한 task가 있으면 불러 오고 없으면 빈 양식을 생성한다.

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
      {selectedDate && checklist && checklist.tasks && checklist.targets 
      && tasks_by_date && tasks_by_date.length > 0
      && checklist.targets.map((child:any, idx:number) => (
        <Checklist
          user_to_check ={child}
          tasks = {tasks_by_date}
          key = {idx}
          selectedDate = {selectedDate}
          user_id_to_check ={child.userId}
        />
      ))}
    </div>
  );
};

export default DailyChecklist;
