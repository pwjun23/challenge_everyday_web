

import { MonthlyViewProp } from '../common_type';
import Image from 'next/image';
import { useCheckListsStore } from '../store/checklistStore';
import { useEffect, useState } from 'react';
import { format, startOfMonth, endOfMonth, addDays } from 'date-fns';
import { fetchHolidays } from '../commonService';


const MonthlyView = (props : MonthlyViewProp) => {
  const {swiperRef } = props;

  const today = new Date();
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
  
  // 달력의 각 날짜를 계산하여 daysInMonth 배열에 넣기
  for (let day = monthStart; day <= monthEnd; day = addDays(day, 1)) {
    daysInMonth.push(day);
  }
  const { checklists, selectedDate, currentSlideIndex, setSlideIndex, setSelectedDate } = useCheckListsStore();
  
  const {tasks, total_point, users_to_check, points_reward} = checklists;// || {create_at : {[k:string]:[]}, creation_user_id : [], name : "", task_hist : []};
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
  const getUserNameByUserId = (user_id:string)=>{
    const idx = users_to_check.findIndex((user)=> user.user_id === user_id);
    const user_name = users_to_check[idx].user_name;
    return user_name;
  }
  const getUserInfoByUserId = (user_id:string)=>{
    const idx = users_to_check.findIndex((user)=> user.user_id === user_id);
    const user_name = users_to_check[idx].user_name;
    return users_to_check[idx];
  }
  const onClickHandle =(createAt:any)=>{
    // fetchData();
    setSlideIndex(1);
    if(createAt === selectedDate){
      swiperRef.current.slideTo(1);
    }else{
      setSelectedDate(createAt);
    }
   
  }
  useEffect(() => {
    // 스토어의 index가 변경될 때마다 Swiper 슬라이드 이동
    if (currentSlideIndex && swiperRef && swiperRef && swiperRef.current) {
      swiperRef.current.slideTo(currentSlideIndex);
    }
    fetchHolidays(today).then((res)=> setHolidays(res));
  }, [selectedDate]);


  return (
    <div className="p-4">
      <div className="text-center text-xl font-extrabold text-blue-600">
        {format(today, 'M')} 월
      </div>
      {/* <div className="text-center text-lg font-bold text-stone-700 mt-2">총점: {total_point?.total}</div> */}
      <div className="flex justify-center text-xl text-stone-700 mb-4" >
      { 
        total_point.users && Object.keys(total_point.users).sort((a,b)=> a<b?-1:a>b?1:0).map((user_id, i)=>{
        const {user_name, photo} = getUserInfoByUserId(user_id);
        return(
          <div className='rounded-xl bg-white drop-shadow p-2 flex justify-center ml-2 mr-2' key={`total-${user_id}-${i}`}>
            <div className='mr-2'>
              <Image
                width={12}
                height={12}
                src={photo}
                alt={user_name}
                className="text-center w-12 h-12 rounded-full"
              />
            <div className='text-center text-sm'>{user_name}</div>
            </div>
            <div className='flex items-center font-extrabold text-xl'>{total_point.users[user_id]}</div>
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

        {daysInMonth.map((day, idx) => {
          const year = day.getFullYear();
          const month = String(day.getMonth()).padStart(2, '0');
          const _day = String(day.getDate()).padStart(2, '0');
          const _date = `${year}-${month}-${_day}`;
          // console.log({_date});
          const userIds = Array.from(new Set(tasks.map((task:any) => task.user_id)));
          const tasksByUserId:any = {};
          if(userIds.length !== 0){
            for(let i=0 ; i < userIds.length ; i++){
              const userId = userIds[i];
              tasksByUserId[userId] = tasks.filter((task:any)=> task.formattedDate === _date && task.user_id === userId);
            }
          }
          return(
          <div key={`daysInMonth-${day}-${idx}`} 
          onClick={()=>onClickHandle(_date)}
          className={`p-1 text-center border wrap-day-in-month`}>
            <div
              className={`text-sm font-bold ${
                isHoliday(day) ? 'text-red-600' : 'text-stone-600'
              }`}
            >
              {format(day,'d')}
            </div>
            {tasksByUserId && Object.keys(tasksByUserId).map((userId, index)=>{
                  let total_point = 0;
                  const user_name = getUserNameByUserId(userId);
                  const user_id = userId;
                  const tasks:[{[k:string]:any}] = tasksByUserId[userId];
                  tasks.forEach((task)=>{
                    if(task.used && task.completed){
                      total_point += task.task_point;
                    }
                  });
                const tag_name_point = total_point!==0?<div className={`float-left text-sm text-stone-500`} key={`${day}-${user_id}-${index}`}>{user_name} <b className='text-blue-400'>{total_point}</b></div>:<div key={index}></div>; 
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
        <table className={`text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-xl sm:rounded-lg`}>
          <thead>
            <tr className={`mt-4 text-md text-green-700 font-bold text-center`}>
              <th colSpan={2} className='px-4 py-2'>상품</th>
            </tr>
          </thead>
          <tbody>
            {points_reward && points_reward.map((reward,idx)=>
              (<tr key={`reward-${idx}`}>
                <th className={`mt-4 text-sm text-stone-700 font-bold text-center px-4 py-2`}>{reward.rankingName}({reward.point_reward_detail})</th>
                <td className={`mt-4 text-sm text-stone-500 text-left  px-4 py-2`}>{reward.award_detail}</td>
              </tr>)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonthlyView;
