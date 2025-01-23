

import { format } from 'date-fns';
import { MonthlyViewProp } from '../common_type';

const MonthlyView = (props : MonthlyViewProp) => {
  const {today, startDayOfWeek, daysInMonth, checkLists, holidays, today_str} = props;
  const {tasks, total_point, users_to_check, users_total_point, creation_user_id, title, task_hist} = checkLists;// || {create_at : {[k:string]:[]}, creation_user_id : [], name : "", task_hist : []};

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  // 공휴일인지 체크하는 함수
  const isHoliday = (date: Date): boolean => {
    return holidays.some(
      (holiday) =>
        holiday.getDate() === date.getDate() &&
        holiday.getMonth() === date.getMonth() &&
        holiday.getFullYear() === date.getFullYear()
    );
  };
  
  const onClickHandle =(createAt:any)=>{
    // const router = useRouter();
    // const queryString = new URLSearchParams(createAt).toString(); // 데이터를 쿼리로 변환
    // router.push(`/page?${queryString}`, "_blank"); // 새 탭 열기
  }
  return (
    <div className="p-4">
      <div className="text-center text-xl font-extrabold text-blue-600">
        {format(today, 'M')} 월
      </div>
      <div className="text-center text-lg font-bold mt-2 mb-2">총점: {total_point}</div>

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

        {daysInMonth.map((day, idx) => (
          <div key={`daysInMonth-${day}-${idx}`} className={`p-1 text-center border wrap-day-in-month`}>
            <div
              className={`text-sm font-bold ${
                isHoliday(day) ? 'text-red-600' : 'text-stone-600'
              }`}
            >
              {format(day, 'd')}
            </div>
            {tasks && Object.keys(tasks).map((date, index)=>{
              if(date.split('-')[2] === format(day, 'd')){
                  const tasks_by_user_id:{[k:string]:any} = tasks[date];
                  return(
                  <div className="text-xs mt-0" key={`points-${day}-${index}`} onClick={()=>onClickHandle(date)}>
                    {tasks_by_user_id && Object.keys(tasks_by_user_id).map((user_id, i)=>{
                      let total_point = 0;
                      const idx = users_to_check.findIndex((user)=> user.user_id === user_id);
                      const user_name = users_to_check[idx].user_name;
                      const tasks:[{[k:string]:any}] = tasks_by_user_id[user_id];
                      tasks.forEach((task)=>{
                        if(task.used && task.completed){
                          total_point += task.task_point;
                        }
                      });
                      const tag_name_point = total_point!==0?<div key={`${day}-${user_id}-${i}`}>{user_name} {total_point}</div>:<div key={i}></div>;
                      return tag_name_point;
                    })}
                  </div>)
                }
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyView;
