export type TabType = 'monthly' | 'daily' | 'checkadm'| 'score_sheet';
export type Checklists = {
    users_total_point:{[k:string]:any}
    creation_user_id:string
    title:string
    task_hist:{[k:string]:any}
    users_to_check:[{[k:string]:string}]
    total_point:{[k:string]:any}
    tasks_template:{[k:string]:any}
    points_reward:{[k:string]:any}[]
  }

  export type MonthlyViewProp ={
    swiperRef:any
    totalMonthCount:number
  }

  export type DailyChecklistProp ={
    user_id:string
  }

  export type ChecklistProp ={
    user_to_check:{[k:string]:string}
    selectedDate:string
    user_id_to_check:string
  }

  // export type ScoreSheetsProp ={
  //   // checkLists:Checklists
  // }

  export type ScoreSheetProp ={
    user_id:string
    user_name:string
    index:number
    total_index:number
  }

  export interface HolidayItem {
    locdate: string; // 공휴일 날짜 (yyyyMMdd 형식의 문자열)
  }