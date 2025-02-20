

import { MonthlyViewProp } from '../common_type';
import Image from 'next/image';
import { useCheckListsStore } from '../store/checklistStore';
import { useEffect, useState } from 'react';
import { format, startOfMonth, endOfMonth, addDays } from 'date-fns';
import { fetchHolidays, saveChecklist } from '../commonService';
import _ from 'lodash';


const MonthlyView = (props : MonthlyViewProp) => {
  const {swiperRef, totalMonthCount} = props;
  const { selectedDate, currentSlideIndex, setSlideIndex, setSelectedDate, tasks, checklist, reward, setReward, isEditReward, setIsEditReward} = useCheckListsStore();
  const [ tempReward, setTempReward ] = useState(reward);
  const today = new Date(selectedDate);
  // const today = new Date('2025-01-01');
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const today_str = `${year}-${month}-${day}`;
  // 월의 첫 날이 어떤 요일인지 확인
  const monthStart = startOfMonth(today);
  const startDayOfWeek = monthStart.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일
  const monthEnd = endOfMonth(today);
  const [holidays, setHolidays] = useState<Date[]>([]);
  const daysInMonth: Date[] = [];
  
  // const [tasksData, setTasksData ] = useState(tasks);

  // 달력의 각 날짜를 계산하여 daysInMonth 배열에 넣기
  for (let day = monthStart; day <= monthEnd; day = addDays(day, 1)) {
    daysInMonth.push(day);
  }
  
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  // 공휴일인지 체크하는 함수
  const isHoliday = (date: Date): boolean => {
    return holidays.length !==0 ? holidays.some(
      (holiday) =>
        (holiday.getDate() === date.getDate() &&
        holiday.getMonth() === date.getMonth() &&
        holiday.getFullYear() === date.getFullYear() ) ||
        date.getDay() === 0 //일요일
    ): date.getDay() === 0 //일요일
  };

  const onClickHandle =(createAt:any)=>{
    // fetchData();
    setSlideIndex(1);
    if(createAt === selectedDate){
      swiperRef.current.slideTo(1);
    }else{
      setSelectedDate(createAt);
    }
   
  }
  const onClickMonth = (month:number)=>{
    const selectedDates:any = selectedDate.split('-');
    const setMonth = `${selectedDates[0]}-${String(month).padStart(2, '0')}-01`;
    setSelectedDate(setMonth);
  }
 const onSave = ()=>{
    /**
     * 여기다가 저장 로직을 넣는다.... 
     */
    const collectionName = "rewards";
    const documentId = "R00000001";
    const root = "list";
    // const date = Timestamp.fromDate(new Date(selectedDate))
    // const checklist = {'date': date, "formattedDate" : selectedDate, targetId: target.userId, targetName : target.userName , tasks : target.tasks }
    // const idx:number = checklist.targets.findIndex((t:any)=> t.userId === target.userId);
    // const targets:any = _.cloneDeep(checklist).targets;
    // targets[idx].tasks = tempTasks;/
    saveChecklist(collectionName,documentId,root,tempReward.list).then((res:any)=>{
        if(res){
            setReward(tempReward);
        }
    });
    setIsEditReward(false);
  }
  const onExit = ()=>{
    setTempReward(reward);
    setIsEditReward(false);
  }
  const onChangeTask =(index:number, e:any)=>{

    const { name, value } = e.target;
    const newInputs = [...tempReward.list];
    newInputs[index] = {...newInputs[index], [name] : value};
    const _tempReward:any = _.cloneDeep(tempReward);
    _tempReward.list = newInputs;
    setTempReward(_tempReward);
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

    // console.log({taskId});
    const _tempReward:any = _.cloneDeep(tempReward);
    _tempReward.list.push({awardDetail:'', pointReward:0, pointRewardDetail:"", ranking:_tempReward.list.length+1,rankingName:"" });
    setTempReward(_tempReward);
  }

  const removeRow = (index:number)=>{
    const _tempReward:any = _.cloneDeep(tempReward);
    _tempReward.list.splice(index,1);
    setTempReward(_tempReward);
  }

useEffect(()=>{
  if(reward && reward.list){
    setTempReward(reward);
  }
},[reward])
  useEffect(() => {
    // 스토어의 index가 변경될 때마다 Swiper 슬라이드 이동
    if (currentSlideIndex && swiperRef && swiperRef && swiperRef.current) {
      swiperRef.current.slideTo(currentSlideIndex);
    }
    fetchHolidays(new Date(selectedDate)).then((res)=> setHolidays(res));
  }, [selectedDate]);

  useEffect(() =>{
    // setTasksData(tasks);

    const users:{[k:string]:number} = {};
    if(checklist && checklist.targets){
     checklist.targets.forEach((target:any)=>{
      const {userId} = target;
      if(!users[userId]) users[userId] = 0;
      tasks.forEach((taskD:any)=>{
        taskD.tasks.forEach((task:any)=>{
          if(task.completed){
            if(taskD.targetId === userId){
              users[userId] += Number(task.taskPoint);
            }
          }
        })
      })
    });
    checklist["totalPoint"] = users;
    }


  },[tasks, checklist])

  return (
    <div className="p-4">
      <div className={`text-center`}>
        {totalMonthCount && Array.from({ length: totalMonthCount+1 }, (_, i) => i + 1).map((number)=>(
          <span key={number} className={`ml-1 mr-1 ${String(number)=== format(selectedDate, 'M')?"text-blue-600 font-extrabold text-xl":"text-black text-lg"}`}
            onClick={()=> onClickMonth(number)}
          >
           {number}월
          </span>
        ))}
      </div>
      {/* <div className="text-center text-lg font-bold text-stone-700 mt-2">총점: {totalPoint?.total}</div> */}
      <div className="flex justify-center text-xl text-stone-700 mb-4" >
      { 
        checklist.targets && checklist.targets.map((target:any, i:number)=>{
        // const {user_name, photo} = getUserInfoByUserId(user_id);
        const {userName, photo, userId} = target;
        return(
          <div className='rounded-xl bg-white drop-shadow p-2 flex justify-center ml-2 mr-2' key={`total-${userId}-${i}`}>
            <div className='mr-2'>
              <Image
                width={12}
                height={12}
                src={photo}
                alt={userName}
                className="text-center w-12 h-12 rounded-full"
              />
            <div className='text-center text-sm'>{userName}</div>
            </div>
            <div className='flex items-center font-extrabold text-xl'>{checklist.totalPoint[userId]}</div>
          </div>
          )})
        }
      </div>
      

      {/* 요일을 표시하는 부분 */}
      <div className="grid grid-cols-7 gap-0 mt-0 text-center">
        {weekDays.map((day, idx) => (
          <div key={`week-${idx}`} className="text-sm font-bold text-gray-600 bg-slate-50">
            {day}
          </div>
        ))}
      </div>

      {/* 날짜를 표시하는 부분 */}
      <div className="grid grid-cols-7 gap-0 mt-0 border">
        {/* 빈 칸을 추가하여 첫 번째 날짜가 올바른 요일에 맞춰지게 조정 */}
        {Array.from({ length: startDayOfWeek }).map((_, idx) => (
          <div key={`blank-${idx}`} className="text-center"></div>
        ))}

        {tasks && daysInMonth.map((day, idx) => {
          const year = day.getFullYear();
          const month = String(day.getMonth()).padStart(2, '0');
          const monthC = String(day.getMonth()+1).padStart(2, '0');
          const _day = String(day.getDate()).padStart(2, '0');
          const _date = `${year}-${month}-${_day}`;
          const _dateC = `${year}-${monthC}-${_day}`;
          // 날짜 맞는 배열을 필터링한다. 
          // targetIds를 추출한다.
          const pointInfoByDay:any = tasks.filter((task:any)=> task.formattedDate === _dateC);
          const targetIds = Array.from(new Set(pointInfoByDay.map((task:any) => task.targetId)));
          const tasksByUserId:any = {};
          if(targetIds.length !== 0){
            for(let i=0 ; i < targetIds.length ; i++){
              const targetId:any = targetIds[i];
              tasksByUserId[targetId] = tasks.filter((task:any)=> task.formattedDate === _dateC && task.targetId === targetId)[0];
            }
          }

          return(
          <div key={`daysInMonth-${day}-${idx}`} 
          onClick={()=>onClickHandle(_dateC)}
          className={`p-1 text-center border wrap-day-in-month`}>
            <div
              className={`text-sm font-bold ${
                isHoliday(day) ? 'text-red-600' : 'text-stone-600'
              }`}
            >
              {format(day,'d')}
            </div>
            {tasksByUserId && Object.keys(tasksByUserId).map((userId, index)=>{
                  let totalPoint = 0;
                  const user_name = tasksByUserId[userId].targetName;//getUserNameByUserId(userId);
                  const user_id = userId;
                  const tasks:[{[k:string]:any}] = tasksByUserId[userId].tasks;
                  tasks.forEach((task)=>{
                    if(task.completed){
                      totalPoint += Number(task.taskPoint);
                    }
                  });
                const tag_name_point = totalPoint!==0?<div className={`float-left text-sm text-stone-500`} key={`${day}-${user_id}-${index}`}>{user_name} <b className='text-blue-400'>{totalPoint}</b></div>:<div key={index}></div>; 
                return(
                  <div className="text-xs mt-0" key={`points-${day}-${index}`}
                  // onClick={()=>onClickHandle(date)}
                  >
                  {tag_name_point} 
                </div>)
            })}

            
          </div>
          )})}
      </div>
      <div className='flex justify-center mt-4 overflow-x-auto'>
        
        {!isEditReward && <table className={`text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-xl sm:rounded-lg`}>
          <thead>
            <tr className={`mt-4 text-md text-green-700 font-bold text-center`}>
              <th colSpan={2} className='px-4 py-2'>상품
                <button 
                  onClick={()=> setIsEditReward(true)}
                  className='float-right text-stone-600 font-normal bg-transparent'>수정</button></th>
            </tr>
          </thead>
          <tbody>
            {tempReward && tempReward.list && tempReward.list.map((reward:any,idx:number)=>
              (<tr key={`reward-${idx}`}>
                <th className={`mt-4 text-sm text-stone-700 font-bold text-center px-4 py-2`}>{reward.rankingName}({reward.pointRewardDetail})</th>
                <td className={`mt-4 text-sm text-stone-500 text-left  px-4 py-2`}>{reward.awardDetail}</td>
              </tr>)
            )}
          </tbody>
        </table>}
        {isEditReward && 
        <table className={`text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-xl sm:rounded-lg mb-10`}>
          
          <thead>
            <tr>
            <th><button 
                    onClick={()=> onExit()}
                    className='float-left text-stone-600 font-normal bg-transparent p-2'>취소</button></th>
                    <th className='w-[30px]'>
                <button 
                    onClick={()=> onSave()}
                    className='text-stone-600 font-normal bg-transparent border-1 float-right p-2'>저장</button></th>
            </tr>
            <tr>
              <th className='size-30 pl-5'>상품 설명<br/>점수 설명</th><th>등수명<br/>점수기준</th>
              
            </tr>
          </thead>
            
            {tempReward && tempReward.list && tempReward.list.map((reward:any,idx:number)=>
              (<tbody key={idx}>
                <tr >
                <td className={`mt-4 text-sm text-stone-700 font-bold px-4 py-2`}>
                  <input
                    name={'pointRewardDetail'}
                    className='placeholder:text-gray-500 placeholder:italic border border-gray-300' type='text' 
                    placeholder={reward.pointRewardDetail} onChange={(e)=>onChangeTask(reward.ranking-1,e)} value={reward.pointRewardDetail}/>  
                </td>
                <td className={`mt-4 text-sm text-stone-700 font-bold px-4 py-2`}>
                  <input
                    name={'rankingName'}
                    className='placeholder:text-gray-500 placeholder:italic border border-gray-300 w-[60px]' type='text' 
                    placeholder={reward.rankingName} onChange={(e)=>onChangeTask(reward.ranking-1,e)} value={reward.rankingName}/>  
                </td>
                </tr>
                <tr className='border-b-4 '>
                <td className={`text-sm text-stone-700 font-bold px-4`}>
                  <input
                    name={'awardDetail'}
                    className='placeholder:text-gray-500 placeholder:italic border border-gray-300' type='text' 
                    placeholder={reward.awardDetail} onChange={(e)=>onChangeTask(reward.ranking-1,e)} value={reward.awardDetail}/>  
                </td>
                <td className={`text-sm text-stone-700 font-bold px-4`}>
                  <input
                    name={'pointReward'}
                    className='placeholder:text-gray-500 placeholder:italic border border-gray-300 w-[60px]' type='number' 
                    placeholder={reward.pointReward} onChange={(e)=>onChangeTask(reward.ranking-1,e)} value={reward.pointReward}/> 
                    <button className='border rounded-md px-3 py-1'
                      onClick={()=>removeRow(reward.ranking-1)}
                  >-</button>
                </td>
                <td></td>
              </tr></tbody>)
            )}
            <tbody>
              <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                <td colSpan={3} className="px-4 py-2 text-center">
                    <button className='border rounded-md px-3 py-1'
                        onClick={addRow}
                    >+</button>
                </td>
            </tr>
            </tbody>
        </table>
        }
      </div>
    </div>
  );
};

export default MonthlyView;
