import { getFirestore, collection, query, where, getDocs, updateDoc, Timestamp, addDoc, setDoc, doc, getDoc, writeBatch} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import _ from 'lodash';
import { checklist_doc, checklists_collection, data_250201, rewards_doc, user_won} from "./db";
import { HolidayItem } from "./common_type";
import { format } from 'date-fns';
import FileSaver from 'file-saver';

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
  FileSaver.saveAs(blob, fileName);
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
  const year = parseInt(selectedDate.split("-")[0]);
  const month = parseInt(selectedDate.split("-")[1]);
  // const year = parseInt(_year);
  // 날짜 범위 계산
  // 쿼리 시작 및 종료 날짜 설정 (해당 달의 1일 00:00:00 ~ 말일 23:59:59)
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const startDate = new Date(year, month - 1, 1);
  // const startDate = new Date(year, month - 2, 1);//1월달 부터 나오게 하기 위해
  const endDate = new Date(year, month, 1);
  
  const startTimestamp = Timestamp.fromDate(startDate);
  const endTimestamp = Timestamp.fromDate(endDate);
  
  const q_task = query(
    // collection(db, "Checklists", documentId, "Tasks"),
    collection(db, "tasks"),
    where("date", ">=", startTimestamp),
    where("date", "<", endTimestamp)
  );

  const q_checklist = query(
    collection(db,"checklists"),
    where("createUser","==",'admin'),
    where("id","==",'C00000001')
  );
  // const checklistsQ = await getDocs(collection(db,"tasks"));
  
  const q_reward = query(
    collection(db,"rewards"),
    where("createUser","==",'admin'),
    where("id","==",'R00000001')
  );
  
  
  const querySnapshot_task = await getDocs(q_task);
  const querySnapshot_checklist = await getDocs(q_checklist);//점수판
  const querySnapshot_reward = await getDocs(q_reward);//점수판

  const tasks:any = [];
  querySnapshot_task.forEach((doc) => {
    // tasks = doc.data().tasks;
    tasks.push(doc.data());
  });
  let checklist:any = {};
  querySnapshot_checklist.forEach((doc) => {
    checklist =  doc.data();
  });
  let reward:any = {};
  querySnapshot_reward.forEach((doc) => {
    reward =  doc.data();
  });

  const users:{[k:string]:number} = {};
  checklist.targets.forEach((target:any)=>{
    const {userId} = target;
    if(!users[userId]) users[userId] = 0;
    tasks.forEach((taskD:any)=>{
      taskD.tasks.forEach((task:any)=>{
        if(task.completed){
          if(taskD.targetId === userId){
            users[userId] += task.taskPoint;
          }
        }
      })
    })
  });
  checklist["totalPoint"] = users;

  console.log({tasks, checklist, reward});
  return {tasks, checklist, reward};
  // backupJson(checklists);//백업용.
  
}

export async function updateItem(collectionName:string, documentId:string, root:string, updatedData:any) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
    try {
      const docRef = doc(db, collectionName, documentId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log("문서 데이터:", docSnap.data());
      } else {
        console.log("해당 문서는 존재하지 않습니다.");
      }
    
      // Firestore에서 해당 아이템 업데이트
      await updateDoc(docRef, { [root]: updatedData});
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

    // const checklists = checklists_collection;


    /* tasks collection 마이그레이션
    */
    // const ch = data_250201;
  const documentId = "2025-02-01";
  // const reward = rewards_doc
  const checklist:any = checklist_doc;
    try {
      await setDoc(doc(db, "checklists", documentId), checklist);

      // await setDoc(doc(db, "rewards", documentId), reward);

      // await setDoc(doc(db, "Checklists", documentId), ch);
      // const newTaskDoc:any = {};
      // const batch = writeBatch(db);
      // let tasks:any = [];
      // // let check_formattedDate = "";
      // let documentId = '';//`${task.user_id}-${formattedDate}`;
      // let ch_formattedDate = '';
      // let newTask:any = {};

      // ch.tasks.forEach((task:any, index:number)=>{
      //   const mil = task.date.seconds * 1000;
      //   const today = new Date(mil);;
      //   const year = today.getFullYear();
      //   const month = String(today.getMonth() + 1).padStart(2, '0');
      //   const day = String(today.getDate()).padStart(2, '0');
      //   const formattedDate = `${year}-${month}-${day}`;
      //   const ch_documentId = `${task.user_id}-${formattedDate}`;

      //   const taskInTasks:any = {};
      //   taskInTasks['taskId']= task.taskId;
      //   taskInTasks['taskName']= task.task_name;
      //   taskInTasks['taskPoint']= task.task_point;
      //   taskInTasks['completed']= task.completed;
      //   // console.log({documentId, ch_documentId})
      //   if(documentId !== ch_documentId){
      //     if(documentId !==''){
      //       batch.set(doc(db, "tasks", documentId), newTask);
      //       newTask = {};
      //       // console.log({newTask, documentId});
      //     }
          

      //     documentId = ch_documentId;
      //     ch_formattedDate = formattedDate;
      //     newTask['userId'] = 'admin';
      //     newTask['date']= Timestamp.fromDate(new Date(formattedDate));

      //     newTask['targetId'] = task.user_id;
      //     newTask['targetName'] = task.user_name;
          
      //     newTask['tasks'] = [];
      //     newTask['tasks'].push(taskInTasks);
      //   }else{
      //     newTask['tasks'].push(taskInTasks);
      //   }

      //   console.log({documentId,ch_formattedDate});
      //   newTask['formattedDate']= ch_formattedDate;
      //   newTaskDoc[documentId] = newTask;
      // });
      // console.log({newTaskDoc});
      // console.log(Object.keys(newTaskDoc).length);

      // // 배치 커밋
      // batch.commit().then(() => {
      //   console.log("Documents written with batch");
      //   // console.log({newTaskDoc});
      // });


    
  // try {
  //   const users = user_won;

      // console.log({documentId, checklist});
      console.log("문서가 성공적으로 추가되었습니다!");
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
  