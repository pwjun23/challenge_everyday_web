export type TabType = 'monthly' | 'daily' | 'checkadm'| 'score_sheet';
export type CheckLists = {
    users_total_point:{[k:string]:any}
    tasks:{[k:string]:any}
    creation_user_id:string
    title:string
    task_hist:{[k:string]:any}
    users_to_check:[{[k:string]:string}]
    total_point:{[k:string]:any}
    tasks_template:{[k:string]:any}
    points_reward:{[k:string]:any}[]
  }

  export type MonthlyViewProp ={
    today:Date
    startDayOfWeek:number
    daysInMonth:Date[]
    checkLists:CheckLists
    holidays:Date[]
    today_str:string
    swiperRef:any
  }

  export type DailyChecklistProp ={
    today_str:string
    checkLists:CheckLists
    key:any
    updateItem:any
  }

  export type ChecklistProp ={
    user_to_check:{[k:string]:string}
    tasks: {[k:string]:any}[] 
    selectedDate:string
    updateItem:any
    user_id_to_check:string
  }

  export type ScoreSheetsProp ={
    checkLists:CheckLists
  }

  export type ScoreSheetProp ={
    tasks:{[k:string]:any}[]
    user_id:string
    user_name:string
    index:number
    total_index:number
  }

