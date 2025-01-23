"use client";

import React, { useEffect, useState } from 'react';
import {ScoreSheetProp } from '../common_type';
import _ from 'lodash';

const ScoreSheet = (props : ScoreSheetProp) => {
  const {checkLists} = props;
  const {tasks_template, users_to_check} = checkLists || {};
  const [selectedDate, setSelectedDate] = useState<string>('');

  
  useEffect(()=>{
    if(tasks_template){
        setSelectedDate(Object.keys(tasks_template)[0]);
    }
  },[tasks_template])

  return (
    <div className="p-4">
        {
           tasks_template && selectedDate !== '' && Object.keys(tasks_template?.[selectedDate]).map((user_id,j)=>{
               const idx = users_to_check.findIndex((user)=> user.user_id === user_id);
               const user_name = users_to_check[idx].user_name;
                return (
                    <div key={`score_sheet-${user_id}-${j}`} className="relative overflow-x-auto shadow-md sm:rounded-lg mb-4"><h3 className={`pb-2`} >{user_name}</h3>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                 <tr>
                                     <th scope="col" className="px-6 py-3">할 일</th>                    
                                     <th scope="col" className="px-6 py-3">점수</th>
                                     <th scope="col" className="px-6 py-3"></th>                    
                                 </tr>
                             </thead>
                             <tbody>
                    {tasks_template[selectedDate][user_id].map((task:any, k:any)=>{
                        return(<tr key={`task-${user_id}-${k}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                     {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th> */}
                                     <td className="px-6 py-4">{task.task_name}</td>
                                     <td className="px-6 py-4">{task.task_point}</td>
                                     <td className="px-6 py-4">
                                         {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                                     </td>
                                 </tr>)
                    })}
                             </tbody>
                         </table>
                    </div>
                )
        })
        }
    </div>
  );
};

export default ScoreSheet;
