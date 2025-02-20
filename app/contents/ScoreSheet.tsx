"use client";

import React, { ChangeEvent, useEffect, useState } from 'react';
import {ScoreSheetProp } from '../common_type';
import _ from 'lodash';
import { useCheckListsStore } from '../store/checklistStore';
import { Timestamp } from 'firebase/firestore';
import { saveChecklist } from '../commonService';

const ScoreSheet = (props : ScoreSheetProp) => {
  const {target, total_index, index} = props;
  const {isEdit, setIsEdit, selectedDate, checklist, setChecklist} = useCheckListsStore();
  const [tempTasks, setTempTasks] = useState<{[key:string]:any}[]>(target.tasks);

  const onChangeTask =(index:number, e:any)=>{

    const { name, value } = e.target;
    const newInputs = [...tempTasks];
    newInputs[index] = {...newInputs[index], [name] : value};
    setTempTasks(newInputs);
  }

  const onSave = ()=>{
    /**
     * 여기다가 저장 로직을 넣는다.... 
     */
    const collectionName = "checklists";
    const documentId = "C00000001";
    const root = "targets";
    const date = Timestamp.fromDate(new Date(selectedDate))
    // const checklist = {'date': date, "formattedDate" : selectedDate, targetId: target.userId, targetName : target.userName , tasks : target.tasks }
    const idx:number = checklist.targets.findIndex((t:any)=> t.userId === target.userId);
    const targets:any = _.cloneDeep(checklist).targets;
    const _tempTasks:any = _.cloneDeep(tempTasks);
    _tempTasks.map((t:any)=> t.taskPoint = Number(t.taskPoint));
    console.log({_tempTasks});
    targets[idx].tasks = tempTasks;
    saveChecklist(collectionName,documentId,root,targets).then((res:any)=>{
        if(res){
            const ch = _.cloneDeep(checklist);
            ch.targets = targets;
            setChecklist(ch);
        }
    });
    setIsEdit(false);
  }
  const onExit = ()=>{
    setTempTasks(target.tasks);
    setIsEdit(false);
  }

//   useEffect(()=>{
//     if(target){
//         setTempTasks(target.tasks);
//     }
//   },[target])
  const removeRow = (index:number)=>{
    const _tempTasks:any = _.cloneDeep(tempTasks);
    _tempTasks.splice(index,1);
    setTempTasks(_tempTasks);
  }
  const addRow =()=>{
    function findMaxId(arr:any) {
        let maxId:any = null;
        let maxValue = -1; // 숫자는 0 또는 양수일 가능성이 높으므로, 초기값을 -1로 설정
      
        for (const item of arr) {
          const id = item.taskId;
          const num = parseInt(id.slice(1)); // 'T'를 제외한 나머지 부분을 숫자로 변환
      
          if (!isNaN(num)) { // 숫자로 제대로 변환되었는지 확인
            if (num > maxValue) {
              maxValue = num;
            }
          }
        }
        maxValue++;
        maxId = "T"+ String(maxValue).padStart(6,'0');
        return maxId;
      }

    const taskId = findMaxId(tempTasks);
    console.log({taskId});
    setTempTasks([...tempTasks,{taskName:'', taskId:taskId, taskPoint:0}])
  }
  return (
            <div key={`score_sheet-${target.user_id}`}>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
                <h3 className={`pl-2 pb-2 text-stone-700`} >{target.userName}<span className={`text-xs`}> 의 점수표</span>
                    {!isEdit && <button type="button" 
                    onClick={()=> setIsEdit(true)}
                    className="float-right text-gray-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-sm text-sm py-1 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2">
                                        수정
                                    </button>
                    }
                    {isEdit && <button type="button"
                    onClick={()=> onSave()}
                    className="float-right text-gray-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-sm text-sm py-1 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2">
                    저장
                        <span className='sr-only'>저장</span>
                    </button>}
                    {isEdit && <button type="button"
                    onClick={()=> onExit()}
                    className="ml-4 text-gray-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-sm text-sm py-1 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2">
                    X                    </button>}
                </h3>
                
                {!isEdit&&<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">할 일</th>                    
                                    <th scope="col" className="px-6 py-3">점수</th>
                                    <th scope="col" className="px-6 py-3"></th>                    
                                </tr>
                            </thead>
                            <tbody>
                {tempTasks && tempTasks.map((task:any, k:any)=>{
                    return(<tr key={`task-${target.userId}-${k}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">{task.taskName}</td>
                                    <td className="px-4 py-2">{task.taskPoint}</td>
                                    <td className="px-4 py-2">
                                    </td>
                                </tr>)
                })}
                            </tbody>
                </table>}
                {isEdit&&<table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className=''>
                                    <th scope="col" className="px-4 py-3 w-10/12">할 일</th>                    
                                    <th scope="col" className="px-4 py-3 w-1/12">점수</th>
                                    <th scope="col" className="px-4 py-3 w-1/12"></th>                    
                                </tr>
                            </thead>
                            <tbody>
                {tempTasks && tempTasks.map((task:any, k:any)=>{
                    return(<tr key={`task-${target.userId}-${k}`} className="bg-white dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-2">
                                        <input
                                            name={'taskName'}
                                            className='placeholder:text-gray-500 placeholder:italic border border-gray-300 w-full' type='text' placeholder={task.taskName} onChange={(e)=>onChangeTask(k,e)} value={task.taskName}/>
                                    </td>
                                    <td className="px-4 py-2">
                                    <input
                                            name={'taskPoint'}
                                            className='placeholder:text-gray-500 placeholder:italic border border-gray-300 w-10 text-right' type='number' placeholder={task.taskPoint} onChange={(e)=>onChangeTask(k,e)} value={task.taskPoint}/>
                                    </td>
                                    <td className="px-4 py-2" >
                                    <button className='border rounded-md px-3 py-1'
                                        onClick={()=>removeRow(k)}
                                    >-</button>
                                    </td>
                                </tr>)
                                
                })}
                <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                    <td colSpan={3} className="px-4 py-2 text-center">
                        <button className='border rounded-md px-3 py-1'
                            onClick={addRow}
                        >+</button>
                    </td>
                </tr>
                </tbody>
                </table>}
                </div>
                {total_index !== index && <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
                    <div className="absolute px-4 -translate-x-1/2 bg-gray-100 left-1/2 dark:bg-gray-900">
                        <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                        </svg>
                    </div>
                </div>}
            </div>
  );
};

export default ScoreSheet;
