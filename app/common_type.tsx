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

  export type ScoreSheetProp ={
    checkLists:CheckLists
  }

