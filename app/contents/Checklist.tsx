"use client";

import React, { useEffect, useState } from 'react';
import { ChecklistProp, DailyChecklistProp } from '../common_type';

const Checklist = (props : ChecklistProp) => {
  const {user_to_check, tasks} = props;
  const [score, setScore] = useState<number>(0);

  const handleCheck = (points: number): void => {
    setScore(score + points);
  };
  
  return (
        <div className="mb-4 border border-gray-300 rounded-lg bg-white p-4">
          <div className="flex items-center">
            <img
              src={user_to_check.user_name===''?'/profile_default.svg':user_to_check.photo}
              alt={user_to_check.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="font-bold text-lg">{user_to_check.user_name} (총{score}점)</div>
          </div>
          <div className="mt-4">
            {
              tasks.map((task, i)=>{
                  if(user_to_check.user_id === task.user_id_to_check && task.used){
                    return(
                      <div key={i} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id={`checkbox--${i}`}
                          onChange={(e) => handleCheck(e.target.checked ? task.task_point : -task.task_point)}
                          className="mr-2"
                        />
                        <label htmlFor={`checkbox--${i}`}>{task.task_name} ({task.task_point}점)</label>
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
