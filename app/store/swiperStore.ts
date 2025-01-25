// import create from 'zustand';

import { create } from "zustand";

// interface SwiperState {
//   currentSlideIndex: number;
//   slideData: { [key: number]: string };
//   setSlideIndex: (index: number) => void;
// }

// export const useSwiperStore = create<SwiperState>((set:any) => ({
//   currentSlideIndex: 0,
//   slideData: {
//     0: '슬라이드 1의 데이터',
//     1: '슬라이드 2의 데이터',
//     2: '슬라이드 3의 데이터',
//   },
//   setSlideIndex: (index:number) => set({ currentSlideIndex: index }),
// }));

// Zustand 스토어 타입 정의
interface SwiperState {
  currentSlideIndex: number;
  selectedDate: string;
  slideData: { [key: number]: string };
  setSlideIndex: (index: number) => void;
  setSelectedDate: (yyyyMMdd: string) => void;
}

// Zustand 스토어 생성
export const useSwiperStore = create<SwiperState>((set) => ({
  currentSlideIndex: 0,
  selectedDate: new Date().toISOString().split('T')[0],
  slideData: {
    0: '슬라이드 1의 데이터',
    1: '슬라이드 2의 데이터',
    2: '슬라이드 3의 데이터',
  },
  setSlideIndex: (index) => set({ currentSlideIndex: index }),
  setSelectedDate: (yyyyMMdd) => set({ selectedDate: yyyyMMdd }),
}));