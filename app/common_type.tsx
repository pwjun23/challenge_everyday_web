export type CheckLists = {
    users_total_point:[{[k:string]:string}]
    tasks:[]
    creation_user_id:string
    title:string
    task_hist:[]
  }
  export type MonthlyViewProp ={
    today:Date
    startDayOfWeek:number
    daysInMonth:Date[]
    checkLists:CheckLists
    holidays:Date[]
  }