export type CheckLists = {
    create_at:string
    creation_user_id:string
    name:string
    task_hist:[]
  }
  export type MonthlyViewProp ={
    today:Date
    startDayOfWeek:number
    daysInMonth:Date[]
    checkLists:CheckLists
    holidays:Date[]
  }