"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ChecklistProp } from '../common_type';
import Image from 'next/image';
import { useCheckListsStore } from '../store/checklistStore';
import { mergeObjects, updateItem } from '../commonService';

const Checklist = (props : ChecklistProp) => {
  const {tasks, user_to_check, user_id_to_check} = props;
  const [score, setScore] = useState<number>(0);
  const [checklists, setCheckLists] = useState<{[k:string]:any}[] >([{}]);
  const checkbox_all = useRef<any>(false);
  const { selectedDate, setEditing } = useCheckListsStore();
  
  const countPoints = (updatedChecklist:{[k:string]:any}) =>{
    let totalPoint = 0;
    updatedChecklist.forEach((element: { completed: any; taskPoint: number; user_id_to_check:string }) => {
      if(element.completed){
        totalPoint = totalPoint + element.taskPoint;
      }
    });
    setScore(totalPoint);
  }

  const isCheckAll = (tasks:any)=>{
    let isAllComplete = true;
    tasks && tasks.forEach((task:any)=>{
      if(!task.completed || task.completed === false){
        isAllComplete = false;
        return false;
      }
    });
    if(checkbox_all && checkbox_all.current){
      const ch = checkbox_all.current;
      if(isAllComplete){
        ch.checked = true;
      }else{
        ch.checked = false;
      }
    }
  }

  const handleCheck = (task:any): void => {
    const updatedChecklist:{[k:string]:any}[] = checklists.map((item) =>
      item.taskId === task.taskId && item.user_id_to_check === task.user_id_to_check ? { ...item, completed: !item.completed } : item
    );
    updateChecklist(updatedChecklist);
    isCheckAll(updatedChecklist);
    setEditing(true);
  };

  const handleAllCheck = (e:any): void => {
    const value = e.target.checked;
    const updatedChecklist:{[k:string]:any}[] = checklists.map((item) => {return{...item, completed  : value}});
    updateChecklist(updatedChecklist)
  };
  const pointHandler = (task:any, point:number) =>{
    const updatedChecklist:{[k:string]:any}[] = checklists.map((item) =>
      item.taskId === task.taskId && item.user_id_to_check === task.user_id_to_check ? { ...item, taskPoint: item.taskPoint+point } : item
    );
    updateChecklist(updatedChecklist);
  }

  const updateChecklist =(updatedChecklist:any)=>{
    // 상태 업데이트
    setCheckLists(updatedChecklist);
    countPoints(updatedChecklist);
  }

  const saveChecklists = (userId:string)=>{
    const collectionName = 'tasks';
    const documentId = `${userId}-${selectedDate}`;
    const root = 'tasks';
    updateItem(collectionName, documentId, root, checklists).then((res)=>{
      alert('저장되었습니다.')
    });
    // updateItem("C00000000", "Tasks", documentId2,"tasks", checklists).then((res)=>{
    //   alert('저장되었습니다.')
    // });
  }

  useEffect(()=>{
    if(tasks){
      if(tasks.length !==0){
        setCheckLists(tasks);
        isCheckAll(tasks);
      }
      countPoints(tasks);
    }
  }, [tasks])
  return (
        <div className="mb-4 border border-gray-300 rounded-lg bg-white p-2">
          {user_to_check.photo &&
          <div className="flex items-center">
            <Image
              width={12}
              height={12}
              src={user_to_check.userName===''?'/profile_default.svg':user_to_check.photo}
              alt={user_to_check.userName}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="font-bold text-md text-stone-700 mr-4">{user_to_check.userName} ({score}점)</div>
              <label htmlFor={`all-checkbox-${selectedDate}-${user_id_to_check}`}
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-stone-700 mr-2">모두 체크</label>
              <input id={`all-checkbox-${selectedDate}-${user_id_to_check}`}
                     type="checkbox"
                     onChange={(e) => handleAllCheck(e)}
                     ref={checkbox_all}
                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <button type="button" 
                    onClick={()=> saveChecklists(user_id_to_check)}
                    className="absolute right-4 text-gray-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-sm text-sm px-2 py-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2">
                    <span className=''>저장</span>
              </button>
          </div>
          }
          <div className="mt-4">
            {
              checklists && checklists.length > 0 && checklists.map((task, i)=>{
                    return(
                      <div key={i} className="flex justify-start items-center mb-2">
                        <input
                          type="checkbox"
                          id={`checkbox-${task.user_id_to_check}-${i}`}
                          onChange={(e) => handleCheck(task)}
                          className="mr-2"
                          checked={task?.completed || false}
                          value={task?.completed || false}
                        />
                        <label 
                        className="text-sm text-gray-900 dark:text-stone-700"
                        htmlFor={`checkbox-${task.user_id_to_check}-${i}`}>{task.taskName} ({task.taskPoint}점)</label>
                        <div className="add-delete-point-btn ml-4 inline-flex rounded-md shadow-sm" role="group">
                          <button type="button" onClick={(e)=>pointHandler(task,+1)} className="px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            +1
                          </button>
                          <button type="button" onClick={(e)=>pointHandler(task,-1)} className="px-3 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            -1
                          </button>
                        </div>
                      </div>
                    )
                })
            }
          </div>
        </div>
  );
};

export default Checklist;
