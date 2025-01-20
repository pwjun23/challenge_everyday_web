export type CheckLists = {
    users_total_point:[{[k:string]:string}]
    tasks:[{[k:string]:any}]
    creation_user_id:string
    title:string
    task_hist:[{[k:string]:string}]
    users_to_check:[{[k:string]:string}]
  }
  export type MonthlyViewProp ={
    today:Date
    startDayOfWeek:number
    daysInMonth:Date[]
    checkLists:CheckLists
    holidays:Date[]
  }

  export type DailyChecklistProp ={
    today:Date
    checkLists:CheckLists
  }

  export type ChecklistProp ={
    user_to_check:{[k:string]:string}
    tasks: [{[k:string]:any}]
  }