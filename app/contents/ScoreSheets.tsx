"use client";

import React, { ChangeEvent, useEffect, useState } from 'react';
import {ScoreSheetProp, ScoreSheetsProp } from '../common_type';
import _, { truncate } from 'lodash';
import ScoreSheet from './ScoreSheet';

const ScoreSheets = (props : ScoreSheetsProp) => {
  const {checkLists} = props;
  const {tasks_template, users_to_check} = checkLists || {};
  const [selectedDate, setSelectedDate] = useState<string>('');
  
  useEffect(()=>{
    if(tasks_template){
        setSelectedDate(Object.keys(tasks_template)[0]);
    }
  },[tasks_template])

  return (
    <div className="p-4 pb-20">
        {
           tasks_template && selectedDate !== '' && Object.keys(tasks_template?.[selectedDate]).sort((a:any,b:any)=> a<b?-1:a>b?1:0).map((user_id,j)=>{
               const idx = users_to_check.findIndex((user:any)=> user.user_id === user_id);
               const user_name = users_to_check[idx].user_name;
               const tasks = tasks_template[selectedDate][user_id];
               const total_index = Object.keys(tasks_template?.[selectedDate]).length-1;
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
