"use client";

import React, { ChangeEvent, useEffect, useState } from 'react';
import _ from 'lodash';
import ScoreSheet from './ScoreSheet';
import { useCheckListsStore } from '../store/checklistStore';

const ScoreSheets = () => {//props : ScoreSheetsProp
  const {checklist}= useCheckListsStore();
  const [ tasks_template , set_tasks_template ] = useState<{}>({})
  const [initDate, setInitDate] = useState<string>('');
  
  useEffect(()=>{
    
    // if(tasks_template && Object.keys(tasks_template).length !==0){
    //   setInitDate(Object.keys(tasks_template)[0]);
    // }
  },[checklist])

  return (
    <div className="p-4 pb-20">
      {
        checklist && checklist.targets && checklist.targets.map(( target:any, index:number)=>{
          const idx = index;
          const total_index = Object.keys(checklist.targets).length-1;
          return<ScoreSheet 
              tasks ={checklist.tasks}
              user_id = {target.userId}
              user_name = {target.userName}
              key = {idx}
              index = {idx}
              total_index = {total_index}
          />
        })
      }
        {/* {
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
        } */}
    </div>
  );
};

export default ScoreSheets;
