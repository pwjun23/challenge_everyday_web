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
    <div className="p-4 pb-20">
        {
           tasks_template && selectedDate !== '' && Object.keys(tasks_template?.[selectedDate]).sort((a:any,b:any)=> a<b?-1:a>b?1:0).map((user_id,j)=>{
               const idx = users_to_check.findIndex((user)=> user.user_id === user_id);
               const user_name = users_to_check[idx].user_name;
                return (
                <div key={`score_sheet-${user_id}-${j}`}>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
                    <h3 className={`pl-2 pb-2`} >{user_name}<span className={`text-xs`}> 의 점수표</span></h3>
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
                    {Object.keys(tasks_template?.[selectedDate]).length-1 !== j && <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
                        <div className="absolute px-4 -translate-x-1/2 bg-gray-100 left-1/2 dark:bg-gray-900">
                            <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                            </svg>
                        </div>
                    </div>}
                </div>
                )
        })
        }
    </div>
  );
};

export default ScoreSheet;
