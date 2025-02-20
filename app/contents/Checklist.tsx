"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ChecklistProp } from '../common_type';
import Image from 'next/image';
import { useCheckListsStore } from '../store/checklistStore';
import { saveTasks } from '../commonService';
import _ from 'lodash';
import { Timestamp } from 'firebase/firestore';


const Checklist = (props : ChecklistProp) => {
  const {target} = props;
  const [score, setScore] = useState<number>(0);
  const [checklists, setCheckLists] = useState<{[k:string]:any}[] >([{}]);
  const checkbox_all = useRef<any>(false);
  const { selectedDate, setEditing, tasks, setTasks} = useCheckListsStore();
  
  const countPoints = (updatedChecklist:{[k:string]:any}) =>{
    let totalPoint = 0;
    updatedChecklist.forEach((element: { completed: any; taskPoint: number; userId:string }) => {
      if(element.completed){
        totalPoint = totalPoint + element.taskPoint;
      }
    });
    setScore(totalPoint);
  }

  const isCheckAll = (tasks:any)=>{
    let isAllComplete = true;
    for(let i = 0 ; i < tasks.length ; i++){
      const task = tasks[i];
      if(!task.completed || task.completed === false){
        isAllComplete = false;
        break;
      }
    }
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
      item.taskId === task.taskId ? { ...item, completed: !item.completed } : item
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
      item.taskId === task.taskId? { ...item, taskPoint: item.taskPoint+point } : item
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
    saveTasks(collectionName, documentId, root, checklists, selectedDate, target).then((res)=>{
      let temp_tasks:any;
      const date = Timestamp.fromDate(new Date(selectedDate))
      const newChecklists = {'date': date, "formattedDate" : selectedDate, targetId: target.userId, targetName : target.userName , tasks : checklists }
      if(tasks.length === 0){
        temp_tasks = [];
        temp_tasks.push(newChecklists);
      }else{
        temp_tasks = _.cloneDeep(tasks);
        const idx:number = temp_tasks.findIndex((task:any)=> task.formattedDate === selectedDate && task.targetId === target.userId);
        if(idx !== -1){
          temp_tasks[idx]["tasks"] = checklists;
        }else{
          temp_tasks.push(newChecklists);
        }
      }
      setTasks(temp_tasks);
      alert('저장되었습니다.')
    });
  }

  useEffect(()=>{
    if(props.tasks){
      if(props.tasks.length !==0){
        setCheckLists(props.tasks);
        isCheckAll(props.tasks);
      }
      countPoints(props.tasks);
    }
  }, [props.tasks])
  return (
        <div className="mb-4 border border-gray-300 rounded-lg bg-white p-2">
          {target.photo &&
          <div className="flex items-center">
            <Image
              width={12}
              height={12}
              src={target.userName===''?'/profile_default.svg':target.photo}
              alt={target.userName}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="font-bold text-md text-stone-700 mr-4">{target.userName} ({score}점)</div>
              <label htmlFor={`all-checkbox-${selectedDate}-${target.userId}`}
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-stone-700 mr-2">모두 체크</label>
              <input id={`all-checkbox-${selectedDate}-${target.userId}`}
                     type="checkbox"
                     onChange={(e) => handleAllCheck(e)}
                     ref={checkbox_all}
                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <button type="button" 
                    onClick={()=> saveChecklists(target.userId)}
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
                          id={`checkbox-${target.userId}-${i}`}
                          onChange={(e) => handleCheck(task)}
                          className="mr-2"
                          checked={task?.completed || false}
                          value={task?.completed || false}
                        />
                        <label 
                        className="text-sm text-gray-900 dark:text-stone-700"
                        htmlFor={`checkbox-${task.targetId}-${i}`}>{task.taskName} ({task.taskPoint}점)</label>
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
