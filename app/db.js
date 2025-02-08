export const users = {
  "admin":{
    "user_id" : "won",
    "user_name" : "wj",
    "password" : 123456,
    "email" : "aa@gmail.com",
    "role" : "admin",
  }
};

export const checklists = {
  "checklist1":{
    "name"  : "1월 점수표",
    "tasks" :{
      "on" : "admin_1",
      "so" : "admin_1"
    }
  }
};

export const lists = {
  "admin_1":{
    "list":[
      
    ]
  }
};


export const user_won = 

{
    "user_id" : "won",
    "user_name" : "wj",
  "password" : 123456,
  "email" : "aa@gmail.com",
    "auth" : "checker",
  "checklists" :	"checkList_0"
};
export const user_on = 
        {
            "user_id" : "on",
            "user_name" : "ong",
	        "password" : 123456,
	        "email" : "aa@gmail.com",
            "auth" : "user",
	        "checklists" :	"checkList_0"
        };
		
		
/**
 * C00000000 문서코드 C+숫자8자리( C는 Checklist의 약자)   
 *  */ 
export const checklists_collection = {
    "points_reward": [
      {
        "award_detail": "뷔페 이용권(4인)",
        "point_reward_detail": "520점이상",
        "point_reward": 520,
        "ranking": 1,
        "rankingName": "1등"
      },
      {
        "point_reward": 470,
        "ranking": 2,
        "point_reward_detail": "470점이상",
        "rankingName": "2등",
        "award_detail": "키즈까페 이용권(4인)"
      },
      {
        "ranking": 3,
        "point_reward_detail": "430점이상",
        "rankingName": "3등",
        "award_detail": "포시즌 1만원 이용권",
        "point_reward": 430
      },
      {
        "point_reward": 400,
        "point_reward_detail": "400점이상",
        "award_detail": "뽑기방 5천원 이용권",
        "ranking": 4,
        "rankingName": "4등"
      },
      {
        "point_reward_detail": "참가",
        "ranking": 5,
        "rankingName": "참가상",
        "point_reward": 0,
        "award_detail": "2천원 용돈"
      }
    ],
    "users_total_point": {
      "2025-01-13": [
        {
          "user_id": "on",
          "total_point": 20,
          "user_name": "온겸"
        },
        {
          "user_name": "소빈",
          "user_id": "so",
          "total_point": 19
        }
      ]
    },
    "tasks_template": {
      "2025-01-13": {
        "so": [
          {
            "used": true,
            "task_point": 3,
            "create_user": "won",
            "taskId": "t000000",
            "user_id_to_check": "so",
            "completed": false,
            "task_name": "신발정리"
          },
          {
            "task_point": 2,
            "taskId": "t000001",
            "completed": false,
            "user_id_to_check": "so",
            "used": true,
            "task_name": "이불정리",
            "create_user": "won"
          },
          {
            "user_id_to_check": "so",
            "task_name": "독서(20분 이상)",
            "create_user": "won",
            "used": true,
            "taskId": "t000002",
            "completed": false,
            "task_point": 2
          },
          {
            "used": true,
            "task_point": 5,
            "user_id_to_check": "so",
            "create_user": "won",
            "task_name": "단어필사",
            "completed": false,
            "taskId": "t000003"
          },
          {
            "completed": false,
            "user_id_to_check": "so",
            "used": true,
            "taskId": "t000004",
            "task_name": "반찬 안남기기",
            "task_point": 2,
            "create_user": "won"
          },
          {
            "task_name": "9시40분까지 잘 준비",
            "task_point": 3,
            "used": true,
            "create_user": "won",
            "completed": false,
            "user_id_to_check": "so",
            "taskId": "t000005"
          },
          {
            "user_id_to_check": "so",
            "create_user": "won",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "taskId": "t000007",
            "used": true,
            "completed": true,
            "task_point": 3
          }
        ],
        "on": [
          {
            "task_name": "신발정리",
            "task_point": 3,
            "used": true,
            "create_user": "won",
            "completed": true,
            "user_id_to_check": "on",
            "taskId": "t000000"
          },
          {
            "taskId": "t000001",
            "completed": true,
            "create_user": "won",
            "user_id_to_check": "on",
            "task_point": 2,
            "used": true,
            "task_name": "이불정리"
          },
          {
            "task_point": 2,
            "user_id_to_check": "on",
            "used": true,
            "create_user": "won",
            "taskId": "t000002",
            "task_name": "독서(20분 이상)",
            "completed": false
          },
          {
            "create_user": "won",
            "task_name": "단어필사",
            "task_point": 5,
            "used": true,
            "completed": false,
            "user_id_to_check": "on",
            "taskId": "t000003"
          },
          {
            "user_id_to_check": "on",
            "task_point": 2,
            "taskId": "t000004",
            "task_name": "반찬 안남기기",
            "used": true,
            "create_user": "won",
            "completed": false
          },
          {
            "used": true,
            "task_name": "9시40분까지 잘 준비",
            "completed": false,
            "taskId": "t000005",
            "task_point": 3,
            "create_user": "won",
            "user_id_to_check": "on"
          },
          {
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "taskId": "t000006",
            "completed": false,
            "create_user": "won",
            "user_id_to_check": "on",
            "task_point": 3,
            "used": true
          }
        ]
      }
    },
    "title": "두더지가족 매일매일 챌린지♡",
    "Checklists": {
      "task_2025-01-05": {
        "date":{"seconds":10000000, "nano":0},
        "on": [
          {
            "used": true,
            "taskId": "t000000",
            "user_id_to_check": "on",
            "task_name": "신발정리",
            "create_user": "won",
            "task_point": 3,
            "completed": false
          },
          {
            "completed": true,
            "task_name": "이불정리",
            "create_user": "won",
            "user_id_to_check": "on",
            "used": true,
            "taskId": "t000001",
            "task_point": 2
          },
          {
            "user_id_to_check": "on",
            "used": true,
            "task_name": "독서(20분 이상)",
            "completed": true,
            "create_user": "won",
            "taskId": "t000002",
            "task_point": 2
          },
          {
            "used": true,
            "user_id_to_check": "on",
            "task_point": 5,
            "taskId": "t000003",
            "create_user": "won",
            "task_name": "단어필사",
            "completed": true
          },
          {
            "completed": true,
            "task_point": 2,
            "taskId": "t000004",
            "create_user": "won",
            "used": true,
            "task_name": "반찬 안남기기",
            "user_id_to_check": "on"
          },
          {
            "create_user": "won",
            "completed": false,
            "taskId": "t000005",
            "user_id_to_check": "on",
            "used": true,
            "task_point": 3,
            "task_name": "9시40분까지 잘 준비"
          },
          {
            "completed": true,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "used": true,
            "user_id_to_check": "on",
            "taskId": "t000006",
            "create_user": "won",
            "task_point": 2
          }
        ],
        "so": [
          {
            "create_user": "won",
            "task_name": "신발정리",
            "completed": false,
            "taskId": "t000000",
            "task_point": 3,
            "user_id_to_check": "so",
            "used": true
          },
          {
            "used": true,
            "user_id_to_check": "so",
            "create_user": "won",
            "taskId": "t000001",
            "task_name": "이불정리",
            "task_point": 2,
            "completed": true
          },
          {
            "taskId": "t000002",
            "completed": true,
            "task_point": 2,
            "used": true,
            "create_user": "won",
            "user_id_to_check": "so",
            "task_name": "독서(20분 이상)"
          },
          {
            "create_user": "won",
            "user_id_to_check": "so",
            "task_name": "단어필사",
            "completed": true,
            "taskId": "t000003",
            "used": true,
            "task_point": 5
          },
          {
            "user_id_to_check": "so",
            "used": true,
            "create_user": "won",
            "task_name": "반찬 안남기기",
            "completed": true,
            "taskId": "t000004",
            "task_point": 2
          },
          {
            "create_user": "won",
            "task_point": 3,
            "completed": false,
            "task_name": "9시40분까지 잘 준비",
            "user_id_to_check": "so",
            "taskId": "t000005",
            "used": true
          },
          {
            "used": true,
            "completed": true,
            "user_id_to_check": "so",
            "task_point": 2,
            "create_user": "won",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "taskId": "t000007"
          }
        ]
      },
      "2025-01-28": {
        "on": [
          {
            "task_name": "신발정리",
            "task_point": 3,
            "used": true,
            "taskId": "t000000",
            "create_user": "won",
            "completed": true,
            "user_id_to_check": "on"
          },
          {
            "task_name": "이불정리",
            "create_user": "won",
            "used": true,
            "taskId": "t000001",
            "task_point": 2,
            "completed": true,
            "user_id_to_check": "on"
          },
          {
            "create_user": "won",
            "task_point": 2,
            "used": true,
            "taskId": "t000002",
            "user_id_to_check": "on",
            "completed": false,
            "task_name": "독서(20분 이상)"
          },
          {
            "used": true,
            "task_name": "단어필사",
            "taskId": "t000003",
            "completed": true,
            "task_point": 5,
            "user_id_to_check": "on",
            "create_user": "won"
          },
          {
            "user_id_to_check": "on",
            "task_point": 2,
            "used": true,
            "completed": false,
            "create_user": "won",
            "taskId": "t000004",
            "task_name": "반찬 안남기기"
          },
          {
            "create_user": "won",
            "used": true,
            "taskId": "t000005",
            "user_id_to_check": "on",
            "task_name": "9시40분까지 잘 준비",
            "completed": false,
            "task_point": 3
          },
          {
            "used": true,
            "user_id_to_check": "on",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "completed": true,
            "create_user": "won",
            "task_point": 3,
            "taskId": "t000006"
          }
        ],
        "so": [
          {
            "user_id_to_check": "so",
            "used": true,
            "task_name": "신발정리",
            "create_user": "won",
            "taskId": "t000000",
            "completed": true,
            "task_point": 3
          },
          {
            "task_name": "이불정리",
            "used": true,
            "task_point": 2,
            "user_id_to_check": "so",
            "create_user": "won",
            "taskId": "t000001",
            "completed": true
          },
          {
            "taskId": "t000002",
            "task_name": "독서(20분 이상)",
            "create_user": "won",
            "user_id_to_check": "so",
            "used": true,
            "task_point": 2,
            "completed": false
          },
          {
            "taskId": "t000003",
            "create_user": "won",
            "completed": true,
            "used": true,
            "task_name": "단어필사",
            "task_point": 5,
            "user_id_to_check": "so"
          },
          {
            "taskId": "t000004",
            "task_name": "반찬 안남기기",
            "user_id_to_check": "so",
            "create_user": "won",
            "task_point": 2,
            "completed": true,
            "used": true
          },
          {
            "taskId": "t000005",
            "completed": false,
            "task_point": 3,
            "create_user": "won",
            "task_name": "9시40분까지 잘 준비",
            "used": true,
            "user_id_to_check": "so"
          },
          {
            "taskId": "t000007",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "used": true,
            "user_id_to_check": "so",
            "create_user": "won",
            "task_point": 3,
            "completed": false
          }
        ]
      },
      "2025-01-29": {
        "on": [
          {
            "taskId": "t000000",
            "user_id_to_check": "on",
            "task_point": 3,
            "task_name": "신발정리",
            "completed": true,
            "used": true,
            "create_user": "won"
          },
          {
            "used": true,
            "create_user": "won",
            "task_point": 2,
            "user_id_to_check": "on",
            "completed": false,
            "taskId": "t000001",
            "task_name": "이불정리"
          },
          {
            "user_id_to_check": "on",
            "task_point": 2,
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "used": true,
            "completed": false,
            "taskId": "t000002"
          },
          {
            "task_point": 5,
            "completed": true,
            "create_user": "won",
            "used": true,
            "task_name": "단어필사",
            "taskId": "t000003",
            "user_id_to_check": "on"
          },
          {
            "taskId": "t000004",
            "task_point": 2,
            "completed": true,
            "user_id_to_check": "on",
            "create_user": "won",
            "task_name": "반찬 안남기기",
            "used": true
          },
          {
            "taskId": "t000005",
            "used": true,
            "task_point": 3,
            "create_user": "won",
            "completed": false,
            "task_name": "9시40분까지 잘 준비",
            "user_id_to_check": "on"
          },
          {
            "completed": false,
            "used": true,
            "task_point": 3,
            "taskId": "t000006",
            "create_user": "won",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "user_id_to_check": "on"
          }
        ]
      },
      "2025-01-01": {
        "so": [
          {
            "completed": false,
            "create_user": "won",
            "user_id_to_check": "so",
            "used": true,
            "task_point": 3,
            "task_name": "신발정리",
            "taskId": "t000000"
          },
          {
            "create_user": "won",
            "task_point": 2,
            "user_id_to_check": "so",
            "task_name": "이불정리",
            "used": true,
            "completed": true,
            "taskId": "t000001"
          },
          {
            "taskId": "t000002",
            "task_point": 2,
            "completed": true,
            "user_id_to_check": "so",
            "used": true,
            "task_name": "독서(20분 이상)",
            "create_user": "won"
          },
          {
            "create_user": "won",
            "taskId": "t000003",
            "completed": true,
            "task_point": 5,
            "used": true,
            "user_id_to_check": "so",
            "task_name": "단어필사"
          },
          {
            "create_user": "won",
            "task_point": 2,
            "user_id_to_check": "so",
            "used": true,
            "completed": true,
            "task_name": "반찬 안남기기",
            "taskId": "t000004"
          },
          {
            "used": true,
            "completed": false,
            "task_point": 3,
            "create_user": "won",
            "task_name": "9시40분까지 잘 준비",
            "taskId": "t000005",
            "user_id_to_check": "so"
          },
          {
            "taskId": "t000007",
            "used": true,
            "create_user": "won",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "completed": false,
            "task_point": 3,
            "user_id_to_check": "so"
          }
        ],
        "on": [
          {
            "user_id_to_check": "on",
            "create_user": "won",
            "taskId": "t000000",
            "used": true,
            "task_point": 3,
            "task_name": "신발정리",
            "completed": false
          },
          {
            "completed": true,
            "used": true,
            "user_id_to_check": "on",
            "create_user": "won",
            "task_name": "이불정리",
            "task_point": 2,
            "taskId": "t000001"
          },
          {
            "used": true,
            "taskId": "t000002",
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "completed": true,
            "task_point": 2,
            "user_id_to_check": "on"
          },
          {
            "task_name": "단어필사",
            "create_user": "won",
            "taskId": "t000003",
            "task_point": 5,
            "completed": true,
            "used": true,
            "user_id_to_check": "on"
          },
          {
            "completed": true,
            "taskId": "t000004",
            "task_name": "반찬 안남기기",
            "used": true,
            "create_user": "won",
            "user_id_to_check": "on",
            "task_point": 2
          },
          {
            "task_name": "9시40분까지 잘 준비",
            "used": true,
            "task_point": 3,
            "completed": false,
            "user_id_to_check": "on",
            "create_user": "won",
            "taskId": "t000005"
          },
          {
            "task_point": 3,
            "used": true,
            "user_id_to_check": "on",
            "taskId": "t000006",
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "completed": false,
            "create_user": "won"
          }
        ]
      },
      "2025-01-20": {
        "so": [
          {
            "taskId": "t000000",
            "completed": true,
            "create_user": "won",
            "task_point": 3,
            "user_id_to_check": "so",
            "task_name": "신발정리",
            "used": true
          },
          {
            "used": true,
            "create_user": "won",
            "task_name": "이불정리",
            "taskId": "t000001",
            "user_id_to_check": "so",
            "completed": false,
            "task_point": 2
          },
          {
            "used": true,
            "task_point": 2,
            "task_name": "독서(20분 이상)",
            "completed": true,
            "taskId": "t000002",
            "user_id_to_check": "so",
            "create_user": "won"
          },
          {
            "completed": true,
            "used": true,
            "taskId": "t000003",
            "task_point": 5,
            "create_user": "won",
            "user_id_to_check": "so",
            "task_name": "단어필사"
          },
          {
            "task_name": "반찬 안남기기",
            "create_user": "won",
            "completed": true,
            "used": true,
            "task_point": 2,
            "taskId": "t000004",
            "user_id_to_check": "so"
          },
          {
            "taskId": "t000005",
            "task_name": "9시40분까지 잘 준비",
            "used": true,
            "task_point": 3,
            "completed": false,
            "create_user": "won",
            "user_id_to_check": "so"
          },
          {
            "create_user": "won",
            "used": true,
            "taskId": "t000007",
            "user_id_to_check": "so",
            "task_point": 3,
            "completed": false,
            "task_name": "저녁밥 먹고 스쿼트 30개"
          }
        ],
        "on": [
          {
            "used": true,
            "create_user": "won",
            "task_name": "신발정리",
            "completed": true,
            "task_point": 3,
            "user_id_to_check": "on",
            "taskId": "t000000"
          },
          {
            "create_user": "won",
            "completed": true,
            "user_id_to_check": "on",
            "task_point": 2,
            "used": true,
            "taskId": "t000001",
            "task_name": "이불정리"
          },
          {
            "user_id_to_check": "on",
            "taskId": "t000002",
            "task_point": 2,
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "used": true,
            "completed": true
          },
          {
            "taskId": "t000003",
            "create_user": "won",
            "user_id_to_check": "on",
            "used": true,
            "completed": true,
            "task_point": 7,
            "task_name": "단어필사"
          },
          {
            "completed": true,
            "user_id_to_check": "on",
            "create_user": "won",
            "task_point": 2,
            "taskId": "t000004",
            "used": true,
            "task_name": "반찬 안남기기"
          },
          {
            "completed": true,
            "task_name": "9시40분까지 잘 준비",
            "user_id_to_check": "on",
            "used": true,
            "taskId": "t000005",
            "create_user": "won",
            "task_point": 3
          },
          {
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "task_point": 3,
            "user_id_to_check": "on",
            "used": true,
            "completed": true,
            "taskId": "t000006",
            "create_user": "won"
          }
        ]
      },
      "2025-01-11": {
        "on": [
          {
            "taskId": "t000000",
            "task_name": "신발정리",
            "create_user": "won",
            "task_point": 3,
            "user_id_to_check": "on",
            "completed": true,
            "used": true
          },
          {
            "used": true,
            "task_point": 2,
            "taskId": "t000001",
            "user_id_to_check": "on",
            "completed": true,
            "create_user": "won",
            "task_name": "이불정리"
          },
          {
            "taskId": "t000002",
            "create_user": "won",
            "completed": true,
            "task_name": "독서(20분 이상)",
            "task_point": 2,
            "user_id_to_check": "on",
            "used": true
          },
          {
            "used": true,
            "user_id_to_check": "on",
            "completed": true,
            "taskId": "t000003",
            "create_user": "won",
            "task_name": "단어필사",
            "task_point": 5
          },
          {
            "create_user": "won",
            "taskId": "t000004",
            "task_name": "반찬 안남기기",
            "used": true,
            "completed": true,
            "user_id_to_check": "on",
            "task_point": 2
          },
          {
            "completed": true,
            "taskId": "t000005",
            "user_id_to_check": "on",
            "used": true,
            "task_point": 3,
            "task_name": "9시40분까지 잘 준비",
            "create_user": "won"
          },
          {
            "create_user": "won",
            "user_id_to_check": "on",
            "used": true,
            "taskId": "t000006",
            "completed": true,
            "task_point": 3,
            "task_name": "저녁밥 먹고 스쿼트 50개"
          }
        ],
        "so": [
          {
            "create_user": "won",
            "used": true,
            "taskId": "t000000",
            "task_name": "신발정리",
            "task_point": 3,
            "completed": true,
            "user_id_to_check": "so"
          },
          {
            "create_user": "won",
            "task_point": 2,
            "user_id_to_check": "so",
            "completed": true,
            "used": true,
            "task_name": "이불정리",
            "taskId": "t000001"
          },
          {
            "create_user": "won",
            "task_point": 2,
            "user_id_to_check": "so",
            "used": true,
            "completed": true,
            "taskId": "t000002",
            "task_name": "독서(20분 이상)"
          },
          {
            "used": true,
            "task_point": 5,
            "create_user": "won",
            "user_id_to_check": "so",
            "completed": true,
            "task_name": "단어필사",
            "taskId": "t000003"
          },
          {
            "taskId": "t000004",
            "completed": true,
            "used": true,
            "user_id_to_check": "so",
            "create_user": "won",
            "task_name": "반찬 안남기기",
            "task_point": 2
          },
          {
            "taskId": "t000005",
            "completed": true,
            "used": true,
            "task_point": 3,
            "create_user": "won",
            "task_name": "9시40분까지 잘 준비",
            "user_id_to_check": "so"
          },
          {
            "completed": true,
            "used": true,
            "create_user": "won",
            "user_id_to_check": "so",
            "task_point": 3,
            "taskId": "t000007",
            "task_name": "저녁밥 먹고 스쿼트 30개"
          }
        ]
      },
      "2025-01-12": {
        "so": [
          {
            "user_id_to_check": "so",
            "task_name": "신발정리",
            "completed": true,
            "taskId": "t000000",
            "create_user": "won",
            "task_point": 3,
            "used": true
          },
          {
            "completed": true,
            "task_point": 2,
            "used": true,
            "create_user": "won",
            "task_name": "이불정리",
            "user_id_to_check": "so",
            "taskId": "t000001"
          },
          {
            "used": true,
            "user_id_to_check": "so",
            "taskId": "t000002",
            "completed": true,
            "task_point": 2,
            "create_user": "won",
            "task_name": "독서(20분 이상)"
          },
          {
            "create_user": "won",
            "user_id_to_check": "so",
            "task_point": 5,
            "completed": true,
            "taskId": "t000003",
            "used": true,
            "task_name": "단어필사"
          },
          {
            "user_id_to_check": "so",
            "taskId": "t000004",
            "completed": true,
            "task_point": 2,
            "used": true,
            "task_name": "반찬 안남기기",
            "create_user": "won"
          },
          {
            "user_id_to_check": "so",
            "task_name": "9시40분까지 잘 준비",
            "used": true,
            "create_user": "won",
            "completed": true,
            "taskId": "t000005",
            "task_point": 3
          },
          {
            "completed": true,
            "create_user": "won",
            "user_id_to_check": "so",
            "used": true,
            "taskId": "t000007",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "task_point": 3
          }
        ],
        "on": [
          {
            "create_user": "won",
            "user_id_to_check": "on",
            "used": true,
            "completed": true,
            "taskId": "t000000",
            "task_name": "신발정리",
            "task_point": 3
          },
          {
            "user_id_to_check": "on",
            "taskId": "t000001",
            "task_name": "이불정리",
            "completed": true,
            "task_point": 2,
            "used": true,
            "create_user": "won"
          },
          {
            "completed": true,
            "task_point": 2,
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "taskId": "t000002",
            "used": true,
            "user_id_to_check": "on"
          },
          {
            "used": true,
            "task_point": 5,
            "task_name": "단어필사",
            "create_user": "won",
            "taskId": "t000003",
            "user_id_to_check": "on",
            "completed": true
          },
          {
            "taskId": "t000004",
            "user_id_to_check": "on",
            "create_user": "won",
            "completed": true,
            "used": true,
            "task_point": 2,
            "task_name": "반찬 안남기기"
          },
          {
            "task_name": "9시40분까지 잘 준비",
            "used": true,
            "taskId": "t000005",
            "user_id_to_check": "on",
            "completed": true,
            "task_point": 3,
            "create_user": "won"
          },
          {
            "completed": true,
            "create_user": "won",
            "taskId": "t000006",
            "used": true,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "task_point": 3,
            "user_id_to_check": "on"
          }
        ]
      },
      "2025-01-23": {
        "so": [
          {
            "task_point": 3,
            "taskId": "t000000",
            "create_user": "won",
            "user_id_to_check": "so",
            "completed": true,
            "task_name": "신발정리",
            "used": true
          },
          {
            "used": true,
            "create_user": "won",
            "taskId": "t000001",
            "task_name": "이불정리",
            "user_id_to_check": "so",
            "completed": true,
            "task_point": 2
          },
          {
            "completed": true,
            "task_name": "독서(20분 이상)",
            "create_user": "won",
            "user_id_to_check": "so",
            "task_point": 2,
            "used": true,
            "taskId": "t000002"
          },
          {
            "task_name": "단어필사",
            "taskId": "t000003",
            "create_user": "won",
            "used": true,
            "task_point": 5,
            "completed": true,
            "user_id_to_check": "so"
          },
          {
            "completed": true,
            "taskId": "t000004",
            "task_name": "반찬 안남기기",
            "user_id_to_check": "so",
            "create_user": "won",
            "task_point": 2,
            "used": true
          },
          {
            "create_user": "won",
            "user_id_to_check": "so",
            "used": true,
            "task_point": 3,
            "task_name": "9시40분까지 잘 준비",
            "completed": true,
            "taskId": "t000005"
          },
          {
            "user_id_to_check": "so",
            "completed": true,
            "taskId": "t000007",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "create_user": "won",
            "task_point": 3,
            "used": true
          }
        ],
        "on": [
          {
            "taskId": "t000000",
            "create_user": "won",
            "task_name": "신발정리",
            "used": true,
            "user_id_to_check": "on",
            "task_point": 3,
            "completed": true
          },
          {
            "task_name": "이불정리",
            "task_point": 2,
            "taskId": "t000001",
            "used": true,
            "create_user": "won",
            "completed": true,
            "user_id_to_check": "on"
          },
          {
            "create_user": "won",
            "taskId": "t000002",
            "used": true,
            "task_name": "독서(20분 이상)",
            "user_id_to_check": "on",
            "completed": true,
            "task_point": 2
          },
          {
            "user_id_to_check": "on",
            "used": true,
            "task_point": 5,
            "task_name": "단어필사",
            "taskId": "t000003",
            "create_user": "won",
            "completed": true
          },
          {
            "user_id_to_check": "on",
            "task_name": "반찬 안남기기",
            "completed": true,
            "used": true,
            "task_point": 2,
            "taskId": "t000004",
            "create_user": "won"
          },
          {
            "completed": true,
            "user_id_to_check": "on",
            "taskId": "t000005",
            "task_name": "9시40분까지 잘 준비",
            "task_point": 3,
            "create_user": "won",
            "used": true
          },
          {
            "used": true,
            "taskId": "t000006",
            "completed": true,
            "create_user": "won",
            "user_id_to_check": "on",
            "task_point": 3,
            "task_name": "저녁밥 먹고 스쿼트 50개"
          }
        ]
      },
      "2025-01-10": {
        "on": [
          {
            "task_point": 3,
            "completed": false,
            "create_user": "won",
            "taskId": "t000000",
            "user_id_to_check": "on",
            "task_name": "신발정리",
            "used": true
          },
          {
            "completed": true,
            "taskId": "t000001",
            "create_user": "won",
            "task_name": "이불정리",
            "used": true,
            "user_id_to_check": "on",
            "task_point": 2
          },
          {
            "taskId": "t000002",
            "completed": true,
            "used": true,
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "user_id_to_check": "on",
            "task_point": 2
          },
          {
            "completed": true,
            "task_point": 5,
            "taskId": "t000003",
            "task_name": "단어필사",
            "create_user": "won",
            "used": true,
            "user_id_to_check": "on"
          },
          {
            "task_point": 2,
            "completed": true,
            "taskId": "t000004",
            "used": true,
            "create_user": "won",
            "task_name": "반찬 안남기기",
            "user_id_to_check": "on"
          },
          {
            "user_id_to_check": "on",
            "create_user": "won",
            "completed": true,
            "task_point": 3,
            "used": true,
            "task_name": "9시40분까지 잘 준비",
            "taskId": "t000005"
          },
          {
            "task_point": 3,
            "completed": true,
            "used": true,
            "taskId": "t000006",
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "user_id_to_check": "on",
            "create_user": "won"
          }
        ],
        "so": [
          {
            "taskId": "t000000",
            "task_name": "신발정리",
            "completed": false,
            "create_user": "won",
            "task_point": 3,
            "user_id_to_check": "so",
            "used": true
          },
          {
            "completed": true,
            "task_point": 2,
            "user_id_to_check": "so",
            "taskId": "t000001",
            "used": true,
            "task_name": "이불정리",
            "create_user": "won"
          },
          {
            "user_id_to_check": "so",
            "used": true,
            "task_name": "독서(20분 이상)",
            "completed": true,
            "create_user": "won",
            "task_point": 2,
            "taskId": "t000002"
          },
          {
            "user_id_to_check": "so",
            "used": true,
            "task_name": "단어필사",
            "completed": true,
            "create_user": "won",
            "task_point": 5,
            "taskId": "t000003"
          },
          {
            "task_point": 2,
            "create_user": "won",
            "used": true,
            "task_name": "반찬 안남기기",
            "taskId": "t000004",
            "completed": true,
            "user_id_to_check": "so"
          },
          {
            "user_id_to_check": "so",
            "used": true,
            "task_name": "9시40분까지 잘 준비",
            "taskId": "t000005",
            "completed": true,
            "task_point": 3,
            "create_user": "won"
          },
          {
            "taskId": "t000007",
            "create_user": "won",
            "user_id_to_check": "so",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "task_point": 3,
            "used": true,
            "completed": true
          }
        ]
      },
      "2025-01-03": {
        "so": [
          {
            "taskId": "t000000",
            "used": true,
            "completed": false,
            "user_id_to_check": "so",
            "create_user": "won",
            "task_point": 3,
            "task_name": "신발정리"
          },
          {
            "task_point": 2,
            "create_user": "won",
            "taskId": "t000001",
            "task_name": "이불정리",
            "completed": true,
            "user_id_to_check": "so",
            "used": true
          },
          {
            "user_id_to_check": "so",
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "completed": true,
            "taskId": "t000002",
            "task_point": 2,
            "used": true
          },
          {
            "used": true,
            "create_user": "won",
            "user_id_to_check": "so",
            "task_name": "단어필사",
            "taskId": "t000003",
            "completed": true,
            "task_point": 5
          },
          {
            "used": true,
            "task_name": "반찬 안남기기",
            "taskId": "t000004",
            "create_user": "won",
            "completed": true,
            "task_point": 2,
            "user_id_to_check": "so"
          },
          {
            "completed": true,
            "user_id_to_check": "so",
            "taskId": "t000005",
            "task_point": 3,
            "used": true,
            "create_user": "won",
            "task_name": "9시40분까지 잘 준비"
          },
          {
            "create_user": "won",
            "task_point": 4,
            "used": true,
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "user_id_to_check": "so",
            "completed": true,
            "taskId": "t000007"
          }
        ],
        "on": [
          {
            "used": true,
            "create_user": "won",
            "completed": false,
            "task_name": "신발정리",
            "task_point": 3,
            "user_id_to_check": "on",
            "taskId": "t000000"
          },
          {
            "used": true,
            "create_user": "won",
            "user_id_to_check": "on",
            "task_point": 2,
            "taskId": "t000001",
            "completed": true,
            "task_name": "이불정리"
          },
          {
            "taskId": "t000002",
            "used": true,
            "user_id_to_check": "on",
            "task_name": "독서(20분 이상)",
            "create_user": "won",
            "task_point": 2,
            "completed": true
          },
          {
            "create_user": "won",
            "task_name": "단어필사",
            "user_id_to_check": "on",
            "taskId": "t000003",
            "completed": true,
            "used": true,
            "task_point": 5
          },
          {
            "task_point": 2,
            "user_id_to_check": "on",
            "create_user": "won",
            "taskId": "t000004",
            "completed": true,
            "used": true,
            "task_name": "반찬 안남기기"
          },
          {
            "create_user": "won",
            "taskId": "t000005",
            "used": true,
            "user_id_to_check": "on",
            "completed": true,
            "task_point": 3,
            "task_name": "9시40분까지 잘 준비"
          },
          {
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "taskId": "t000006",
            "user_id_to_check": "on",
            "create_user": "won",
            "task_point": 4,
            "completed": true,
            "used": true
          }
        ]
      },
      "2025-01-04": {
        "on": [
          {
            "used": true,
            "user_id_to_check": "on",
            "task_point": 3,
            "completed": true,
            "taskId": "t000000",
            "task_name": "신발정리",
            "create_user": "won"
          },
          {
            "create_user": "won",
            "task_name": "이불정리",
            "used": true,
            "completed": true,
            "taskId": "t000001",
            "user_id_to_check": "on",
            "task_point": 2
          },
          {
            "taskId": "t000002",
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "completed": true,
            "used": true,
            "user_id_to_check": "on",
            "task_point": 2
          },
          {
            "used": true,
            "task_name": "단어필사",
            "task_point": 5,
            "completed": true,
            "user_id_to_check": "on",
            "create_user": "won",
            "taskId": "t000003"
          },
          {
            "user_id_to_check": "on",
            "used": true,
            "completed": true,
            "task_point": 2,
            "create_user": "won",
            "taskId": "t000004",
            "task_name": "반찬 안남기기"
          },
          {
            "completed": true,
            "task_name": "9시40분까지 잘 준비",
            "create_user": "won",
            "used": true,
            "taskId": "t000005",
            "user_id_to_check": "on",
            "task_point": 3
          },
          {
            "create_user": "won",
            "task_point": 3,
            "taskId": "t000006",
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "used": true,
            "user_id_to_check": "on",
            "completed": true
          }
        ],
        "so": [
          {
            "task_name": "신발정리",
            "used": true,
            "task_point": 3,
            "user_id_to_check": "so",
            "completed": true,
            "taskId": "t000000",
            "create_user": "won"
          },
          {
            "create_user": "won",
            "user_id_to_check": "so",
            "taskId": "t000001",
            "task_point": 2,
            "task_name": "이불정리",
            "completed": true,
            "used": true
          },
          {
            "completed": true,
            "user_id_to_check": "so",
            "task_point": 2,
            "taskId": "t000002",
            "used": true,
            "task_name": "독서(20분 이상)",
            "create_user": "won"
          },
          {
            "task_name": "단어필사",
            "task_point": 5,
            "taskId": "t000003",
            "completed": true,
            "user_id_to_check": "so",
            "create_user": "won",
            "used": true
          },
          {
            "task_point": 2,
            "task_name": "반찬 안남기기",
            "user_id_to_check": "so",
            "taskId": "t000004",
            "completed": true,
            "used": true,
            "create_user": "won"
          },
          {
            "task_name": "9시40분까지 잘 준비",
            "create_user": "won",
            "user_id_to_check": "so",
            "used": true,
            "completed": true,
            "taskId": "t000005",
            "task_point": 3
          },
          {
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "create_user": "won",
            "user_id_to_check": "so",
            "task_point": 3,
            "used": true,
            "completed": true,
            "taskId": "t000007"
          }
        ]
      },
      "2025-01-26": {
        "so": [
          {
            "task_name": "신발정리",
            "create_user": "won",
            "completed": false,
            "task_point": 3,
            "taskId": "t000000",
            "used": true,
            "user_id_to_check": "so"
          },
          {
            "user_id_to_check": "so",
            "completed": true,
            "task_name": "이불정리",
            "create_user": "won",
            "taskId": "t000001",
            "used": true,
            "task_point": 2
          },
          {
            "task_point": 2,
            "create_user": "won",
            "completed": false,
            "user_id_to_check": "so",
            "used": true,
            "taskId": "t000002",
            "task_name": "독서(20분 이상)"
          },
          {
            "completed": true,
            "task_point": 5,
            "taskId": "t000003",
            "create_user": "won",
            "task_name": "단어필사",
            "user_id_to_check": "so",
            "used": true
          },
          {
            "task_point": 2,
            "create_user": "won",
            "taskId": "t000004",
            "used": true,
            "completed": true,
            "task_name": "반찬 안남기기",
            "user_id_to_check": "so"
          },
          {
            "task_point": 3,
            "used": true,
            "completed": false,
            "user_id_to_check": "so",
            "task_name": "9시40분까지 잘 준비",
            "taskId": "t000005",
            "create_user": "won"
          },
          {
            "used": true,
            "completed": true,
            "task_point": 3,
            "create_user": "won",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "user_id_to_check": "so",
            "taskId": "t000007"
          }
        ],
        "on": [
          {
            "task_name": "신발정리",
            "completed": false,
            "used": true,
            "task_point": 3,
            "taskId": "t000000",
            "user_id_to_check": "on",
            "create_user": "won"
          },
          {
            "task_name": "이불정리",
            "task_point": 2,
            "taskId": "t000001",
            "user_id_to_check": "on",
            "create_user": "won",
            "completed": true,
            "used": true
          },
          {
            "taskId": "t000002",
            "completed": false,
            "used": true,
            "task_name": "독서(20분 이상)",
            "create_user": "won",
            "user_id_to_check": "on",
            "task_point": 2
          },
          {
            "user_id_to_check": "on",
            "task_name": "단어필사",
            "completed": true,
            "used": true,
            "task_point": 4,
            "taskId": "t000003",
            "create_user": "won"
          },
          {
            "taskId": "t000004",
            "completed": true,
            "used": true,
            "user_id_to_check": "on",
            "task_point": 2,
            "create_user": "won",
            "task_name": "반찬 안남기기"
          },
          {
            "taskId": "t000005",
            "used": true,
            "completed": false,
            "create_user": "won",
            "task_point": 3,
            "task_name": "9시40분까지 잘 준비",
            "user_id_to_check": "on"
          },
          {
            "used": true,
            "user_id_to_check": "on",
            "taskId": "t000006",
            "create_user": "won",
            "task_point": 3,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "completed": true
          }
        ]
      },
      "2025-01-09": {
        "on": [
          {
            "create_user": "won",
            "task_name": "신발정리",
            "taskId": "t000000",
            "user_id_to_check": "on",
            "used": true,
            "completed": true,
            "task_point": 3
          },
          {
            "user_id_to_check": "on",
            "used": true,
            "completed": true,
            "task_point": 2,
            "create_user": "won",
            "taskId": "t000001",
            "task_name": "이불정리"
          },
          {
            "task_point": 2,
            "user_id_to_check": "on",
            "used": true,
            "completed": true,
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "taskId": "t000002"
          },
          {
            "task_point": 5,
            "task_name": "단어필사",
            "user_id_to_check": "on",
            "used": true,
            "create_user": "won",
            "taskId": "t000003",
            "completed": true
          },
          {
            "completed": true,
            "create_user": "won",
            "task_name": "반찬 안남기기",
            "user_id_to_check": "on",
            "task_point": 2,
            "used": true,
            "taskId": "t000004"
          },
          {
            "task_point": 3,
            "used": true,
            "taskId": "t000005",
            "task_name": "9시40분까지 잘 준비",
            "create_user": "won",
            "user_id_to_check": "on",
            "completed": true
          },
          {
            "completed": true,
            "create_user": "won",
            "user_id_to_check": "on",
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "taskId": "t000006",
            "used": true,
            "task_point": 3
          }
        ],
        "so": [
          {
            "user_id_to_check": "so",
            "taskId": "t000000",
            "completed": true,
            "create_user": "won",
            "task_point": 3,
            "used": true,
            "task_name": "신발정리"
          },
          {
            "user_id_to_check": "so",
            "task_point": 2,
            "used": true,
            "create_user": "won",
            "taskId": "t000001",
            "task_name": "이불정리",
            "completed": true
          },
          {
            "task_point": 2,
            "task_name": "독서(20분 이상)",
            "completed": true,
            "user_id_to_check": "so",
            "used": true,
            "create_user": "won",
            "taskId": "t000002"
          },
          {
            "task_name": "단어필사",
            "create_user": "won",
            "task_point": 5,
            "user_id_to_check": "so",
            "taskId": "t000003",
            "completed": true,
            "used": true
          },
          {
            "user_id_to_check": "so",
            "task_name": "반찬 안남기기",
            "task_point": 2,
            "taskId": "t000004",
            "create_user": "won",
            "completed": true,
            "used": true
          },
          {
            "task_point": 3,
            "user_id_to_check": "so",
            "used": true,
            "create_user": "won",
            "taskId": "t000005",
            "completed": true,
            "task_name": "9시40분까지 잘 준비"
          },
          {
            "task_point": 3,
            "user_id_to_check": "so",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "used": true,
            "taskId": "t000007",
            "create_user": "won",
            "completed": true
          }
        ]
      },
      "2025-01-07": {
        "so": [
          {
            "used": true,
            "create_user": "won",
            "task_point": 3,
            "completed": true,
            "user_id_to_check": "so",
            "task_name": "신발정리",
            "taskId": "t000000"
          },
          {
            "create_user": "won",
            "used": true,
            "taskId": "t000001",
            "task_point": 2,
            "task_name": "이불정리",
            "completed": true,
            "user_id_to_check": "so"
          },
          {
            "task_point": 2,
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "completed": true,
            "user_id_to_check": "so",
            "taskId": "t000002",
            "used": true
          },
          {
            "taskId": "t000003",
            "create_user": "won",
            "user_id_to_check": "so",
            "task_name": "단어필사",
            "used": true,
            "task_point": 5,
            "completed": true
          },
          {
            "used": true,
            "task_name": "반찬 안남기기",
            "create_user": "won",
            "taskId": "t000004",
            "completed": true,
            "user_id_to_check": "so",
            "task_point": 2
          },
          {
            "completed": true,
            "user_id_to_check": "so",
            "used": true,
            "task_name": "9시40분까지 잘 준비",
            "create_user": "won",
            "task_point": 3,
            "taskId": "t000005"
          },
          {
            "taskId": "t000007",
            "task_point": 3,
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "used": true,
            "user_id_to_check": "so",
            "create_user": "won",
            "completed": true
          }
        ],
        "on": [
          {
            "taskId": "t000000",
            "user_id_to_check": "on",
            "task_name": "신발정리",
            "create_user": "won",
            "used": true,
            "task_point": 3,
            "completed": true
          },
          {
            "task_point": 2,
            "used": true,
            "user_id_to_check": "on",
            "taskId": "t000001",
            "create_user": "won",
            "task_name": "이불정리",
            "completed": true
          },
          {
            "create_user": "won",
            "used": true,
            "taskId": "t000002",
            "task_name": "독서(20분 이상)",
            "completed": true,
            "task_point": 2,
            "user_id_to_check": "on"
          },
          {
            "taskId": "t000003",
            "user_id_to_check": "on",
            "task_name": "단어필사",
            "task_point": 5,
            "used": true,
            "create_user": "won",
            "completed": true
          },
          {
            "task_name": "반찬 안남기기",
            "completed": true,
            "taskId": "t000004",
            "used": true,
            "create_user": "won",
            "task_point": 2,
            "user_id_to_check": "on"
          },
          {
            "task_point": 3,
            "task_name": "9시40분까지 잘 준비",
            "taskId": "t000005",
            "completed": true,
            "create_user": "won",
            "used": true,
            "user_id_to_check": "on"
          },
          {
            "completed": false,
            "taskId": "t000006",
            "used": true,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "task_point": 3,
            "create_user": "won",
            "user_id_to_check": "on"
          }
        ]
      },
      "2025-01-30": {
        "on": [
          {
            "taskId": "t000000",
            "task_point": 3,
            "task_name": "신발정리",
            "create_user": "won",
            "completed": false,
            "used": true,
            "user_id_to_check": "on"
          },
          {
            "create_user": "won",
            "user_id_to_check": "on",
            "completed": true,
            "used": true,
            "task_name": "이불정리",
            "taskId": "t000001",
            "task_point": 2
          },
          {
            "task_point": 2,
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "used": true,
            "taskId": "t000002",
            "completed": true,
            "user_id_to_check": "on"
          },
          {
            "user_id_to_check": "on",
            "used": true,
            "task_point": 5,
            "create_user": "won",
            "task_name": "단어필사",
            "taskId": "t000003",
            "completed": true
          },
          {
            "create_user": "won",
            "used": true,
            "taskId": "t000004",
            "task_name": "반찬 안남기기",
            "completed": true,
            "task_point": 2,
            "user_id_to_check": "on"
          },
          {
            "completed": true,
            "create_user": "won",
            "task_point": 3,
            "user_id_to_check": "on",
            "used": true,
            "task_name": "9시40분까지 잘 준비",
            "taskId": "t000005"
          },
          {
            "completed": false,
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "create_user": "won",
            "taskId": "t000006",
            "task_point": 3,
            "used": true,
            "user_id_to_check": "on"
          }
        ],
        "so": [
          {
            "create_user": "won",
            "task_point": 3,
            "completed": false,
            "taskId": "t000000",
            "task_name": "신발정리",
            "user_id_to_check": "so",
            "used": true
          },
          {
            "completed": true,
            "user_id_to_check": "so",
            "create_user": "won",
            "task_name": "이불정리",
            "taskId": "t000001",
            "used": true,
            "task_point": 2
          },
          {
            "completed": true,
            "create_user": "won",
            "taskId": "t000002",
            "task_name": "독서(20분 이상)",
            "task_point": 2,
            "user_id_to_check": "so",
            "used": true
          },
          {
            "task_point": 5,
            "completed": true,
            "taskId": "t000003",
            "task_name": "단어필사",
            "user_id_to_check": "so",
            "used": true,
            "create_user": "won"
          },
          {
            "task_point": 2,
            "taskId": "t000004",
            "create_user": "won",
            "user_id_to_check": "so",
            "task_name": "반찬 안남기기",
            "completed": false,
            "used": true
          },
          {
            "completed": true,
            "task_point": 3,
            "user_id_to_check": "so",
            "task_name": "9시40분까지 잘 준비",
            "taskId": "t000005",
            "create_user": "won",
            "used": true
          },
          {
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "task_point": 3,
            "taskId": "t000007",
            "used": true,
            "user_id_to_check": "so",
            "completed": false,
            "create_user": "won"
          }
        ]
      },
      "2025-01-14": {
        "on": [
          {
            "user_id_to_check": "on",
            "task_point": 3,
            "completed": true,
            "taskId": "t000000",
            "task_name": "신발정리",
            "used": true,
            "create_user": "won"
          },
          {
            "used": true,
            "user_id_to_check": "on",
            "task_name": "이불정리",
            "create_user": "won",
            "task_point": 2,
            "completed": true,
            "taskId": "t000001"
          },
          {
            "user_id_to_check": "on",
            "completed": true,
            "used": true,
            "task_point": 2,
            "task_name": "독서(20분 이상)",
            "create_user": "won",
            "taskId": "t000002"
          },
          {
            "task_point": 5,
            "completed": true,
            "task_name": "단어필사",
            "user_id_to_check": "on",
            "taskId": "t000003",
            "used": true,
            "create_user": "won"
          },
          {
            "completed": true,
            "task_point": 2,
            "used": true,
            "create_user": "won",
            "task_name": "반찬 안남기기",
            "taskId": "t000004",
            "user_id_to_check": "on"
          },
          {
            "task_point": 3,
            "task_name": "9시40분까지 잘 준비",
            "completed": false,
            "create_user": "won",
            "user_id_to_check": "on",
            "taskId": "t000005",
            "used": true
          },
          {
            "task_point": 3,
            "create_user": "won",
            "used": true,
            "user_id_to_check": "on",
            "taskId": "t000006",
            "completed": true,
            "task_name": "저녁밥 먹고 스쿼트 50개"
          }
        ],
        "so": [
          {
            "task_point": 3,
            "task_name": "신발정리",
            "used": true,
            "user_id_to_check": "so",
            "taskId": "t000000",
            "create_user": "won",
            "completed": true
          },
          {
            "taskId": "t000001",
            "user_id_to_check": "so",
            "task_name": "이불정리",
            "completed": true,
            "task_point": 2,
            "create_user": "won",
            "used": true
          },
          {
            "used": true,
            "taskId": "t000002",
            "user_id_to_check": "so",
            "create_user": "won",
            "completed": true,
            "task_name": "독서(20분 이상)",
            "task_point": 2
          },
          {
            "task_name": "단어필사",
            "taskId": "t000003",
            "user_id_to_check": "so",
            "task_point": 5,
            "completed": true,
            "used": true,
            "create_user": "won"
          },
          {
            "user_id_to_check": "so",
            "task_point": 2,
            "create_user": "won",
            "taskId": "t000004",
            "used": true,
            "task_name": "반찬 안남기기",
            "completed": true
          },
          {
            "used": true,
            "user_id_to_check": "so",
            "create_user": "won",
            "task_name": "9시40분까지 잘 준비",
            "task_point": 3,
            "taskId": "t000005",
            "completed": true
          },
          {
            "task_point": 3,
            "create_user": "won",
            "used": true,
            "completed": true,
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "user_id_to_check": "so",
            "taskId": "t000007"
          }
        ]
      },
      "2025-01-08": {
        "on": [
          {
            "completed": true,
            "used": true,
            "create_user": "won",
            "task_point": 3,
            "user_id_to_check": "on",
            "taskId": "t000000",
            "task_name": "신발정리"
          },
          {
            "taskId": "t000001",
            "completed": true,
            "user_id_to_check": "on",
            "task_point": 2,
            "create_user": "won",
            "used": true,
            "task_name": "이불정리"
          },
          {
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "user_id_to_check": "on",
            "used": true,
            "taskId": "t000002",
            "task_point": 2,
            "completed": true
          },
          {
            "used": true,
            "create_user": "won",
            "user_id_to_check": "on",
            "task_name": "단어필사",
            "task_point": 5,
            "completed": true,
            "taskId": "t000003"
          },
          {
            "create_user": "won",
            "task_name": "반찬 안남기기",
            "completed": false,
            "taskId": "t000004",
            "used": true,
            "user_id_to_check": "on",
            "task_point": 2
          },
          {
            "taskId": "t000005",
            "task_point": 3,
            "task_name": "9시40분까지 잘 준비",
            "completed": true,
            "used": true,
            "create_user": "won",
            "user_id_to_check": "on"
          },
          {
            "user_id_to_check": "on",
            "completed": true,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "taskId": "t000006",
            "used": true,
            "task_point": 3,
            "create_user": "won"
          }
        ],
        "so": [
          {
            "task_name": "신발정리",
            "completed": true,
            "create_user": "won",
            "task_point": 3,
            "user_id_to_check": "so",
            "taskId": "t000000",
            "used": true
          },
          {
            "used": true,
            "completed": true,
            "create_user": "won",
            "task_name": "이불정리",
            "taskId": "t000001",
            "user_id_to_check": "so",
            "task_point": 2
          },
          {
            "taskId": "t000002",
            "create_user": "won",
            "user_id_to_check": "so",
            "completed": true,
            "used": true,
            "task_point": 2,
            "task_name": "독서(20분 이상)"
          },
          {
            "task_name": "단어필사",
            "used": true,
            "task_point": 5,
            "create_user": "won",
            "taskId": "t000003",
            "user_id_to_check": "so",
            "completed": true
          },
          {
            "task_name": "반찬 안남기기",
            "completed": true,
            "task_point": 2,
            "user_id_to_check": "so",
            "create_user": "won",
            "taskId": "t000004",
            "used": true
          },
          {
            "create_user": "won",
            "task_name": "9시40분까지 잘 준비",
            "used": true,
            "taskId": "t000005",
            "completed": true,
            "task_point": 3,
            "user_id_to_check": "so"
          },
          {
            "user_id_to_check": "so",
            "completed": true,
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "taskId": "t000007",
            "create_user": "won",
            "task_point": 3,
            "used": true
          }
        ]
      },
      "2025-01-19": {
        "on": [
          {
            "taskId": "t000000",
            "create_user": "won",
            "used": true,
            "task_name": "신발정리",
            "user_id_to_check": "on",
            "completed": true,
            "task_point": 3
          },
          {
            "used": true,
            "task_name": "이불정리",
            "taskId": "t000001",
            "user_id_to_check": "on",
            "task_point": 2,
            "completed": true,
            "create_user": "won"
          },
          {
            "completed": true,
            "taskId": "t000002",
            "user_id_to_check": "on",
            "task_name": "독서(20분 이상)",
            "create_user": "won",
            "task_point": 2,
            "used": true
          },
          {
            "create_user": "won",
            "task_name": "단어필사",
            "completed": true,
            "user_id_to_check": "on",
            "used": true,
            "task_point": 5,
            "taskId": "t000003"
          },
          {
            "task_point": 2,
            "create_user": "won",
            "user_id_to_check": "on",
            "task_name": "반찬 안남기기",
            "completed": false,
            "taskId": "t000004",
            "used": true
          },
          {
            "task_point": 3,
            "used": true,
            "completed": true,
            "task_name": "9시40분까지 잘 준비",
            "user_id_to_check": "on",
            "taskId": "t000005",
            "create_user": "won"
          },
          {
            "user_id_to_check": "on",
            "task_point": 3,
            "used": true,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "completed": true,
            "create_user": "won",
            "taskId": "t000006"
          }
        ],
        "so": [
          {
            "create_user": "won",
            "task_point": 3,
            "task_name": "신발정리",
            "user_id_to_check": "so",
            "taskId": "t000000",
            "used": true,
            "completed": true
          },
          {
            "task_name": "이불정리",
            "task_point": 2,
            "used": true,
            "taskId": "t000001",
            "completed": false,
            "user_id_to_check": "so",
            "create_user": "won"
          },
          {
            "completed": true,
            "user_id_to_check": "so",
            "taskId": "t000002",
            "used": true,
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "task_point": 2
          },
          {
            "task_point": 5,
            "create_user": "won",
            "user_id_to_check": "so",
            "completed": true,
            "used": true,
            "taskId": "t000003",
            "task_name": "단어필사"
          },
          {
            "taskId": "t000004",
            "task_point": 2,
            "create_user": "won",
            "user_id_to_check": "so",
            "task_name": "반찬 안남기기",
            "used": true,
            "completed": true
          },
          {
            "user_id_to_check": "so",
            "taskId": "t000005",
            "create_user": "won",
            "task_point": 3,
            "used": true,
            "task_name": "9시40분까지 잘 준비",
            "completed": true
          },
          {
            "completed": false,
            "user_id_to_check": "so",
            "create_user": "won",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "used": true,
            "taskId": "t000007",
            "task_point": 3
          }
        ]
      },
      "2025-01-06": {
        "on": [
          {
            "create_user": "won",
            "used": true,
            "taskId": "t000000",
            "task_name": "신발정리",
            "completed": true,
            "user_id_to_check": "on",
            "task_point": 3
          },
          {
            "create_user": "won",
            "task_name": "이불정리",
            "used": true,
            "task_point": 2,
            "taskId": "t000001",
            "user_id_to_check": "on",
            "completed": true
          },
          {
            "taskId": "t000002",
            "task_point": 2,
            "completed": true,
            "user_id_to_check": "on",
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "used": true
          },
          {
            "task_point": 6,
            "user_id_to_check": "on",
            "create_user": "won",
            "used": true,
            "task_name": "단어필사",
            "taskId": "t000003",
            "completed": true
          },
          {
            "used": true,
            "create_user": "won",
            "task_point": 2,
            "completed": true,
            "taskId": "t000004",
            "user_id_to_check": "on",
            "task_name": "반찬 안남기기"
          },
          {
            "used": true,
            "taskId": "t000005",
            "completed": true,
            "task_point": 3,
            "task_name": "9시40분까지 잘 준비",
            "user_id_to_check": "on",
            "create_user": "won"
          },
          {
            "used": true,
            "taskId": "t000006",
            "completed": true,
            "create_user": "won",
            "task_point": 3,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "user_id_to_check": "on"
          }
        ],
        "so": [
          {
            "used": true,
            "completed": true,
            "task_name": "신발정리",
            "taskId": "t000000",
            "user_id_to_check": "so",
            "create_user": "won",
            "task_point": 3
          },
          {
            "taskId": "t000001",
            "used": true,
            "task_point": 2,
            "create_user": "won",
            "task_name": "이불정리",
            "user_id_to_check": "so",
            "completed": true
          },
          {
            "completed": true,
            "task_name": "독서(20분 이상)",
            "task_point": 2,
            "user_id_to_check": "so",
            "used": true,
            "taskId": "t000002",
            "create_user": "won"
          },
          {
            "task_name": "단어필사",
            "user_id_to_check": "so",
            "create_user": "won",
            "used": true,
            "task_point": 6,
            "completed": true,
            "taskId": "t000003"
          },
          {
            "create_user": "won",
            "taskId": "t000004",
            "task_point": 2,
            "completed": true,
            "user_id_to_check": "so",
            "used": true,
            "task_name": "반찬 안남기기"
          },
          {
            "user_id_to_check": "so",
            "taskId": "t000005",
            "create_user": "won",
            "task_point": 3,
            "used": true,
            "completed": true,
            "task_name": "9시40분까지 잘 준비"
          },
          {
            "user_id_to_check": "so",
            "task_point": 3,
            "taskId": "t000007",
            "used": true,
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "create_user": "won",
            "completed": true
          }
        ]
      },
      "2025-01-13": {
        "on": [
          {
            "create_user": "won",
            "completed": true,
            "task_name": "신발정리",
            "user_id_to_check": "on",
            "used": true,
            "task_point": 3,
            "taskId": "t000000"
          },
          {
            "taskId": "t000001",
            "create_user": "won",
            "completed": true,
            "task_point": 2,
            "task_name": "이불정리",
            "used": true,
            "user_id_to_check": "on"
          },
          {
            "create_user": "won",
            "task_point": 2,
            "taskId": "t000002",
            "used": true,
            "task_name": "독서(20분 이상)",
            "completed": true,
            "user_id_to_check": "on"
          },
          {
            "taskId": "t000003",
            "task_point": 5,
            "create_user": "won",
            "user_id_to_check": "on",
            "completed": true,
            "used": true,
            "task_name": "단어필사"
          },
          {
            "used": true,
            "completed": true,
            "create_user": "won",
            "task_name": "반찬 안남기기",
            "taskId": "t000004",
            "user_id_to_check": "on",
            "task_point": 2
          },
          {
            "create_user": "won",
            "user_id_to_check": "on",
            "used": true,
            "taskId": "t000005",
            "completed": true,
            "task_name": "9시40분까지 잘 준비",
            "task_point": 3
          },
          {
            "taskId": "t000006",
            "create_user": "won",
            "task_point": 3,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "used": true,
            "completed": false,
            "user_id_to_check": "on"
          }
        ],
        "so": [
          {
            "task_name": "신발정리",
            "completed": true,
            "used": true,
            "task_point": 3,
            "user_id_to_check": "so",
            "create_user": "won",
            "taskId": "t000000"
          },
          {
            "task_point": 2,
            "user_id_to_check": "so",
            "used": true,
            "task_name": "이불정리",
            "completed": true,
            "create_user": "won",
            "taskId": "t000001"
          },
          {
            "task_point": 2,
            "user_id_to_check": "so",
            "create_user": "won",
            "used": true,
            "task_name": "독서(20분 이상)",
            "completed": true,
            "taskId": "t000002"
          },
          {
            "task_name": "단어필사",
            "taskId": "t000003",
            "used": true,
            "task_point": 5,
            "user_id_to_check": "so",
            "completed": true,
            "create_user": "won"
          },
          {
            "task_point": 2,
            "create_user": "won",
            "completed": true,
            "user_id_to_check": "so",
            "task_name": "반찬 안남기기",
            "taskId": "t000004",
            "used": true
          },
          {
            "completed": true,
            "taskId": "t000005",
            "task_point": 3,
            "user_id_to_check": "so",
            "create_user": "won",
            "task_name": "9시40분까지 잘 준비",
            "used": true
          },
          {
            "used": true,
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "taskId": "t000007",
            "task_point": 3,
            "completed": true,
            "create_user": "won",
            "user_id_to_check": "so"
          }
        ]
      },
      "2025-01-17": {
        "so": [
          {
            "task_name": "신발정리",
            "used": true,
            "create_user": "won",
            "completed": true,
            "taskId": "t000000",
            "task_point": 3,
            "user_id_to_check": "so"
          },
          {
            "create_user": "won",
            "completed": true,
            "taskId": "t000001",
            "task_point": 2,
            "user_id_to_check": "so",
            "task_name": "이불정리",
            "used": true
          },
          {
            "taskId": "t000002",
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "user_id_to_check": "so",
            "task_point": 2,
            "completed": true,
            "used": true
          },
          {
            "user_id_to_check": "so",
            "task_point": 5,
            "create_user": "won",
            "task_name": "단어필사",
            "taskId": "t000003",
            "used": true,
            "completed": true
          },
          {
            "completed": true,
            "task_name": "반찬 안남기기",
            "task_point": 2,
            "taskId": "t000004",
            "user_id_to_check": "so",
            "used": true,
            "create_user": "won"
          },
          {
            "task_name": "9시40분까지 잘 준비",
            "task_point": 3,
            "taskId": "t000005",
            "create_user": "won",
            "user_id_to_check": "so",
            "used": true,
            "completed": true
          },
          {
            "task_point": 3,
            "user_id_to_check": "so",
            "completed": true,
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "taskId": "t000007",
            "used": true,
            "create_user": "won"
          }
        ],
        "on": [
          {
            "completed": true,
            "used": true,
            "task_name": "신발정리",
            "create_user": "won",
            "user_id_to_check": "on",
            "task_point": 3,
            "taskId": "t000000"
          },
          {
            "taskId": "t000001",
            "task_name": "이불정리",
            "user_id_to_check": "on",
            "completed": true,
            "used": true,
            "create_user": "won",
            "task_point": 2
          },
          {
            "completed": true,
            "used": true,
            "create_user": "won",
            "user_id_to_check": "on",
            "taskId": "t000002",
            "task_point": 2,
            "task_name": "독서(20분 이상)"
          },
          {
            "task_name": "단어필사",
            "user_id_to_check": "on",
            "task_point": 5,
            "taskId": "t000003",
            "used": true,
            "completed": true,
            "create_user": "won"
          },
          {
            "task_name": "반찬 안남기기",
            "completed": true,
            "used": true,
            "create_user": "won",
            "user_id_to_check": "on",
            "task_point": 2,
            "taskId": "t000004"
          },
          {
            "task_point": 3,
            "completed": true,
            "taskId": "t000005",
            "user_id_to_check": "on",
            "used": true,
            "task_name": "9시40분까지 잘 준비",
            "create_user": "won"
          },
          {
            "user_id_to_check": "on",
            "completed": true,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "used": true,
            "task_point": 3,
            "taskId": "t000006",
            "create_user": "won"
          }
        ]
      },
      "2025-01-18": {
        "on": [
          {
            "user_id_to_check": "on",
            "task_name": "신발정리",
            "taskId": "t000000",
            "create_user": "won",
            "completed": true,
            "task_point": 3,
            "used": true
          },
          {
            "taskId": "t000001",
            "task_name": "이불정리",
            "user_id_to_check": "on",
            "completed": true,
            "create_user": "won",
            "used": true,
            "task_point": 2
          },
          {
            "completed": true,
            "taskId": "t000002",
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "user_id_to_check": "on",
            "used": true,
            "task_point": 2
          },
          {
            "task_name": "단어필사",
            "user_id_to_check": "on",
            "taskId": "t000003",
            "used": true,
            "task_point": 6,
            "completed": true,
            "create_user": "won"
          },
          {
            "create_user": "won",
            "completed": true,
            "task_point": 2,
            "taskId": "t000004",
            "used": true,
            "user_id_to_check": "on",
            "task_name": "반찬 안남기기"
          },
          {
            "taskId": "t000005",
            "create_user": "won",
            "user_id_to_check": "on",
            "used": true,
            "task_name": "9시40분까지 잘 준비",
            "completed": true,
            "task_point": 3
          },
          {
            "completed": true,
            "task_point": 3,
            "create_user": "won",
            "used": true,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "user_id_to_check": "on",
            "taskId": "t000006"
          }
        ],
        "so": [
          {
            "user_id_to_check": "so",
            "taskId": "t000000",
            "used": true,
            "task_name": "신발정리",
            "task_point": 3,
            "create_user": "won",
            "completed": true
          },
          {
            "task_name": "이불정리",
            "create_user": "won",
            "user_id_to_check": "so",
            "used": true,
            "completed": true,
            "taskId": "t000001",
            "task_point": 2
          },
          {
            "user_id_to_check": "so",
            "completed": true,
            "used": true,
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "task_point": 2,
            "taskId": "t000002"
          },
          {
            "taskId": "t000003",
            "completed": true,
            "used": true,
            "create_user": "won",
            "task_name": "단어필사",
            "user_id_to_check": "so",
            "task_point": 6
          },
          {
            "completed": true,
            "task_point": 2,
            "create_user": "won",
            "taskId": "t000004",
            "task_name": "반찬 안남기기",
            "used": true,
            "user_id_to_check": "so"
          },
          {
            "user_id_to_check": "so",
            "completed": true,
            "task_point": 3,
            "create_user": "won",
            "taskId": "t000005",
            "task_name": "9시40분까지 잘 준비",
            "used": true
          },
          {
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "taskId": "t000007",
            "user_id_to_check": "so",
            "completed": true,
            "used": true,
            "task_point": 3,
            "create_user": "won"
          }
        ]
      },
      "2025-01-02": {
        "on": [
          {
            "user_id_to_check": "on",
            "completed": false,
            "create_user": "won",
            "task_point": 3,
            "taskId": "t000000",
            "task_name": "신발정리",
            "used": true
          },
          {
            "taskId": "t000001",
            "completed": true,
            "task_name": "이불정리",
            "used": true,
            "user_id_to_check": "on",
            "task_point": 2,
            "create_user": "won"
          },
          {
            "task_point": 2,
            "task_name": "독서(20분 이상)",
            "taskId": "t000002",
            "used": true,
            "create_user": "won",
            "completed": true,
            "user_id_to_check": "on"
          },
          {
            "task_point": 5,
            "completed": true,
            "task_name": "단어필사",
            "create_user": "won",
            "used": true,
            "user_id_to_check": "on",
            "taskId": "t000003"
          },
          {
            "user_id_to_check": "on",
            "task_point": 2,
            "task_name": "반찬 안남기기",
            "used": true,
            "completed": true,
            "create_user": "won",
            "taskId": "t000004"
          },
          {
            "taskId": "t000005",
            "create_user": "won",
            "task_name": "9시40분까지 잘 준비",
            "task_point": 3,
            "used": true,
            "completed": false,
            "user_id_to_check": "on"
          },
          {
            "taskId": "t000006",
            "create_user": "won",
            "used": true,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "completed": true,
            "user_id_to_check": "on",
            "task_point": 7
          }
        ],
        "so": [
          {
            "user_id_to_check": "so",
            "completed": false,
            "task_name": "신발정리",
            "create_user": "won",
            "taskId": "t000000",
            "used": true,
            "task_point": 3
          },
          {
            "completed": true,
            "task_point": 2,
            "used": true,
            "user_id_to_check": "so",
            "taskId": "t000001",
            "task_name": "이불정리",
            "create_user": "won"
          },
          {
            "task_point": 2,
            "task_name": "독서(20분 이상)",
            "used": true,
            "completed": true,
            "user_id_to_check": "so",
            "create_user": "won",
            "taskId": "t000002"
          },
          {
            "task_name": "단어필사",
            "create_user": "won",
            "task_point": 5,
            "taskId": "t000003",
            "user_id_to_check": "so",
            "completed": true,
            "used": true
          },
          {
            "task_point": 2,
            "completed": true,
            "taskId": "t000004",
            "user_id_to_check": "so",
            "task_name": "반찬 안남기기",
            "create_user": "won",
            "used": true
          },
          {
            "completed": false,
            "task_point": 3,
            "taskId": "t000005",
            "used": true,
            "create_user": "won",
            "user_id_to_check": "so",
            "task_name": "9시40분까지 잘 준비"
          },
          {
            "completed": true,
            "task_point": 7,
            "used": true,
            "taskId": "t000007",
            "user_id_to_check": "so",
            "create_user": "won",
            "task_name": "저녁밥 먹고 스쿼트 30개"
          }
        ]
      },
      "2025-01-21": {
        "on": [
          {
            "used": true,
            "create_user": "won",
            "user_id_to_check": "on",
            "task_point": 3,
            "task_name": "신발정리",
            "taskId": "t000000",
            "completed": true
          },
          {
            "used": true,
            "taskId": "t000001",
            "task_point": 2,
            "task_name": "이불정리",
            "completed": true,
            "user_id_to_check": "on",
            "create_user": "won"
          },
          {
            "task_point": 2,
            "completed": true,
            "used": true,
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "user_id_to_check": "on",
            "taskId": "t000002"
          },
          {
            "used": true,
            "create_user": "won",
            "user_id_to_check": "on",
            "task_point": 5,
            "task_name": "단어필사",
            "taskId": "t000003",
            "completed": true
          },
          {
            "create_user": "won",
            "taskId": "t000004",
            "task_point": 2,
            "user_id_to_check": "on",
            "task_name": "반찬 안남기기",
            "used": true,
            "completed": true
          },
          {
            "user_id_to_check": "on",
            "create_user": "won",
            "task_point": 3,
            "task_name": "9시40분까지 잘 준비",
            "taskId": "t000005",
            "used": true,
            "completed": true
          },
          {
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "task_point": 3,
            "taskId": "t000006",
            "user_id_to_check": "on",
            "create_user": "won",
            "used": true,
            "completed": false
          }
        ],
        "so": [
          {
            "user_id_to_check": "so",
            "taskId": "t000000",
            "task_point": 3,
            "task_name": "신발정리",
            "completed": true,
            "create_user": "won",
            "used": true
          },
          {
            "create_user": "won",
            "task_name": "이불정리",
            "taskId": "t000001",
            "completed": true,
            "used": true,
            "task_point": 2,
            "user_id_to_check": "so"
          },
          {
            "task_name": "독서(20분 이상)",
            "taskId": "t000002",
            "create_user": "won",
            "used": true,
            "user_id_to_check": "so",
            "completed": true,
            "task_point": 2
          },
          {
            "task_point": 6,
            "task_name": "단어필사",
            "user_id_to_check": "so",
            "used": true,
            "completed": true,
            "taskId": "t000003",
            "create_user": "won"
          },
          {
            "task_point": 2,
            "taskId": "t000004",
            "completed": true,
            "task_name": "반찬 안남기기",
            "used": true,
            "user_id_to_check": "so",
            "create_user": "won"
          },
          {
            "task_point": 3,
            "user_id_to_check": "so",
            "taskId": "t000005",
            "create_user": "won",
            "task_name": "9시40분까지 잘 준비",
            "completed": true,
            "used": true
          },
          {
            "task_point": 4,
            "user_id_to_check": "so",
            "used": true,
            "taskId": "t000007",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "create_user": "won",
            "completed": true
          }
        ]
      },
      "2025-01-31": {
        "on": [
          {
            "taskId": "t000000",
            "task_name": "신발정리",
            "user_id_to_check": "on",
            "completed": false,
            "task_point": 3,
            "used": true,
            "create_user": "won"
          },
          {
            "task_point": 2,
            "completed": true,
            "taskId": "t000001",
            "create_user": "won",
            "used": true,
            "user_id_to_check": "on",
            "task_name": "이불정리"
          },
          {
            "task_name": "독서(20분 이상)",
            "used": true,
            "user_id_to_check": "on",
            "taskId": "t000002",
            "task_point": 2,
            "create_user": "won",
            "completed": true
          },
          {
            "task_name": "단어필사",
            "used": true,
            "completed": false,
            "task_point": 5,
            "user_id_to_check": "on",
            "taskId": "t000003",
            "create_user": "won"
          },
          {
            "used": true,
            "taskId": "t000004",
            "user_id_to_check": "on",
            "task_name": "반찬 안남기기",
            "create_user": "won",
            "task_point": 2,
            "completed": false
          },
          {
            "create_user": "won",
            "completed": false,
            "used": true,
            "task_name": "9시40분까지 잘 준비",
            "user_id_to_check": "on",
            "taskId": "t000005",
            "task_point": 3
          },
          {
            "used": true,
            "create_user": "won",
            "task_point": 3,
            "user_id_to_check": "on",
            "taskId": "t000006",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "completed": false
          }
        ],
        "so": [
          {
            "used": true,
            "user_id_to_check": "so",
            "create_user": "won",
            "completed": false,
            "taskId": "t000000",
            "task_name": "신발정리",
            "task_point": 3
          },
          {
            "user_id_to_check": "so",
            "create_user": "won",
            "completed": true,
            "task_name": "이불정리",
            "taskId": "t000001",
            "task_point": 2,
            "used": true
          },
          {
            "task_point": 2,
            "completed": false,
            "task_name": "독서(20분 이상)",
            "create_user": "won",
            "used": true,
            "taskId": "t000002",
            "user_id_to_check": "so"
          },
          {
            "user_id_to_check": "so",
            "taskId": "t000003",
            "completed": false,
            "create_user": "won",
            "used": true,
            "task_point": 5,
            "task_name": "단어필사"
          },
          {
            "create_user": "won",
            "task_point": 2,
            "task_name": "반찬 안남기기",
            "used": true,
            "user_id_to_check": "so",
            "taskId": "t000004",
            "completed": false
          },
          {
            "used": true,
            "taskId": "t000005",
            "create_user": "won",
            "completed": false,
            "task_name": "9시40분까지 잘 준비",
            "task_point": 3,
            "user_id_to_check": "so"
          },
          {
            "create_user": "won",
            "completed": false,
            "task_point": 3,
            "user_id_to_check": "so",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "taskId": "t000007",
            "used": true
          }
        ]
      },
      "2025-01-16": {
        "so": [
          {
            "task_point": 3,
            "taskId": "t000000",
            "user_id_to_check": "so",
            "completed": true,
            "used": true,
            "create_user": "won",
            "task_name": "신발정리"
          },
          {
            "taskId": "t000001",
            "task_point": 2,
            "task_name": "이불정리",
            "completed": true,
            "used": true,
            "create_user": "won",
            "user_id_to_check": "so"
          },
          {
            "taskId": "t000002",
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "completed": true,
            "user_id_to_check": "so",
            "task_point": 2,
            "used": true
          },
          {
            "task_name": "단어필사",
            "create_user": "won",
            "used": true,
            "taskId": "t000003",
            "user_id_to_check": "so",
            "task_point": 5,
            "completed": true
          },
          {
            "user_id_to_check": "so",
            "taskId": "t000004",
            "used": true,
            "completed": true,
            "task_point": 2,
            "task_name": "반찬 안남기기",
            "create_user": "won"
          },
          {
            "taskId": "t000005",
            "task_point": 3,
            "user_id_to_check": "so",
            "create_user": "won",
            "completed": false,
            "used": true,
            "task_name": "9시40분까지 잘 준비"
          },
          {
            "task_point": 3,
            "user_id_to_check": "so",
            "create_user": "won",
            "taskId": "t000007",
            "used": true,
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "completed": true
          }
        ],
        "on": [
          {
            "task_name": "신발정리",
            "create_user": "won",
            "used": true,
            "user_id_to_check": "on",
            "taskId": "t000000",
            "completed": true,
            "task_point": 3
          },
          {
            "completed": true,
            "task_name": "이불정리",
            "create_user": "won",
            "task_point": 2,
            "user_id_to_check": "on",
            "taskId": "t000001",
            "used": true
          },
          {
            "task_point": 2,
            "used": true,
            "task_name": "독서(20분 이상)",
            "completed": true,
            "taskId": "t000002",
            "create_user": "won",
            "user_id_to_check": "on"
          },
          {
            "used": true,
            "completed": true,
            "taskId": "t000003",
            "user_id_to_check": "on",
            "task_point": 5,
            "create_user": "won",
            "task_name": "단어필사"
          },
          {
            "task_point": 2,
            "task_name": "반찬 안남기기",
            "used": true,
            "taskId": "t000004",
            "completed": true,
            "user_id_to_check": "on",
            "create_user": "won"
          },
          {
            "create_user": "won",
            "taskId": "t000005",
            "user_id_to_check": "on",
            "used": true,
            "task_name": "9시40분까지 잘 준비",
            "completed": false,
            "task_point": 3
          },
          {
            "user_id_to_check": "on",
            "used": true,
            "task_point": 3,
            "create_user": "won",
            "completed": true,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "taskId": "t000006"
          }
        ]
      },
      "2025-01-25": {
        "on": [
          {
            "taskId": "t000000",
            "user_id_to_check": "on",
            "create_user": "won",
            "used": true,
            "completed": true,
            "task_name": "신발정리",
            "task_point": 3
          },
          {
            "used": true,
            "taskId": "t000001",
            "user_id_to_check": "on",
            "task_point": 2,
            "create_user": "won",
            "task_name": "이불정리",
            "completed": true
          },
          {
            "taskId": "t000002",
            "task_name": "독서(20분 이상)",
            "completed": true,
            "create_user": "won",
            "task_point": 2,
            "user_id_to_check": "on",
            "used": true
          },
          {
            "create_user": "won",
            "completed": true,
            "used": true,
            "task_name": "단어필사",
            "task_point": 5,
            "taskId": "t000003",
            "user_id_to_check": "on"
          },
          {
            "taskId": "t000004",
            "create_user": "won",
            "used": true,
            "task_name": "반찬 안남기기",
            "completed": true,
            "user_id_to_check": "on",
            "task_point": 2
          },
          {
            "used": true,
            "task_point": 3,
            "user_id_to_check": "on",
            "create_user": "won",
            "task_name": "9시40분까지 잘 준비",
            "completed": true,
            "taskId": "t000005"
          },
          {
            "taskId": "t000006",
            "create_user": "won",
            "used": true,
            "task_point": 3,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "completed": true,
            "user_id_to_check": "on"
          }
        ],
        "so": [
          {
            "create_user": "won",
            "user_id_to_check": "so",
            "taskId": "t000000",
            "completed": true,
            "task_point": 3,
            "task_name": "신발정리",
            "used": true
          },
          {
            "task_name": "이불정리",
            "completed": true,
            "taskId": "t000001",
            "create_user": "won",
            "user_id_to_check": "so",
            "task_point": 2,
            "used": true
          },
          {
            "task_name": "독서(20분 이상)",
            "user_id_to_check": "so",
            "task_point": 2,
            "used": true,
            "completed": true,
            "taskId": "t000002",
            "create_user": "won"
          },
          {
            "completed": true,
            "taskId": "t000003",
            "task_point": 5,
            "used": true,
            "user_id_to_check": "so",
            "create_user": "won",
            "task_name": "단어필사"
          },
          {
            "create_user": "won",
            "completed": true,
            "task_point": 2,
            "task_name": "반찬 안남기기",
            "taskId": "t000004",
            "used": true,
            "user_id_to_check": "so"
          },
          {
            "user_id_to_check": "so",
            "taskId": "t000005",
            "completed": true,
            "used": true,
            "task_name": "9시40분까지 잘 준비",
            "create_user": "won",
            "task_point": 3
          },
          {
            "used": true,
            "taskId": "t000007",
            "completed": true,
            "create_user": "won",
            "task_point": 3,
            "user_id_to_check": "so",
            "task_name": "저녁밥 먹고 스쿼트 30개"
          }
        ]
      },
      "2025-01-24": {
        "on": [
          {
            "create_user": "won",
            "taskId": "t000000",
            "completed": true,
            "task_name": "신발정리",
            "task_point": 5,
            "user_id_to_check": "on",
            "used": true
          },
          {
            "task_name": "이불정리",
            "completed": true,
            "user_id_to_check": "on",
            "used": true,
            "task_point": 2,
            "taskId": "t000001",
            "create_user": "won"
          },
          {
            "used": true,
            "create_user": "won",
            "taskId": "t000002",
            "user_id_to_check": "on",
            "task_point": 1,
            "completed": true,
            "task_name": "독서(20분 이상)"
          },
          {
            "taskId": "t000003",
            "create_user": "won",
            "user_id_to_check": "on",
            "task_point": 5,
            "used": true,
            "completed": true,
            "task_name": "단어필사"
          },
          {
            "task_name": "반찬 안남기기",
            "used": true,
            "create_user": "won",
            "taskId": "t000004",
            "user_id_to_check": "on",
            "completed": true,
            "task_point": 2
          },
          {
            "create_user": "won",
            "task_name": "9시40분까지 잘 준비",
            "used": true,
            "completed": true,
            "taskId": "t000005",
            "task_point": 3,
            "user_id_to_check": "on"
          },
          {
            "completed": true,
            "create_user": "won",
            "user_id_to_check": "on",
            "taskId": "t000006",
            "used": true,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "task_point": 3
          }
        ],
        "so": [
          {
            "create_user": "won",
            "task_name": "신발정리",
            "taskId": "t000000",
            "user_id_to_check": "so",
            "task_point": 6,
            "used": true,
            "completed": true
          },
          {
            "taskId": "t000001",
            "user_id_to_check": "so",
            "used": true,
            "task_point": 2,
            "completed": true,
            "task_name": "이불정리",
            "create_user": "won"
          },
          {
            "create_user": "won",
            "used": true,
            "completed": true,
            "taskId": "t000002",
            "task_point": 2,
            "task_name": "독서(20분 이상)",
            "user_id_to_check": "so"
          },
          {
            "task_name": "단어필사",
            "task_point": 5,
            "create_user": "won",
            "user_id_to_check": "so",
            "completed": true,
            "used": true,
            "taskId": "t000003"
          },
          {
            "task_name": "반찬 안남기기",
            "user_id_to_check": "so",
            "create_user": "won",
            "taskId": "t000004",
            "completed": true,
            "task_point": 2,
            "used": true
          },
          {
            "task_name": "9시40분까지 잘 준비",
            "user_id_to_check": "so",
            "completed": true,
            "create_user": "won",
            "used": true,
            "task_point": 3,
            "taskId": "t000005"
          },
          {
            "task_point": 3,
            "taskId": "t000007",
            "user_id_to_check": "so",
            "used": true,
            "completed": true,
            "create_user": "won",
            "task_name": "저녁밥 먹고 스쿼트 30개"
          }
        ]
      },
      "2025-01-22": {
        "so": [
          {
            "completed": true,
            "taskId": "t000000",
            "task_point": 3,
            "user_id_to_check": "so",
            "create_user": "won",
            "used": true,
            "task_name": "신발정리"
          },
          {
            "task_name": "이불정리",
            "used": true,
            "task_point": 2,
            "completed": true,
            "create_user": "won",
            "taskId": "t000001",
            "user_id_to_check": "so"
          },
          {
            "create_user": "won",
            "task_name": "독서(20분 이상)",
            "user_id_to_check": "so",
            "task_point": 2,
            "taskId": "t000002",
            "used": true,
            "completed": true
          },
          {
            "user_id_to_check": "so",
            "task_point": 5,
            "create_user": "won",
            "used": true,
            "task_name": "단어필사",
            "taskId": "t000003",
            "completed": true
          },
          {
            "task_point": 2,
            "taskId": "t000004",
            "user_id_to_check": "so",
            "used": true,
            "completed": true,
            "create_user": "won",
            "task_name": "반찬 안남기기"
          },
          {
            "task_point": 3,
            "create_user": "won",
            "completed": true,
            "task_name": "9시40분까지 잘 준비",
            "used": true,
            "taskId": "t000005",
            "user_id_to_check": "so"
          },
          {
            "task_point": 3,
            "completed": true,
            "user_id_to_check": "so",
            "used": true,
            "taskId": "t000007",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "create_user": "won"
          }
        ],
        "on": [
          {
            "completed": true,
            "taskId": "t000000",
            "used": true,
            "task_name": "신발정리",
            "create_user": "won",
            "user_id_to_check": "on",
            "task_point": 3
          },
          {
            "used": true,
            "completed": true,
            "user_id_to_check": "on",
            "task_point": 2,
            "create_user": "won",
            "task_name": "이불정리",
            "taskId": "t000001"
          },
          {
            "task_name": "독서(20분 이상)",
            "task_point": 2,
            "create_user": "won",
            "user_id_to_check": "on",
            "taskId": "t000002",
            "completed": true,
            "used": true
          },
          {
            "completed": true,
            "task_name": "단어필사",
            "task_point": 6,
            "create_user": "won",
            "used": true,
            "taskId": "t000003",
            "user_id_to_check": "on"
          },
          {
            "create_user": "won",
            "taskId": "t000004",
            "task_name": "반찬 안남기기",
            "used": true,
            "completed": true,
            "user_id_to_check": "on",
            "task_point": 2
          },
          {
            "task_name": "9시40분까지 잘 준비",
            "task_point": 3,
            "create_user": "won",
            "user_id_to_check": "on",
            "taskId": "t000005",
            "completed": true,
            "used": true
          },
          {
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "used": true,
            "create_user": "won",
            "task_point": 3,
            "user_id_to_check": "on",
            "completed": true,
            "taskId": "t000006"
          }
        ]
      },
      "2025-01-15": {
        "on": [
          {
            "user_id_to_check": "on",
            "completed": true,
            "task_point": 3,
            "create_user": "won",
            "used": true,
            "taskId": "t000000",
            "task_name": "신발정리"
          },
          {
            "completed": true,
            "taskId": "t000001",
            "user_id_to_check": "on",
            "task_name": "이불정리",
            "task_point": 2,
            "create_user": "won",
            "used": true
          },
          {
            "create_user": "won",
            "user_id_to_check": "on",
            "taskId": "t000002",
            "task_point": 2,
            "used": true,
            "completed": true,
            "task_name": "독서(20분 이상)"
          },
          {
            "user_id_to_check": "on",
            "used": true,
            "create_user": "won",
            "task_point": 5,
            "taskId": "t000003",
            "task_name": "단어필사",
            "completed": true
          },
          {
            "taskId": "t000004",
            "completed": true,
            "create_user": "won",
            "task_point": 2,
            "task_name": "반찬 안남기기",
            "used": true,
            "user_id_to_check": "on"
          },
          {
            "task_name": "9시40분까지 잘 준비",
            "user_id_to_check": "on",
            "taskId": "t000005",
            "completed": false,
            "create_user": "won",
            "used": true,
            "task_point": 3
          },
          {
            "create_user": "won",
            "used": true,
            "task_name": "저녁밥 먹고 스쿼트 50개",
            "completed": true,
            "task_point": 3,
            "taskId": "t000006",
            "user_id_to_check": "on"
          }
        ],
        "so": [
          {
            "create_user": "won",
            "taskId": "t000000",
            "task_point": 3,
            "task_name": "신발정리",
            "completed": true,
            "used": true,
            "user_id_to_check": "so"
          },
          {
            "taskId": "t000001",
            "used": true,
            "task_name": "이불정리",
            "completed": true,
            "user_id_to_check": "so",
            "task_point": 2,
            "create_user": "won"
          },
          {
            "taskId": "t000002",
            "task_name": "독서(20분 이상)",
            "create_user": "won",
            "task_point": 2,
            "user_id_to_check": "so",
            "completed": true,
            "used": true
          },
          {
            "taskId": "t000003",
            "task_name": "단어필사",
            "create_user": "won",
            "completed": true,
            "used": true,
            "task_point": 5,
            "user_id_to_check": "so"
          },
          {
            "task_point": 2,
            "user_id_to_check": "so",
            "create_user": "won",
            "used": true,
            "taskId": "t000004",
            "task_name": "반찬 안남기기",
            "completed": true
          },
          {
            "task_point": 3,
            "user_id_to_check": "so",
            "create_user": "won",
            "used": true,
            "taskId": "t000005",
            "task_name": "9시40분까지 잘 준비",
            "completed": false
          },
          {
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "task_point": 3,
            "taskId": "t000007",
            "completed": true,
            "user_id_to_check": "so",
            "create_user": "won",
            "used": true
          }
        ]
      },
      "2025-01-27": {
        "on": [
          {
            "create_user": "won",
            "user_id_to_check": "on",
            "used": true,
            "taskId": "t000000",
            "task_point": 3,
            "completed": true,
            "task_name": "신발정리"
          },
          {
            "create_user": "won",
            "taskId": "t000001",
            "task_name": "이불정리",
            "user_id_to_check": "on",
            "task_point": 2,
            "used": true,
            "completed": false
          },
          {
            "taskId": "t000002",
            "user_id_to_check": "on",
            "task_point": 2,
            "used": true,
            "completed": false,
            "create_user": "won",
            "task_name": "독서(20분 이상)"
          },
          {
            "taskId": "t000003",
            "task_point": 5,
            "completed": true,
            "task_name": "단어필사",
            "user_id_to_check": "on",
            "used": true,
            "create_user": "won"
          },
          {
            "completed": true,
            "create_user": "won",
            "taskId": "t000004",
            "task_name": "반찬 안남기기",
            "user_id_to_check": "on",
            "used": true,
            "task_point": 2
          },
          {
            "task_name": "9시40분까지 잘 준비",
            "create_user": "won",
            "used": true,
            "completed": false,
            "task_point": 3,
            "user_id_to_check": "on",
            "taskId": "t000005"
          },
          {
            "create_user": "won",
            "used": true,
            "completed": true,
            "taskId": "t000006",
            "task_point": 3,
            "user_id_to_check": "on",
            "task_name": "저녁밥 먹고 스쿼트 50개"
          }
        ],
        "so": [
          {
            "create_user": "won",
            "completed": true,
            "taskId": "t000000",
            "task_name": "신발정리",
            "used": true,
            "task_point": 3,
            "user_id_to_check": "so"
          },
          {
            "task_point": 2,
            "completed": false,
            "task_name": "이불정리",
            "user_id_to_check": "so",
            "used": true,
            "create_user": "won",
            "taskId": "t000001"
          },
          {
            "taskId": "t000002",
            "create_user": "won",
            "user_id_to_check": "so",
            "completed": false,
            "task_point": 2,
            "task_name": "독서(20분 이상)",
            "used": true
          },
          {
            "task_point": 5,
            "task_name": "단어필사",
            "used": true,
            "create_user": "won",
            "taskId": "t000003",
            "user_id_to_check": "so",
            "completed": true
          },
          {
            "task_point": 2,
            "taskId": "t000004",
            "task_name": "반찬 안남기기",
            "used": true,
            "completed": true,
            "create_user": "won",
            "user_id_to_check": "so"
          },
          {
            "user_id_to_check": "so",
            "create_user": "won",
            "completed": false,
            "task_name": "9시40분까지 잘 준비",
            "used": true,
            "taskId": "t000005",
            "task_point": 3
          },
          {
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "used": true,
            "create_user": "won",
            "taskId": "t000007",
            "completed": true,
            "task_point": 3,
            "user_id_to_check": "so"
          }
        ]
      }
    },
    "users_to_check": [
      {
        "user_id": "on",
        "user_name": "온겸",
        "photo": "/on_w48.png"
      },
      {
        "user_id": "so",
        "user_name": "소빈",
        "photo": "/so_w48.png"
      }
    ],
    "creation_users_id": [
      "won",
      "hyun"
    ]
  }

/*
최초 조회시 14*30 420건 인지? 문서id2 조회 1건이 나가는지?...

Checklists(Collection) > C00000000(문서 Id)) 
                       > Tasks(Collection)  > 2025-01(문서 Id2)) 
                                              date : Timestemp
                                              tasks : [ // 7(건) * 2 (사용자 수) * 30(일)= 420개 , key : taskId + user_id
                                                "completed": false,
                                                "date": {
                                                    "seconds": 1735689600,
                                                    "nanoseconds": 0
                                                },
                                                "task_name": "신발정리",
                                                "task_point": 3,
                                                "user_name": "온겸",
                                                "create_user": "won",
                                                "taskId": "t000000",
                                                "formattedDate": "2025_01_01",
                                                "user_id_to_check": "on",
                                                "user_id": "on",
                                                "used": true
                                                },

                                            ]
// Templates >

*/
export const data_250201 = {
    "creation_users_id": [
      "won",
      "hyun"
    ],
    "title": "두더지가족 매일매일 챌린지♡",
    "users_to_check": [
      {
        "photo": "/on_w48.png",
        "user_id": "on",
        "user_name": "온겸"
      },
      {
        "user_name": "소빈",
        "user_id": "so",
        "photo": "/so_w48.png"
      }
    ],
    "tasks_template": {
      "2025-02-01": {
        "on": [
          {
            "user_id_to_check": "on",
            "completed": true,
            "task_name": "신발정리",
            "used": true,
            "create_user": "won",
            "task_point": 2,
            "taskId": "t000000"
          },
          {
            "task_point": 2,
            "taskId": "t000001",
            "used": true,
            "user_id_to_check": "on",
            "completed": true,
            "task_name": "이불정리",
            "create_user": "won"
          },
          {
            "user_id_to_check": "on",
            "taskId": "t000002",
            "create_user": "won",
            "task_point": 3,
            "used": true,
            "completed": false,
            "task_name": "독서(20분 이상)"
          },
          {
            "create_user": "won",
            "completed": false,
            "used": true,
            "user_id_to_check": "on",
            "task_point": 3,
            "task_name": "단어필사",
            "taskId": "t000003"
          },
          {
            "completed": false,
            "user_id_to_check": "on",
            "task_name": "반찬 안남기기",
            "task_point": 2,
            "used": true,
            "taskId": "t000004",
            "create_user": "won"
          },
          {
            "completed": false,
            "task_name": "9시40분까지 잘 준비",
            "used": true,
            "user_id_to_check": "on",
            "create_user": "won",
            "taskId": "t000005",
            "task_point": 3
          },
          {
            "taskId": "t000006",
            "used": true,
            "create_user": "won",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "task_point": 3,
            "completed": false,
            "user_id_to_check": "on"
          }
        ],
        "so": [
          {
            "used": true,
            "completed": false,
            "task_name": "신발정리",
            "task_point": 2,
            "taskId": "t000000",
            "create_user": "won",
            "user_id_to_check": "so"
          },
          {
            "completed": false,
            "taskId": "t000001",
            "task_name": "이불정리",
            "user_id_to_check": "so",
            "task_point": 2,
            "used": true,
            "create_user": "won"
          },
          {
            "completed": false,
            "used": true,
            "task_name": "독서(20분 이상)",
            "user_id_to_check": "so",
            "task_point": 3,
            "create_user": "won",
            "taskId": "t000002"
          },
          {
            "task_name": "단어필사",
            "completed": false,
            "user_id_to_check": "so",
            "used": true,
            "taskId": "t000003",
            "create_user": "won",
            "task_point": 3
          },
          {
            "task_point": 2,
            "task_name": "반찬 안남기기",
            "completed": false,
            "user_id_to_check": "so",
            "create_user": "won",
            "taskId": "t000004",
            "used": true
          },
          {
            "used": true,
            "task_point": 3,
            "taskId": "t000005",
            "task_name": "9시40분까지 잘 준비",
            "user_id_to_check": "so",
            "create_user": "won",
            "completed": false
          },
          {
            "task_point": 2,
            "completed": true,
            "used": true,
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "taskId": "t000007",
            "create_user": "won",
            "user_id_to_check": "so"
          }
        ]
      },
      "2025-01-13": {
        "on": [
          {
            "user_id_to_check": "on",
            "completed": true,
            "task_name": "신발정리",
            "used": true,
            "create_user": "won",
            "task_point": 3,
            "taskId": "t000000"
          },
          {
            "task_point": 2,
            "taskId": "t000001",
            "used": true,
            "user_id_to_check": "on",
            "completed": true,
            "task_name": "이불정리",
            "create_user": "won"
          },
          {
            "user_id_to_check": "on",
            "taskId": "t000002",
            "create_user": "won",
            "task_point": 2,
            "used": true,
            "completed": false,
            "task_name": "독서(20분 이상)"
          },
          {
            "create_user": "won",
            "completed": false,
            "used": true,
            "user_id_to_check": "on",
            "task_point": 5,
            "task_name": "단어필사",
            "taskId": "t000003"
          },
          {
            "completed": false,
            "user_id_to_check": "on",
            "task_name": "반찬 안남기기",
            "task_point": 2,
            "used": true,
            "taskId": "t000004",
            "create_user": "won"
          },
          {
            "completed": false,
            "task_name": "9시40분까지 잘 준비",
            "used": true,
            "user_id_to_check": "on",
            "create_user": "won",
            "taskId": "t000005",
            "task_point": 3
          },
          {
            "taskId": "t000006",
            "used": true,
            "create_user": "won",
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "task_point": 3,
            "completed": false,
            "user_id_to_check": "on"
          }
        ],
        "so": [
          {
            "used": true,
            "completed": false,
            "task_name": "신발정리",
            "task_point": 3,
            "taskId": "t000000",
            "create_user": "won",
            "user_id_to_check": "so"
          },
          {
            "completed": false,
            "taskId": "t000001",
            "task_name": "이불정리",
            "user_id_to_check": "so",
            "task_point": 2,
            "used": true,
            "create_user": "won"
          },
          {
            "completed": false,
            "used": true,
            "task_name": "독서(20분 이상)",
            "user_id_to_check": "so",
            "task_point": 2,
            "create_user": "won",
            "taskId": "t000002"
          },
          {
            "task_name": "단어필사",
            "completed": false,
            "user_id_to_check": "so",
            "used": true,
            "taskId": "t000003",
            "create_user": "won",
            "task_point": 5
          },
          {
            "task_point": 2,
            "task_name": "반찬 안남기기",
            "completed": false,
            "user_id_to_check": "so",
            "create_user": "won",
            "taskId": "t000004",
            "used": true
          },
          {
            "used": true,
            "task_point": 3,
            "taskId": "t000005",
            "task_name": "9시40분까지 잘 준비",
            "user_id_to_check": "so",
            "create_user": "won",
            "completed": false
          },
          {
            "task_point": 3,
            "completed": true,
            "used": true,
            "task_name": "저녁밥 먹고 스쿼트 30개",
            "taskId": "t000007",
            "create_user": "won",
            "user_id_to_check": "so"
          }
        ]
      }
    },
    "points_reward": [
      {
        "ranking": 1,
        "award_detail": "뷔페 이용권(4인)",
        "point_reward_detail": "520점이상",
        "point_reward": 520,
        "rankingName": "1등"
      },
      {
        "point_reward_detail": "470점이상",
        "point_reward": 470,
        "award_detail": "키즈까페 이용권(4인)",
        "rankingName": "2등",
        "ranking": 2
      },
      {
        "ranking": 3,
        "rankingName": "3등",
        "point_reward_detail": "430점이상",
        "award_detail": "포시즌 1만원 이용권",
        "point_reward": 430
      },
      {
        "point_reward": 400,
        "point_reward_detail": "400점이상",
        "ranking": 4,
        "award_detail": "뽑기방 5천원 이용권",
        "rankingName": "4등"
      },
      {
        "point_reward": 0,
        "point_reward_detail": "참가",
        "award_detail": "2천원 용돈",
        "ranking": 5,
        "rankingName": "참가상"
      }
    ],
    "users_total_point": {
      "2025-01-13": [
        {
          "user_id": "on",
          "user_name": "온겸",
          "total_point": 20
        },
        {
          "total_point": 19,
          "user_id": "so",
          "user_name": "소빈"
        }
      ]
    },
    "tasks": [
      {
        "completed": false,
        "date": {
          "seconds": 1735689600,
          "nanoseconds": 0
        },
        "task_name": "신발정리",
        "task_point": 3,
        "user_name": "온겸",
        "create_user": "won",
        "taskId": "t000000",
        "formattedDate": "2025_01_01",
        "user_id_to_check": "on",
        "user_id": "on",
        "used": true
      },
      {
        "user_id_to_check": "on",
        "create_user": "won",
        "user_id": "on",
        "taskId": "t000001",
        "formattedDate": "2025_01_01",
        "user_name": "온겸",
        "used": true,
        "date": {
          "seconds": 1735689600,
          "nanoseconds": 0
        },
        "completed": true,
        "task_name": "이불정리",
        "task_point": 2
      },
      {
        "date": {
          "seconds": 1735689600,
          "nanoseconds": 0
        },
        "completed": true,
        "formattedDate": "2025_01_01",
        "user_name": "온겸",
        "user_id_to_check": "on",
        "task_point": 2,
        "user_id": "on",
        "used": true,
        "task_name": "독서(20분 이상)",
        "taskId": "t000002",
        "create_user": "won"
      },
      {
        "user_id_to_check": "on",
        "completed": true,
        "used": true,
        "task_point": 5,
        "user_id": "on",
        "date": {
          "seconds": 1735689600,
          "nanoseconds": 0
        },
        "task_name": "단어필사",
        "formattedDate": "2025_01_01",
        "user_name": "온겸",
        "taskId": "t000003",
        "create_user": "won"
      },
      {
        "user_id_to_check": "on",
        "task_name": "반찬 안남기기",
        "completed": true,
        "task_point": 2,
        "user_name": "온겸",
        "date": {
          "seconds": 1735689600,
          "nanoseconds": 0
        },
        "create_user": "won",
        "used": true,
        "taskId": "t000004",
        "user_id": "on",
        "formattedDate": "2025_01_01"
      },
      {
        "formattedDate": "2025_01_01",
        "taskId": "t000005",
        "create_user": "won",
        "user_id_to_check": "on",
        "task_name": "9시40분까지 잘 준비",
        "used": true,
        "user_id": "on",
        "completed": false,
        "user_name": "온겸",
        "date": {
          "seconds": 1735689600,
          "nanoseconds": 0
        },
        "task_point": 3
      },
      {
        "taskId": "t000006",
        "date": {
          "seconds": 1735689600,
          "nanoseconds": 0
        },
        "task_point": 3,
        "user_id_to_check": "on",
        "create_user": "won",
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "user_name": "온겸",
        "used": true,
        "formattedDate": "2025_01_01",
        "user_id": "on",
        "completed": false
      },
      {
        "task_name": "신발정리",
        "date": {
          "seconds": 1735689600,
          "nanoseconds": 0
        },
        "taskId": "t000000",
        "task_point": 3,
        "user_id_to_check": "so",
        "completed": false,
        "user_id": "so",
        "create_user": "won",
        "formattedDate": "2025_01_01",
        "user_name": "소빈",
        "used": true
      },
      {
        "user_name": "소빈",
        "taskId": "t000001",
        "completed": true,
        "used": true,
        "user_id": "so",
        "date": {
          "seconds": 1735689600,
          "nanoseconds": 0
        },
        "create_user": "won",
        "formattedDate": "2025_01_01",
        "task_name": "이불정리",
        "user_id_to_check": "so",
        "task_point": 2
      },
      {
        "task_name": "독서(20분 이상)",
        "taskId": "t000002",
        "date": {
          "seconds": 1735689600,
          "nanoseconds": 0
        },
        "task_point": 2,
        "user_id_to_check": "so",
        "completed": true,
        "user_id": "so",
        "create_user": "won",
        "formattedDate": "2025_01_01",
        "user_name": "소빈",
        "used": true
      },
      {
        "create_user": "won",
        "date": {
          "seconds": 1735689600,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "user_id_to_check": "so",
        "taskId": "t000003",
        "user_id": "so",
        "task_name": "단어필사",
        "task_point": 5,
        "formattedDate": "2025_01_01",
        "completed": true,
        "used": true
      },
      {
        "user_id": "so",
        "formattedDate": "2025_01_01",
        "used": true,
        "task_name": "반찬 안남기기",
        "date": {
          "seconds": 1735689600,
          "nanoseconds": 0
        },
        "completed": true,
        "user_id_to_check": "so",
        "user_name": "소빈",
        "task_point": 2,
        "taskId": "t000004",
        "create_user": "won"
      },
      {
        "formattedDate": "2025_01_01",
        "date": {
          "seconds": 1735689600,
          "nanoseconds": 0
        },
        "used": true,
        "user_id_to_check": "so",
        "user_name": "소빈",
        "user_id": "so",
        "taskId": "t000005",
        "create_user": "won",
        "task_name": "9시40분까지 잘 준비",
        "task_point": 3,
        "completed": false
      },
      {
        "create_user": "won",
        "task_point": 3,
        "user_id_to_check": "so",
        "taskId": "t000007",
        "used": true,
        "completed": false,
        "user_name": "소빈",
        "formattedDate": "2025_01_01",
        "user_id": "so",
        "date": {
          "seconds": 1735689600,
          "nanoseconds": 0
        },
        "task_name": "저녁밥 먹고 스쿼트 30개"
      },
      {
        "user_id_to_check": "on",
        "task_name": "신발정리",
        "user_name": "온겸",
        "create_user": "won",
        "taskId": "t000000",
        "task_point": 3,
        "date": {
          "seconds": 1735776000,
          "nanoseconds": 0
        },
        "completed": false,
        "used": true,
        "user_id": "on",
        "formattedDate": "2025_01_02"
      },
      {
        "date": {
          "seconds": 1735776000,
          "nanoseconds": 0
        },
        "task_name": "이불정리",
        "create_user": "won",
        "user_name": "온겸",
        "completed": true,
        "user_id_to_check": "on",
        "taskId": "t000001",
        "user_id": "on",
        "used": true,
        "task_point": 2,
        "formattedDate": "2025_01_02"
      },
      {
        "user_id_to_check": "on",
        "taskId": "t000002",
        "completed": true,
        "date": {
          "seconds": 1735776000,
          "nanoseconds": 0
        },
        "task_point": 2,
        "user_name": "온겸",
        "create_user": "won",
        "user_id": "on",
        "formattedDate": "2025_01_02",
        "task_name": "독서(20분 이상)",
        "used": true
      },
      {
        "formattedDate": "2025_01_02",
        "user_name": "온겸",
        "task_name": "단어필사",
        "task_point": 5,
        "create_user": "won",
        "taskId": "t000003",
        "used": true,
        "user_id": "on",
        "date": {
          "seconds": 1735776000,
          "nanoseconds": 0
        },
        "completed": true,
        "user_id_to_check": "on"
      },
      {
        "create_user": "won",
        "task_point": 2,
        "user_id_to_check": "on",
        "taskId": "t000004",
        "used": true,
        "completed": true,
        "user_name": "온겸",
        "formattedDate": "2025_01_02",
        "user_id": "on",
        "task_name": "반찬 안남기기",
        "date": {
          "seconds": 1735776000,
          "nanoseconds": 0
        }
      },
      {
        "taskId": "t000005",
        "user_id_to_check": "on",
        "completed": false,
        "formattedDate": "2025_01_02",
        "date": {
          "seconds": 1735776000,
          "nanoseconds": 0
        },
        "used": true,
        "user_id": "on",
        "user_name": "온겸",
        "task_name": "9시40분까지 잘 준비",
        "task_point": 3,
        "create_user": "won"
      },
      {
        "taskId": "t000006",
        "user_id": "on",
        "user_name": "온겸",
        "user_id_to_check": "on",
        "completed": true,
        "formattedDate": "2025_01_02",
        "task_point": 7,
        "used": true,
        "create_user": "won",
        "date": {
          "seconds": 1735776000,
          "nanoseconds": 0
        },
        "task_name": "저녁밥 먹고 스쿼트 50개"
      },
      {
        "user_id_to_check": "so",
        "create_user": "won",
        "task_point": 3,
        "taskId": "t000000",
        "formattedDate": "2025_01_02",
        "task_name": "신발정리",
        "used": true,
        "user_name": "소빈",
        "completed": false,
        "date": {
          "seconds": 1735776000,
          "nanoseconds": 0
        },
        "user_id": "so"
      },
      {
        "task_name": "이불정리",
        "completed": true,
        "create_user": "won",
        "formattedDate": "2025_01_02",
        "user_id_to_check": "so",
        "taskId": "t000001",
        "used": true,
        "user_name": "소빈",
        "date": {
          "seconds": 1735776000,
          "nanoseconds": 0
        },
        "user_id": "so",
        "task_point": 2
      },
      {
        "user_name": "소빈",
        "formattedDate": "2025_01_02",
        "date": {
          "seconds": 1735776000,
          "nanoseconds": 0
        },
        "user_id": "so",
        "task_name": "독서(20분 이상)",
        "user_id_to_check": "so",
        "completed": true,
        "used": true,
        "task_point": 2,
        "create_user": "won",
        "taskId": "t000002"
      },
      {
        "user_id": "so",
        "user_name": "소빈",
        "completed": true,
        "task_name": "단어필사",
        "taskId": "t000003",
        "task_point": 5,
        "used": true,
        "formattedDate": "2025_01_02",
        "create_user": "won",
        "date": {
          "seconds": 1735776000,
          "nanoseconds": 0
        },
        "user_id_to_check": "so"
      },
      {
        "taskId": "t000004",
        "user_id_to_check": "so",
        "used": true,
        "user_id": "so",
        "create_user": "won",
        "user_name": "소빈",
        "task_point": 2,
        "completed": true,
        "date": {
          "seconds": 1735776000,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_02",
        "task_name": "반찬 안남기기"
      },
      {
        "date": {
          "seconds": 1735776000,
          "nanoseconds": 0
        },
        "create_user": "won",
        "task_name": "9시40분까지 잘 준비",
        "formattedDate": "2025_01_02",
        "used": true,
        "user_name": "소빈",
        "user_id_to_check": "so",
        "taskId": "t000005",
        "completed": false,
        "user_id": "so",
        "task_point": 3
      },
      {
        "user_name": "소빈",
        "date": {
          "seconds": 1735776000,
          "nanoseconds": 0
        },
        "create_user": "won",
        "completed": true,
        "used": true,
        "taskId": "t000007",
        "user_id_to_check": "so",
        "task_point": 7,
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "formattedDate": "2025_01_02",
        "user_id": "so"
      },
      {
        "completed": false,
        "used": true,
        "task_name": "신발정리",
        "user_id_to_check": "on",
        "user_name": "온겸",
        "taskId": "t000000",
        "date": {
          "seconds": 1735862400,
          "nanoseconds": 0
        },
        "create_user": "won",
        "formattedDate": "2025_01_03",
        "user_id": "on",
        "task_point": 3
      },
      {
        "user_id_to_check": "on",
        "create_user": "won",
        "task_point": 2,
        "user_id": "on",
        "used": true,
        "taskId": "t000001",
        "date": {
          "seconds": 1735862400,
          "nanoseconds": 0
        },
        "completed": true,
        "formattedDate": "2025_01_03",
        "task_name": "이불정리",
        "user_name": "온겸"
      },
      {
        "task_name": "독서(20분 이상)",
        "formattedDate": "2025_01_03",
        "used": true,
        "user_id_to_check": "on",
        "create_user": "won",
        "date": {
          "seconds": 1735862400,
          "nanoseconds": 0
        },
        "completed": true,
        "task_point": 2,
        "user_id": "on",
        "user_name": "온겸",
        "taskId": "t000002"
      },
      {
        "completed": true,
        "used": true,
        "create_user": "won",
        "task_point": 5,
        "user_id": "on",
        "task_name": "단어필사",
        "taskId": "t000003",
        "date": {
          "seconds": 1735862400,
          "nanoseconds": 0
        },
        "user_id_to_check": "on",
        "user_name": "온겸",
        "formattedDate": "2025_01_03"
      },
      {
        "completed": true,
        "task_name": "반찬 안남기기",
        "formattedDate": "2025_01_03",
        "task_point": 2,
        "taskId": "t000004",
        "user_id": "on",
        "create_user": "won",
        "date": {
          "seconds": 1735862400,
          "nanoseconds": 0
        },
        "user_name": "온겸",
        "used": true,
        "user_id_to_check": "on"
      },
      {
        "user_id_to_check": "on",
        "taskId": "t000005",
        "completed": true,
        "user_id": "on",
        "create_user": "won",
        "date": {
          "seconds": 1735862400,
          "nanoseconds": 0
        },
        "task_name": "9시40분까지 잘 준비",
        "used": true,
        "user_name": "온겸",
        "task_point": 3,
        "formattedDate": "2025_01_03"
      },
      {
        "formattedDate": "2025_01_03",
        "user_id": "on",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1735862400,
          "nanoseconds": 0
        },
        "completed": true,
        "create_user": "won",
        "task_point": 4,
        "taskId": "t000006",
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "used": true,
        "user_name": "온겸"
      },
      {
        "user_name": "소빈",
        "formattedDate": "2025_01_03",
        "date": {
          "seconds": 1735862400,
          "nanoseconds": 0
        },
        "user_id": "so",
        "task_name": "신발정리",
        "user_id_to_check": "so",
        "completed": false,
        "create_user": "won",
        "used": true,
        "task_point": 3,
        "taskId": "t000000"
      },
      {
        "user_id_to_check": "so",
        "user_id": "so",
        "taskId": "t000001",
        "task_name": "이불정리",
        "used": true,
        "create_user": "won",
        "user_name": "소빈",
        "formattedDate": "2025_01_03",
        "task_point": 2,
        "completed": true,
        "date": {
          "seconds": 1735862400,
          "nanoseconds": 0
        }
      },
      {
        "task_point": 2,
        "user_name": "소빈",
        "user_id": "so",
        "taskId": "t000002",
        "completed": true,
        "user_id_to_check": "so",
        "formattedDate": "2025_01_03",
        "used": true,
        "task_name": "독서(20분 이상)",
        "create_user": "won",
        "date": {
          "seconds": 1735862400,
          "nanoseconds": 0
        }
      },
      {
        "used": true,
        "user_name": "소빈",
        "user_id_to_check": "so",
        "date": {
          "seconds": 1735862400,
          "nanoseconds": 0
        },
        "user_id": "so",
        "create_user": "won",
        "task_point": 5,
        "task_name": "단어필사",
        "completed": true,
        "taskId": "t000003",
        "formattedDate": "2025_01_03"
      },
      {
        "used": true,
        "user_name": "소빈",
        "user_id_to_check": "so",
        "completed": true,
        "task_name": "반찬 안남기기",
        "date": {
          "seconds": 1735862400,
          "nanoseconds": 0
        },
        "create_user": "won",
        "task_point": 2,
        "formattedDate": "2025_01_03",
        "user_id": "so",
        "taskId": "t000004"
      },
      {
        "task_point": 3,
        "user_name": "소빈",
        "user_id": "so",
        "taskId": "t000005",
        "completed": true,
        "user_id_to_check": "so",
        "formattedDate": "2025_01_03",
        "used": true,
        "task_name": "9시40분까지 잘 준비",
        "date": {
          "seconds": 1735862400,
          "nanoseconds": 0
        },
        "create_user": "won"
      },
      {
        "create_user": "won",
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "used": true,
        "task_point": 4,
        "user_name": "소빈",
        "user_id": "so",
        "date": {
          "seconds": 1735862400,
          "nanoseconds": 0
        },
        "user_id_to_check": "so",
        "formattedDate": "2025_01_03",
        "completed": true,
        "taskId": "t000007"
      },
      {
        "user_id_to_check": "on",
        "task_point": 3,
        "create_user": "won",
        "user_id": "on",
        "used": true,
        "taskId": "t000000",
        "date": {
          "seconds": 1735948800,
          "nanoseconds": 0
        },
        "completed": true,
        "formattedDate": "2025_01_04",
        "task_name": "신발정리",
        "user_name": "온겸"
      },
      {
        "user_id_to_check": "on",
        "used": true,
        "formattedDate": "2025_01_04",
        "user_id": "on",
        "date": {
          "seconds": 1735948800,
          "nanoseconds": 0
        },
        "task_point": 2,
        "task_name": "이불정리",
        "user_name": "온겸",
        "completed": true,
        "create_user": "won",
        "taskId": "t000001"
      },
      {
        "task_name": "독서(20분 이상)",
        "completed": true,
        "user_name": "온겸",
        "user_id_to_check": "on",
        "used": true,
        "user_id": "on",
        "task_point": 2,
        "formattedDate": "2025_01_04",
        "taskId": "t000002",
        "create_user": "won",
        "date": {
          "seconds": 1735948800,
          "nanoseconds": 0
        }
      },
      {
        "formattedDate": "2025_01_04",
        "completed": true,
        "create_user": "won",
        "taskId": "t000003",
        "user_id_to_check": "on",
        "task_name": "단어필사",
        "date": {
          "seconds": 1735948800,
          "nanoseconds": 0
        },
        "user_id": "on",
        "used": true,
        "user_name": "온겸",
        "task_point": 5
      },
      {
        "taskId": "t000004",
        "completed": true,
        "formattedDate": "2025_01_04",
        "create_user": "won",
        "task_name": "반찬 안남기기",
        "user_name": "온겸",
        "user_id": "on",
        "used": true,
        "date": {
          "seconds": 1735948800,
          "nanoseconds": 0
        },
        "task_point": 2,
        "user_id_to_check": "on"
      },
      {
        "create_user": "won",
        "used": true,
        "task_name": "9시40분까지 잘 준비",
        "task_point": 3,
        "date": {
          "seconds": 1735948800,
          "nanoseconds": 0
        },
        "user_name": "온겸",
        "user_id": "on",
        "user_id_to_check": "on",
        "formattedDate": "2025_01_04",
        "completed": true,
        "taskId": "t000005"
      },
      {
        "used": true,
        "date": {
          "seconds": 1735948800,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_04",
        "taskId": "t000006",
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "task_point": 3,
        "user_name": "온겸",
        "user_id": "on",
        "user_id_to_check": "on",
        "completed": true,
        "create_user": "won"
      },
      {
        "formattedDate": "2025_01_04",
        "task_name": "신발정리",
        "user_name": "소빈",
        "used": true,
        "date": {
          "seconds": 1735948800,
          "nanoseconds": 0
        },
        "task_point": 3,
        "user_id": "so",
        "completed": true,
        "user_id_to_check": "so",
        "taskId": "t000000",
        "create_user": "won"
      },
      {
        "create_user": "won",
        "used": true,
        "task_name": "이불정리",
        "task_point": 2,
        "user_id": "so",
        "date": {
          "seconds": 1735948800,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "user_id_to_check": "so",
        "formattedDate": "2025_01_04",
        "completed": true,
        "taskId": "t000001"
      },
      {
        "task_point": 2,
        "date": {
          "seconds": 1735948800,
          "nanoseconds": 0
        },
        "create_user": "won",
        "formattedDate": "2025_01_04",
        "user_id": "so",
        "task_name": "독서(20분 이상)",
        "completed": true,
        "taskId": "t000002",
        "used": true,
        "user_name": "소빈",
        "user_id_to_check": "so"
      },
      {
        "taskId": "t000003",
        "task_point": 5,
        "completed": true,
        "user_id": "so",
        "task_name": "단어필사",
        "formattedDate": "2025_01_04",
        "date": {
          "seconds": 1735948800,
          "nanoseconds": 0
        },
        "user_id_to_check": "so",
        "used": true,
        "create_user": "won",
        "user_name": "소빈"
      },
      {
        "date": {
          "seconds": 1735948800,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "taskId": "t000004",
        "task_point": 2,
        "used": true,
        "task_name": "반찬 안남기기",
        "create_user": "won",
        "user_id": "so",
        "completed": true,
        "user_id_to_check": "so",
        "formattedDate": "2025_01_04"
      },
      {
        "task_point": 3,
        "date": {
          "seconds": 1735948800,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_04",
        "create_user": "won",
        "task_name": "9시40분까지 잘 준비",
        "user_id": "so",
        "completed": true,
        "taskId": "t000005",
        "user_name": "소빈",
        "used": true,
        "user_id_to_check": "so"
      },
      {
        "date": {
          "seconds": 1735948800,
          "nanoseconds": 0
        },
        "completed": true,
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "user_name": "소빈",
        "task_point": 3,
        "used": true,
        "user_id_to_check": "so",
        "formattedDate": "2025_01_04",
        "create_user": "won",
        "taskId": "t000007",
        "user_id": "so"
      },
      {
        "used": true,
        "user_id": "on",
        "formattedDate": "2025_01_05",
        "taskId": "t000000",
        "user_id_to_check": "on",
        "task_point": 3,
        "completed": false,
        "date": {
          "seconds": 1736035200,
          "nanoseconds": 0
        },
        "create_user": "won",
        "user_name": "온겸",
        "task_name": "신발정리"
      },
      {
        "date": {
          "seconds": 1736035200,
          "nanoseconds": 0
        },
        "task_name": "이불정리",
        "user_name": "온겸",
        "formattedDate": "2025_01_05",
        "taskId": "t000001",
        "completed": true,
        "used": true,
        "create_user": "won",
        "user_id": "on",
        "task_point": 2,
        "user_id_to_check": "on"
      },
      {
        "user_id": "on",
        "task_name": "독서(20분 이상)",
        "date": {
          "seconds": 1736035200,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_05",
        "create_user": "won",
        "user_id_to_check": "on",
        "task_point": 2,
        "user_name": "온겸",
        "completed": true,
        "taskId": "t000002",
        "used": true
      },
      {
        "task_point": 5,
        "date": {
          "seconds": 1736035200,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_05",
        "create_user": "won",
        "user_id": "on",
        "task_name": "단어필사",
        "completed": true,
        "taskId": "t000003",
        "used": true,
        "user_name": "온겸",
        "user_id_to_check": "on"
      },
      {
        "task_point": 2,
        "user_id_to_check": "on",
        "user_id": "on",
        "used": true,
        "taskId": "t000004",
        "task_name": "반찬 안남기기",
        "formattedDate": "2025_01_05",
        "user_name": "온겸",
        "date": {
          "seconds": 1736035200,
          "nanoseconds": 0
        },
        "completed": true,
        "create_user": "won"
      },
      {
        "create_user": "won",
        "user_name": "온겸",
        "completed": false,
        "user_id_to_check": "on",
        "taskId": "t000005",
        "date": {
          "seconds": 1736035200,
          "nanoseconds": 0
        },
        "task_name": "9시40분까지 잘 준비",
        "task_point": 3,
        "formattedDate": "2025_01_05",
        "used": true,
        "user_id": "on"
      },
      {
        "formattedDate": "2025_01_05",
        "user_id": "on",
        "used": true,
        "create_user": "won",
        "user_name": "온겸",
        "user_id_to_check": "on",
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "completed": true,
        "taskId": "t000006",
        "date": {
          "seconds": 1736035200,
          "nanoseconds": 0
        },
        "task_point": 2
      },
      {
        "user_name": "소빈",
        "taskId": "t000000",
        "completed": false,
        "used": true,
        "user_id": "so",
        "date": {
          "seconds": 1736035200,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_05",
        "task_name": "신발정리",
        "create_user": "won",
        "task_point": 3,
        "user_id_to_check": "so"
      },
      {
        "completed": true,
        "task_name": "이불정리",
        "user_id_to_check": "so",
        "used": true,
        "task_point": 2,
        "taskId": "t000001",
        "date": {
          "seconds": 1736035200,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "formattedDate": "2025_01_05",
        "create_user": "won",
        "user_id": "so"
      },
      {
        "user_name": "소빈",
        "taskId": "t000002",
        "completed": true,
        "used": true,
        "user_id": "so",
        "date": {
          "seconds": 1736035200,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_05",
        "create_user": "won",
        "task_name": "독서(20분 이상)",
        "user_id_to_check": "so",
        "task_point": 2
      },
      {
        "used": true,
        "user_id": "so",
        "date": {
          "seconds": 1736035200,
          "nanoseconds": 0
        },
        "task_name": "단어필사",
        "completed": true,
        "user_name": "소빈",
        "taskId": "t000003",
        "task_point": 5,
        "user_id_to_check": "so",
        "formattedDate": "2025_01_05",
        "create_user": "won"
      },
      {
        "used": true,
        "create_user": "won",
        "date": {
          "seconds": 1736035200,
          "nanoseconds": 0
        },
        "task_point": 2,
        "completed": true,
        "user_id": "so",
        "user_name": "소빈",
        "task_name": "반찬 안남기기",
        "formattedDate": "2025_01_05",
        "user_id_to_check": "so",
        "taskId": "t000004"
      },
      {
        "create_user": "won",
        "date": {
          "seconds": 1736035200,
          "nanoseconds": 0
        },
        "user_id": "so",
        "task_point": 3,
        "task_name": "9시40분까지 잘 준비",
        "completed": false,
        "formattedDate": "2025_01_05",
        "user_id_to_check": "so",
        "used": true,
        "taskId": "t000005",
        "user_name": "소빈"
      },
      {
        "taskId": "t000007",
        "task_point": 2,
        "date": {
          "seconds": 1736035200,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_05",
        "completed": true,
        "used": true,
        "user_name": "소빈",
        "user_id_to_check": "so",
        "user_id": "so",
        "create_user": "won",
        "task_name": "저녁밥 먹고 스쿼트 30개"
      },
      {
        "used": true,
        "user_name": "온겸",
        "user_id": "on",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1736121600,
          "nanoseconds": 0
        },
        "create_user": "won",
        "task_point": 3,
        "task_name": "신발정리",
        "completed": true,
        "taskId": "t000000",
        "formattedDate": "2025_01_06"
      },
      {
        "taskId": "t000001",
        "create_user": "won",
        "used": true,
        "task_point": 2,
        "user_name": "온겸",
        "user_id_to_check": "on",
        "completed": true,
        "task_name": "이불정리",
        "user_id": "on",
        "date": {
          "seconds": 1736121600,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_06"
      },
      {
        "formattedDate": "2025_01_06",
        "date": {
          "seconds": 1736121600,
          "nanoseconds": 0
        },
        "used": true,
        "task_name": "독서(20분 이상)",
        "user_id_to_check": "on",
        "task_point": 2,
        "completed": true,
        "taskId": "t000002",
        "user_name": "온겸",
        "create_user": "won",
        "user_id": "on"
      },
      {
        "user_id": "on",
        "completed": true,
        "formattedDate": "2025_01_06",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1736121600,
          "nanoseconds": 0
        },
        "used": true,
        "taskId": "t000003",
        "user_name": "온겸",
        "task_point": 6,
        "task_name": "단어필사",
        "create_user": "won"
      },
      {
        "create_user": "won",
        "date": {
          "seconds": 1736121600,
          "nanoseconds": 0
        },
        "user_id": "on",
        "task_name": "반찬 안남기기",
        "task_point": 2,
        "completed": true,
        "user_id_to_check": "on",
        "formattedDate": "2025_01_06",
        "used": true,
        "taskId": "t000004",
        "user_name": "온겸"
      },
      {
        "taskId": "t000005",
        "used": true,
        "completed": true,
        "task_point": 3,
        "date": {
          "seconds": 1736121600,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_06",
        "user_id": "on",
        "user_id_to_check": "on",
        "user_name": "온겸",
        "task_name": "9시40분까지 잘 준비",
        "create_user": "won"
      },
      {
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "taskId": "t000006",
        "user_id": "on",
        "create_user": "won",
        "user_id_to_check": "on",
        "completed": true,
        "date": {
          "seconds": 1736121600,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_06",
        "used": true,
        "task_point": 3,
        "user_name": "온겸"
      },
      {
        "task_point": 3,
        "completed": true,
        "formattedDate": "2025_01_06",
        "taskId": "t000000",
        "user_id_to_check": "so",
        "date": {
          "seconds": 1736121600,
          "nanoseconds": 0
        },
        "used": true,
        "user_id": "so",
        "user_name": "소빈",
        "task_name": "신발정리",
        "create_user": "won"
      },
      {
        "date": {
          "seconds": 1736121600,
          "nanoseconds": 0
        },
        "taskId": "t000001",
        "task_point": 2,
        "completed": true,
        "user_id": "so",
        "formattedDate": "2025_01_06",
        "create_user": "won",
        "used": true,
        "task_name": "이불정리",
        "user_name": "소빈",
        "user_id_to_check": "so"
      },
      {
        "date": {
          "seconds": 1736121600,
          "nanoseconds": 0
        },
        "create_user": "won",
        "completed": true,
        "task_point": 2,
        "task_name": "독서(20분 이상)",
        "user_id": "so",
        "user_id_to_check": "so",
        "used": true,
        "user_name": "소빈",
        "taskId": "t000002",
        "formattedDate": "2025_01_06"
      },
      {
        "user_id_to_check": "so",
        "create_user": "won",
        "completed": true,
        "user_id": "so",
        "formattedDate": "2025_01_06",
        "taskId": "t000003",
        "task_name": "단어필사",
        "user_name": "소빈",
        "date": {
          "seconds": 1736121600,
          "nanoseconds": 0
        },
        "used": true,
        "task_point": 6
      },
      {
        "task_point": 2,
        "user_id": "so",
        "taskId": "t000004",
        "user_name": "소빈",
        "create_user": "won",
        "user_id_to_check": "so",
        "completed": true,
        "date": {
          "seconds": 1736121600,
          "nanoseconds": 0
        },
        "task_name": "반찬 안남기기",
        "formattedDate": "2025_01_06",
        "used": true
      },
      {
        "taskId": "t000005",
        "create_user": "won",
        "used": true,
        "task_point": 3,
        "completed": true,
        "user_id": "so",
        "user_id_to_check": "so",
        "date": {
          "seconds": 1736121600,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "task_name": "9시40분까지 잘 준비",
        "formattedDate": "2025_01_06"
      },
      {
        "completed": true,
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "formattedDate": "2025_01_06",
        "user_name": "소빈",
        "create_user": "won",
        "used": true,
        "user_id_to_check": "so",
        "taskId": "t000007",
        "date": {
          "seconds": 1736121600,
          "nanoseconds": 0
        },
        "task_point": 3,
        "user_id": "so"
      },
      {
        "user_id": "on",
        "task_point": 3,
        "formattedDate": "2025_01_07",
        "used": true,
        "taskId": "t000000",
        "task_name": "신발정리",
        "user_name": "온겸",
        "completed": true,
        "date": {
          "seconds": 1736208000,
          "nanoseconds": 0
        },
        "create_user": "won",
        "user_id_to_check": "on"
      },
      {
        "create_user": "won",
        "used": true,
        "task_point": 2,
        "taskId": "t000001",
        "completed": true,
        "formattedDate": "2025_01_07",
        "user_name": "온겸",
        "user_id_to_check": "on",
        "user_id": "on",
        "task_name": "이불정리",
        "date": {
          "seconds": 1736208000,
          "nanoseconds": 0
        }
      },
      {
        "date": {
          "seconds": 1736208000,
          "nanoseconds": 0
        },
        "task_name": "독서(20분 이상)",
        "user_name": "온겸",
        "formattedDate": "2025_01_07",
        "completed": true,
        "taskId": "t000002",
        "create_user": "won",
        "used": true,
        "user_id": "on",
        "task_point": 2,
        "user_id_to_check": "on"
      },
      {
        "create_user": "won",
        "user_name": "온겸",
        "completed": true,
        "user_id_to_check": "on",
        "taskId": "t000003",
        "date": {
          "seconds": 1736208000,
          "nanoseconds": 0
        },
        "task_name": "단어필사",
        "task_point": 5,
        "formattedDate": "2025_01_07",
        "used": true,
        "user_id": "on"
      },
      {
        "user_id_to_check": "on",
        "completed": true,
        "user_id": "on",
        "create_user": "won",
        "taskId": "t000004",
        "user_name": "온겸",
        "used": true,
        "formattedDate": "2025_01_07",
        "task_point": 2,
        "task_name": "반찬 안남기기",
        "date": {
          "seconds": 1736208000,
          "nanoseconds": 0
        }
      },
      {
        "date": {
          "seconds": 1736208000,
          "nanoseconds": 0
        },
        "used": true,
        "completed": true,
        "user_id": "on",
        "user_id_to_check": "on",
        "task_name": "9시40분까지 잘 준비",
        "formattedDate": "2025_01_07",
        "taskId": "t000005",
        "create_user": "won",
        "user_name": "온겸",
        "task_point": 3
      },
      {
        "formattedDate": "2025_01_07",
        "date": {
          "seconds": 1736208000,
          "nanoseconds": 0
        },
        "completed": false,
        "taskId": "t000006",
        "used": true,
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "create_user": "won",
        "user_id": "on",
        "task_point": 3,
        "user_id_to_check": "on",
        "user_name": "온겸"
      },
      {
        "date": {
          "seconds": 1736208000,
          "nanoseconds": 0
        },
        "task_name": "신발정리",
        "user_name": "소빈",
        "formattedDate": "2025_01_07",
        "taskId": "t000000",
        "completed": true,
        "used": true,
        "create_user": "won",
        "user_id": "so",
        "task_point": 3,
        "user_id_to_check": "so"
      },
      {
        "date": {
          "seconds": 1736208000,
          "nanoseconds": 0
        },
        "task_point": 2,
        "taskId": "t000001",
        "formattedDate": "2025_01_07",
        "completed": true,
        "user_name": "소빈",
        "used": true,
        "user_id_to_check": "so",
        "user_id": "so",
        "task_name": "이불정리",
        "create_user": "won"
      },
      {
        "create_user": "won",
        "taskId": "t000002",
        "formattedDate": "2025_01_07",
        "task_name": "독서(20분 이상)",
        "user_id": "so",
        "user_name": "소빈",
        "user_id_to_check": "so",
        "date": {
          "seconds": 1736208000,
          "nanoseconds": 0
        },
        "used": true,
        "completed": true,
        "task_point": 2
      },
      {
        "create_user": "won",
        "task_name": "단어필사",
        "task_point": 5,
        "user_id": "so",
        "user_name": "소빈",
        "user_id_to_check": "so",
        "used": true,
        "completed": true,
        "formattedDate": "2025_01_07",
        "date": {
          "seconds": 1736208000,
          "nanoseconds": 0
        },
        "taskId": "t000003"
      },
      {
        "used": true,
        "taskId": "t000004",
        "date": {
          "seconds": 1736208000,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "user_id": "so",
        "create_user": "won",
        "formattedDate": "2025_01_07",
        "user_id_to_check": "so",
        "task_point": 2,
        "completed": true,
        "task_name": "반찬 안남기기"
      },
      {
        "user_id_to_check": "so",
        "completed": true,
        "user_id": "so",
        "create_user": "won",
        "taskId": "t000005",
        "user_name": "소빈",
        "used": true,
        "task_point": 3,
        "formattedDate": "2025_01_07",
        "task_name": "9시40분까지 잘 준비",
        "date": {
          "seconds": 1736208000,
          "nanoseconds": 0
        }
      },
      {
        "user_name": "소빈",
        "taskId": "t000007",
        "user_id_to_check": "so",
        "completed": true,
        "date": {
          "seconds": 1736208000,
          "nanoseconds": 0
        },
        "create_user": "won",
        "used": true,
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "formattedDate": "2025_01_07",
        "user_id": "so",
        "task_point": 3
      },
      {
        "user_id_to_check": "on",
        "task_point": 3,
        "used": true,
        "taskId": "t000000",
        "user_name": "온겸",
        "user_id": "on",
        "completed": true,
        "date": {
          "seconds": 1736294400,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_08",
        "create_user": "won",
        "task_name": "신발정리"
      },
      {
        "formattedDate": "2025_01_08",
        "date": {
          "seconds": 1736294400,
          "nanoseconds": 0
        },
        "completed": true,
        "taskId": "t000001",
        "task_name": "이불정리",
        "used": true,
        "create_user": "won",
        "task_point": 2,
        "user_id": "on",
        "user_id_to_check": "on",
        "user_name": "온겸"
      },
      {
        "task_point": 2,
        "user_id_to_check": "on",
        "taskId": "t000002",
        "used": true,
        "user_name": "온겸",
        "user_id": "on",
        "completed": true,
        "date": {
          "seconds": 1736294400,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_08",
        "create_user": "won",
        "task_name": "독서(20분 이상)"
      },
      {
        "create_user": "won",
        "task_point": 5,
        "taskId": "t000003",
        "task_name": "단어필사",
        "completed": true,
        "user_name": "온겸",
        "user_id": "on",
        "used": true,
        "user_id_to_check": "on",
        "date": {
          "seconds": 1736294400,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_08"
      },
      {
        "used": true,
        "user_name": "온겸",
        "user_id": "on",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1736294400,
          "nanoseconds": 0
        },
        "create_user": "won",
        "task_point": 2,
        "task_name": "반찬 안남기기",
        "completed": false,
        "taskId": "t000004",
        "formattedDate": "2025_01_08"
      },
      {
        "user_id_to_check": "on",
        "date": {
          "seconds": 1736294400,
          "nanoseconds": 0
        },
        "task_point": 3,
        "user_id": "on",
        "create_user": "won",
        "used": true,
        "task_name": "9시40분까지 잘 준비",
        "user_name": "온겸",
        "taskId": "t000005",
        "formattedDate": "2025_01_08",
        "completed": true
      },
      {
        "user_id": "on",
        "task_point": 3,
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "completed": true,
        "formattedDate": "2025_01_08",
        "create_user": "won",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1736294400,
          "nanoseconds": 0
        },
        "taskId": "t000006",
        "user_name": "온겸",
        "used": true
      },
      {
        "user_id": "so",
        "task_point": 3,
        "user_id_to_check": "so",
        "taskId": "t000000",
        "formattedDate": "2025_01_08",
        "used": true,
        "create_user": "won",
        "user_name": "소빈",
        "task_name": "신발정리",
        "date": {
          "seconds": 1736294400,
          "nanoseconds": 0
        },
        "completed": true
      },
      {
        "completed": true,
        "user_name": "소빈",
        "formattedDate": "2025_01_08",
        "user_id": "so",
        "taskId": "t000001",
        "task_point": 2,
        "used": true,
        "user_id_to_check": "so",
        "date": {
          "seconds": 1736294400,
          "nanoseconds": 0
        },
        "task_name": "이불정리",
        "create_user": "won"
      },
      {
        "task_point": 2,
        "taskId": "t000002",
        "user_id": "so",
        "used": true,
        "user_id_to_check": "so",
        "date": {
          "seconds": 1736294400,
          "nanoseconds": 0
        },
        "task_name": "독서(20분 이상)",
        "completed": true,
        "user_name": "소빈",
        "formattedDate": "2025_01_08",
        "create_user": "won"
      },
      {
        "create_user": "won",
        "task_name": "단어필사",
        "task_point": 5,
        "date": {
          "seconds": 1736294400,
          "nanoseconds": 0
        },
        "taskId": "t000003",
        "completed": true,
        "user_id": "so",
        "user_name": "소빈",
        "formattedDate": "2025_01_08",
        "used": true,
        "user_id_to_check": "so"
      },
      {
        "formattedDate": "2025_01_08",
        "task_point": 2,
        "used": true,
        "create_user": "won",
        "user_id_to_check": "so",
        "date": {
          "seconds": 1736294400,
          "nanoseconds": 0
        },
        "taskId": "t000004",
        "user_id": "so",
        "user_name": "소빈",
        "task_name": "반찬 안남기기",
        "completed": true
      },
      {
        "create_user": "won",
        "formattedDate": "2025_01_08",
        "user_name": "소빈",
        "user_id_to_check": "so",
        "used": true,
        "completed": true,
        "user_id": "so",
        "date": {
          "seconds": 1736294400,
          "nanoseconds": 0
        },
        "taskId": "t000005",
        "task_point": 3,
        "task_name": "9시40분까지 잘 준비"
      },
      {
        "date": {
          "seconds": 1736294400,
          "nanoseconds": 0
        },
        "used": true,
        "completed": true,
        "formattedDate": "2025_01_08",
        "user_id": "so",
        "user_name": "소빈",
        "user_id_to_check": "so",
        "task_point": 3,
        "taskId": "t000007",
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "create_user": "won"
      },
      {
        "task_point": 3,
        "taskId": "t000000",
        "used": true,
        "user_name": "온겸",
        "completed": true,
        "user_id_to_check": "on",
        "formattedDate": "2025_01_09",
        "create_user": "won",
        "date": {
          "seconds": 1736380800,
          "nanoseconds": 0
        },
        "task_name": "신발정리",
        "user_id": "on"
      },
      {
        "user_id": "on",
        "task_point": 2,
        "user_name": "온겸",
        "user_id_to_check": "on",
        "create_user": "won",
        "taskId": "t000001",
        "task_name": "이불정리",
        "date": {
          "seconds": 1736380800,
          "nanoseconds": 0
        },
        "completed": true,
        "used": true,
        "formattedDate": "2025_01_09"
      },
      {
        "task_point": 2,
        "date": {
          "seconds": 1736380800,
          "nanoseconds": 0
        },
        "used": true,
        "create_user": "won",
        "user_id_to_check": "on",
        "completed": true,
        "user_name": "온겸",
        "task_name": "독서(20분 이상)",
        "formattedDate": "2025_01_09",
        "user_id": "on",
        "taskId": "t000002"
      },
      {
        "create_user": "won",
        "task_name": "단어필사",
        "used": true,
        "task_point": 5,
        "user_id_to_check": "on",
        "date": {
          "seconds": 1736380800,
          "nanoseconds": 0
        },
        "taskId": "t000003",
        "user_id": "on",
        "user_name": "온겸",
        "completed": true,
        "formattedDate": "2025_01_09"
      },
      {
        "date": {
          "seconds": 1736380800,
          "nanoseconds": 0
        },
        "create_user": "won",
        "task_name": "반찬 안남기기",
        "formattedDate": "2025_01_09",
        "used": true,
        "user_id_to_check": "on",
        "user_name": "온겸",
        "taskId": "t000004",
        "completed": true,
        "user_id": "on",
        "task_point": 2
      },
      {
        "user_name": "온겸",
        "user_id_to_check": "on",
        "used": true,
        "formattedDate": "2025_01_09",
        "create_user": "won",
        "taskId": "t000005",
        "completed": true,
        "task_point": 3,
        "date": {
          "seconds": 1736380800,
          "nanoseconds": 0
        },
        "task_name": "9시40분까지 잘 준비",
        "user_id": "on"
      },
      {
        "task_point": 3,
        "user_id_to_check": "on",
        "taskId": "t000006",
        "used": true,
        "user_name": "온겸",
        "user_id": "on",
        "completed": true,
        "date": {
          "seconds": 1736380800,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_09",
        "create_user": "won",
        "task_name": "저녁밥 먹고 스쿼트 50개"
      },
      {
        "task_point": 3,
        "completed": true,
        "create_user": "won",
        "taskId": "t000000",
        "user_id": "so",
        "user_id_to_check": "so",
        "user_name": "소빈",
        "task_name": "신발정리",
        "date": {
          "seconds": 1736380800,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_09",
        "used": true
      },
      {
        "user_id_to_check": "so",
        "task_point": 2,
        "taskId": "t000001",
        "used": true,
        "user_name": "소빈",
        "user_id": "so",
        "completed": true,
        "date": {
          "seconds": 1736380800,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_09",
        "create_user": "won",
        "task_name": "이불정리"
      },
      {
        "used": true,
        "user_id_to_check": "so",
        "task_name": "독서(20분 이상)",
        "user_id": "so",
        "taskId": "t000002",
        "user_name": "소빈",
        "formattedDate": "2025_01_09",
        "create_user": "won",
        "completed": true,
        "task_point": 2,
        "date": {
          "seconds": 1736380800,
          "nanoseconds": 0
        }
      },
      {
        "used": true,
        "date": {
          "seconds": 1736380800,
          "nanoseconds": 0
        },
        "task_point": 5,
        "user_name": "소빈",
        "taskId": "t000003",
        "create_user": "won",
        "completed": true,
        "user_id": "so",
        "formattedDate": "2025_01_09",
        "user_id_to_check": "so",
        "task_name": "단어필사"
      },
      {
        "user_id": "so",
        "taskId": "t000004",
        "task_name": "반찬 안남기기",
        "date": {
          "seconds": 1736380800,
          "nanoseconds": 0
        },
        "used": true,
        "user_id_to_check": "so",
        "formattedDate": "2025_01_09",
        "completed": true,
        "user_name": "소빈",
        "task_point": 2,
        "create_user": "won"
      },
      {
        "user_id": "so",
        "task_name": "9시40분까지 잘 준비",
        "user_id_to_check": "so",
        "taskId": "t000005",
        "formattedDate": "2025_01_09",
        "user_name": "소빈",
        "completed": true,
        "date": {
          "seconds": 1736380800,
          "nanoseconds": 0
        },
        "task_point": 3,
        "used": true,
        "create_user": "won"
      },
      {
        "date": {
          "seconds": 1736380800,
          "nanoseconds": 0
        },
        "user_id": "so",
        "task_point": 3,
        "taskId": "t000007",
        "completed": true,
        "formattedDate": "2025_01_09",
        "create_user": "won",
        "user_name": "소빈",
        "used": true,
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "user_id_to_check": "so"
      },
      {
        "create_user": "won",
        "taskId": "t000000",
        "user_name": "온겸",
        "user_id": "on",
        "user_id_to_check": "on",
        "completed": false,
        "date": {
          "seconds": 1736467200,
          "nanoseconds": 0
        },
        "task_name": "신발정리",
        "formattedDate": "2025_01_10",
        "task_point": 3,
        "used": true
      },
      {
        "used": true,
        "user_id_to_check": "on",
        "user_id": "on",
        "formattedDate": "2025_01_10",
        "task_point": 2,
        "completed": true,
        "taskId": "t000001",
        "task_name": "이불정리",
        "date": {
          "seconds": 1736467200,
          "nanoseconds": 0
        },
        "create_user": "won",
        "user_name": "온겸"
      },
      {
        "formattedDate": "2025_01_10",
        "task_point": 2,
        "date": {
          "seconds": 1736467200,
          "nanoseconds": 0
        },
        "used": true,
        "taskId": "t000002",
        "task_name": "독서(20분 이상)",
        "completed": true,
        "user_id_to_check": "on",
        "user_id": "on",
        "user_name": "온겸",
        "create_user": "won"
      },
      {
        "create_user": "won",
        "task_name": "단어필사",
        "task_point": 5,
        "date": {
          "seconds": 1736467200,
          "nanoseconds": 0
        },
        "completed": true,
        "user_id": "on",
        "user_name": "온겸",
        "taskId": "t000003",
        "used": true,
        "user_id_to_check": "on",
        "formattedDate": "2025_01_10"
      },
      {
        "formattedDate": "2025_01_10",
        "create_user": "won",
        "task_point": 2,
        "completed": true,
        "user_id": "on",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1736467200,
          "nanoseconds": 0
        },
        "task_name": "반찬 안남기기",
        "used": true,
        "user_name": "온겸",
        "taskId": "t000004"
      },
      {
        "task_point": 3,
        "taskId": "t000005",
        "user_id": "on",
        "used": true,
        "user_id_to_check": "on",
        "date": {
          "seconds": 1736467200,
          "nanoseconds": 0
        },
        "task_name": "9시40분까지 잘 준비",
        "completed": true,
        "user_name": "온겸",
        "formattedDate": "2025_01_10",
        "create_user": "won"
      },
      {
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "task_point": 3,
        "taskId": "t000006",
        "used": true,
        "date": {
          "seconds": 1736467200,
          "nanoseconds": 0
        },
        "user_name": "온겸",
        "completed": true,
        "user_id_to_check": "on",
        "formattedDate": "2025_01_10",
        "user_id": "on",
        "create_user": "won"
      },
      {
        "user_id": "so",
        "user_id_to_check": "so",
        "task_point": 3,
        "taskId": "t000000",
        "formattedDate": "2025_01_10",
        "used": true,
        "create_user": "won",
        "user_name": "소빈",
        "task_name": "신발정리",
        "date": {
          "seconds": 1736467200,
          "nanoseconds": 0
        },
        "completed": false
      },
      {
        "used": true,
        "task_name": "이불정리",
        "date": {
          "seconds": 1736467200,
          "nanoseconds": 0
        },
        "user_id_to_check": "so",
        "formattedDate": "2025_01_10",
        "user_id": "so",
        "user_name": "소빈",
        "taskId": "t000001",
        "task_point": 2,
        "completed": true,
        "create_user": "won"
      },
      {
        "user_id_to_check": "so",
        "user_name": "소빈",
        "user_id": "so",
        "completed": true,
        "task_name": "독서(20분 이상)",
        "create_user": "won",
        "taskId": "t000002",
        "used": true,
        "task_point": 2,
        "date": {
          "seconds": 1736467200,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_10"
      },
      {
        "used": true,
        "create_user": "won",
        "formattedDate": "2025_01_10",
        "taskId": "t000003",
        "task_point": 5,
        "user_name": "소빈",
        "task_name": "단어필사",
        "user_id_to_check": "so",
        "date": {
          "seconds": 1736467200,
          "nanoseconds": 0
        },
        "completed": true,
        "user_id": "so"
      },
      {
        "create_user": "won",
        "date": {
          "seconds": 1736467200,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "task_point": 2,
        "used": true,
        "user_id": "so",
        "formattedDate": "2025_01_10",
        "user_id_to_check": "so",
        "completed": true,
        "taskId": "t000004",
        "task_name": "반찬 안남기기"
      },
      {
        "date": {
          "seconds": 1736467200,
          "nanoseconds": 0
        },
        "completed": true,
        "create_user": "won",
        "task_point": 3,
        "used": true,
        "formattedDate": "2025_01_10",
        "user_name": "소빈",
        "taskId": "t000005",
        "task_name": "9시40분까지 잘 준비",
        "user_id": "so",
        "user_id_to_check": "so"
      },
      {
        "used": true,
        "date": {
          "seconds": 1736467200,
          "nanoseconds": 0
        },
        "user_id_to_check": "so",
        "user_id": "so",
        "user_name": "소빈",
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "task_point": 3,
        "completed": true,
        "taskId": "t000007",
        "create_user": "won",
        "formattedDate": "2025_01_10"
      },
      {
        "create_user": "won",
        "used": true,
        "date": {
          "seconds": 1736553600,
          "nanoseconds": 0
        },
        "user_id": "on",
        "formattedDate": "2025_01_11",
        "task_name": "신발정리",
        "task_point": 3,
        "user_name": "온겸",
        "completed": true,
        "taskId": "t000000",
        "user_id_to_check": "on"
      },
      {
        "create_user": "won",
        "used": true,
        "date": {
          "seconds": 1736553600,
          "nanoseconds": 0
        },
        "completed": true,
        "user_id": "on",
        "user_name": "온겸",
        "task_point": 2,
        "taskId": "t000001",
        "formattedDate": "2025_01_11",
        "user_id_to_check": "on",
        "task_name": "이불정리"
      },
      {
        "task_name": "독서(20분 이상)",
        "user_id": "on",
        "user_id_to_check": "on",
        "task_point": 2,
        "formattedDate": "2025_01_11",
        "create_user": "won",
        "used": true,
        "taskId": "t000002",
        "date": {
          "seconds": 1736553600,
          "nanoseconds": 0
        },
        "user_name": "온겸",
        "completed": true
      },
      {
        "formattedDate": "2025_01_11",
        "create_user": "won",
        "date": {
          "seconds": 1736553600,
          "nanoseconds": 0
        },
        "completed": true,
        "taskId": "t000003",
        "user_name": "온겸",
        "user_id": "on",
        "task_name": "단어필사",
        "task_point": 5,
        "used": true,
        "user_id_to_check": "on"
      },
      {
        "user_id_to_check": "on",
        "create_user": "won",
        "user_id": "on",
        "completed": true,
        "task_point": 2,
        "date": {
          "seconds": 1736553600,
          "nanoseconds": 0
        },
        "used": true,
        "user_name": "온겸",
        "formattedDate": "2025_01_11",
        "taskId": "t000004",
        "task_name": "반찬 안남기기"
      },
      {
        "user_id": "on",
        "user_name": "온겸",
        "create_user": "won",
        "task_point": 3,
        "completed": true,
        "used": true,
        "taskId": "t000005",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1736553600,
          "nanoseconds": 0
        },
        "task_name": "9시40분까지 잘 준비",
        "formattedDate": "2025_01_11"
      },
      {
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "formattedDate": "2025_01_11",
        "create_user": "won",
        "user_id_to_check": "on",
        "task_point": 3,
        "taskId": "t000006",
        "completed": true,
        "user_name": "온겸",
        "used": true,
        "date": {
          "seconds": 1736553600,
          "nanoseconds": 0
        },
        "user_id": "on"
      },
      {
        "user_id": "so",
        "user_id_to_check": "so",
        "user_name": "소빈",
        "task_name": "신발정리",
        "used": true,
        "date": {
          "seconds": 1736553600,
          "nanoseconds": 0
        },
        "taskId": "t000000",
        "formattedDate": "2025_01_11",
        "completed": true,
        "task_point": 3,
        "create_user": "won"
      },
      {
        "formattedDate": "2025_01_11",
        "completed": true,
        "create_user": "won",
        "user_id_to_check": "so",
        "task_name": "이불정리",
        "taskId": "t000001",
        "task_point": 2,
        "date": {
          "seconds": 1736553600,
          "nanoseconds": 0
        },
        "used": true,
        "user_id": "so",
        "user_name": "소빈"
      },
      {
        "used": true,
        "task_name": "독서(20분 이상)",
        "user_id": "so",
        "create_user": "won",
        "formattedDate": "2025_01_11",
        "completed": true,
        "task_point": 2,
        "date": {
          "seconds": 1736553600,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "user_id_to_check": "so",
        "taskId": "t000002"
      },
      {
        "create_user": "won",
        "user_name": "소빈",
        "date": {
          "seconds": 1736553600,
          "nanoseconds": 0
        },
        "completed": true,
        "user_id": "so",
        "taskId": "t000003",
        "used": true,
        "formattedDate": "2025_01_11",
        "task_name": "단어필사",
        "task_point": 5,
        "user_id_to_check": "so"
      },
      {
        "create_user": "won",
        "task_name": "반찬 안남기기",
        "user_id_to_check": "so",
        "user_id": "so",
        "taskId": "t000004",
        "date": {
          "seconds": 1736553600,
          "nanoseconds": 0
        },
        "used": true,
        "formattedDate": "2025_01_11",
        "completed": true,
        "user_name": "소빈",
        "task_point": 2
      },
      {
        "taskId": "t000005",
        "create_user": "won",
        "task_name": "9시40분까지 잘 준비",
        "user_name": "소빈",
        "used": true,
        "formattedDate": "2025_01_11",
        "user_id": "so",
        "date": {
          "seconds": 1736553600,
          "nanoseconds": 0
        },
        "completed": true,
        "task_point": 3,
        "user_id_to_check": "so"
      },
      {
        "user_name": "소빈",
        "used": true,
        "user_id": "so",
        "taskId": "t000007",
        "user_id_to_check": "so",
        "create_user": "won",
        "date": {
          "seconds": 1736553600,
          "nanoseconds": 0
        },
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "completed": true,
        "formattedDate": "2025_01_11",
        "task_point": 3
      },
      {
        "completed": true,
        "user_name": "온겸",
        "create_user": "won",
        "task_point": 3,
        "formattedDate": "2025_01_12",
        "used": true,
        "user_id_to_check": "on",
        "date": {
          "seconds": 1736640000,
          "nanoseconds": 0
        },
        "user_id": "on",
        "taskId": "t000000",
        "task_name": "신발정리"
      },
      {
        "taskId": "t000001",
        "formattedDate": "2025_01_12",
        "completed": true,
        "user_id": "on",
        "date": {
          "seconds": 1736640000,
          "nanoseconds": 0
        },
        "task_point": 2,
        "create_user": "won",
        "used": true,
        "user_id_to_check": "on",
        "task_name": "이불정리",
        "user_name": "온겸"
      },
      {
        "user_name": "온겸",
        "taskId": "t000002",
        "completed": true,
        "user_id": "on",
        "task_name": "독서(20분 이상)",
        "used": true,
        "date": {
          "seconds": 1736640000,
          "nanoseconds": 0
        },
        "create_user": "won",
        "formattedDate": "2025_01_12",
        "user_id_to_check": "on",
        "task_point": 2
      },
      {
        "formattedDate": "2025_01_12",
        "completed": true,
        "date": {
          "seconds": 1736640000,
          "nanoseconds": 0
        },
        "task_name": "단어필사",
        "taskId": "t000003",
        "used": true,
        "user_id": "on",
        "task_point": 5,
        "user_id_to_check": "on",
        "user_name": "온겸",
        "create_user": "won"
      },
      {
        "used": true,
        "task_name": "반찬 안남기기",
        "formattedDate": "2025_01_12",
        "user_name": "온겸",
        "user_id": "on",
        "completed": true,
        "create_user": "won",
        "taskId": "t000004",
        "task_point": 2,
        "user_id_to_check": "on",
        "date": {
          "seconds": 1736640000,
          "nanoseconds": 0
        }
      },
      {
        "create_user": "won",
        "task_point": 3,
        "completed": true,
        "user_id_to_check": "on",
        "user_name": "온겸",
        "used": true,
        "taskId": "t000005",
        "task_name": "9시40분까지 잘 준비",
        "formattedDate": "2025_01_12",
        "date": {
          "seconds": 1736640000,
          "nanoseconds": 0
        },
        "user_id": "on"
      },
      {
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "create_user": "won",
        "formattedDate": "2025_01_12",
        "date": {
          "seconds": 1736640000,
          "nanoseconds": 0
        },
        "used": true,
        "completed": true,
        "taskId": "t000006",
        "user_id_to_check": "on",
        "user_name": "온겸",
        "task_point": 3,
        "user_id": "on"
      },
      {
        "task_point": 3,
        "create_user": "won",
        "taskId": "t000000",
        "task_name": "신발정리",
        "date": {
          "seconds": 1736640000,
          "nanoseconds": 0
        },
        "used": true,
        "completed": true,
        "user_name": "소빈",
        "formattedDate": "2025_01_12",
        "user_id_to_check": "so",
        "user_id": "so"
      },
      {
        "used": true,
        "taskId": "t000001",
        "user_id": "so",
        "user_name": "소빈",
        "completed": true,
        "task_point": 2,
        "create_user": "won",
        "user_id_to_check": "so",
        "formattedDate": "2025_01_12",
        "task_name": "이불정리",
        "date": {
          "seconds": 1736640000,
          "nanoseconds": 0
        }
      },
      {
        "formattedDate": "2025_01_12",
        "taskId": "t000002",
        "create_user": "won",
        "user_id_to_check": "so",
        "task_name": "독서(20분 이상)",
        "used": true,
        "user_id": "so",
        "completed": true,
        "date": {
          "seconds": 1736640000,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "task_point": 2
      },
      {
        "formattedDate": "2025_01_12",
        "completed": true,
        "create_user": "won",
        "user_id_to_check": "so",
        "task_name": "단어필사",
        "task_point": 5,
        "taskId": "t000003",
        "user_id": "so",
        "used": true,
        "date": {
          "seconds": 1736640000,
          "nanoseconds": 0
        },
        "user_name": "소빈"
      },
      {
        "user_id": "so",
        "completed": true,
        "task_name": "반찬 안남기기",
        "formattedDate": "2025_01_12",
        "task_point": 2,
        "create_user": "won",
        "user_name": "소빈",
        "used": true,
        "date": {
          "seconds": 1736640000,
          "nanoseconds": 0
        },
        "taskId": "t000004",
        "user_id_to_check": "so"
      },
      {
        "user_id": "so",
        "user_name": "소빈",
        "completed": true,
        "task_name": "9시40분까지 잘 준비",
        "taskId": "t000005",
        "task_point": 3,
        "formattedDate": "2025_01_12",
        "used": true,
        "create_user": "won",
        "date": {
          "seconds": 1736640000,
          "nanoseconds": 0
        },
        "user_id_to_check": "so"
      },
      {
        "taskId": "t000007",
        "create_user": "won",
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "used": true,
        "user_name": "소빈",
        "formattedDate": "2025_01_12",
        "date": {
          "seconds": 1736640000,
          "nanoseconds": 0
        },
        "completed": true,
        "user_id": "so",
        "task_point": 3,
        "user_id_to_check": "so"
      },
      {
        "create_user": "won",
        "date": {
          "seconds": 1736726400,
          "nanoseconds": 0
        },
        "task_point": 3,
        "formattedDate": "2025_01_13",
        "taskId": "t000000",
        "used": true,
        "task_name": "신발정리",
        "user_id_to_check": "on",
        "user_id": "on",
        "completed": true,
        "user_name": "온겸"
      },
      {
        "task_name": "이불정리",
        "used": true,
        "completed": true,
        "user_id": "on",
        "date": {
          "seconds": 1736726400,
          "nanoseconds": 0
        },
        "task_point": 2,
        "create_user": "won",
        "formattedDate": "2025_01_13",
        "user_name": "온겸",
        "taskId": "t000001",
        "user_id_to_check": "on"
      },
      {
        "user_name": "온겸",
        "used": true,
        "user_id_to_check": "on",
        "taskId": "t000002",
        "user_id": "on",
        "create_user": "won",
        "date": {
          "seconds": 1736726400,
          "nanoseconds": 0
        },
        "task_name": "독서(20분 이상)",
        "formattedDate": "2025_01_13",
        "completed": true,
        "task_point": 2
      },
      {
        "user_id_to_check": "on",
        "create_user": "won",
        "user_name": "온겸",
        "date": {
          "seconds": 1736726400,
          "nanoseconds": 0
        },
        "used": true,
        "user_id": "on",
        "taskId": "t000003",
        "completed": true,
        "formattedDate": "2025_01_13",
        "task_point": 5,
        "task_name": "단어필사"
      },
      {
        "formattedDate": "2025_01_13",
        "date": {
          "seconds": 1736726400,
          "nanoseconds": 0
        },
        "user_id_to_check": "on",
        "task_name": "반찬 안남기기",
        "taskId": "t000004",
        "user_id": "on",
        "user_name": "온겸",
        "task_point": 2,
        "used": true,
        "create_user": "won",
        "completed": true
      },
      {
        "user_id_to_check": "on",
        "completed": true,
        "formattedDate": "2025_01_13",
        "task_name": "9시40분까지 잘 준비",
        "taskId": "t000005",
        "user_id": "on",
        "date": {
          "seconds": 1736726400,
          "nanoseconds": 0
        },
        "user_name": "온겸",
        "task_point": 3,
        "used": true,
        "create_user": "won"
      },
      {
        "used": true,
        "user_id_to_check": "on",
        "user_id": "on",
        "task_point": 3,
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "create_user": "won",
        "completed": false,
        "formattedDate": "2025_01_13",
        "user_name": "온겸",
        "taskId": "t000006",
        "date": {
          "seconds": 1736726400,
          "nanoseconds": 0
        }
      },
      {
        "task_name": "신발정리",
        "formattedDate": "2025_01_13",
        "create_user": "won",
        "user_id_to_check": "so",
        "taskId": "t000000",
        "task_point": 3,
        "user_name": "소빈",
        "completed": true,
        "used": true,
        "date": {
          "seconds": 1736726400,
          "nanoseconds": 0
        },
        "user_id": "so"
      },
      {
        "user_id": "so",
        "completed": true,
        "task_name": "이불정리",
        "formattedDate": "2025_01_13",
        "task_point": 2,
        "user_name": "소빈",
        "create_user": "won",
        "used": true,
        "date": {
          "seconds": 1736726400,
          "nanoseconds": 0
        },
        "user_id_to_check": "so",
        "taskId": "t000001"
      },
      {
        "task_name": "독서(20분 이상)",
        "used": true,
        "user_id": "so",
        "date": {
          "seconds": 1736726400,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "taskId": "t000002",
        "formattedDate": "2025_01_13",
        "user_id_to_check": "so",
        "completed": true,
        "create_user": "won",
        "task_point": 2
      },
      {
        "date": {
          "seconds": 1736726400,
          "nanoseconds": 0
        },
        "taskId": "t000003",
        "completed": true,
        "task_point": 5,
        "used": true,
        "user_id": "so",
        "formattedDate": "2025_01_13",
        "user_id_to_check": "so",
        "user_name": "소빈",
        "create_user": "won",
        "task_name": "단어필사"
      },
      {
        "user_id_to_check": "so",
        "date": {
          "seconds": 1736726400,
          "nanoseconds": 0
        },
        "task_point": 2,
        "user_id": "so",
        "create_user": "won",
        "used": true,
        "user_name": "소빈",
        "task_name": "반찬 안남기기",
        "taskId": "t000004",
        "formattedDate": "2025_01_13",
        "completed": true
      },
      {
        "formattedDate": "2025_01_13",
        "task_point": 3,
        "user_name": "소빈",
        "user_id_to_check": "so",
        "task_name": "9시40분까지 잘 준비",
        "taskId": "t000005",
        "user_id": "so",
        "create_user": "won",
        "completed": true,
        "used": true,
        "date": {
          "seconds": 1736726400,
          "nanoseconds": 0
        }
      },
      {
        "task_point": 3,
        "taskId": "t000007",
        "create_user": "won",
        "used": true,
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "formattedDate": "2025_01_13",
        "date": {
          "seconds": 1736726400,
          "nanoseconds": 0
        },
        "completed": true,
        "user_name": "소빈",
        "user_id": "so",
        "user_id_to_check": "so"
      },
      {
        "formattedDate": "2025_01_14",
        "user_id": "on",
        "date": {
          "seconds": 1736812800,
          "nanoseconds": 0
        },
        "task_point": 3,
        "completed": true,
        "create_user": "won",
        "user_name": "온겸",
        "user_id_to_check": "on",
        "taskId": "t000000",
        "used": true,
        "task_name": "신발정리"
      },
      {
        "completed": true,
        "used": true,
        "user_id_to_check": "on",
        "date": {
          "seconds": 1736812800,
          "nanoseconds": 0
        },
        "taskId": "t000001",
        "task_name": "이불정리",
        "user_name": "온겸",
        "user_id": "on",
        "formattedDate": "2025_01_14",
        "task_point": 2,
        "create_user": "won"
      },
      {
        "completed": true,
        "task_name": "독서(20분 이상)",
        "user_id": "on",
        "user_id_to_check": "on",
        "formattedDate": "2025_01_14",
        "user_name": "온겸",
        "taskId": "t000002",
        "used": true,
        "create_user": "won",
        "task_point": 2,
        "date": {
          "seconds": 1736812800,
          "nanoseconds": 0
        }
      },
      {
        "date": {
          "seconds": 1736812800,
          "nanoseconds": 0
        },
        "user_name": "온겸",
        "completed": true,
        "taskId": "t000003",
        "create_user": "won",
        "used": true,
        "task_name": "단어필사",
        "task_point": 5,
        "user_id_to_check": "on",
        "formattedDate": "2025_01_14",
        "user_id": "on"
      },
      {
        "user_name": "온겸",
        "formattedDate": "2025_01_14",
        "task_name": "반찬 안남기기",
        "user_id_to_check": "on",
        "user_id": "on",
        "date": {
          "seconds": 1736812800,
          "nanoseconds": 0
        },
        "taskId": "t000004",
        "task_point": 2,
        "create_user": "won",
        "completed": true,
        "used": true
      },
      {
        "date": {
          "seconds": 1736812800,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_14",
        "used": true,
        "completed": false,
        "create_user": "won",
        "task_point": 3,
        "user_id": "on",
        "user_name": "온겸",
        "task_name": "9시40분까지 잘 준비",
        "user_id_to_check": "on",
        "taskId": "t000005"
      },
      {
        "create_user": "won",
        "taskId": "t000006",
        "used": true,
        "date": {
          "seconds": 1736812800,
          "nanoseconds": 0
        },
        "completed": true,
        "user_id": "on",
        "task_point": 3,
        "user_name": "온겸",
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "formattedDate": "2025_01_14",
        "user_id_to_check": "on"
      },
      {
        "task_name": "신발정리",
        "create_user": "won",
        "user_id_to_check": "so",
        "user_id": "so",
        "taskId": "t000000",
        "date": {
          "seconds": 1736812800,
          "nanoseconds": 0
        },
        "used": true,
        "formattedDate": "2025_01_14",
        "task_point": 3,
        "completed": true,
        "user_name": "소빈"
      },
      {
        "create_user": "won",
        "used": true,
        "date": {
          "seconds": 1736812800,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "user_id_to_check": "so",
        "taskId": "t000001",
        "formattedDate": "2025_01_14",
        "task_name": "이불정리",
        "completed": true,
        "task_point": 2,
        "user_id": "so"
      },
      {
        "user_name": "소빈",
        "user_id_to_check": "so",
        "formattedDate": "2025_01_14",
        "date": {
          "seconds": 1736812800,
          "nanoseconds": 0
        },
        "create_user": "won",
        "taskId": "t000002",
        "used": true,
        "task_point": 2,
        "completed": true,
        "user_id": "so",
        "task_name": "독서(20분 이상)"
      },
      {
        "user_id": "so",
        "user_name": "소빈",
        "task_name": "단어필사",
        "user_id_to_check": "so",
        "taskId": "t000003",
        "task_point": 5,
        "date": {
          "seconds": 1736812800,
          "nanoseconds": 0
        },
        "create_user": "won",
        "formattedDate": "2025_01_14",
        "completed": true,
        "used": true
      },
      {
        "task_point": 2,
        "date": {
          "seconds": 1736812800,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "taskId": "t000004",
        "formattedDate": "2025_01_14",
        "task_name": "반찬 안남기기",
        "user_id_to_check": "so",
        "create_user": "won",
        "completed": true,
        "used": true,
        "user_id": "so"
      },
      {
        "create_user": "won",
        "task_name": "9시40분까지 잘 준비",
        "user_id_to_check": "so",
        "user_id": "so",
        "taskId": "t000005",
        "date": {
          "seconds": 1736812800,
          "nanoseconds": 0
        },
        "used": true,
        "formattedDate": "2025_01_14",
        "completed": true,
        "user_name": "소빈",
        "task_point": 3
      },
      {
        "create_user": "won",
        "task_point": 3,
        "user_id_to_check": "so",
        "completed": true,
        "taskId": "t000007",
        "date": {
          "seconds": 1736812800,
          "nanoseconds": 0
        },
        "user_id": "so",
        "user_name": "소빈",
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "formattedDate": "2025_01_14",
        "used": true
      },
      {
        "user_id": "on",
        "create_user": "won",
        "task_name": "신발정리",
        "user_id_to_check": "on",
        "formattedDate": "2025_01_15",
        "user_name": "온겸",
        "taskId": "t000000",
        "date": {
          "seconds": 1736899200,
          "nanoseconds": 0
        },
        "task_point": 3,
        "completed": true,
        "used": true
      },
      {
        "formattedDate": "2025_01_15",
        "task_point": 2,
        "user_id": "on",
        "user_name": "온겸",
        "taskId": "t000001",
        "used": true,
        "create_user": "won",
        "completed": true,
        "date": {
          "seconds": 1736899200,
          "nanoseconds": 0
        },
        "task_name": "이불정리",
        "user_id_to_check": "on"
      },
      {
        "date": {
          "seconds": 1736899200,
          "nanoseconds": 0
        },
        "task_name": "독서(20분 이상)",
        "used": true,
        "create_user": "won",
        "user_id": "on",
        "formattedDate": "2025_01_15",
        "user_id_to_check": "on",
        "task_point": 2,
        "completed": true,
        "user_name": "온겸",
        "taskId": "t000002"
      },
      {
        "task_point": 5,
        "create_user": "won",
        "completed": true,
        "user_id_to_check": "on",
        "taskId": "t000003",
        "date": {
          "seconds": 1736899200,
          "nanoseconds": 0
        },
        "user_id": "on",
        "user_name": "온겸",
        "task_name": "단어필사",
        "formattedDate": "2025_01_15",
        "used": true
      },
      {
        "formattedDate": "2025_01_15",
        "task_point": 2,
        "user_name": "온겸",
        "user_id_to_check": "on",
        "task_name": "반찬 안남기기",
        "taskId": "t000004",
        "user_id": "on",
        "completed": true,
        "create_user": "won",
        "date": {
          "seconds": 1736899200,
          "nanoseconds": 0
        },
        "used": true
      },
      {
        "date": {
          "seconds": 1736899200,
          "nanoseconds": 0
        },
        "completed": false,
        "taskId": "t000005",
        "task_point": 3,
        "formattedDate": "2025_01_15",
        "used": true,
        "user_name": "온겸",
        "user_id": "on",
        "create_user": "won",
        "user_id_to_check": "on",
        "task_name": "9시40분까지 잘 준비"
      },
      {
        "user_id_to_check": "on",
        "taskId": "t000006",
        "task_point": 3,
        "formattedDate": "2025_01_15",
        "date": {
          "seconds": 1736899200,
          "nanoseconds": 0
        },
        "create_user": "won",
        "completed": true,
        "user_id": "on",
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "user_name": "온겸",
        "used": true
      },
      {
        "task_name": "신발정리",
        "task_point": 3,
        "formattedDate": "2025_01_15",
        "date": {
          "seconds": 1736899200,
          "nanoseconds": 0
        },
        "used": true,
        "completed": true,
        "user_id": "so",
        "user_id_to_check": "so",
        "user_name": "소빈",
        "taskId": "t000000",
        "create_user": "won"
      },
      {
        "user_id": "so",
        "user_name": "소빈",
        "task_name": "이불정리",
        "user_id_to_check": "so",
        "taskId": "t000001",
        "task_point": 2,
        "date": {
          "seconds": 1736899200,
          "nanoseconds": 0
        },
        "create_user": "won",
        "formattedDate": "2025_01_15",
        "used": true,
        "completed": true
      },
      {
        "formattedDate": "2025_01_15",
        "date": {
          "seconds": 1736899200,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "completed": true,
        "task_name": "독서(20분 이상)",
        "used": true,
        "taskId": "t000002",
        "task_point": 2,
        "user_id": "so",
        "create_user": "won",
        "user_id_to_check": "so"
      },
      {
        "task_point": 5,
        "user_id": "so",
        "user_id_to_check": "so",
        "formattedDate": "2025_01_15",
        "taskId": "t000003",
        "user_name": "소빈",
        "completed": true,
        "task_name": "단어필사",
        "create_user": "won",
        "used": true,
        "date": {
          "seconds": 1736899200,
          "nanoseconds": 0
        }
      },
      {
        "user_id_to_check": "so",
        "user_name": "소빈",
        "task_name": "반찬 안남기기",
        "taskId": "t000004",
        "user_id": "so",
        "task_point": 2,
        "completed": true,
        "formattedDate": "2025_01_15",
        "used": true,
        "create_user": "won",
        "date": {
          "seconds": 1736899200,
          "nanoseconds": 0
        }
      },
      {
        "user_name": "소빈",
        "formattedDate": "2025_01_15",
        "create_user": "won",
        "user_id_to_check": "so",
        "date": {
          "seconds": 1736899200,
          "nanoseconds": 0
        },
        "completed": false,
        "used": true,
        "task_point": 3,
        "task_name": "9시40분까지 잘 준비",
        "taskId": "t000005",
        "user_id": "so"
      },
      {
        "user_id_to_check": "so",
        "taskId": "t000007",
        "task_point": 3,
        "date": {
          "seconds": 1736899200,
          "nanoseconds": 0
        },
        "create_user": "won",
        "completed": true,
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "user_id": "so",
        "used": true,
        "formattedDate": "2025_01_15",
        "user_name": "소빈"
      },
      {
        "task_point": 3,
        "user_id_to_check": "on",
        "user_name": "온겸",
        "taskId": "t000000",
        "task_name": "신발정리",
        "date": {
          "seconds": 1736985600,
          "nanoseconds": 0
        },
        "user_id": "on",
        "create_user": "won",
        "formattedDate": "2025_01_16",
        "used": true,
        "completed": true
      },
      {
        "user_id": "on",
        "user_name": "온겸",
        "formattedDate": "2025_01_16",
        "used": true,
        "taskId": "t000001",
        "create_user": "won",
        "date": {
          "seconds": 1736985600,
          "nanoseconds": 0
        },
        "user_id_to_check": "on",
        "completed": true,
        "task_point": 2,
        "task_name": "이불정리"
      },
      {
        "completed": true,
        "task_name": "독서(20분 이상)",
        "task_point": 2,
        "formattedDate": "2025_01_16",
        "user_name": "온겸",
        "used": true,
        "taskId": "t000002",
        "user_id_to_check": "on",
        "user_id": "on",
        "date": {
          "seconds": 1736985600,
          "nanoseconds": 0
        },
        "create_user": "won"
      },
      {
        "task_name": "단어필사",
        "task_point": 5,
        "user_id_to_check": "on",
        "taskId": "t000003",
        "date": {
          "seconds": 1736985600,
          "nanoseconds": 0
        },
        "used": true,
        "user_id": "on",
        "user_name": "온겸",
        "create_user": "won",
        "completed": true,
        "formattedDate": "2025_01_16"
      },
      {
        "user_id_to_check": "on",
        "taskId": "t000004",
        "create_user": "won",
        "date": {
          "seconds": 1736985600,
          "nanoseconds": 0
        },
        "used": true,
        "user_name": "온겸",
        "task_name": "반찬 안남기기",
        "user_id": "on",
        "completed": true,
        "formattedDate": "2025_01_16",
        "task_point": 2
      },
      {
        "completed": false,
        "user_name": "온겸",
        "date": {
          "seconds": 1736985600,
          "nanoseconds": 0
        },
        "task_name": "9시40분까지 잘 준비",
        "used": true,
        "user_id_to_check": "on",
        "formattedDate": "2025_01_16",
        "task_point": 3,
        "taskId": "t000005",
        "user_id": "on",
        "create_user": "won"
      },
      {
        "user_id_to_check": "on",
        "user_name": "온겸",
        "completed": true,
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "taskId": "t000006",
        "formattedDate": "2025_01_16",
        "date": {
          "seconds": 1736985600,
          "nanoseconds": 0
        },
        "user_id": "on",
        "task_point": 3,
        "used": true,
        "create_user": "won"
      },
      {
        "user_id": "so",
        "taskId": "t000000",
        "completed": true,
        "date": {
          "seconds": 1736985600,
          "nanoseconds": 0
        },
        "used": true,
        "user_id_to_check": "so",
        "task_name": "신발정리",
        "user_name": "소빈",
        "create_user": "won",
        "formattedDate": "2025_01_16",
        "task_point": 3
      },
      {
        "user_name": "소빈",
        "completed": true,
        "date": {
          "seconds": 1736985600,
          "nanoseconds": 0
        },
        "task_point": 2,
        "used": true,
        "task_name": "이불정리",
        "create_user": "won",
        "user_id_to_check": "so",
        "taskId": "t000001",
        "formattedDate": "2025_01_16",
        "user_id": "so"
      },
      {
        "taskId": "t000002",
        "task_point": 2,
        "user_name": "소빈",
        "task_name": "독서(20분 이상)",
        "create_user": "won",
        "user_id": "so",
        "formattedDate": "2025_01_16",
        "completed": true,
        "date": {
          "seconds": 1736985600,
          "nanoseconds": 0
        },
        "used": true,
        "user_id_to_check": "so"
      },
      {
        "user_id_to_check": "so",
        "create_user": "won",
        "taskId": "t000003",
        "user_name": "소빈",
        "used": true,
        "date": {
          "seconds": 1736985600,
          "nanoseconds": 0
        },
        "task_name": "단어필사",
        "user_id": "so",
        "completed": true,
        "formattedDate": "2025_01_16",
        "task_point": 5
      },
      {
        "taskId": "t000004",
        "task_point": 2,
        "create_user": "won",
        "user_id": "so",
        "used": true,
        "task_name": "반찬 안남기기",
        "user_name": "소빈",
        "completed": true,
        "formattedDate": "2025_01_16",
        "user_id_to_check": "so",
        "date": {
          "seconds": 1736985600,
          "nanoseconds": 0
        }
      },
      {
        "user_name": "소빈",
        "taskId": "t000005",
        "user_id_to_check": "so",
        "formattedDate": "2025_01_16",
        "user_id": "so",
        "date": {
          "seconds": 1736985600,
          "nanoseconds": 0
        },
        "used": true,
        "create_user": "won",
        "completed": false,
        "task_point": 3,
        "task_name": "9시40분까지 잘 준비"
      },
      {
        "create_user": "won",
        "user_id": "so",
        "used": true,
        "taskId": "t000007",
        "date": {
          "seconds": 1736985600,
          "nanoseconds": 0
        },
        "completed": true,
        "task_point": 3,
        "formattedDate": "2025_01_16",
        "user_name": "소빈",
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "user_id_to_check": "so"
      },
      {
        "create_user": "won",
        "completed": true,
        "taskId": "t000000",
        "task_point": 3,
        "user_id": "on",
        "user_id_to_check": "on",
        "used": true,
        "user_name": "온겸",
        "formattedDate": "2025_01_17",
        "date": {
          "seconds": 1737072000,
          "nanoseconds": 0
        },
        "task_name": "신발정리"
      },
      {
        "user_name": "온겸",
        "formattedDate": "2025_01_17",
        "create_user": "won",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1737072000,
          "nanoseconds": 0
        },
        "completed": true,
        "used": true,
        "task_point": 2,
        "task_name": "이불정리",
        "taskId": "t000001",
        "user_id": "on"
      },
      {
        "formattedDate": "2025_01_17",
        "task_name": "독서(20분 이상)",
        "user_id_to_check": "on",
        "create_user": "won",
        "user_name": "온겸",
        "task_point": 2,
        "taskId": "t000002",
        "completed": true,
        "used": true,
        "date": {
          "seconds": 1737072000,
          "nanoseconds": 0
        },
        "user_id": "on"
      },
      {
        "user_id": "on",
        "completed": true,
        "taskId": "t000003",
        "date": {
          "seconds": 1737072000,
          "nanoseconds": 0
        },
        "used": true,
        "user_id_to_check": "on",
        "user_name": "온겸",
        "task_name": "단어필사",
        "create_user": "won",
        "formattedDate": "2025_01_17",
        "task_point": 5
      },
      {
        "completed": true,
        "user_name": "온겸",
        "create_user": "won",
        "user_id_to_check": "on",
        "formattedDate": "2025_01_17",
        "task_point": 2,
        "date": {
          "seconds": 1737072000,
          "nanoseconds": 0
        },
        "used": true,
        "taskId": "t000004",
        "user_id": "on",
        "task_name": "반찬 안남기기"
      },
      {
        "date": {
          "seconds": 1737072000,
          "nanoseconds": 0
        },
        "user_id_to_check": "on",
        "create_user": "won",
        "used": true,
        "user_name": "온겸",
        "user_id": "on",
        "taskId": "t000005",
        "completed": true,
        "task_name": "9시40분까지 잘 준비",
        "formattedDate": "2025_01_17",
        "task_point": 3
      },
      {
        "user_name": "온겸",
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "create_user": "won",
        "user_id": "on",
        "formattedDate": "2025_01_17",
        "completed": true,
        "date": {
          "seconds": 1737072000,
          "nanoseconds": 0
        },
        "user_id_to_check": "on",
        "used": true,
        "taskId": "t000006",
        "task_point": 3
      },
      {
        "user_id": "so",
        "taskId": "t000000",
        "completed": true,
        "date": {
          "seconds": 1737072000,
          "nanoseconds": 0
        },
        "task_point": 3,
        "task_name": "신발정리",
        "user_id_to_check": "so",
        "create_user": "won",
        "used": true,
        "user_name": "소빈",
        "formattedDate": "2025_01_17"
      },
      {
        "completed": true,
        "used": true,
        "user_id": "so",
        "task_name": "이불정리",
        "user_name": "소빈",
        "taskId": "t000001",
        "date": {
          "seconds": 1737072000,
          "nanoseconds": 0
        },
        "user_id_to_check": "so",
        "formattedDate": "2025_01_17",
        "task_point": 2,
        "create_user": "won"
      },
      {
        "task_name": "독서(20분 이상)",
        "create_user": "won",
        "used": true,
        "user_name": "소빈",
        "formattedDate": "2025_01_17",
        "task_point": 2,
        "date": {
          "seconds": 1737072000,
          "nanoseconds": 0
        },
        "user_id": "so",
        "completed": true,
        "user_id_to_check": "so",
        "taskId": "t000002"
      },
      {
        "completed": true,
        "user_name": "소빈",
        "create_user": "won",
        "formattedDate": "2025_01_17",
        "used": true,
        "user_id": "so",
        "task_name": "단어필사",
        "taskId": "t000003",
        "task_point": 5,
        "date": {
          "seconds": 1737072000,
          "nanoseconds": 0
        },
        "user_id_to_check": "so"
      },
      {
        "create_user": "won",
        "user_id_to_check": "so",
        "user_name": "소빈",
        "formattedDate": "2025_01_17",
        "task_point": 2,
        "user_id": "so",
        "task_name": "반찬 안남기기",
        "used": true,
        "completed": true,
        "taskId": "t000004",
        "date": {
          "seconds": 1737072000,
          "nanoseconds": 0
        }
      },
      {
        "date": {
          "seconds": 1737072000,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_17",
        "user_name": "소빈",
        "completed": true,
        "task_name": "9시40분까지 잘 준비",
        "used": true,
        "taskId": "t000005",
        "task_point": 3,
        "create_user": "won",
        "user_id": "so",
        "user_id_to_check": "so"
      },
      {
        "used": true,
        "user_name": "소빈",
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "date": {
          "seconds": 1737072000,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_17",
        "task_point": 3,
        "taskId": "t000007",
        "create_user": "won",
        "user_id_to_check": "so",
        "user_id": "so",
        "completed": true
      },
      {
        "date": {
          "seconds": 1737158400,
          "nanoseconds": 0
        },
        "user_id": "on",
        "taskId": "t000000",
        "user_name": "온겸",
        "task_name": "신발정리",
        "completed": true,
        "create_user": "won",
        "task_point": 3,
        "user_id_to_check": "on",
        "formattedDate": "2025_01_18",
        "used": true
      },
      {
        "formattedDate": "2025_01_18",
        "user_id_to_check": "on",
        "task_name": "이불정리",
        "completed": true,
        "taskId": "t000001",
        "user_name": "온겸",
        "create_user": "won",
        "used": true,
        "user_id": "on",
        "date": {
          "seconds": 1737158400,
          "nanoseconds": 0
        },
        "task_point": 2
      },
      {
        "formattedDate": "2025_01_18",
        "user_id": "on",
        "date": {
          "seconds": 1737158400,
          "nanoseconds": 0
        },
        "task_name": "독서(20분 이상)",
        "completed": true,
        "taskId": "t000002",
        "used": true,
        "task_point": 2,
        "user_id_to_check": "on",
        "create_user": "won",
        "user_name": "온겸"
      },
      {
        "taskId": "t000003",
        "user_id": "on",
        "task_name": "단어필사",
        "date": {
          "seconds": 1737158400,
          "nanoseconds": 0
        },
        "task_point": 6,
        "formattedDate": "2025_01_18",
        "completed": true,
        "user_id_to_check": "on",
        "user_name": "온겸",
        "used": true,
        "create_user": "won"
      },
      {
        "taskId": "t000004",
        "create_user": "won",
        "task_name": "반찬 안남기기",
        "formattedDate": "2025_01_18",
        "task_point": 2,
        "user_id": "on",
        "date": {
          "seconds": 1737158400,
          "nanoseconds": 0
        },
        "user_id_to_check": "on",
        "user_name": "온겸",
        "used": true,
        "completed": true
      },
      {
        "user_id_to_check": "on",
        "formattedDate": "2025_01_18",
        "task_point": 3,
        "user_name": "온겸",
        "user_id": "on",
        "task_name": "9시40분까지 잘 준비",
        "create_user": "won",
        "date": {
          "seconds": 1737158400,
          "nanoseconds": 0
        },
        "taskId": "t000005",
        "used": true,
        "completed": true
      },
      {
        "completed": true,
        "used": true,
        "user_id": "on",
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "user_name": "온겸",
        "user_id_to_check": "on",
        "taskId": "t000006",
        "date": {
          "seconds": 1737158400,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_18",
        "task_point": 3,
        "create_user": "won"
      },
      {
        "used": true,
        "taskId": "t000000",
        "user_id_to_check": "so",
        "create_user": "won",
        "user_id": "so",
        "formattedDate": "2025_01_18",
        "completed": true,
        "task_name": "신발정리",
        "date": {
          "seconds": 1737158400,
          "nanoseconds": 0
        },
        "task_point": 3,
        "user_name": "소빈"
      },
      {
        "user_id_to_check": "so",
        "task_point": 2,
        "used": true,
        "date": {
          "seconds": 1737158400,
          "nanoseconds": 0
        },
        "taskId": "t000001",
        "formattedDate": "2025_01_18",
        "user_id": "so",
        "create_user": "won",
        "task_name": "이불정리",
        "user_name": "소빈",
        "completed": true
      },
      {
        "create_user": "won",
        "completed": true,
        "user_name": "소빈",
        "task_name": "독서(20분 이상)",
        "used": true,
        "formattedDate": "2025_01_18",
        "taskId": "t000002",
        "task_point": 2,
        "user_id": "so",
        "user_id_to_check": "so",
        "date": {
          "seconds": 1737158400,
          "nanoseconds": 0
        }
      },
      {
        "user_id": "so",
        "user_id_to_check": "so",
        "user_name": "소빈",
        "taskId": "t000003",
        "used": true,
        "completed": true,
        "task_point": 6,
        "create_user": "won",
        "task_name": "단어필사",
        "formattedDate": "2025_01_18",
        "date": {
          "seconds": 1737158400,
          "nanoseconds": 0
        }
      },
      {
        "date": {
          "seconds": 1737158400,
          "nanoseconds": 0
        },
        "user_id_to_check": "so",
        "create_user": "won",
        "used": true,
        "user_name": "소빈",
        "user_id": "so",
        "taskId": "t000004",
        "completed": true,
        "formattedDate": "2025_01_18",
        "task_name": "반찬 안남기기",
        "task_point": 2
      },
      {
        "formattedDate": "2025_01_18",
        "completed": true,
        "taskId": "t000005",
        "user_id_to_check": "so",
        "user_id": "so",
        "task_name": "9시40분까지 잘 준비",
        "task_point": 3,
        "create_user": "won",
        "used": true,
        "date": {
          "seconds": 1737158400,
          "nanoseconds": 0
        },
        "user_name": "소빈"
      },
      {
        "user_id": "so",
        "used": true,
        "create_user": "won",
        "user_id_to_check": "so",
        "completed": true,
        "date": {
          "seconds": 1737158400,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "task_point": 3,
        "formattedDate": "2025_01_18",
        "taskId": "t000007"
      },
      {
        "used": true,
        "taskId": "t000000",
        "date": {
          "seconds": 1737244800,
          "nanoseconds": 0
        },
        "task_point": 3,
        "user_id_to_check": "on",
        "create_user": "won",
        "completed": true,
        "task_name": "신발정리",
        "user_name": "온겸",
        "formattedDate": "2025_01_19",
        "user_id": "on"
      },
      {
        "completed": true,
        "user_name": "온겸",
        "formattedDate": "2025_01_19",
        "taskId": "t000001",
        "date": {
          "seconds": 1737244800,
          "nanoseconds": 0
        },
        "user_id": "on",
        "task_point": 2,
        "task_name": "이불정리",
        "user_id_to_check": "on",
        "create_user": "won",
        "used": true
      },
      {
        "create_user": "won",
        "user_name": "온겸",
        "date": {
          "seconds": 1737244800,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_19",
        "user_id": "on",
        "task_name": "독서(20분 이상)",
        "taskId": "t000002",
        "user_id_to_check": "on",
        "task_point": 2,
        "completed": true,
        "used": true
      },
      {
        "user_id": "on",
        "user_id_to_check": "on",
        "create_user": "won",
        "taskId": "t000003",
        "completed": true,
        "date": {
          "seconds": 1737244800,
          "nanoseconds": 0
        },
        "user_name": "온겸",
        "task_point": 5,
        "task_name": "단어필사",
        "formattedDate": "2025_01_19",
        "used": true
      },
      {
        "task_name": "반찬 안남기기",
        "user_name": "온겸",
        "taskId": "t000004",
        "user_id": "on",
        "task_point": 2,
        "date": {
          "seconds": 1737244800,
          "nanoseconds": 0
        },
        "create_user": "won",
        "used": true,
        "user_id_to_check": "on",
        "completed": false,
        "formattedDate": "2025_01_19"
      },
      {
        "taskId": "t000005",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1737244800,
          "nanoseconds": 0
        },
        "user_id": "on",
        "used": true,
        "formattedDate": "2025_01_19",
        "task_name": "9시40분까지 잘 준비",
        "create_user": "won",
        "task_point": 3,
        "user_name": "온겸",
        "completed": true
      },
      {
        "completed": true,
        "used": true,
        "formattedDate": "2025_01_19",
        "date": {
          "seconds": 1737244800,
          "nanoseconds": 0
        },
        "user_id_to_check": "on",
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "user_name": "온겸",
        "task_point": 3,
        "create_user": "won",
        "user_id": "on",
        "taskId": "t000006"
      },
      {
        "formattedDate": "2025_01_19",
        "task_name": "신발정리",
        "user_id_to_check": "so",
        "create_user": "won",
        "user_id": "so",
        "user_name": "소빈",
        "used": true,
        "task_point": 3,
        "taskId": "t000000",
        "date": {
          "seconds": 1737244800,
          "nanoseconds": 0
        },
        "completed": true
      },
      {
        "formattedDate": "2025_01_19",
        "user_id_to_check": "so",
        "task_name": "이불정리",
        "taskId": "t000001",
        "completed": false,
        "user_id": "so",
        "create_user": "won",
        "used": true,
        "date": {
          "seconds": 1737244800,
          "nanoseconds": 0
        },
        "task_point": 2,
        "user_name": "소빈"
      },
      {
        "used": true,
        "create_user": "won",
        "task_point": 2,
        "user_id_to_check": "so",
        "user_id": "so",
        "user_name": "소빈",
        "completed": true,
        "date": {
          "seconds": 1737244800,
          "nanoseconds": 0
        },
        "taskId": "t000002",
        "task_name": "독서(20분 이상)",
        "formattedDate": "2025_01_19"
      },
      {
        "formattedDate": "2025_01_19",
        "user_id_to_check": "so",
        "user_name": "소빈",
        "date": {
          "seconds": 1737244800,
          "nanoseconds": 0
        },
        "used": true,
        "task_point": 5,
        "user_id": "so",
        "taskId": "t000003",
        "create_user": "won",
        "completed": true,
        "task_name": "단어필사"
      },
      {
        "task_name": "반찬 안남기기",
        "completed": true,
        "taskId": "t000004",
        "create_user": "won",
        "formattedDate": "2025_01_19",
        "user_name": "소빈",
        "user_id_to_check": "so",
        "task_point": 2,
        "used": true,
        "user_id": "so",
        "date": {
          "seconds": 1737244800,
          "nanoseconds": 0
        }
      },
      {
        "task_point": 3,
        "taskId": "t000005",
        "user_name": "소빈",
        "task_name": "9시40분까지 잘 준비",
        "create_user": "won",
        "formattedDate": "2025_01_19",
        "user_id": "so",
        "completed": true,
        "date": {
          "seconds": 1737244800,
          "nanoseconds": 0
        },
        "used": true,
        "user_id_to_check": "so"
      },
      {
        "taskId": "t000007",
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "user_id_to_check": "so",
        "user_id": "so",
        "used": true,
        "create_user": "won",
        "task_point": 3,
        "formattedDate": "2025_01_19",
        "completed": false,
        "user_name": "소빈",
        "date": {
          "seconds": 1737244800,
          "nanoseconds": 0
        }
      },
      {
        "user_id_to_check": "on",
        "task_point": 3,
        "used": true,
        "date": {
          "seconds": 1737331200,
          "nanoseconds": 0
        },
        "taskId": "t000000",
        "formattedDate": "2025_01_20",
        "user_id": "on",
        "create_user": "won",
        "user_name": "온겸",
        "task_name": "신발정리",
        "completed": true
      },
      {
        "used": true,
        "create_user": "won",
        "task_point": 2,
        "user_id_to_check": "on",
        "user_name": "온겸",
        "user_id": "on",
        "completed": true,
        "date": {
          "seconds": 1737331200,
          "nanoseconds": 0
        },
        "task_name": "이불정리",
        "taskId": "t000001",
        "formattedDate": "2025_01_20"
      },
      {
        "task_name": "독서(20분 이상)",
        "completed": true,
        "taskId": "t000002",
        "date": {
          "seconds": 1737331200,
          "nanoseconds": 0
        },
        "user_id": "on",
        "task_point": 2,
        "create_user": "won",
        "user_id_to_check": "on",
        "user_name": "온겸",
        "formattedDate": "2025_01_20",
        "used": true
      },
      {
        "create_user": "won",
        "user_id_to_check": "on",
        "user_name": "온겸",
        "user_id": "on",
        "task_point": 7,
        "date": {
          "seconds": 1737331200,
          "nanoseconds": 0
        },
        "used": true,
        "completed": true,
        "formattedDate": "2025_01_20",
        "task_name": "단어필사",
        "taskId": "t000003"
      },
      {
        "formattedDate": "2025_01_20",
        "user_name": "온겸",
        "completed": true,
        "taskId": "t000004",
        "date": {
          "seconds": 1737331200,
          "nanoseconds": 0
        },
        "user_id": "on",
        "task_point": 2,
        "task_name": "반찬 안남기기",
        "user_id_to_check": "on",
        "create_user": "won",
        "used": true
      },
      {
        "taskId": "t000005",
        "user_name": "온겸",
        "used": true,
        "formattedDate": "2025_01_20",
        "task_name": "9시40분까지 잘 준비",
        "user_id": "on",
        "create_user": "won",
        "completed": true,
        "date": {
          "seconds": 1737331200,
          "nanoseconds": 0
        },
        "task_point": 3,
        "user_id_to_check": "on"
      },
      {
        "user_id_to_check": "on",
        "formattedDate": "2025_01_20",
        "user_name": "온겸",
        "user_id": "on",
        "completed": true,
        "task_point": 3,
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "create_user": "won",
        "date": {
          "seconds": 1737331200,
          "nanoseconds": 0
        },
        "used": true,
        "taskId": "t000006"
      },
      {
        "user_id": "so",
        "completed": true,
        "task_name": "신발정리",
        "task_point": 3,
        "date": {
          "seconds": 1737331200,
          "nanoseconds": 0
        },
        "create_user": "won",
        "formattedDate": "2025_01_20",
        "used": true,
        "user_id_to_check": "so",
        "taskId": "t000000",
        "user_name": "소빈"
      },
      {
        "taskId": "t000001",
        "completed": false,
        "create_user": "won",
        "user_name": "소빈",
        "formattedDate": "2025_01_20",
        "task_name": "이불정리",
        "user_id_to_check": "so",
        "used": true,
        "task_point": 2,
        "date": {
          "seconds": 1737331200,
          "nanoseconds": 0
        },
        "user_id": "so"
      },
      {
        "user_id_to_check": "so",
        "formattedDate": "2025_01_20",
        "create_user": "won",
        "taskId": "t000002",
        "completed": true,
        "date": {
          "seconds": 1737331200,
          "nanoseconds": 0
        },
        "task_name": "독서(20분 이상)",
        "user_name": "소빈",
        "used": true,
        "task_point": 2,
        "user_id": "so"
      },
      {
        "date": {
          "seconds": 1737331200,
          "nanoseconds": 0
        },
        "used": true,
        "task_name": "단어필사",
        "create_user": "won",
        "taskId": "t000003",
        "completed": true,
        "formattedDate": "2025_01_20",
        "user_id": "so",
        "user_name": "소빈",
        "task_point": 5,
        "user_id_to_check": "so"
      },
      {
        "completed": true,
        "taskId": "t000004",
        "user_name": "소빈",
        "create_user": "won",
        "formattedDate": "2025_01_20",
        "task_name": "반찬 안남기기",
        "user_id_to_check": "so",
        "task_point": 2,
        "used": true,
        "date": {
          "seconds": 1737331200,
          "nanoseconds": 0
        },
        "user_id": "so"
      },
      {
        "task_point": 3,
        "formattedDate": "2025_01_20",
        "user_name": "소빈",
        "user_id_to_check": "so",
        "task_name": "9시40분까지 잘 준비",
        "taskId": "t000005",
        "user_id": "so",
        "completed": false,
        "create_user": "won",
        "used": true,
        "date": {
          "seconds": 1737331200,
          "nanoseconds": 0
        }
      },
      {
        "used": true,
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "taskId": "t000007",
        "formattedDate": "2025_01_20",
        "user_id_to_check": "so",
        "create_user": "won",
        "user_id": "so",
        "date": {
          "seconds": 1737331200,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "completed": false,
        "task_point": 3
      },
      {
        "create_user": "won",
        "user_name": "온겸",
        "task_name": "신발정리",
        "user_id_to_check": "on",
        "formattedDate": "2025_01_21",
        "used": true,
        "user_id": "on",
        "taskId": "t000000",
        "date": {
          "seconds": 1737417600,
          "nanoseconds": 0
        },
        "completed": true,
        "task_point": 3
      },
      {
        "user_name": "온겸",
        "taskId": "t000001",
        "date": {
          "seconds": 1737417600,
          "nanoseconds": 0
        },
        "create_user": "won",
        "used": true,
        "completed": true,
        "task_name": "이불정리",
        "user_id": "on",
        "user_id_to_check": "on",
        "formattedDate": "2025_01_21",
        "task_point": 2
      },
      {
        "completed": true,
        "create_user": "won",
        "taskId": "t000002",
        "task_point": 2,
        "user_id": "on",
        "user_id_to_check": "on",
        "used": true,
        "user_name": "온겸",
        "task_name": "독서(20분 이상)",
        "formattedDate": "2025_01_21",
        "date": {
          "seconds": 1737417600,
          "nanoseconds": 0
        }
      },
      {
        "user_id": "on",
        "formattedDate": "2025_01_21",
        "user_name": "온겸",
        "taskId": "t000003",
        "used": true,
        "completed": true,
        "create_user": "won",
        "user_id_to_check": "on",
        "task_name": "단어필사",
        "date": {
          "seconds": 1737417600,
          "nanoseconds": 0
        },
        "task_point": 5
      },
      {
        "formattedDate": "2025_01_21",
        "user_id_to_check": "on",
        "task_name": "반찬 안남기기",
        "taskId": "t000004",
        "completed": true,
        "user_id": "on",
        "create_user": "won",
        "used": true,
        "date": {
          "seconds": 1737417600,
          "nanoseconds": 0
        },
        "task_point": 2,
        "user_name": "온겸"
      },
      {
        "task_point": 3,
        "date": {
          "seconds": 1737417600,
          "nanoseconds": 0
        },
        "create_user": "won",
        "user_id": "on",
        "user_id_to_check": "on",
        "task_name": "9시40분까지 잘 준비",
        "used": true,
        "taskId": "t000005",
        "user_name": "온겸",
        "formattedDate": "2025_01_21",
        "completed": true
      },
      {
        "user_id": "on",
        "user_id_to_check": "on",
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "completed": false,
        "user_name": "온겸",
        "create_user": "won",
        "task_point": 3,
        "taskId": "t000006",
        "used": true,
        "date": {
          "seconds": 1737417600,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_21"
      },
      {
        "formattedDate": "2025_01_21",
        "user_id_to_check": "so",
        "task_name": "신발정리",
        "task_point": 3,
        "user_name": "소빈",
        "taskId": "t000000",
        "create_user": "won",
        "user_id": "so",
        "completed": true,
        "used": true,
        "date": {
          "seconds": 1737417600,
          "nanoseconds": 0
        }
      },
      {
        "used": true,
        "taskId": "t000001",
        "task_name": "이불정리",
        "create_user": "won",
        "formattedDate": "2025_01_21",
        "user_id_to_check": "so",
        "task_point": 2,
        "date": {
          "seconds": 1737417600,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "user_id": "so",
        "completed": true
      },
      {
        "task_name": "독서(20분 이상)",
        "used": true,
        "create_user": "won",
        "user_name": "소빈",
        "task_point": 2,
        "formattedDate": "2025_01_21",
        "date": {
          "seconds": 1737417600,
          "nanoseconds": 0
        },
        "completed": true,
        "user_id": "so",
        "user_id_to_check": "so",
        "taskId": "t000002"
      },
      {
        "user_name": "소빈",
        "date": {
          "seconds": 1737417600,
          "nanoseconds": 0
        },
        "completed": true,
        "user_id": "so",
        "used": true,
        "task_point": 6,
        "formattedDate": "2025_01_21",
        "task_name": "단어필사",
        "taskId": "t000003",
        "create_user": "won",
        "user_id_to_check": "so"
      },
      {
        "create_user": "won",
        "completed": true,
        "user_name": "소빈",
        "date": {
          "seconds": 1737417600,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_21",
        "used": true,
        "taskId": "t000004",
        "user_id": "so",
        "task_name": "반찬 안남기기",
        "task_point": 2,
        "user_id_to_check": "so"
      },
      {
        "taskId": "t000005",
        "formattedDate": "2025_01_21",
        "user_id_to_check": "so",
        "date": {
          "seconds": 1737417600,
          "nanoseconds": 0
        },
        "user_id": "so",
        "create_user": "won",
        "user_name": "소빈",
        "task_name": "9시40분까지 잘 준비",
        "task_point": 3,
        "completed": true,
        "used": true
      },
      {
        "user_id": "so",
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "create_user": "won",
        "user_name": "소빈",
        "formattedDate": "2025_01_21",
        "completed": true,
        "task_point": 4,
        "date": {
          "seconds": 1737417600,
          "nanoseconds": 0
        },
        "taskId": "t000007",
        "user_id_to_check": "so",
        "used": true
      },
      {
        "completed": true,
        "create_user": "won",
        "date": {
          "seconds": 1737504000,
          "nanoseconds": 0
        },
        "user_name": "온겸",
        "user_id_to_check": "on",
        "taskId": "t000000",
        "task_point": 3,
        "formattedDate": "2025_01_22",
        "user_id": "on",
        "used": true,
        "task_name": "신발정리"
      },
      {
        "taskId": "t000001",
        "date": {
          "seconds": 1737504000,
          "nanoseconds": 0
        },
        "task_point": 2,
        "create_user": "won",
        "user_name": "온겸",
        "formattedDate": "2025_01_22",
        "user_id_to_check": "on",
        "user_id": "on",
        "completed": true,
        "task_name": "이불정리",
        "used": true
      },
      {
        "used": true,
        "completed": true,
        "task_name": "독서(20분 이상)",
        "task_point": 2,
        "date": {
          "seconds": 1737504000,
          "nanoseconds": 0
        },
        "user_id": "on",
        "formattedDate": "2025_01_22",
        "taskId": "t000002",
        "user_id_to_check": "on",
        "create_user": "won",
        "user_name": "온겸"
      },
      {
        "formattedDate": "2025_01_22",
        "taskId": "t000003",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1737504000,
          "nanoseconds": 0
        },
        "create_user": "won",
        "user_id": "on",
        "user_name": "온겸",
        "task_name": "단어필사",
        "task_point": 6,
        "completed": true,
        "used": true
      },
      {
        "used": true,
        "create_user": "won",
        "task_name": "반찬 안남기기",
        "taskId": "t000004",
        "formattedDate": "2025_01_22",
        "user_id_to_check": "on",
        "task_point": 2,
        "date": {
          "seconds": 1737504000,
          "nanoseconds": 0
        },
        "user_name": "온겸",
        "user_id": "on",
        "completed": true
      },
      {
        "user_id": "on",
        "create_user": "won",
        "formattedDate": "2025_01_22",
        "completed": true,
        "task_name": "9시40분까지 잘 준비",
        "task_point": 3,
        "date": {
          "seconds": 1737504000,
          "nanoseconds": 0
        },
        "used": true,
        "taskId": "t000005",
        "user_name": "온겸",
        "user_id_to_check": "on"
      },
      {
        "date": {
          "seconds": 1737504000,
          "nanoseconds": 0
        },
        "user_id": "on",
        "completed": true,
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "create_user": "won",
        "formattedDate": "2025_01_22",
        "task_point": 3,
        "user_id_to_check": "on",
        "user_name": "온겸",
        "taskId": "t000006",
        "used": true
      },
      {
        "create_user": "won",
        "task_name": "신발정리",
        "user_name": "소빈",
        "formattedDate": "2025_01_22",
        "user_id_to_check": "so",
        "user_id": "so",
        "used": true,
        "completed": true,
        "taskId": "t000000",
        "date": {
          "seconds": 1737504000,
          "nanoseconds": 0
        },
        "task_point": 3
      },
      {
        "user_name": "소빈",
        "create_user": "won",
        "taskId": "t000001",
        "user_id": "so",
        "used": true,
        "user_id_to_check": "so",
        "task_point": 2,
        "formattedDate": "2025_01_22",
        "completed": true,
        "date": {
          "seconds": 1737504000,
          "nanoseconds": 0
        },
        "task_name": "이불정리"
      },
      {
        "used": true,
        "user_name": "소빈",
        "task_point": 2,
        "date": {
          "seconds": 1737504000,
          "nanoseconds": 0
        },
        "user_id": "so",
        "user_id_to_check": "so",
        "task_name": "독서(20분 이상)",
        "create_user": "won",
        "formattedDate": "2025_01_22",
        "completed": true,
        "taskId": "t000002"
      },
      {
        "user_id": "so",
        "user_name": "소빈",
        "task_name": "단어필사",
        "task_point": 5,
        "completed": true,
        "taskId": "t000003",
        "create_user": "won",
        "date": {
          "seconds": 1737504000,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_22",
        "used": true,
        "user_id_to_check": "so"
      },
      {
        "create_user": "won",
        "formattedDate": "2025_01_22",
        "date": {
          "seconds": 1737504000,
          "nanoseconds": 0
        },
        "task_name": "반찬 안남기기",
        "used": true,
        "task_point": 2,
        "user_name": "소빈",
        "user_id_to_check": "so",
        "completed": true,
        "taskId": "t000004",
        "user_id": "so"
      },
      {
        "create_user": "won",
        "user_name": "소빈",
        "formattedDate": "2025_01_22",
        "taskId": "t000005",
        "date": {
          "seconds": 1737504000,
          "nanoseconds": 0
        },
        "used": true,
        "task_name": "9시40분까지 잘 준비",
        "user_id_to_check": "so",
        "task_point": 3,
        "completed": true,
        "user_id": "so"
      },
      {
        "formattedDate": "2025_01_22",
        "create_user": "won",
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "task_point": 3,
        "date": {
          "seconds": 1737504000,
          "nanoseconds": 0
        },
        "user_id": "so",
        "taskId": "t000007",
        "used": true,
        "user_name": "소빈",
        "user_id_to_check": "so",
        "completed": true
      },
      {
        "create_user": "won",
        "task_name": "신발정리",
        "used": true,
        "task_point": 3,
        "user_id": "on",
        "user_name": "온겸",
        "date": {
          "seconds": 1737590400,
          "nanoseconds": 0
        },
        "user_id_to_check": "on",
        "formattedDate": "2025_01_23",
        "completed": true,
        "taskId": "t000000"
      },
      {
        "formattedDate": "2025_01_23",
        "create_user": "won",
        "date": {
          "seconds": 1737590400,
          "nanoseconds": 0
        },
        "task_point": 2,
        "task_name": "이불정리",
        "user_id": "on",
        "taskId": "t000001",
        "used": true,
        "completed": true,
        "user_name": "온겸",
        "user_id_to_check": "on"
      },
      {
        "completed": true,
        "user_name": "온겸",
        "create_user": "won",
        "date": {
          "seconds": 1737590400,
          "nanoseconds": 0
        },
        "used": true,
        "user_id_to_check": "on",
        "task_point": 2,
        "task_name": "독서(20분 이상)",
        "taskId": "t000002",
        "formattedDate": "2025_01_23",
        "user_id": "on"
      },
      {
        "create_user": "won",
        "user_name": "온겸",
        "taskId": "t000003",
        "user_id_to_check": "on",
        "used": true,
        "user_id": "on",
        "task_point": 5,
        "formattedDate": "2025_01_23",
        "completed": true,
        "date": {
          "seconds": 1737590400,
          "nanoseconds": 0
        },
        "task_name": "단어필사"
      },
      {
        "completed": true,
        "task_name": "반찬 안남기기",
        "formattedDate": "2025_01_23",
        "create_user": "won",
        "task_point": 2,
        "date": {
          "seconds": 1737590400,
          "nanoseconds": 0
        },
        "used": true,
        "user_id_to_check": "on",
        "taskId": "t000004",
        "user_id": "on",
        "user_name": "온겸"
      },
      {
        "user_id_to_check": "on",
        "create_user": "won",
        "completed": true,
        "task_name": "9시40분까지 잘 준비",
        "used": true,
        "user_name": "온겸",
        "date": {
          "seconds": 1737590400,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_23",
        "task_point": 3,
        "taskId": "t000005",
        "user_id": "on"
      },
      {
        "formattedDate": "2025_01_23",
        "date": {
          "seconds": 1737590400,
          "nanoseconds": 0
        },
        "task_point": 3,
        "create_user": "won",
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "user_id": "on",
        "taskId": "t000006",
        "used": true,
        "user_id_to_check": "on",
        "user_name": "온겸",
        "completed": true
      },
      {
        "user_id_to_check": "so",
        "user_id": "so",
        "user_name": "소빈",
        "completed": true,
        "formattedDate": "2025_01_23",
        "taskId": "t000000",
        "date": {
          "seconds": 1737590400,
          "nanoseconds": 0
        },
        "used": true,
        "task_point": 3,
        "create_user": "won",
        "task_name": "신발정리"
      },
      {
        "completed": true,
        "formattedDate": "2025_01_23",
        "used": true,
        "task_name": "이불정리",
        "task_point": 2,
        "user_id_to_check": "so",
        "user_name": "소빈",
        "taskId": "t000001",
        "date": {
          "seconds": 1737590400,
          "nanoseconds": 0
        },
        "user_id": "so",
        "create_user": "won"
      },
      {
        "completed": true,
        "task_name": "독서(20분 이상)",
        "formattedDate": "2025_01_23",
        "task_point": 2,
        "date": {
          "seconds": 1737590400,
          "nanoseconds": 0
        },
        "create_user": "won",
        "user_id_to_check": "so",
        "taskId": "t000002",
        "used": true,
        "user_id": "so",
        "user_name": "소빈"
      },
      {
        "user_id_to_check": "so",
        "user_id": "so",
        "formattedDate": "2025_01_23",
        "date": {
          "seconds": 1737590400,
          "nanoseconds": 0
        },
        "create_user": "won",
        "user_name": "소빈",
        "used": true,
        "completed": true,
        "task_name": "단어필사",
        "taskId": "t000003",
        "task_point": 5
      },
      {
        "user_id_to_check": "so",
        "task_point": 2,
        "user_name": "소빈",
        "taskId": "t000004",
        "used": true,
        "user_id": "so",
        "completed": true,
        "date": {
          "seconds": 1737590400,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_23",
        "create_user": "won",
        "task_name": "반찬 안남기기"
      },
      {
        "date": {
          "seconds": 1737590400,
          "nanoseconds": 0
        },
        "create_user": "won",
        "user_id": "so",
        "user_id_to_check": "so",
        "user_name": "소빈",
        "task_name": "9시40분까지 잘 준비",
        "taskId": "t000005",
        "used": true,
        "task_point": 3,
        "formattedDate": "2025_01_23",
        "completed": true
      },
      {
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "completed": true,
        "user_id_to_check": "so",
        "used": true,
        "create_user": "won",
        "date": {
          "seconds": 1737590400,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "user_id": "so",
        "task_point": 3,
        "formattedDate": "2025_01_23",
        "taskId": "t000007"
      },
      {
        "used": true,
        "date": {
          "seconds": 1737676800,
          "nanoseconds": 0
        },
        "taskId": "t000000",
        "task_point": 5,
        "user_id_to_check": "on",
        "create_user": "won",
        "completed": true,
        "task_name": "신발정리",
        "formattedDate": "2025_01_24",
        "user_name": "온겸",
        "user_id": "on"
      },
      {
        "date": {
          "seconds": 1737676800,
          "nanoseconds": 0
        },
        "used": true,
        "create_user": "won",
        "taskId": "t000001",
        "user_name": "온겸",
        "formattedDate": "2025_01_24",
        "user_id_to_check": "on",
        "completed": true,
        "task_point": 2,
        "task_name": "이불정리",
        "user_id": "on"
      },
      {
        "user_id_to_check": "on",
        "user_id": "on",
        "formattedDate": "2025_01_24",
        "create_user": "won",
        "taskId": "t000002",
        "user_name": "온겸",
        "task_point": 1,
        "used": true,
        "date": {
          "seconds": 1737676800,
          "nanoseconds": 0
        },
        "completed": true,
        "task_name": "독서(20분 이상)"
      },
      {
        "task_point": 5,
        "completed": true,
        "create_user": "won",
        "taskId": "t000003",
        "date": {
          "seconds": 1737676800,
          "nanoseconds": 0
        },
        "user_id_to_check": "on",
        "used": true,
        "user_name": "온겸",
        "formattedDate": "2025_01_24",
        "user_id": "on",
        "task_name": "단어필사"
      },
      {
        "completed": true,
        "task_point": 2,
        "taskId": "t000004",
        "date": {
          "seconds": 1737676800,
          "nanoseconds": 0
        },
        "task_name": "반찬 안남기기",
        "formattedDate": "2025_01_24",
        "used": true,
        "user_name": "온겸",
        "create_user": "won",
        "user_id_to_check": "on",
        "user_id": "on"
      },
      {
        "user_id": "on",
        "used": true,
        "create_user": "won",
        "completed": true,
        "user_id_to_check": "on",
        "formattedDate": "2025_01_24",
        "task_point": 3,
        "date": {
          "seconds": 1737676800,
          "nanoseconds": 0
        },
        "taskId": "t000005",
        "task_name": "9시40분까지 잘 준비",
        "user_name": "온겸"
      },
      {
        "completed": true,
        "task_point": 3,
        "user_id": "on",
        "create_user": "won",
        "formattedDate": "2025_01_24",
        "taskId": "t000006",
        "user_name": "온겸",
        "user_id_to_check": "on",
        "used": true,
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "date": {
          "seconds": 1737676800,
          "nanoseconds": 0
        }
      },
      {
        "completed": true,
        "used": true,
        "user_id_to_check": "so",
        "date": {
          "seconds": 1737676800,
          "nanoseconds": 0
        },
        "taskId": "t000000",
        "user_name": "소빈",
        "task_name": "신발정리",
        "user_id": "so",
        "task_point": 6,
        "formattedDate": "2025_01_24",
        "create_user": "won"
      },
      {
        "taskId": "t000001",
        "formattedDate": "2025_01_24",
        "create_user": "won",
        "user_id": "so",
        "user_name": "소빈",
        "task_point": 2,
        "user_id_to_check": "so",
        "used": true,
        "date": {
          "seconds": 1737676800,
          "nanoseconds": 0
        },
        "task_name": "이불정리",
        "completed": true
      },
      {
        "task_point": 2,
        "date": {
          "seconds": 1737676800,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_24",
        "user_id": "so",
        "taskId": "t000002",
        "create_user": "won",
        "user_name": "소빈",
        "completed": true,
        "used": true,
        "task_name": "독서(20분 이상)",
        "user_id_to_check": "so"
      },
      {
        "date": {
          "seconds": 1737676800,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_24",
        "create_user": "won",
        "completed": true,
        "taskId": "t000003",
        "task_name": "단어필사",
        "task_point": 5,
        "used": true,
        "user_name": "소빈",
        "user_id_to_check": "so",
        "user_id": "so"
      },
      {
        "completed": true,
        "user_id": "so",
        "task_point": 2,
        "formattedDate": "2025_01_24",
        "create_user": "won",
        "taskId": "t000004",
        "user_name": "소빈",
        "user_id_to_check": "so",
        "used": true,
        "task_name": "반찬 안남기기",
        "date": {
          "seconds": 1737676800,
          "nanoseconds": 0
        }
      },
      {
        "task_point": 3,
        "used": true,
        "create_user": "won",
        "user_name": "소빈",
        "taskId": "t000005",
        "completed": true,
        "task_name": "9시40분까지 잘 준비",
        "date": {
          "seconds": 1737676800,
          "nanoseconds": 0
        },
        "user_id": "so",
        "user_id_to_check": "so",
        "formattedDate": "2025_01_24"
      },
      {
        "date": {
          "seconds": 1737676800,
          "nanoseconds": 0
        },
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "taskId": "t000007",
        "create_user": "won",
        "user_id_to_check": "so",
        "completed": true,
        "formattedDate": "2025_01_24",
        "user_id": "so",
        "user_name": "소빈",
        "used": true,
        "task_point": 3
      },
      {
        "used": true,
        "user_id": "on",
        "user_name": "온겸",
        "formattedDate": "2025_01_25",
        "create_user": "won",
        "taskId": "t000000",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1737763200,
          "nanoseconds": 0
        },
        "task_point": 3,
        "task_name": "신발정리",
        "completed": true
      },
      {
        "user_id_to_check": "on",
        "formattedDate": "2025_01_25",
        "task_point": 2,
        "completed": true,
        "user_id": "on",
        "used": true,
        "create_user": "won",
        "user_name": "온겸",
        "date": {
          "seconds": 1737763200,
          "nanoseconds": 0
        },
        "taskId": "t000001",
        "task_name": "이불정리"
      },
      {
        "user_id_to_check": "on",
        "formattedDate": "2025_01_25",
        "user_id": "on",
        "create_user": "won",
        "taskId": "t000002",
        "user_name": "온겸",
        "task_point": 2,
        "used": true,
        "date": {
          "seconds": 1737763200,
          "nanoseconds": 0
        },
        "completed": true,
        "task_name": "독서(20분 이상)"
      },
      {
        "task_point": 5,
        "task_name": "단어필사",
        "user_id": "on",
        "used": true,
        "completed": true,
        "taskId": "t000003",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1737763200,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_25",
        "user_name": "온겸",
        "create_user": "won"
      },
      {
        "task_point": 2,
        "completed": true,
        "taskId": "t000004",
        "date": {
          "seconds": 1737763200,
          "nanoseconds": 0
        },
        "task_name": "반찬 안남기기",
        "formattedDate": "2025_01_25",
        "used": true,
        "user_name": "온겸",
        "create_user": "won",
        "user_id_to_check": "on",
        "user_id": "on"
      },
      {
        "user_id": "on",
        "user_name": "온겸",
        "task_name": "9시40분까지 잘 준비",
        "user_id_to_check": "on",
        "create_user": "won",
        "formattedDate": "2025_01_25",
        "task_point": 3,
        "used": true,
        "taskId": "t000005",
        "date": {
          "seconds": 1737763200,
          "nanoseconds": 0
        },
        "completed": true
      },
      {
        "formattedDate": "2025_01_25",
        "taskId": "t000006",
        "used": true,
        "user_name": "온겸",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1737763200,
          "nanoseconds": 0
        },
        "user_id": "on",
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "completed": true,
        "create_user": "won",
        "task_point": 3
      },
      {
        "user_id_to_check": "so",
        "user_id": "so",
        "user_name": "소빈",
        "completed": true,
        "taskId": "t000000",
        "formattedDate": "2025_01_25",
        "used": true,
        "date": {
          "seconds": 1737763200,
          "nanoseconds": 0
        },
        "task_point": 3,
        "task_name": "신발정리",
        "create_user": "won"
      },
      {
        "user_id_to_check": "so",
        "task_point": 2,
        "used": true,
        "taskId": "t000001",
        "task_name": "이불정리",
        "create_user": "won",
        "user_name": "소빈",
        "formattedDate": "2025_01_25",
        "date": {
          "seconds": 1737763200,
          "nanoseconds": 0
        },
        "user_id": "so",
        "completed": true
      },
      {
        "used": true,
        "create_user": "won",
        "user_id_to_check": "so",
        "taskId": "t000002",
        "formattedDate": "2025_01_25",
        "completed": true,
        "user_name": "소빈",
        "task_name": "독서(20분 이상)",
        "user_id": "so",
        "task_point": 2,
        "date": {
          "seconds": 1737763200,
          "nanoseconds": 0
        }
      },
      {
        "completed": true,
        "task_name": "단어필사",
        "user_name": "소빈",
        "task_point": 5,
        "date": {
          "seconds": 1737763200,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_25",
        "taskId": "t000003",
        "user_id_to_check": "so",
        "used": true,
        "user_id": "so",
        "create_user": "won"
      },
      {
        "formattedDate": "2025_01_25",
        "create_user": "won",
        "used": true,
        "user_id_to_check": "so",
        "date": {
          "seconds": 1737763200,
          "nanoseconds": 0
        },
        "task_name": "반찬 안남기기",
        "task_point": 2,
        "taskId": "t000004",
        "user_id": "so",
        "user_name": "소빈",
        "completed": true
      },
      {
        "used": true,
        "completed": true,
        "user_id": "so",
        "taskId": "t000005",
        "date": {
          "seconds": 1737763200,
          "nanoseconds": 0
        },
        "task_name": "9시40분까지 잘 준비",
        "user_id_to_check": "so",
        "user_name": "소빈",
        "task_point": 3,
        "create_user": "won",
        "formattedDate": "2025_01_25"
      },
      {
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "create_user": "won",
        "used": true,
        "user_name": "소빈",
        "taskId": "t000007",
        "user_id": "so",
        "formattedDate": "2025_01_25",
        "date": {
          "seconds": 1737763200,
          "nanoseconds": 0
        },
        "user_id_to_check": "so",
        "task_point": 3,
        "completed": true
      },
      {
        "user_id": "on",
        "used": true,
        "user_id_to_check": "on",
        "taskId": "t000000",
        "create_user": "won",
        "formattedDate": "2025_01_26",
        "task_point": 3,
        "user_name": "온겸",
        "task_name": "신발정리",
        "completed": false,
        "date": {
          "seconds": 1737849600,
          "nanoseconds": 0
        }
      },
      {
        "task_point": 2,
        "completed": true,
        "create_user": "won",
        "task_name": "이불정리",
        "user_id": "on",
        "date": {
          "seconds": 1737849600,
          "nanoseconds": 0
        },
        "user_name": "온겸",
        "taskId": "t000001",
        "used": true,
        "formattedDate": "2025_01_26",
        "user_id_to_check": "on"
      },
      {
        "user_id": "on",
        "task_point": 2,
        "taskId": "t000002",
        "create_user": "won",
        "formattedDate": "2025_01_26",
        "user_id_to_check": "on",
        "completed": false,
        "date": {
          "seconds": 1737849600,
          "nanoseconds": 0
        },
        "user_name": "온겸",
        "used": true,
        "task_name": "독서(20분 이상)"
      },
      {
        "user_id_to_check": "on",
        "user_id": "on",
        "formattedDate": "2025_01_26",
        "user_name": "온겸",
        "used": true,
        "task_point": 4,
        "task_name": "단어필사",
        "taskId": "t000003",
        "date": {
          "seconds": 1737849600,
          "nanoseconds": 0
        },
        "completed": true,
        "create_user": "won"
      },
      {
        "user_id": "on",
        "used": true,
        "user_name": "온겸",
        "formattedDate": "2025_01_26",
        "create_user": "won",
        "taskId": "t000004",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1737849600,
          "nanoseconds": 0
        },
        "task_point": 2,
        "task_name": "반찬 안남기기",
        "completed": true
      },
      {
        "user_id_to_check": "on",
        "task_point": 3,
        "task_name": "9시40분까지 잘 준비",
        "completed": false,
        "taskId": "t000005",
        "user_id": "on",
        "create_user": "won",
        "user_name": "온겸",
        "used": true,
        "date": {
          "seconds": 1737849600,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_26"
      },
      {
        "used": true,
        "completed": true,
        "user_id": "on",
        "taskId": "t000006",
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "date": {
          "seconds": 1737849600,
          "nanoseconds": 0
        },
        "user_id_to_check": "on",
        "user_name": "온겸",
        "task_point": 3,
        "create_user": "won",
        "formattedDate": "2025_01_26"
      },
      {
        "user_name": "소빈",
        "taskId": "t000000",
        "task_point": 3,
        "task_name": "신발정리",
        "user_id_to_check": "so",
        "completed": false,
        "user_id": "so",
        "used": true,
        "formattedDate": "2025_01_26",
        "date": {
          "seconds": 1737849600,
          "nanoseconds": 0
        },
        "create_user": "won"
      },
      {
        "user_name": "소빈",
        "task_point": 2,
        "date": {
          "seconds": 1737849600,
          "nanoseconds": 0
        },
        "task_name": "이불정리",
        "completed": true,
        "create_user": "won",
        "user_id": "so",
        "user_id_to_check": "so",
        "used": true,
        "formattedDate": "2025_01_26",
        "taskId": "t000001"
      },
      {
        "task_point": 2,
        "completed": false,
        "task_name": "독서(20분 이상)",
        "used": true,
        "user_name": "소빈",
        "create_user": "won",
        "user_id": "so",
        "formattedDate": "2025_01_26",
        "user_id_to_check": "so",
        "taskId": "t000002",
        "date": {
          "seconds": 1737849600,
          "nanoseconds": 0
        }
      },
      {
        "completed": true,
        "user_id": "so",
        "date": {
          "seconds": 1737849600,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_26",
        "taskId": "t000003",
        "task_name": "단어필사",
        "user_id_to_check": "so",
        "user_name": "소빈",
        "task_point": 5,
        "used": true,
        "create_user": "won"
      },
      {
        "used": true,
        "completed": true,
        "user_id": "so",
        "task_name": "반찬 안남기기",
        "date": {
          "seconds": 1737849600,
          "nanoseconds": 0
        },
        "taskId": "t000004",
        "create_user": "won",
        "user_name": "소빈",
        "user_id_to_check": "so",
        "task_point": 2,
        "formattedDate": "2025_01_26"
      },
      {
        "formattedDate": "2025_01_26",
        "create_user": "won",
        "task_point": 3,
        "user_id": "so",
        "user_name": "소빈",
        "completed": false,
        "used": true,
        "user_id_to_check": "so",
        "taskId": "t000005",
        "date": {
          "seconds": 1737849600,
          "nanoseconds": 0
        },
        "task_name": "9시40분까지 잘 준비"
      },
      {
        "formattedDate": "2025_01_26",
        "user_name": "소빈",
        "user_id": "so",
        "create_user": "won",
        "completed": true,
        "task_point": 3,
        "used": true,
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "user_id_to_check": "so",
        "date": {
          "seconds": 1737849600,
          "nanoseconds": 0
        },
        "taskId": "t000007"
      },
      {
        "user_id_to_check": "on",
        "taskId": "t000000",
        "create_user": "won",
        "task_point": 3,
        "user_id": "on",
        "date": {
          "seconds": 1737936000,
          "nanoseconds": 0
        },
        "task_name": "신발정리",
        "user_name": "온겸",
        "formattedDate": "2025_01_27",
        "used": true,
        "completed": true
      },
      {
        "used": true,
        "task_name": "이불정리",
        "user_id_to_check": "on",
        "task_point": 2,
        "completed": false,
        "taskId": "t000001",
        "create_user": "won",
        "date": {
          "seconds": 1737936000,
          "nanoseconds": 0
        },
        "user_name": "온겸",
        "formattedDate": "2025_01_27",
        "user_id": "on"
      },
      {
        "completed": false,
        "formattedDate": "2025_01_27",
        "user_name": "온겸",
        "taskId": "t000002",
        "user_id_to_check": "on",
        "task_point": 2,
        "used": true,
        "task_name": "독서(20분 이상)",
        "date": {
          "seconds": 1737936000,
          "nanoseconds": 0
        },
        "create_user": "won",
        "user_id": "on"
      },
      {
        "create_user": "won",
        "user_name": "온겸",
        "formattedDate": "2025_01_27",
        "used": true,
        "date": {
          "seconds": 1737936000,
          "nanoseconds": 0
        },
        "task_point": 5,
        "task_name": "단어필사",
        "user_id_to_check": "on",
        "taskId": "t000003",
        "completed": true,
        "user_id": "on"
      },
      {
        "completed": true,
        "task_point": 2,
        "user_id_to_check": "on",
        "user_name": "온겸",
        "taskId": "t000004",
        "task_name": "반찬 안남기기",
        "create_user": "won",
        "used": true,
        "user_id": "on",
        "formattedDate": "2025_01_27",
        "date": {
          "seconds": 1737936000,
          "nanoseconds": 0
        }
      },
      {
        "task_point": 3,
        "used": true,
        "taskId": "t000005",
        "completed": false,
        "user_name": "온겸",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1737936000,
          "nanoseconds": 0
        },
        "user_id": "on",
        "formattedDate": "2025_01_27",
        "create_user": "won",
        "task_name": "9시40분까지 잘 준비"
      },
      {
        "completed": true,
        "user_id": "on",
        "date": {
          "seconds": 1737936000,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_27",
        "taskId": "t000006",
        "task_name": "저녁밥 먹고 스쿼트 50개",
        "user_id_to_check": "on",
        "user_name": "온겸",
        "task_point": 3,
        "used": true,
        "create_user": "won"
      },
      {
        "taskId": "t000000",
        "task_point": 3,
        "create_user": "won",
        "used": true,
        "user_id": "so",
        "task_name": "신발정리",
        "completed": true,
        "user_name": "소빈",
        "formattedDate": "2025_01_27",
        "user_id_to_check": "so",
        "date": {
          "seconds": 1737936000,
          "nanoseconds": 0
        }
      },
      {
        "date": {
          "seconds": 1737936000,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_27",
        "used": true,
        "completed": false,
        "task_name": "이불정리",
        "taskId": "t000001",
        "user_name": "소빈",
        "user_id_to_check": "so",
        "user_id": "so",
        "create_user": "won",
        "task_point": 2
      },
      {
        "create_user": "won",
        "user_id": "so",
        "user_name": "소빈",
        "task_point": 2,
        "used": true,
        "task_name": "독서(20분 이상)",
        "formattedDate": "2025_01_27",
        "taskId": "t000002",
        "date": {
          "seconds": 1737936000,
          "nanoseconds": 0
        },
        "user_id_to_check": "so",
        "completed": false
      },
      {
        "user_id_to_check": "so",
        "user_id": "so",
        "completed": true,
        "taskId": "t000003",
        "used": true,
        "date": {
          "seconds": 1737936000,
          "nanoseconds": 0
        },
        "create_user": "won",
        "user_name": "소빈",
        "task_point": 5,
        "formattedDate": "2025_01_27",
        "task_name": "단어필사"
      },
      {
        "task_name": "반찬 안남기기",
        "user_id_to_check": "so",
        "user_id": "so",
        "task_point": 2,
        "date": {
          "seconds": 1737936000,
          "nanoseconds": 0
        },
        "taskId": "t000004",
        "create_user": "won",
        "formattedDate": "2025_01_27",
        "completed": true,
        "used": true,
        "user_name": "소빈"
      },
      {
        "create_user": "won",
        "user_name": "소빈",
        "user_id": "so",
        "formattedDate": "2025_01_27",
        "task_point": 3,
        "completed": false,
        "used": true,
        "task_name": "9시40분까지 잘 준비",
        "user_id_to_check": "so",
        "date": {
          "seconds": 1737936000,
          "nanoseconds": 0
        },
        "taskId": "t000005"
      },
      {
        "task_point": 3,
        "taskId": "t000007",
        "create_user": "won",
        "user_name": "소빈",
        "completed": true,
        "user_id": "so",
        "used": true,
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "date": {
          "seconds": 1737936000,
          "nanoseconds": 0
        },
        "user_id_to_check": "so",
        "formattedDate": "2025_01_27"
      },
      {
        "date": {
          "seconds": 1738022400,
          "nanoseconds": 0
        },
        "create_user": "won",
        "formattedDate": "2025_01_28",
        "completed": true,
        "task_name": "신발정리",
        "task_point": 3,
        "taskId": "t000000",
        "used": true,
        "user_name": "온겸",
        "user_id_to_check": "on",
        "user_id": "on"
      },
      {
        "completed": true,
        "create_user": "won",
        "task_name": "이불정리",
        "user_name": "온겸",
        "user_id": "on",
        "used": true,
        "formattedDate": "2025_01_28",
        "task_point": 2,
        "date": {
          "seconds": 1738022400,
          "nanoseconds": 0
        },
        "user_id_to_check": "on",
        "taskId": "t000001"
      },
      {
        "date": {
          "seconds": 1738022400,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_28",
        "create_user": "won",
        "user_name": "온겸",
        "used": true,
        "task_name": "독서(20분 이상)",
        "user_id_to_check": "on",
        "user_id": "on",
        "completed": false,
        "task_point": 2,
        "taskId": "t000002"
      },
      {
        "completed": true,
        "date": {
          "seconds": 1738022400,
          "nanoseconds": 0
        },
        "user_id": "on",
        "user_name": "온겸",
        "task_point": 5,
        "user_id_to_check": "on",
        "taskId": "t000003",
        "create_user": "won",
        "task_name": "단어필사",
        "used": true,
        "formattedDate": "2025_01_28"
      },
      {
        "user_id": "on",
        "formattedDate": "2025_01_28",
        "date": {
          "seconds": 1738022400,
          "nanoseconds": 0
        },
        "task_point": 2,
        "task_name": "반찬 안남기기",
        "used": true,
        "user_name": "온겸",
        "taskId": "t000004",
        "create_user": "won",
        "completed": false,
        "user_id_to_check": "on"
      },
      {
        "used": true,
        "user_id_to_check": "on",
        "user_name": "온겸",
        "task_point": 3,
        "formattedDate": "2025_01_28",
        "user_id": "on",
        "create_user": "won",
        "taskId": "t000005",
        "task_name": "9시40분까지 잘 준비",
        "date": {
          "seconds": 1738022400,
          "nanoseconds": 0
        },
        "completed": false
      },
      {
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "user_id": "on",
        "task_point": 3,
        "date": {
          "seconds": 1738022400,
          "nanoseconds": 0
        },
        "taskId": "t000006",
        "used": true,
        "formattedDate": "2025_01_28",
        "create_user": "won",
        "completed": true,
        "user_name": "온겸",
        "user_id_to_check": "on"
      },
      {
        "date": {
          "seconds": 1738022400,
          "nanoseconds": 0
        },
        "completed": true,
        "used": true,
        "task_name": "신발정리",
        "task_point": 3,
        "user_id": "so",
        "user_id_to_check": "so",
        "formattedDate": "2025_01_28",
        "create_user": "won",
        "user_name": "소빈",
        "taskId": "t000000"
      },
      {
        "taskId": "t000001",
        "date": {
          "seconds": 1738022400,
          "nanoseconds": 0
        },
        "task_point": 2,
        "user_name": "소빈",
        "formattedDate": "2025_01_28",
        "user_id": "so",
        "used": true,
        "task_name": "이불정리",
        "completed": true,
        "create_user": "won",
        "user_id_to_check": "so"
      },
      {
        "date": {
          "seconds": 1738022400,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_28",
        "create_user": "won",
        "user_name": "소빈",
        "used": true,
        "task_name": "독서(20분 이상)",
        "user_id_to_check": "so",
        "user_id": "so",
        "completed": false,
        "task_point": 2,
        "taskId": "t000002"
      },
      {
        "date": {
          "seconds": 1738022400,
          "nanoseconds": 0
        },
        "create_user": "won",
        "user_id": "so",
        "user_id_to_check": "so",
        "user_name": "소빈",
        "task_name": "단어필사",
        "taskId": "t000003",
        "used": true,
        "task_point": 5,
        "completed": true,
        "formattedDate": "2025_01_28"
      },
      {
        "completed": true,
        "create_user": "won",
        "task_name": "반찬 안남기기",
        "formattedDate": "2025_01_28",
        "date": {
          "seconds": 1738022400,
          "nanoseconds": 0
        },
        "taskId": "t000004",
        "user_id_to_check": "so",
        "task_point": 2,
        "used": true,
        "user_name": "소빈",
        "user_id": "so"
      },
      {
        "user_id": "so",
        "user_id_to_check": "so",
        "create_user": "won",
        "task_point": 3,
        "completed": false,
        "used": true,
        "date": {
          "seconds": 1738022400,
          "nanoseconds": 0
        },
        "user_name": "소빈",
        "task_name": "9시40분까지 잘 준비",
        "formattedDate": "2025_01_28",
        "taskId": "t000005"
      },
      {
        "create_user": "won",
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "taskId": "t000007",
        "completed": false,
        "task_point": 3,
        "formattedDate": "2025_01_28",
        "user_id": "so",
        "date": {
          "seconds": 1738022400,
          "nanoseconds": 0
        },
        "used": true,
        "user_id_to_check": "so",
        "user_name": "소빈"
      },
      {
        "create_user": "won",
        "task_name": "신발정리",
        "used": true,
        "task_point": 3,
        "user_id_to_check": "on",
        "date": {
          "seconds": 1738108800,
          "nanoseconds": 0
        },
        "taskId": "t000000",
        "user_id": "on",
        "completed": true,
        "user_name": "온겸",
        "formattedDate": "2025_01_29"
      },
      {
        "completed": false,
        "formattedDate": "2025_01_29",
        "user_name": "온겸",
        "taskId": "t000001",
        "user_id_to_check": "on",
        "task_point": 2,
        "used": true,
        "task_name": "이불정리",
        "date": {
          "seconds": 1738108800,
          "nanoseconds": 0
        },
        "user_id": "on",
        "create_user": "won"
      },
      {
        "user_id": "on",
        "date": {
          "seconds": 1738108800,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_29",
        "used": true,
        "task_name": "독서(20분 이상)",
        "user_id_to_check": "on",
        "completed": false,
        "user_name": "온겸",
        "task_point": 2,
        "create_user": "won",
        "taskId": "t000002"
      },
      {
        "create_user": "won",
        "user_id": "on",
        "taskId": "t000003",
        "task_point": 5,
        "user_id_to_check": "on",
        "user_name": "온겸",
        "date": {
          "seconds": 1738108800,
          "nanoseconds": 0
        },
        "task_name": "단어필사",
        "completed": true,
        "used": true,
        "formattedDate": "2025_01_29"
      },
      {
        "user_id": "on",
        "used": true,
        "user_id_to_check": "on",
        "formattedDate": "2025_01_29",
        "date": {
          "seconds": 1738108800,
          "nanoseconds": 0
        },
        "create_user": "won",
        "task_point": 2,
        "task_name": "반찬 안남기기",
        "taskId": "t000004",
        "user_name": "온겸",
        "completed": true
      },
      {
        "used": true,
        "taskId": "t000005",
        "task_point": 3,
        "formattedDate": "2025_01_29",
        "user_id": "on",
        "completed": false,
        "create_user": "won",
        "user_name": "온겸",
        "date": {
          "seconds": 1738108800,
          "nanoseconds": 0
        },
        "task_name": "9시40분까지 잘 준비",
        "user_id_to_check": "on"
      },
      {
        "used": true,
        "user_id_to_check": "on",
        "completed": false,
        "create_user": "won",
        "task_point": 3,
        "date": {
          "seconds": 1738108800,
          "nanoseconds": 0
        },
        "user_name": "온겸",
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "taskId": "t000006",
        "user_id": "on",
        "formattedDate": "2025_01_29"
      },
      {
        "user_id": "on",
        "task_name": "신발정리",
        "used": true,
        "user_id_to_check": "on",
        "create_user": "won",
        "taskId": "t000000",
        "formattedDate": "2025_01_30",
        "user_name": "온겸",
        "date": {
          "seconds": 1738195200,
          "nanoseconds": 0
        },
        "completed": false,
        "task_point": 3
      },
      {
        "user_name": "온겸",
        "task_point": 2,
        "user_id": "on",
        "formattedDate": "2025_01_30",
        "create_user": "won",
        "task_name": "이불정리",
        "used": true,
        "user_id_to_check": "on",
        "date": {
          "seconds": 1738195200,
          "nanoseconds": 0
        },
        "taskId": "t000001",
        "completed": true
      },
      {
        "user_name": "온겸",
        "create_user": "won",
        "user_id": "on",
        "taskId": "t000002",
        "completed": true,
        "used": true,
        "formattedDate": "2025_01_30",
        "task_point": 2,
        "date": {
          "seconds": 1738195200,
          "nanoseconds": 0
        },
        "task_name": "독서(20분 이상)",
        "user_id_to_check": "on"
      },
      {
        "formattedDate": "2025_01_30",
        "create_user": "won",
        "task_point": 5,
        "completed": true,
        "date": {
          "seconds": 1738195200,
          "nanoseconds": 0
        },
        "user_name": "온겸",
        "task_name": "단어필사",
        "used": true,
        "user_id": "on",
        "user_id_to_check": "on",
        "taskId": "t000003"
      },
      {
        "completed": true,
        "formattedDate": "2025_01_30",
        "user_id_to_check": "on",
        "date": {
          "seconds": 1738195200,
          "nanoseconds": 0
        },
        "create_user": "won",
        "user_name": "온겸",
        "task_name": "반찬 안남기기",
        "user_id": "on",
        "used": true,
        "task_point": 2,
        "taskId": "t000004"
      },
      {
        "user_name": "온겸",
        "task_point": 3,
        "user_id": "on",
        "formattedDate": "2025_01_30",
        "task_name": "9시40분까지 잘 준비",
        "create_user": "won",
        "used": true,
        "user_id_to_check": "on",
        "date": {
          "seconds": 1738195200,
          "nanoseconds": 0
        },
        "taskId": "t000005",
        "completed": true
      },
      {
        "task_point": 3,
        "taskId": "t000006",
        "used": true,
        "user_name": "온겸",
        "completed": false,
        "formattedDate": "2025_01_30",
        "user_id_to_check": "on",
        "create_user": "won",
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "date": {
          "seconds": 1738195200,
          "nanoseconds": 0
        },
        "user_id": "on"
      },
      {
        "completed": false,
        "task_point": 3,
        "user_id_to_check": "so",
        "taskId": "t000000",
        "user_id": "so",
        "task_name": "신발정리",
        "formattedDate": "2025_01_30",
        "user_name": "소빈",
        "date": {
          "seconds": 1738195200,
          "nanoseconds": 0
        },
        "used": true,
        "create_user": "won"
      },
      {
        "taskId": "t000001",
        "completed": true,
        "create_user": "won",
        "user_name": "소빈",
        "formattedDate": "2025_01_30",
        "task_name": "이불정리",
        "user_id_to_check": "so",
        "task_point": 2,
        "used": true,
        "date": {
          "seconds": 1738195200,
          "nanoseconds": 0
        },
        "user_id": "so"
      },
      {
        "formattedDate": "2025_01_30",
        "completed": true,
        "taskId": "t000002",
        "task_point": 2,
        "user_id": "so",
        "used": true,
        "user_name": "소빈",
        "task_name": "독서(20분 이상)",
        "create_user": "won",
        "date": {
          "seconds": 1738195200,
          "nanoseconds": 0
        },
        "user_id_to_check": "so"
      },
      {
        "user_id_to_check": "so",
        "taskId": "t000003",
        "create_user": "won",
        "user_id": "so",
        "completed": true,
        "date": {
          "seconds": 1738195200,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_30",
        "user_name": "소빈",
        "task_point": 5,
        "task_name": "단어필사",
        "used": true
      },
      {
        "task_point": 2,
        "used": true,
        "formattedDate": "2025_01_30",
        "user_name": "소빈",
        "date": {
          "seconds": 1738195200,
          "nanoseconds": 0
        },
        "task_name": "반찬 안남기기",
        "user_id": "so",
        "create_user": "won",
        "taskId": "t000004",
        "user_id_to_check": "so",
        "completed": false
      },
      {
        "task_point": 3,
        "taskId": "t000005",
        "used": true,
        "formattedDate": "2025_01_30",
        "completed": true,
        "user_id": "so",
        "user_name": "소빈",
        "create_user": "won",
        "date": {
          "seconds": 1738195200,
          "nanoseconds": 0
        },
        "task_name": "9시40분까지 잘 준비",
        "user_id_to_check": "so"
      },
      {
        "date": {
          "seconds": 1738195200,
          "nanoseconds": 0
        },
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "task_point": 3,
        "user_name": "소빈",
        "formattedDate": "2025_01_30",
        "create_user": "won",
        "completed": false,
        "user_id": "so",
        "used": true,
        "user_id_to_check": "so",
        "taskId": "t000007"
      },
      {
        "date": {
          "seconds": 1738281600,
          "nanoseconds": 0
        },
        "formattedDate": "2025_01_31",
        "used": true,
        "user_id": "on",
        "task_name": "신발정리",
        "taskId": "t000000",
        "user_id_to_check": "on",
        "task_point": 3,
        "completed": false,
        "create_user": "won",
        "user_name": "온겸"
      },
      {
        "date": {
          "seconds": 1738281600,
          "nanoseconds": 0
        },
        "task_name": "이불정리",
        "task_point": 2,
        "user_name": "온겸",
        "formattedDate": "2025_01_31",
        "create_user": "won",
        "completed": true,
        "user_id": "on",
        "user_id_to_check": "on",
        "used": true,
        "taskId": "t000001"
      },
      {
        "create_user": "won",
        "used": true,
        "task_name": "독서(20분 이상)",
        "completed": true,
        "taskId": "t000002",
        "formattedDate": "2025_01_31",
        "user_name": "온겸",
        "user_id": "on",
        "user_id_to_check": "on",
        "task_point": 2,
        "date": {
          "seconds": 1738281600,
          "nanoseconds": 0
        }
      },
      {
        "user_id_to_check": "on",
        "date": {
          "seconds": 1738281600,
          "nanoseconds": 0
        },
        "completed": false,
        "used": true,
        "create_user": "won",
        "user_id": "on",
        "formattedDate": "2025_01_31",
        "task_name": "단어필사",
        "task_point": 5,
        "taskId": "t000003",
        "user_name": "온겸"
      },
      {
        "user_name": "온겸",
        "task_name": "반찬 안남기기",
        "taskId": "t000004",
        "task_point": 2,
        "create_user": "won",
        "used": true,
        "user_id": "on",
        "date": {
          "seconds": 1738281600,
          "nanoseconds": 0
        },
        "user_id_to_check": "on",
        "formattedDate": "2025_01_31",
        "completed": false
      },
      {
        "formattedDate": "2025_01_31",
        "user_id_to_check": "on",
        "task_name": "9시40분까지 잘 준비",
        "create_user": "won",
        "user_id": "on",
        "used": true,
        "user_name": "온겸",
        "completed": false,
        "taskId": "t000005",
        "task_point": 3,
        "date": {
          "seconds": 1738281600,
          "nanoseconds": 0
        }
      },
      {
        "user_id": "on",
        "completed": false,
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "used": true,
        "formattedDate": "2025_01_31",
        "taskId": "t000006",
        "user_name": "온겸",
        "task_point": 3,
        "user_id_to_check": "on",
        "create_user": "won",
        "date": {
          "seconds": 1738281600,
          "nanoseconds": 0
        }
      },
      {
        "task_name": "신발정리",
        "taskId": "t000000",
        "date": {
          "seconds": 1738281600,
          "nanoseconds": 0
        },
        "task_point": 3,
        "user_name": "소빈",
        "used": true,
        "user_id": "so",
        "formattedDate": "2025_01_31",
        "completed": false,
        "create_user": "won",
        "user_id_to_check": "so"
      },
      {
        "create_user": "won",
        "user_id_to_check": "so",
        "used": true,
        "task_name": "이불정리",
        "taskId": "t000001",
        "formattedDate": "2025_01_31",
        "user_name": "소빈",
        "task_point": 2,
        "date": {
          "seconds": 1738281600,
          "nanoseconds": 0
        },
        "completed": true,
        "user_id": "so"
      },
      {
        "date": {
          "seconds": 1738281600,
          "nanoseconds": 0
        },
        "task_name": "독서(20분 이상)",
        "formattedDate": "2025_01_31",
        "create_user": "won",
        "taskId": "t000002",
        "completed": false,
        "used": true,
        "user_name": "소빈",
        "user_id": "so",
        "user_id_to_check": "so",
        "task_point": 2
      },
      {
        "task_name": "단어필사",
        "user_id": "so",
        "user_id_to_check": "so",
        "formattedDate": "2025_01_31",
        "user_name": "소빈",
        "used": true,
        "task_point": 5,
        "taskId": "t000003",
        "date": {
          "seconds": 1738281600,
          "nanoseconds": 0
        },
        "completed": false,
        "create_user": "won"
      },
      {
        "completed": false,
        "taskId": "t000004",
        "user_name": "소빈",
        "create_user": "won",
        "formattedDate": "2025_01_31",
        "task_name": "반찬 안남기기",
        "user_id_to_check": "so",
        "task_point": 2,
        "used": true,
        "date": {
          "seconds": 1738281600,
          "nanoseconds": 0
        },
        "user_id": "so"
      },
      {
        "task_name": "9시40분까지 잘 준비",
        "create_user": "won",
        "formattedDate": "2025_01_31",
        "taskId": "t000005",
        "task_point": 3,
        "used": true,
        "user_id": "so",
        "user_id_to_check": "so",
        "user_name": "소빈",
        "date": {
          "seconds": 1738281600,
          "nanoseconds": 0
        },
        "completed": false
      },
      {
        "user_id": "so",
        "completed": false,
        "task_name": "저녁밥 먹고 스쿼트 30개",
        "used": true,
        "formattedDate": "2025_01_31",
        "taskId": "t000007",
        "user_name": "소빈",
        "task_point": 3,
        "user_id_to_check": "so",
        "create_user": "won",
        "date": {
          "seconds": 1738281600,
          "nanoseconds": 0
        }
      }
    ]
  }