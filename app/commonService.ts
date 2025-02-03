import { getFirestore, collection, query, where, getDocs, updateDoc, Timestamp, addDoc, setDoc, doc, getDoc, writeBatch} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import _ from 'lodash';
import {checklists_collection, data_250201, user_won} from "./db";
import { HolidayItem } from "./common_type";
import { format } from 'date-fns';
// import * as FileSaver from 'file-saver';
// import { readFile } from 'fs/promises';
// import fs from 'fs';




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

const backupJson = (json:any)=>{
// 파일 저장
  const jsonData = json;
  const now = new Date();
  const fileName = `data_${now.toISOString().replace(/:/g, '-')}.json`;
  const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
  // FileSaver.saveAs(blob, fileName);
}

// 특정 월의 시작과 끝 날짜를 Timestamp 객체로 변환하는 함수
const getMonthTimestamps = (year:number, month:number) => {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0); // 해당 월의 마지막 날
  return {
      start: Timestamp.fromDate(startDate),
      end: Timestamp.fromDate(endDate)
  };
}
async function getTasksByUsed(db:any, checklistId:string) {
  const tasksCollection = collection(db, "Checklists");
  // const tasksCollection = collection(db, "Checklists", checklistId, "tasks");
  // const q = query(tasksCollection, where("used", "==", true)); // "used" 키 값이 true인 문서만 필터링
  // const users = await getDocs(tasksCollection);

  try {
    // const querySnapshot = await getDocs(q);
    const querySnapshot = await getDocs(tasksCollection);

    const tasks:any = [];
    querySnapshot.forEach((doc) => {
      tasks.push(doc.data());
    });
    return tasks;
  } catch (error) {
    console.error("Error getting tasks:", error);
    return [];
  }
}

export async function fetchData(selectedDate:string) {
  const documentId = "C00000000";
  const year = parseInt(selectedDate.split("-")[0]);
  const month = parseInt(selectedDate.split("-")[1]);
  // const year = parseInt(_year);
  // 날짜 범위 계산
  // 쿼리 시작 및 종료 날짜 설정 (해당 달의 1일 00:00:00 ~ 말일 23:59:59)
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 1);
  
  const startTimestamp = Timestamp.fromDate(startDate);
  const endTimestamp = Timestamp.fromDate(endDate);
  
  const q = query(
    collection(db, "Checklists", documentId, "Tasks"),
    where("date", ">=", startTimestamp),
    where("date", "<", endTimestamp)
  );

  const checklists_c = collection(db,"Checklists");
  const checklistsQ = await getDocs(checklists_c);
  let checklists:any;
  checklistsQ.forEach((ch)=>{
    if(ch.id === documentId) checklists = ch.data();
  });


  const querySnapshot = await getDocs(q);
  let tasks:any = [];
  querySnapshot.forEach((doc) => {
    console.log("data : ",doc.data());
    tasks = doc.data().tasks;
  });

  const users:{[k:string]:number} = {};
  const userIds = Array.from(new Set(tasks.map((task:any) => task.user_id)));
  userIds.forEach((user:any)=>{
    if(!users[user]) users[user] = 0;
    tasks.forEach((task:any)=>{
      if(task.used && task.completed){
        if(task.user_id === user){
          users[user] += task.task_point;
        }
      }
    })
  });
  checklists["total_point"] = {"users": users};
  checklists["tasks"] = tasks;

  console.log({checklists});
  // backupJson(checklists);//백업용.
  return checklists;
}

export async function updateItem(documentId:string, collectionName:string, documentId2:string, root:string, updatedData:any) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
    try {
      const docRef = doc(db, "Checklists", documentId, collectionName, documentId2);
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
  export async function mergeObjects(documentId:string, collectionName:string, documentId2:string, arrayField:string, newObjects:any) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const docRef = doc(db, "Checklists", documentId, collectionName, documentId2);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      const existingData = docSnap.data();


      const existingArray = existingData[arrayField] || [];// 기존에 있던 배열
      const addData:any = [];
      existingArray.map((obj:any)=>{
        const exKey = obj.user_id+obj.taskId+obj.formattedDate;
        newObjects.forEach((nObj:any, index:number)=>{
          const key = nObj.user_id+nObj.taskId+nObj.formattedDate;
          if(exKey === key){
            obj.completed = nObj.completed;
            obj.task_point = nObj.task_point;
          }
          const findIndex = existingArray.findIndex((o:any)=> o.taskId + o.user_id_to_check + o.formattedDate === nObj.taskId + nObj.user_id_to_check + nObj.formattedDate);
          if(findIndex == -1){
            const newObj = newObjects.filter((o:any)=>o.taskId + o.user_id_to_check + o.formattedDate=== nObj.taskId + nObj.user_id_to_check + nObj.formattedDate)[0];
            const keyNew = newObj.taskId + newObj.user_id_to_check + newObj.formattedDate;
            const checkIdx = addData.findIndex((add:any)=> add.taskId + add.user_id_to_check + add.formattedDate === keyNew);
            if(checkIdx === -1){
              addData.push(newObj);
            }
          }
        });
      });

      const uniqueArray = existingArray.concat(addData);
      // 새로운 객체 배열과 기존 배열을 병합
      // const mergedArray = [...existingArray, ...newObjects];
  
      // // 중복 제거 (원하는 기준으로)
      // const uniqueArray = mergedArray.filter((obj, index, self) =>
      //   self.findIndex((o) => o.taskId + o.user_id_to_check === obj.taskId + obj.user_id_to_check) === index // 키값을 기준으로 중복 제거
      // );
      console.log({uniqueArray});
      await updateDoc(docRef, { [arrayField]: uniqueArray });
    }else{
      // await updateDoc(docRef, { [arrayField]: newObjects });
      const newTaskDoc:any = {};
      const yyyymm = newObjects[0].formattedDate.slice(0, 7).replaceAll("-","");
      const timestampByMonth = convertYYYYMMToTimestamp(yyyymm);
      newTaskDoc["formattedDate"] = newObjects[0].formattedDate.slice(0, 7);
      newTaskDoc["date"] = timestampByMonth;
      newTaskDoc["tasks"] = newObjects;
      await setDocByDocumentId(db,"Checklists", documentId, "Tasks", documentId2, newTaskDoc);

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
        }else{
          return [];
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


function convertYYYYMMToTimestamp(yyyymm:string) {
  const year = parseInt(yyyymm.slice(0, 4)); // 년도 추출
  const month = parseInt(yyyymm.slice(4, 6)) - 1; // 월 추출 (0부터 시작)

  const date = new Date(year, month, 1); // Date 객체 생성 (1일)
  return Timestamp.fromDate(date); // Timestamp 객체로 변환
}
  
  export async function addDocumentWithId() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    // const documentId = getFormattedDate(); // 문서 ID를 날짜로 설정
    const documentId = "C00000000";
    const users = user_won;
    // const checklists = checklists_collection;
    const ch = data_250201;
  
    try {
      // await setDoc(doc(db, "Checklists", documentId), ch);
      const newTaskDoc:any = {};
      const batch = writeBatch(db);
      let tasks = [];
      // let check_formattedDate = "";
      let documentId = '';//`${task.user_id}-${formattedDate}`;
      let newTask:any = {};

      ch.tasks.forEach((task:any, index:number)=>{
        const formattedDate = task.formattedDate.replaceAll('_','-');
        const ch_documentId = `${task.user_id}-${formattedDate}`;

        const taskInTasks:any = {};
        taskInTasks['taskId']= task.taskId;
        taskInTasks['taskName']= task.taskId;
        taskInTasks['taskPoint']= task.task_point;
        taskInTasks['completed']=task.completed;
        // console.log({documentId, ch_documentId})
        if(documentId !== ch_documentId){
          if(documentId !==''){
            batch.set(doc(db, "tasks", documentId), newTask);
            console.log({newTask, documentId});
          }
          

          documentId = ch_documentId;
          newTask['userId'] = 'admin';
          newTask['date']= Timestamp.fromDate(new Date(formattedDate));
          newTask['formattedDate']= task.task_name;
          newTask['targetId'] = task.user_id;
          newTask['targetName'] = task.user_name;
          
          newTask['tasks'] = [];
          newTask['tasks'].push(taskInTasks);
        }else{

          newTask['tasks'].push(taskInTasks);
        }
        
        newTaskDoc[documentId] = newTask;
      });

      // 배치 커밋
    batch.commit().then(() => {
      console.log("Documents written with batch");
      console.log({newTaskDoc});
    });
      // await setDoc(doc(db,"tasks"), newTaskDoc);
      // setDocByDocumentId(db,"Checklists", documentId, "Tasks", docId, newTaskDoc);
  

      // console.log("문서가 성공적으로 추가되었습니다!");
    } catch (error) {
      console.error("문서 추가 중 오류 발생:", error);
    }
  }

export async function setDocByDocumentId( db:any, collectionName:any, documentId:any, collectionName2:any, documentId2:any, task:any){
    console.log({db, collectionName, documentId, task});
    await setDoc(doc(db, collectionName, documentId, collectionName2, documentId2), task);
  }

  export const updateTasksToTimestamp = async ()=>{
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const checklistsRef = collection(db, "Checklists", "C00000000", "Tasks");
    const querySnapshot = await getDocs(checklistsRef);
  
    const batch = writeBatch(db);
    const newTasks:any = [];
  
    querySnapshot.forEach((doc) => {
      const docRef = doc.ref;
      const data = doc.data();
      const timestamp = new Timestamp(data.date.seconds, data.date.nanoseconds);
      data.date = timestamp;
      newTasks.push(data);
      data.formattedDate = data.formattedDate.replaceAll('_','-');

      for (const taskDate in data.tasks) {
        const timestamp = Timestamp.fromDate(new Date(taskDate));
        // data.tasks[taskDate]["date"] = timestamp;
        const task = data.tasks[taskDate];
        // let newTask;
        for (const user in task) {
          task[user].map((newTask:any)=>{
            newTask["date"] = timestamp;
            newTask["user_id"] = user;
            if(user==="on"){
              newTask["user_name"] = "온겸";
            }else{
              newTask["user_name"] = "소빈";
            }
            newTasks.push(newTask);
          });
        }
      }
      // batch.update(docRef, { Tasks: data });
    });
    console.log("newTasks : ", newTasks);
  
    await batch.commit();
    console.log("Tasks updated successfully!");
  }

  // export const getJsonData= async ()=>{
  //   const app = initializeApp(firebaseConfig);
  //   const db = getFirestore(app);
  //   // JSON 파일 읽기
  //   const checklistsRef = collection(db, "Checklists");
  //   const querySnapshot = await getDocs(checklistsRef);
  //   const batch = writeBatch(db);
  //   readFile(new URL('data.json'),{encoding:'utf-8'}).then((jsonDataStr)=>{
  //     const jsonData = JSON.parse(jsonDataStr);//, 'utf8'));
  //     querySnapshot.forEach((doc) => {
  //       const docRef = doc.ref;
  //       const data = doc.data();
        
  //       batch.update(docRef, jsonData);
  //       // console.log("newTasks : ", newTasks);
  //     });
    
  //     console.log("Tasks upload successfully!");
  //   })
  //   await batch.commit();
  // }
  