import { create } from "zustand";
import { Checklists } from "../common_type";

// Zustand 스토어 타입 정의
interface ChecklistState {
  tasks: [];
  checklist:{[k:string]:any};
  reward:{[k:string]:any};
  checklists:Checklists;
  currentSlideIndex: number;
  selectedDate: string;
  slideData: { [key: number]: string };
  isEdit: boolean;
  modalShow:boolean,
  editing:boolean,
  isEditReward:boolean,
  setTasks:(value:[]) => void;
  setChecklist:(value:{[k:string]:any}) => void;
  setReward:(value:{[k:string]:any})=> void;
  setChecklists:(value:Checklists) => void;
  setSlideIndex: (index: number) => void;
  setSelectedDate: (yyyyMMdd: string) => void;
  setIsEdit: (value:boolean) => void;
  setModalShow: (value:boolean) => void;
  setEditing: (value:boolean)=> void;
  setIsEditReward: (value:boolean)=> void;
}
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const _date = `${year}-${month}-${day}`;

// Zustand 스토어 생성
export const useCheckListsStore = create<ChecklistState>((set) => ({
  tasks:[],
  checklist:{},
  reward:{},
  checklists:{
    users_total_point:{},
    tasks:[],
    creation_user_id:'',
    title:'',
    task_hist:{},
    users_to_check:[{}],
    total_point:{},
    tasks_template:{},
    points_reward:[{}]
  },
  currentSlideIndex: 0,
  selectedDate: _date,
  isEdit: false,
  modalShow:false,
  slideData: {
    0: '슬라이드 1의 데이터',
    1: '슬라이드 2의 데이터',
    2: '슬라이드 3의 데이터',
  },
  editing:false,
  isEditReward:false,
  setTasks: (value) => set({tasks:value}),
  setChecklist: (value) => set({checklist:value}),
  setReward: (value) => set({reward:value}),
  setChecklists: (value) => set({checklists:value}),
  setSlideIndex: (index) => set({ currentSlideIndex: index }),
  setSelectedDate: (yyyyMMdd) => set({ selectedDate: yyyyMMdd }),
  setIsEdit: (value) => set({isEdit: value}),
  setModalShow: (value) => set({modalShow: value}),
  setEditing: (value) => set({editing:value}),
  setIsEditReward: (value) => set({isEditReward:value})
}));