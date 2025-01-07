

import { format } from 'date-fns';

type MonthlyViewProp ={
  today:Date
  startDayOfWeek:number
  daysInMonth:Date[]
  holidays:Date[]
}
const MonthlyView = (props :MonthlyViewProp) => {
 const {today, startDayOfWeek, daysInMonth, holidays} = props;
console.log({holidays})
  const totalScore = 120; // Example total score

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
  return (
    <div className="p-4">
      <div className="text-center text-xl font-extrabold text-blue-600">
        {format(today, 'M')} 월
      </div>
      <div className="text-center text-lg font-bold mt-2">총점: {totalScore}</div>

      {/* 요일을 표시하는 부분 */}
      <div className="grid grid-cols-7 gap-0 mt-0 text-center">
        {weekDays.map((day, idx) => (
          <div key={idx} className="text-sm font-bold text-gray-600 bg-slate-50">
            {day}
          </div>
        ))}
      </div>

      {/* 날짜를 표시하는 부분 */}
      <div className="grid grid-cols-7 gap-0 mt-0">
        {/* 빈 칸을 추가하여 첫 번째 날짜가 올바른 요일에 맞춰지게 조정 */}
        {Array.from({ length: startDayOfWeek }).map((_, idx) => (
          <div key={idx} className="text-center"></div>
        ))}

        {daysInMonth.map((day, idx) => (
          <div key={idx} className={`p-1 text-center border`}>
            <div
              className={`text-sm font-bold ${
                isHoliday(day) ? 'text-red-600' : 'text-stone-600'
              }`}
            >
              {format(day, 'd')}
            </div>
            <div className="text-xs mt-0">
              <div>온겸 5</div>
              <div>소빈 7</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyView;
