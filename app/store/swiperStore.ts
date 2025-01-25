import { create } from "zustand";

// Zustand 스토어 타입 정의
interface SwiperState {
  currentSlideIndex: number;
  selectedDate: string;
  slideData: { [key: number]: string };
  isEdit: boolean;
  setSlideIndex: (index: number) => void;
  setSelectedDate: (yyyyMMdd: string) => void;
  setIsEdit: (value:boolean) => void;
}
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const _date = `${year}-${month}-${day}`;

// Zustand 스토어 생성
export const useSwiperStore = create<SwiperState>((set) => ({
  currentSlideIndex: 0,
  selectedDate: _date,
  isEdit: false,
  slideData: {
    0: '슬라이드 1의 데이터',
    1: '슬라이드 2의 데이터',
    2: '슬라이드 3의 데이터',
  },
  setSlideIndex: (index) => set({ currentSlideIndex: index }),
  setSelectedDate: (yyyyMMdd) => set({ selectedDate: yyyyMMdd }),
  setIsEdit: (value) => set({isEdit: value})
}));