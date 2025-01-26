import { create } from "zustand";
import { Checklists } from "../common_type";

// Zustand 스토어 타입 정의
interface ChecklistState {
  checklists:Checklists;
  currentSlideIndex: number;
  selectedDate: string;
  slideData: { [key: number]: string };
  isEdit: boolean;
  modalShow:boolean,
  setChecklists:(value:Checklists) => void;
  setSlideIndex: (index: number) => void;
  setSelectedDate: (yyyyMMdd: string) => void;
  setIsEdit: (value:boolean) => void;
  setModalShow: (value:boolean) => void;
}
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const _date = `${year}-${month}-${day}`;

// Zustand 스토어 생성
export const useCheckListsStore = create<ChecklistState>((set) => ({
  checklists:{
    users_total_point:{},
    tasks:{},
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
  setChecklists: (value) => set({checklists:value}),
  setSlideIndex: (index) => set({ currentSlideIndex: index }),
  setSelectedDate: (yyyyMMdd) => set({ selectedDate: yyyyMMdd }),
  setIsEdit: (value) => set({isEdit: value}),
  setModalShow: (value) => set({modalShow: value})
}));