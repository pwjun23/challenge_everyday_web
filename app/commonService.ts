import { collection, addDoc, getDocs, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import _ from 'lodash';
import {checklists_collection, user_won} from "./db";
import { HolidayItem } from "./common_type";
import { format} from 'date-fns';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOioNA2npe8VpMtFlOLXJjIYzTbiu3hWY",
  authDomain: "molespapa2025.firebaseapp.com",
  projectId: "molespapa2025",
  storageBucket: "molespapa2025.firebasestorage.app",
  messagingSenderId: "601631315534",
  appId: "1:601631315534:web:9b8853fdefab730388551f",
  measurementId: "G-ZH69TWC3DJ"
};


export async function fetchData() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const users = await getDocs(collection(db, "Users"));
  const checklistsDB = await getDocs(collection(db, "Checklists"));
  users.forEach((doc) => {
    console.log(doc.id + ' | ' , doc.data());
  });

  let _checklists:any;
  
  checklistsDB.forEach((doc) => {
    console.log('page > fetchData : '+doc.id + ' | ' , doc.data());
    if(doc.id === 'C00000000')_checklists= _.cloneDeep(doc.data())
    const tasks:any= _checklists.tasks;
    let totalPoint = 0;
    const users:{[k:string]:number} = {};
    Object.keys(tasks).map((d)=>{
      Object.keys(tasks[d]).map((n)=>{
        if(!users[n]) users[n] = 0;
        tasks[d][n].forEach((check:any)=>{
            if(check.used && check.completed){
              totalPoint += check.task_point;
              users[n] += check.task_point;
            }
        });
      })
    });
    _checklists["total_point"] = {"total": totalPoint,"users": users};
  });
  return _checklists;
}

export async function updateItem(documentId:string, root:string, updatedData:any) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
    try {
      const docRef = doc(db, "Checklists", documentId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log("문서 데이터:", docSnap.data());
      } else {
        console.log("해당 문서는 존재하지 않습니다.");
      }
    
      // Firestore에서 해당 아이템 업데이트
      await updateDoc(docRef, {[root] : updatedData});


  
      console.log("특정 객체가 성공적으로 업데이트되었습니다.");
    } catch (error) {
      console.error("업데이트 중 오류 발생:", error);
    }
  }
  
  async function fetchDocumentById(collectionName:string, documentId:string) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    try {
      // 특정 컬렉션과 문서 ID를 참조
      const docRef = doc(db, collectionName, documentId);
  
      // 문서 가져오기
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        // 문서 데이터 가져오기
        console.log("문서 데이터:", docSnap.data());
        return docSnap.data(); // 문서 데이터 반환
      } else {
        console.log("해당 문서를 찾을 수 없습니다.");
        return null;
      }
    } catch (error) {
      console.error("문서 가져오기 중 오류 발생:", error);
      throw error;
    }
  }

  // 공휴일을 동적으로 불러오는 함수
export const fetchHolidays = async (today:Date) => {
      const apiKey = 'YbUdghHTg29kUnFKrBWyh%2FQA7Au%2FUkVCGu2BvtR3qIoRUv5z2reuuRGWKhPyhGIS7IKDCvp22B4vbayKQoOVGw%3D%3D'; // 공공데이터 API 키
      const year = today.getFullYear();
      const month = format(today, 'MM');
      const url = `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo?solYear=${year}&solMonth=${month}&ServiceKey=${apiKey}&_type=json`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
  
        if (data.response && data.response.body && data.response.body.items) {
          const holidayDates = data.response.body.items.item.map((item: HolidayItem) => {
            const dateString = String(item.locdate);
            const formattedDateString = `${dateString.slice(0, 4)}-${dateString.slice(4, 6)}-${dateString.slice(6)}`;
            return new Date(formattedDateString);
          });
          return holidayDates;
          // setHolidays(holidayDates); // 공휴일 배열 저장
        }
      } catch (error) {
        console.error('공휴일 데이터를 불러오는 데 실패했습니다.', error);
      }
    };
  
  // 날짜를 YYYY-MM-DD 형식으로 변환하는 함수
  const getFormattedDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  
  async function addDocumentWithId() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    // const documentId = getFormattedDate(); // 문서 ID를 날짜로 설정
    const documentId = "C00000000";
    const users = user_won;
    const checklists = checklists_collection;
  
    try {
      // Firestore에 문서를 추가
      await setDoc(doc(db, "Checklists", documentId), checklists);
      console.log("문서가 성공적으로 추가되었습니다!");
    } catch (error) {
      console.error("문서 추가 중 오류 발생:", error);
    }
  }
  