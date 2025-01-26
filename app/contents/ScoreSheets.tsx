"use client";

import React, { ChangeEvent, useEffect, useState } from 'react';
// import {ScoreSheetProp, ScoreSheetsProp } from '../common_type';
import _, { truncate } from 'lodash';
import ScoreSheet from './ScoreSheet';
import { useCheckListsStore } from '../store/checklistStore';

const ScoreSheets = () => {//props : ScoreSheetsProp
  const {checklists }= useCheckListsStore();
  // const {checkLists} = props;
  const {tasks_template, users_to_check} = checklists;
  const [initDate, setInitDate] = useState<string>('');
  
  useEffect(()=>{
    if(tasks_template && Object.keys(tasks_template).length !==0){
      setInitDate(Object.keys(tasks_template)[0]);
    }
  },[tasks_template])

  return (
    <div className="p-4 pb-20">
        {
           tasks_template && initDate !== '' && Object.keys(tasks_template?.[initDate]).sort((a:any,b:any)=> a<b?-1:a>b?1:0).map((user_id,j)=>{
               const idx = users_to_check.findIndex((user:any)=> user.user_id === user_id);
               const user_name = users_to_check[idx].user_name;
               const tasks = tasks_template[initDate][user_id];
               const total_index = Object.keys(tasks_template?.[initDate]).length-1;
                return <ScoreSheet 
                    tasks ={tasks}
                    user_id = {user_id}
                    user_name = {user_name}
                    index = {j}
                    key = {j}
                    total_index={total_index}
                />
        })
        }
    </div>
  );
};

export default ScoreSheets;
