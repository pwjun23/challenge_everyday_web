"use client";

import React, { useEffect, useState } from 'react';
import { ChecklistProp } from '../common_type';

const Checklist = (props : ChecklistProp) => {
  const {user_to_check, tasks, selectedDate, updateItem, user_id_to_check} = props;
  const [score, setScore] = useState<number>(0);
  const [checklist, setCheckLists] = useState<{[k:string]:any}[] >([{}]);

  const handleCheck = (task:any): void => {

    const updatedChecklist:{[k:string]:any}[] = checklist.map((item) =>
      item.taskId === task.taskId && item.user_id_to_check === task.user_id_to_check ? { ...item, completed: !item.completed } : item
    );

    // 상태 업데이트
    setCheckLists(updatedChecklist);
    countPoints(updatedChecklist);

    // 저장할 데이터 출력 (여기서 저장 로직을 추가)
    const root = `tasks.${selectedDate}.${user_id_to_check}`;
    updateItem("C00000000", root, updatedChecklist);
    // console.log("현재 변경된 항목:", selectedItems);
  };

  const countPoints = (updatedChecklist:{[k:string]:any}) =>{
    let totalPoint = 0;
    updatedChecklist.forEach((element: { completed: any; task_point: number; user_id_to_check:string }) => {
      if(element.completed){
        totalPoint = totalPoint + element.task_point;
      }
    });
    setScore(totalPoint);
  }
  useEffect(()=>{
    if(tasks){
      if(tasks.length ===0){

      }else{
        setCheckLists(tasks);
      }
      countPoints(tasks);
    }
  }, [tasks])
  return (
        <div className="mb-4 border border-gray-300 rounded-lg bg-white p-4">
          <div className="flex items-center">
            <img
              src={user_to_check.user_name===''?'/profile_default.svg':user_to_check.photo}
              alt={user_to_check.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="font-bold text-lg mr-4">{user_to_check.user_name} (총{score}점)</div>
              <label htmlFor={`all-checkbox-${selectedDate}-${user_id_to_check}`}
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-2">모두 체크</label>
              <input id={`all-checkbox-${selectedDate}-${user_id_to_check}`}
                     type="checkbox"
                     value="" 
                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          </div>
          <div className="mt-4">
            {
              checklist && checklist.map((task, i)=>{
                  if(task.used){
                    return(
                      <div key={i} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id={`checkbox-${task.user_id_to_check}-${i}`}
                          onChange={(e) => handleCheck(task)}
                          className="mr-2"
                          checked={task.completed}
                        />
                        <label htmlFor={`checkbox-${task.user_id_to_check}-${i}`}>{task.task_name} ({task.task_point}점)</label>
                      </div>
                    )
                  }
                })
            }
          </div>
        </div>
  );
};

export default Checklist;
