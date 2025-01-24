"use client";

import React, { useEffect, useState } from 'react';
import {ScoreSheetProp } from '../common_type';
import _, { truncate } from 'lodash';

const ScoreSheet = (props : ScoreSheetProp) => {
  const {checkLists} = props;
  const {tasks_template, users_to_check} = checkLists || {};
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  
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
                    <h3 className={`pl-2 pb-2 text-stone-700`} >{user_name}<span className={`text-xs`}> 의 점수표</span>
                        {!isEdit && <button type="button" 
                        onClick={()=> setIsEdit(true)}
                        className="float-right text-gray-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-sm text-sm py-1 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2">
                                            <svg className="w-4 h-4 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z"></path>
                                            </svg>
                                            <span className='sr-only'>수정</span>
                                        </button>
                        }
                        {isEdit && <button type="button"
                        onClick={()=> setIsEdit(false)}
                        className="float-right text-gray-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-sm text-sm py-1 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2">
                        <svg className="w-4 h-4 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"></path>
                        </svg>
                            <span className='sr-only'>수정</span>
                        </button>}
                    </h3>
                    
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
                                     <td className="px-6 py-4">{task.task_name}</td>
                                     <td className="px-6 py-4">{task.task_point}</td>
                                     <td className="px-6 py-4">
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
