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
    "creation_users_id": [
        "won",
        "hyun"
    ],
    "tasks": {
        "2025-01-26": {
            "so": [
                {
                    "taskId": "t000000",
                    "used": true,
                    "task_point": 3,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "task_name": "신발정리",
                    "completed": false
                },
                {
                    "task_name": "이불정리",
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "taskId": "t000001",
                    "task_point": 2,
                    "used": true,
                    "completed": true
                },
                {
                    "user_id_to_check": "so",
                    "completed": false,
                    "task_name": "독서(20분 이상)",
                    "create_user": "won",
                    "task_point": 2,
                    "used": true,
                    "taskId": "t000002"
                },
                {
                    "task_name": "단어필사",
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_point": 5,
                    "completed": true,
                    "taskId": "t000003",
                    "used": true
                },
                {
                    "completed": true,
                    "create_user": "won",
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "taskId": "t000004"
                },
                {
                    "taskId": "t000005",
                    "task_name": "9시40분까지 잘 준비",
                    "completed": false,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "used": true,
                    "task_point": 3
                },
                {
                    "user_id_to_check": "so",
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "completed": true,
                    "task_point": 3,
                    "used": true,
                    "create_user": "won",
                    "taskId": "t000007"
                }
            ],
            "on": [
                {
                    "create_user": "won",
                    "task_name": "신발정리",
                    "completed": false,
                    "used": true,
                    "taskId": "t000000",
                    "task_point": 3,
                    "user_id_to_check": "on"
                },
                {
                    "taskId": "t000001",
                    "task_name": "이불정리",
                    "create_user": "won",
                    "completed": true,
                    "task_point": 2,
                    "used": true,
                    "user_id_to_check": "on"
                },
                {
                    "user_id_to_check": "on",
                    "task_point": 2,
                    "taskId": "t000002",
                    "task_name": "독서(20분 이상)",
                    "create_user": "won",
                    "completed": false,
                    "used": true
                },
                {
                    "task_point": 4,
                    "taskId": "t000003",
                    "used": true,
                    "completed": true,
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "task_name": "단어필사"
                },
                {
                    "completed": true,
                    "taskId": "t000004",
                    "task_name": "반찬 안남기기",
                    "task_point": 2,
                    "used": true,
                    "create_user": "won",
                    "user_id_to_check": "on"
                },
                {
                    "task_name": "9시40분까지 잘 준비",
                    "task_point": 3,
                    "completed": false,
                    "taskId": "t000005",
                    "user_id_to_check": "on",
                    "used": true,
                    "create_user": "won"
                },
                {
                    "completed": true,
                    "user_id_to_check": "on",
                    "task_point": 3,
                    "taskId": "t000006",
                    "used": true,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "create_user": "won"
                }
            ]
        },
        "2025-01-07": {
            "on": [
                {
                    "used": true,
                    "create_user": "won",
                    "taskId": "t000000",
                    "completed": true,
                    "user_id_to_check": "on",
                    "task_point": 3,
                    "task_name": "신발정리"
                },
                {
                    "create_user": "won",
                    "task_name": "이불정리",
                    "taskId": "t000001",
                    "user_id_to_check": "on",
                    "used": true,
                    "task_point": 2,
                    "completed": true
                },
                {
                    "taskId": "t000002",
                    "completed": true,
                    "task_point": 2,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "task_name": "독서(20분 이상)",
                    "used": true
                },
                {
                    "task_point": 5,
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "used": true,
                    "task_name": "단어필사",
                    "completed": true,
                    "taskId": "t000003"
                },
                {
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "completed": true,
                    "create_user": "won",
                    "taskId": "t000004",
                    "task_point": 2,
                    "user_id_to_check": "on"
                },
                {
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "on",
                    "completed": true,
                    "used": true,
                    "create_user": "won",
                    "task_point": 3,
                    "taskId": "t000005"
                },
                {
                    "used": true,
                    "taskId": "t000006",
                    "user_id_to_check": "on",
                    "task_point": 3,
                    "completed": false,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "create_user": "won"
                }
            ],
            "so": [
                {
                    "completed": true,
                    "task_point": 3,
                    "create_user": "won",
                    "task_name": "신발정리",
                    "taskId": "t000000",
                    "user_id_to_check": "so",
                    "used": true
                },
                {
                    "create_user": "won",
                    "completed": true,
                    "user_id_to_check": "so",
                    "taskId": "t000001",
                    "task_name": "이불정리",
                    "used": true,
                    "task_point": 2
                },
                {
                    "task_name": "독서(20분 이상)",
                    "used": true,
                    "task_point": 2,
                    "create_user": "won",
                    "completed": true,
                    "user_id_to_check": "so",
                    "taskId": "t000002"
                },
                {
                    "create_user": "won",
                    "taskId": "t000003",
                    "used": true,
                    "task_name": "단어필사",
                    "user_id_to_check": "so",
                    "task_point": 5,
                    "completed": true
                },
                {
                    "completed": true,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "used": true,
                    "task_point": 2,
                    "task_name": "반찬 안남기기",
                    "taskId": "t000004"
                },
                {
                    "task_point": 3,
                    "taskId": "t000005",
                    "user_id_to_check": "so",
                    "completed": true,
                    "used": true,
                    "task_name": "9시40분까지 잘 준비",
                    "create_user": "won"
                },
                {
                    "taskId": "t000007",
                    "used": true,
                    "create_user": "won",
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "completed": true,
                    "task_point": 3,
                    "user_id_to_check": "so"
                }
            ]
        },
        "2025-01-20": {
            "so": [
                {
                    "user_id_to_check": "so",
                    "completed": true,
                    "create_user": "won",
                    "task_point": 3,
                    "task_name": "신발정리",
                    "used": true,
                    "taskId": "t000000"
                },
                {
                    "taskId": "t000001",
                    "task_name": "이불정리",
                    "completed": false,
                    "used": true,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_point": 2
                },
                {
                    "used": true,
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "create_user": "won",
                    "task_name": "독서(20분 이상)",
                    "taskId": "t000002",
                    "completed": true
                },
                {
                    "task_name": "단어필사",
                    "task_point": 5,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "taskId": "t000003",
                    "used": true,
                    "completed": true
                },
                {
                    "user_id_to_check": "so",
                    "completed": true,
                    "taskId": "t000004",
                    "task_name": "반찬 안남기기",
                    "task_point": 2,
                    "used": true,
                    "create_user": "won"
                },
                {
                    "completed": false,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "task_name": "9시40분까지 잘 준비",
                    "used": true,
                    "taskId": "t000005"
                },
                {
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "taskId": "t000007",
                    "task_point": 3,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "completed": false,
                    "used": true
                }
            ],
            "on": [
                {
                    "completed": true,
                    "create_user": "won",
                    "taskId": "t000000",
                    "task_point": 3,
                    "task_name": "신발정리",
                    "used": true,
                    "user_id_to_check": "on"
                },
                {
                    "used": true,
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "task_name": "이불정리",
                    "task_point": 2,
                    "taskId": "t000001",
                    "completed": true
                },
                {
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "completed": true,
                    "task_name": "독서(20분 이상)",
                    "used": true,
                    "task_point": 2,
                    "taskId": "t000002"
                },
                {
                    "task_point": 7,
                    "taskId": "t000003",
                    "completed": true,
                    "task_name": "단어필사",
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "used": true
                },
                {
                    "create_user": "won",
                    "taskId": "t000004",
                    "completed": true,
                    "task_name": "반찬 안남기기",
                    "task_point": 2,
                    "used": true,
                    "user_id_to_check": "on"
                },
                {
                    "user_id_to_check": "on",
                    "completed": true,
                    "task_point": 3,
                    "task_name": "9시40분까지 잘 준비",
                    "used": true,
                    "taskId": "t000005",
                    "create_user": "won"
                },
                {
                    "completed": true,
                    "task_point": 3,
                    "create_user": "won",
                    "taskId": "t000006",
                    "user_id_to_check": "on",
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "used": true
                }
            ]
        },
        "2025-01-16": {
            "so": [
                {
                    "used": true,
                    "task_name": "신발정리",
                    "task_point": 3,
                    "completed": true,
                    "taskId": "t000000",
                    "create_user": "won",
                    "user_id_to_check": "so"
                },
                {
                    "task_point": 2,
                    "completed": true,
                    "used": true,
                    "task_name": "이불정리",
                    "taskId": "t000001",
                    "user_id_to_check": "so",
                    "create_user": "won"
                },
                {
                    "taskId": "t000002",
                    "user_id_to_check": "so",
                    "task_name": "독서(20분 이상)",
                    "create_user": "won",
                    "used": true,
                    "completed": true,
                    "task_point": 2
                },
                {
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_point": 5,
                    "task_name": "단어필사",
                    "used": true,
                    "taskId": "t000003",
                    "completed": true
                },
                {
                    "completed": true,
                    "user_id_to_check": "so",
                    "task_name": "반찬 안남기기",
                    "used": true,
                    "create_user": "won",
                    "taskId": "t000004",
                    "task_point": 2
                },
                {
                    "completed": false,
                    "task_point": 3,
                    "taskId": "t000005",
                    "used": true,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_name": "9시40분까지 잘 준비"
                },
                {
                    "user_id_to_check": "so",
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "task_point": 3,
                    "taskId": "t000007",
                    "completed": true,
                    "used": true,
                    "create_user": "won"
                }
            ],
            "on": [
                {
                    "create_user": "won",
                    "task_name": "신발정리",
                    "taskId": "t000000",
                    "used": true,
                    "completed": true,
                    "task_point": 3,
                    "user_id_to_check": "on"
                },
                {
                    "task_name": "이불정리",
                    "create_user": "won",
                    "task_point": 2,
                    "used": true,
                    "completed": true,
                    "taskId": "t000001",
                    "user_id_to_check": "on"
                },
                {
                    "taskId": "t000002",
                    "task_point": 2,
                    "completed": true,
                    "task_name": "독서(20분 이상)",
                    "used": true,
                    "user_id_to_check": "on",
                    "create_user": "won"
                },
                {
                    "create_user": "won",
                    "task_name": "단어필사",
                    "task_point": 5,
                    "user_id_to_check": "on",
                    "completed": true,
                    "taskId": "t000003",
                    "used": true
                },
                {
                    "completed": true,
                    "create_user": "won",
                    "taskId": "t000004",
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "user_id_to_check": "on",
                    "task_point": 2
                },
                {
                    "taskId": "t000005",
                    "used": true,
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "on",
                    "task_point": 3,
                    "completed": false,
                    "create_user": "won"
                },
                {
                    "used": true,
                    "task_point": 3,
                    "completed": true,
                    "taskId": "t000006",
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "create_user": "won",
                    "user_id_to_check": "on"
                }
            ]
        },
        "2025-01-15": {
            "on": [
                {
                    "task_point": 3,
                    "user_id_to_check": "on",
                    "task_name": "신발정리",
                    "taskId": "t000000",
                    "completed": true,
                    "used": true,
                    "create_user": "won"
                },
                {
                    "used": true,
                    "completed": true,
                    "create_user": "won",
                    "task_point": 2,
                    "user_id_to_check": "on",
                    "taskId": "t000001",
                    "task_name": "이불정리"
                },
                {
                    "user_id_to_check": "on",
                    "completed": true,
                    "create_user": "won",
                    "task_point": 2,
                    "taskId": "t000002",
                    "task_name": "독서(20분 이상)",
                    "used": true
                },
                {
                    "user_id_to_check": "on",
                    "completed": true,
                    "task_name": "단어필사",
                    "taskId": "t000003",
                    "task_point": 5,
                    "used": true,
                    "create_user": "won"
                },
                {
                    "task_point": 2,
                    "taskId": "t000004",
                    "user_id_to_check": "on",
                    "completed": true,
                    "used": true,
                    "create_user": "won",
                    "task_name": "반찬 안남기기"
                },
                {
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "on",
                    "task_point": 3,
                    "create_user": "won",
                    "completed": false,
                    "taskId": "t000005",
                    "used": true
                },
                {
                    "user_id_to_check": "on",
                    "taskId": "t000006",
                    "create_user": "won",
                    "completed": true,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "used": true,
                    "task_point": 3
                }
            ],
            "so": [
                {
                    "task_point": 3,
                    "used": true,
                    "user_id_to_check": "so",
                    "task_name": "신발정리",
                    "taskId": "t000000",
                    "create_user": "won",
                    "completed": true
                },
                {
                    "user_id_to_check": "so",
                    "used": true,
                    "completed": true,
                    "task_name": "이불정리",
                    "taskId": "t000001",
                    "task_point": 2,
                    "create_user": "won"
                },
                {
                    "used": true,
                    "create_user": "won",
                    "task_point": 2,
                    "completed": true,
                    "task_name": "독서(20분 이상)",
                    "taskId": "t000002",
                    "user_id_to_check": "so"
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
                    "user_id_to_check": "so",
                    "taskId": "t000004",
                    "task_name": "반찬 안남기기",
                    "create_user": "won",
                    "task_point": 2,
                    "completed": true,
                    "used": true
                },
                {
                    "taskId": "t000005",
                    "task_name": "9시40분까지 잘 준비",
                    "task_point": 3,
                    "completed": false,
                    "used": true,
                    "create_user": "won",
                    "user_id_to_check": "so"
                },
                {
                    "used": true,
                    "completed": true,
                    "create_user": "won",
                    "taskId": "t000007",
                    "task_point": 3,
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "user_id_to_check": "so"
                }
            ]
        },
        "2025-01-13": {
            "on": [
                {
                    "create_user": "won",
                    "taskId": "t000000",
                    "used": true,
                    "user_id_to_check": "on",
                    "task_name": "신발정리",
                    "completed": true,
                    "task_point": 3
                },
                {
                    "user_id_to_check": "on",
                    "task_name": "이불정리",
                    "used": true,
                    "taskId": "t000001",
                    "task_point": 2,
                    "completed": true,
                    "create_user": "won"
                },
                {
                    "used": true,
                    "task_name": "독서(20분 이상)",
                    "user_id_to_check": "on",
                    "completed": true,
                    "create_user": "won",
                    "task_point": 2,
                    "taskId": "t000002"
                },
                {
                    "taskId": "t000003",
                    "task_name": "단어필사",
                    "used": true,
                    "user_id_to_check": "on",
                    "task_point": 5,
                    "create_user": "won",
                    "completed": true
                },
                {
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "task_point": 2,
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "completed": true,
                    "taskId": "t000004"
                },
                {
                    "task_name": "9시40분까지 잘 준비",
                    "task_point": 3,
                    "taskId": "t000005",
                    "used": true,
                    "create_user": "won",
                    "completed": true,
                    "user_id_to_check": "on"
                },
                {
                    "used": true,
                    "taskId": "t000006",
                    "completed": false,
                    "user_id_to_check": "on",
                    "task_point": 3,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "create_user": "won"
                }
            ],
            "so": [
                {
                    "used": true,
                    "completed": true,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_name": "신발정리",
                    "taskId": "t000000",
                    "task_point": 3
                },
                {
                    "user_id_to_check": "so",
                    "completed": true,
                    "task_name": "이불정리",
                    "taskId": "t000001",
                    "create_user": "won",
                    "task_point": 2,
                    "used": true
                },
                {
                    "completed": true,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "task_name": "독서(20분 이상)",
                    "used": true,
                    "task_point": 2,
                    "taskId": "t000002"
                },
                {
                    "task_name": "단어필사",
                    "task_point": 5,
                    "used": true,
                    "completed": true,
                    "taskId": "t000003",
                    "create_user": "won",
                    "user_id_to_check": "so"
                },
                {
                    "taskId": "t000004",
                    "used": true,
                    "create_user": "won",
                    "task_point": 2,
                    "task_name": "반찬 안남기기",
                    "completed": true,
                    "user_id_to_check": "so"
                },
                {
                    "task_point": 3,
                    "completed": true,
                    "taskId": "t000005",
                    "used": true,
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "so",
                    "create_user": "won"
                },
                {
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "user_id_to_check": "so",
                    "completed": true,
                    "task_point": 3,
                    "used": true,
                    "create_user": "won",
                    "taskId": "t000007"
                }
            ]
        },
        "2025-01-12": {
            "so": [
                {
                    "taskId": "t000000",
                    "used": true,
                    "task_point": 3,
                    "create_user": "won",
                    "completed": true,
                    "task_name": "신발정리",
                    "user_id_to_check": "so"
                },
                {
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "taskId": "t000001",
                    "completed": true,
                    "create_user": "won",
                    "task_name": "이불정리",
                    "used": true
                },
                {
                    "create_user": "won",
                    "used": true,
                    "task_name": "독서(20분 이상)",
                    "taskId": "t000002",
                    "task_point": 2,
                    "completed": true,
                    "user_id_to_check": "so"
                },
                {
                    "task_name": "단어필사",
                    "task_point": 5,
                    "completed": true,
                    "used": true,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "taskId": "t000003"
                },
                {
                    "user_id_to_check": "so",
                    "completed": true,
                    "taskId": "t000004",
                    "create_user": "won",
                    "task_name": "반찬 안남기기",
                    "task_point": 2,
                    "used": true
                },
                {
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "used": true,
                    "completed": true,
                    "taskId": "t000005",
                    "task_point": 3,
                    "task_name": "9시40분까지 잘 준비"
                },
                {
                    "completed": true,
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "taskId": "t000007",
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "used": true,
                    "create_user": "won"
                }
            ],
            "on": [
                {
                    "task_name": "신발정리",
                    "user_id_to_check": "on",
                    "task_point": 3,
                    "create_user": "won",
                    "taskId": "t000000",
                    "completed": true,
                    "used": true
                },
                {
                    "completed": true,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "task_name": "이불정리",
                    "taskId": "t000001",
                    "task_point": 2,
                    "used": true
                },
                {
                    "completed": true,
                    "taskId": "t000002",
                    "create_user": "won",
                    "task_name": "독서(20분 이상)",
                    "used": true,
                    "user_id_to_check": "on",
                    "task_point": 2
                },
                {
                    "taskId": "t000003",
                    "task_point": 5,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "task_name": "단어필사",
                    "used": true,
                    "completed": true
                },
                {
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "user_id_to_check": "on",
                    "task_point": 2,
                    "taskId": "t000004",
                    "completed": true,
                    "create_user": "won"
                },
                {
                    "task_name": "9시40분까지 잘 준비",
                    "taskId": "t000005",
                    "completed": true,
                    "user_id_to_check": "on",
                    "task_point": 3,
                    "create_user": "won",
                    "used": true
                },
                {
                    "taskId": "t000006",
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "completed": true,
                    "used": true,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "task_point": 3
                }
            ]
        },
        "2025-01-06": {
            "on": [
                {
                    "task_point": 3,
                    "user_id_to_check": "on",
                    "taskId": "t000000",
                    "create_user": "won",
                    "used": true,
                    "completed": true,
                    "task_name": "신발정리"
                },
                {
                    "user_id_to_check": "on",
                    "taskId": "t000001",
                    "task_point": 2,
                    "task_name": "이불정리",
                    "completed": true,
                    "used": true,
                    "create_user": "won"
                },
                {
                    "taskId": "t000002",
                    "completed": true,
                    "used": true,
                    "user_id_to_check": "on",
                    "task_point": 2,
                    "create_user": "won",
                    "task_name": "독서(20분 이상)"
                },
                {
                    "used": true,
                    "task_name": "단어필사",
                    "taskId": "t000003",
                    "task_point": 6,
                    "create_user": "won",
                    "completed": true,
                    "user_id_to_check": "on"
                },
                {
                    "used": true,
                    "user_id_to_check": "on",
                    "taskId": "t000004",
                    "task_point": 2,
                    "create_user": "won",
                    "task_name": "반찬 안남기기",
                    "completed": true
                },
                {
                    "used": true,
                    "completed": true,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "task_name": "9시40분까지 잘 준비",
                    "task_point": 3,
                    "taskId": "t000005"
                },
                {
                    "task_point": 3,
                    "completed": true,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "used": true,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "taskId": "t000006"
                }
            ],
            "so": [
                {
                    "user_id_to_check": "so",
                    "used": true,
                    "task_point": 3,
                    "taskId": "t000000",
                    "task_name": "신발정리",
                    "completed": true,
                    "create_user": "won"
                },
                {
                    "create_user": "won",
                    "used": true,
                    "taskId": "t000001",
                    "task_name": "이불정리",
                    "completed": true,
                    "task_point": 2,
                    "user_id_to_check": "so"
                },
                {
                    "used": true,
                    "completed": true,
                    "create_user": "won",
                    "taskId": "t000002",
                    "user_id_to_check": "so",
                    "task_name": "독서(20분 이상)",
                    "task_point": 2
                },
                {
                    "user_id_to_check": "so",
                    "completed": true,
                    "task_point": 6,
                    "used": true,
                    "taskId": "t000003",
                    "task_name": "단어필사",
                    "create_user": "won"
                },
                {
                    "completed": true,
                    "task_name": "반찬 안남기기",
                    "used": true,
                    "task_point": 2,
                    "user_id_to_check": "so",
                    "taskId": "t000004",
                    "create_user": "won"
                },
                {
                    "task_point": 3,
                    "user_id_to_check": "so",
                    "completed": true,
                    "task_name": "9시40분까지 잘 준비",
                    "create_user": "won",
                    "taskId": "t000005",
                    "used": true
                },
                {
                    "create_user": "won",
                    "used": true,
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "completed": true,
                    "taskId": "t000007"
                }
            ]
        },
        "2025-01-04": {
            "on": [
                {
                    "taskId": "t000000",
                    "user_id_to_check": "on",
                    "task_point": 3,
                    "task_name": "신발정리",
                    "completed": true,
                    "create_user": "won",
                    "used": true
                },
                {
                    "completed": true,
                    "task_point": 2,
                    "used": true,
                    "user_id_to_check": "on",
                    "task_name": "이불정리",
                    "taskId": "t000001",
                    "create_user": "won"
                },
                {
                    "used": true,
                    "task_name": "독서(20분 이상)",
                    "task_point": 2,
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "completed": true,
                    "taskId": "t000002"
                },
                {
                    "task_name": "단어필사",
                    "user_id_to_check": "on",
                    "task_point": 5,
                    "taskId": "t000003",
                    "used": true,
                    "create_user": "won",
                    "completed": true
                },
                {
                    "completed": true,
                    "taskId": "t000004",
                    "task_name": "반찬 안남기기",
                    "user_id_to_check": "on",
                    "task_point": 2,
                    "used": true,
                    "create_user": "won"
                },
                {
                    "completed": true,
                    "create_user": "won",
                    "taskId": "t000005",
                    "used": true,
                    "task_name": "9시40분까지 잘 준비",
                    "task_point": 3,
                    "user_id_to_check": "on"
                },
                {
                    "completed": true,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "used": true,
                    "taskId": "t000006",
                    "task_point": 3,
                    "task_name": "저녁밥 먹고 스쿼트 50개"
                }
            ],
            "so": [
                {
                    "used": true,
                    "taskId": "t000000",
                    "create_user": "won",
                    "completed": true,
                    "task_name": "신발정리",
                    "user_id_to_check": "so",
                    "task_point": 3
                },
                {
                    "user_id_to_check": "so",
                    "completed": true,
                    "taskId": "t000001",
                    "task_point": 2,
                    "used": true,
                    "create_user": "won",
                    "task_name": "이불정리"
                },
                {
                    "completed": true,
                    "used": true,
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "create_user": "won",
                    "taskId": "t000002",
                    "task_name": "독서(20분 이상)"
                },
                {
                    "task_name": "단어필사",
                    "create_user": "won",
                    "used": true,
                    "taskId": "t000003",
                    "completed": true,
                    "user_id_to_check": "so",
                    "task_point": 5
                },
                {
                    "task_name": "반찬 안남기기",
                    "taskId": "t000004",
                    "completed": true,
                    "create_user": "won",
                    "task_point": 2,
                    "used": true,
                    "user_id_to_check": "so"
                },
                {
                    "task_name": "9시40분까지 잘 준비",
                    "taskId": "t000005",
                    "create_user": "won",
                    "task_point": 3,
                    "used": true,
                    "user_id_to_check": "so",
                    "completed": true
                },
                {
                    "completed": true,
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "used": true,
                    "create_user": "won",
                    "taskId": "t000007",
                    "task_name": "저녁밥 먹고 스쿼트 30개"
                }
            ]
        },
        "2025-01-25": {
            "on": [
                {
                    "task_name": "신발정리",
                    "completed": true,
                    "used": true,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "taskId": "t000000",
                    "task_point": 3
                },
                {
                    "user_id_to_check": "on",
                    "taskId": "t000001",
                    "task_name": "이불정리",
                    "task_point": 2,
                    "completed": true,
                    "used": true,
                    "create_user": "won"
                },
                {
                    "used": true,
                    "task_name": "독서(20분 이상)",
                    "taskId": "t000002",
                    "task_point": 2,
                    "completed": true,
                    "user_id_to_check": "on",
                    "create_user": "won"
                },
                {
                    "task_point": 5,
                    "task_name": "단어필사",
                    "taskId": "t000003",
                    "user_id_to_check": "on",
                    "completed": true,
                    "create_user": "won",
                    "used": true
                },
                {
                    "create_user": "won",
                    "taskId": "t000004",
                    "used": true,
                    "task_point": 2,
                    "completed": true,
                    "task_name": "반찬 안남기기",
                    "user_id_to_check": "on"
                },
                {
                    "completed": true,
                    "used": true,
                    "taskId": "t000005",
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "task_point": 3
                },
                {
                    "completed": true,
                    "user_id_to_check": "on",
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "create_user": "won",
                    "taskId": "t000006",
                    "task_point": 3,
                    "used": true
                }
            ],
            "so": [
                {
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "taskId": "t000000",
                    "completed": true,
                    "task_name": "신발정리",
                    "task_point": 3,
                    "used": true
                },
                {
                    "task_point": 2,
                    "taskId": "t000001",
                    "completed": true,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_name": "이불정리",
                    "used": true
                },
                {
                    "completed": true,
                    "used": true,
                    "create_user": "won",
                    "taskId": "t000002",
                    "user_id_to_check": "so",
                    "task_name": "독서(20분 이상)",
                    "task_point": 2
                },
                {
                    "task_name": "단어필사",
                    "used": true,
                    "user_id_to_check": "so",
                    "completed": true,
                    "create_user": "won",
                    "taskId": "t000003",
                    "task_point": 5
                },
                {
                    "task_name": "반찬 안남기기",
                    "create_user": "won",
                    "taskId": "t000004",
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "used": true,
                    "completed": true
                },
                {
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "used": true,
                    "taskId": "t000005",
                    "task_name": "9시40분까지 잘 준비",
                    "completed": true,
                    "task_point": 3
                },
                {
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_point": 3,
                    "completed": true,
                    "used": true,
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "taskId": "t000007"
                }
            ]
        },
        "2025-01-21": {
            "on": [
                {
                    "completed": true,
                    "task_name": "신발정리",
                    "taskId": "t000000",
                    "create_user": "won",
                    "task_point": 3,
                    "user_id_to_check": "on",
                    "used": true
                },
                {
                    "task_name": "이불정리",
                    "task_point": 2,
                    "create_user": "won",
                    "used": true,
                    "taskId": "t000001",
                    "user_id_to_check": "on",
                    "completed": true
                },
                {
                    "used": true,
                    "task_name": "독서(20분 이상)",
                    "completed": true,
                    "task_point": 2,
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "taskId": "t000002"
                },
                {
                    "used": true,
                    "create_user": "won",
                    "task_point": 5,
                    "user_id_to_check": "on",
                    "task_name": "단어필사",
                    "completed": true,
                    "taskId": "t000003"
                },
                {
                    "taskId": "t000004",
                    "used": true,
                    "user_id_to_check": "on",
                    "completed": true,
                    "task_point": 2,
                    "task_name": "반찬 안남기기",
                    "create_user": "won"
                },
                {
                    "taskId": "t000005",
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "task_point": 3,
                    "completed": true,
                    "used": true,
                    "task_name": "9시40분까지 잘 준비"
                },
                {
                    "user_id_to_check": "on",
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "completed": false,
                    "create_user": "won",
                    "used": true,
                    "task_point": 3,
                    "taskId": "t000006"
                }
            ],
            "so": [
                {
                    "completed": true,
                    "taskId": "t000000",
                    "task_name": "신발정리",
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_point": 3,
                    "used": true
                },
                {
                    "used": true,
                    "create_user": "won",
                    "task_point": 2,
                    "user_id_to_check": "so",
                    "completed": true,
                    "task_name": "이불정리",
                    "taskId": "t000001"
                },
                {
                    "completed": true,
                    "create_user": "won",
                    "task_name": "독서(20분 이상)",
                    "task_point": 2,
                    "taskId": "t000002",
                    "used": true,
                    "user_id_to_check": "so"
                },
                {
                    "task_name": "단어필사",
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "completed": true,
                    "taskId": "t000003",
                    "task_point": 6,
                    "used": true
                },
                {
                    "user_id_to_check": "so",
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "taskId": "t000004",
                    "create_user": "won",
                    "task_point": 2,
                    "completed": true
                },
                {
                    "create_user": "won",
                    "completed": true,
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "used": true,
                    "task_name": "9시40분까지 잘 준비",
                    "taskId": "t000005"
                },
                {
                    "used": true,
                    "completed": true,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "taskId": "t000007",
                    "task_point": 4,
                    "task_name": "저녁밥 먹고 스쿼트 30개"
                }
            ]
        },
        "2025-01-10": {
            "on": [
                {
                    "completed": false,
                    "user_id_to_check": "on",
                    "used": true,
                    "task_point": 3,
                    "create_user": "won",
                    "task_name": "신발정리",
                    "taskId": "t000000"
                },
                {
                    "task_name": "이불정리",
                    "create_user": "won",
                    "taskId": "t000001",
                    "completed": true,
                    "user_id_to_check": "on",
                    "task_point": 2,
                    "used": true
                },
                {
                    "user_id_to_check": "on",
                    "taskId": "t000002",
                    "completed": true,
                    "task_name": "독서(20분 이상)",
                    "create_user": "won",
                    "task_point": 2,
                    "used": true
                },
                {
                    "task_point": 5,
                    "user_id_to_check": "on",
                    "completed": true,
                    "used": true,
                    "taskId": "t000003",
                    "create_user": "won",
                    "task_name": "단어필사"
                },
                {
                    "completed": true,
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "create_user": "won",
                    "task_point": 2,
                    "user_id_to_check": "on",
                    "taskId": "t000004"
                },
                {
                    "used": true,
                    "completed": true,
                    "taskId": "t000005",
                    "task_point": 3,
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "on",
                    "create_user": "won"
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
            ],
            "so": [
                {
                    "taskId": "t000000",
                    "used": true,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "completed": false,
                    "task_name": "신발정리",
                    "task_point": 3
                },
                {
                    "completed": true,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "taskId": "t000001",
                    "task_name": "이불정리",
                    "used": true,
                    "task_point": 2
                },
                {
                    "completed": true,
                    "task_name": "독서(20분 이상)",
                    "used": true,
                    "create_user": "won",
                    "task_point": 2,
                    "taskId": "t000002",
                    "user_id_to_check": "so"
                },
                {
                    "user_id_to_check": "so",
                    "taskId": "t000003",
                    "task_point": 5,
                    "completed": true,
                    "task_name": "단어필사",
                    "used": true,
                    "create_user": "won"
                },
                {
                    "taskId": "t000004",
                    "completed": true,
                    "task_name": "반찬 안남기기",
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_point": 2,
                    "used": true
                },
                {
                    "taskId": "t000005",
                    "create_user": "won",
                    "used": true,
                    "user_id_to_check": "so",
                    "task_name": "9시40분까지 잘 준비",
                    "task_point": 3,
                    "completed": true
                },
                {
                    "used": true,
                    "completed": true,
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "task_point": 3,
                    "taskId": "t000007",
                    "create_user": "won",
                    "user_id_to_check": "so"
                }
            ]
        },
        "2025-01-03": {
            "on": [
                {
                    "task_point": 3,
                    "completed": false,
                    "taskId": "t000000",
                    "create_user": "won",
                    "used": true,
                    "task_name": "신발정리",
                    "user_id_to_check": "on"
                },
                {
                    "user_id_to_check": "on",
                    "task_name": "이불정리",
                    "task_point": 2,
                    "completed": true,
                    "used": true,
                    "taskId": "t000001",
                    "create_user": "won"
                },
                {
                    "used": true,
                    "taskId": "t000002",
                    "task_point": 2,
                    "completed": true,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "task_name": "독서(20분 이상)"
                },
                {
                    "completed": true,
                    "create_user": "won",
                    "task_point": 5,
                    "user_id_to_check": "on",
                    "task_name": "단어필사",
                    "taskId": "t000003",
                    "used": true
                },
                {
                    "task_name": "반찬 안남기기",
                    "task_point": 2,
                    "taskId": "t000004",
                    "create_user": "won",
                    "completed": true,
                    "user_id_to_check": "on",
                    "used": true
                },
                {
                    "create_user": "won",
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "on",
                    "task_point": 3,
                    "taskId": "t000005",
                    "completed": true,
                    "used": true
                },
                {
                    "user_id_to_check": "on",
                    "taskId": "t000006",
                    "create_user": "won",
                    "completed": true,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "used": true,
                    "task_point": 4
                }
            ],
            "so": [
                {
                    "task_point": 3,
                    "completed": false,
                    "create_user": "won",
                    "taskId": "t000000",
                    "used": true,
                    "user_id_to_check": "so",
                    "task_name": "신발정리"
                },
                {
                    "completed": true,
                    "task_point": 2,
                    "used": true,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "taskId": "t000001",
                    "task_name": "이불정리"
                },
                {
                    "used": true,
                    "create_user": "won",
                    "task_point": 2,
                    "user_id_to_check": "so",
                    "completed": true,
                    "task_name": "독서(20분 이상)",
                    "taskId": "t000002"
                },
                {
                    "completed": true,
                    "used": true,
                    "taskId": "t000003",
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_point": 5,
                    "task_name": "단어필사"
                },
                {
                    "user_id_to_check": "so",
                    "completed": true,
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "create_user": "won",
                    "taskId": "t000004",
                    "task_point": 2
                },
                {
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "create_user": "won",
                    "completed": true,
                    "taskId": "t000005",
                    "used": true,
                    "task_name": "9시40분까지 잘 준비"
                },
                {
                    "user_id_to_check": "so",
                    "completed": true,
                    "task_point": 4,
                    "create_user": "won",
                    "taskId": "t000007",
                    "used": true,
                    "task_name": "저녁밥 먹고 스쿼트 30개"
                }
            ]
        },
        "2025-01-05": {
            "on": [
                {
                    "completed": false,
                    "task_name": "신발정리",
                    "used": true,
                    "create_user": "won",
                    "task_point": 3,
                    "user_id_to_check": "on",
                    "taskId": "t000000"
                },
                {
                    "completed": true,
                    "create_user": "won",
                    "task_name": "이불정리",
                    "task_point": 2,
                    "used": true,
                    "user_id_to_check": "on",
                    "taskId": "t000001"
                },
                {
                    "completed": true,
                    "task_point": 2,
                    "used": true,
                    "user_id_to_check": "on",
                    "taskId": "t000002",
                    "create_user": "won",
                    "task_name": "독서(20분 이상)"
                },
                {
                    "user_id_to_check": "on",
                    "completed": true,
                    "taskId": "t000003",
                    "used": true,
                    "create_user": "won",
                    "task_point": 5,
                    "task_name": "단어필사"
                },
                {
                    "create_user": "won",
                    "used": true,
                    "task_point": 2,
                    "taskId": "t000004",
                    "task_name": "반찬 안남기기",
                    "completed": true,
                    "user_id_to_check": "on"
                },
                {
                    "completed": false,
                    "task_point": 3,
                    "used": true,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "taskId": "t000005",
                    "task_name": "9시40분까지 잘 준비"
                },
                {
                    "user_id_to_check": "on",
                    "completed": true,
                    "task_point": 2,
                    "used": true,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "create_user": "won",
                    "taskId": "t000006"
                }
            ],
            "so": [
                {
                    "task_point": 3,
                    "completed": false,
                    "task_name": "신발정리",
                    "user_id_to_check": "so",
                    "used": true,
                    "taskId": "t000000",
                    "create_user": "won"
                },
                {
                    "task_point": 2,
                    "task_name": "이불정리",
                    "completed": true,
                    "user_id_to_check": "so",
                    "used": true,
                    "create_user": "won",
                    "taskId": "t000001"
                },
                {
                    "used": true,
                    "completed": true,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "task_name": "독서(20분 이상)",
                    "task_point": 2,
                    "taskId": "t000002"
                },
                {
                    "task_point": 5,
                    "used": true,
                    "taskId": "t000003",
                    "task_name": "단어필사",
                    "completed": true,
                    "create_user": "won",
                    "user_id_to_check": "so"
                },
                {
                    "completed": true,
                    "taskId": "t000004",
                    "user_id_to_check": "so",
                    "used": true,
                    "task_point": 2,
                    "create_user": "won",
                    "task_name": "반찬 안남기기"
                },
                {
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "used": true,
                    "create_user": "won",
                    "completed": false,
                    "taskId": "t000005"
                },
                {
                    "used": true,
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "user_id_to_check": "so",
                    "taskId": "t000007",
                    "task_point": 2,
                    "create_user": "won",
                    "completed": true
                }
            ]
        },
        "2025-01-14": {
            "so": [
                {
                    "completed": true,
                    "taskId": "t000000",
                    "task_point": 3,
                    "used": true,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "task_name": "신발정리"
                },
                {
                    "used": true,
                    "task_point": 2,
                    "task_name": "이불정리",
                    "create_user": "won",
                    "completed": true,
                    "user_id_to_check": "so",
                    "taskId": "t000001"
                },
                {
                    "task_point": 2,
                    "user_id_to_check": "so",
                    "task_name": "독서(20분 이상)",
                    "taskId": "t000002",
                    "used": true,
                    "create_user": "won",
                    "completed": true
                },
                {
                    "task_name": "단어필사",
                    "used": true,
                    "completed": true,
                    "taskId": "t000003",
                    "task_point": 5,
                    "create_user": "won",
                    "user_id_to_check": "so"
                },
                {
                    "completed": true,
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "taskId": "t000004",
                    "create_user": "won"
                },
                {
                    "task_point": 3,
                    "taskId": "t000005",
                    "task_name": "9시40분까지 잘 준비",
                    "used": true,
                    "completed": true,
                    "create_user": "won",
                    "user_id_to_check": "so"
                },
                {
                    "completed": true,
                    "used": true,
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "create_user": "won",
                    "taskId": "t000007"
                }
            ],
            "on": [
                {
                    "task_name": "신발정리",
                    "task_point": 3,
                    "create_user": "won",
                    "completed": true,
                    "taskId": "t000000",
                    "user_id_to_check": "on",
                    "used": true
                },
                {
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "completed": true,
                    "task_point": 2,
                    "taskId": "t000001",
                    "used": true,
                    "task_name": "이불정리"
                },
                {
                    "task_point": 2,
                    "used": true,
                    "task_name": "독서(20분 이상)",
                    "create_user": "won",
                    "completed": true,
                    "user_id_to_check": "on",
                    "taskId": "t000002"
                },
                {
                    "task_name": "단어필사",
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "used": true,
                    "task_point": 5,
                    "taskId": "t000003",
                    "completed": true
                },
                {
                    "task_point": 2,
                    "create_user": "won",
                    "used": true,
                    "taskId": "t000004",
                    "user_id_to_check": "on",
                    "completed": true,
                    "task_name": "반찬 안남기기"
                },
                {
                    "used": true,
                    "taskId": "t000005",
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "on",
                    "completed": false,
                    "task_point": 3,
                    "create_user": "won"
                },
                {
                    "completed": true,
                    "task_point": 3,
                    "used": true,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "taskId": "t000006"
                }
            ]
        },
        "2025-01-18": {
            "so": [
                {
                    "used": true,
                    "task_name": "신발정리",
                    "completed": true,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "taskId": "t000000",
                    "task_point": 3
                },
                {
                    "task_point": 2,
                    "user_id_to_check": "so",
                    "taskId": "t000001",
                    "completed": true,
                    "used": true,
                    "create_user": "won",
                    "task_name": "이불정리"
                },
                {
                    "taskId": "t000002",
                    "task_point": 2,
                    "task_name": "독서(20분 이상)",
                    "used": true,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "completed": true
                },
                {
                    "create_user": "won",
                    "task_point": 6,
                    "completed": true,
                    "user_id_to_check": "so",
                    "task_name": "단어필사",
                    "used": true,
                    "taskId": "t000003"
                },
                {
                    "create_user": "won",
                    "used": true,
                    "task_point": 2,
                    "taskId": "t000004",
                    "completed": true,
                    "user_id_to_check": "so",
                    "task_name": "반찬 안남기기"
                },
                {
                    "used": true,
                    "completed": true,
                    "create_user": "won",
                    "taskId": "t000005",
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "task_name": "9시40분까지 잘 준비"
                },
                {
                    "create_user": "won",
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "completed": true,
                    "task_point": 3,
                    "taskId": "t000007",
                    "user_id_to_check": "so",
                    "used": true
                }
            ],
            "on": [
                {
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "used": true,
                    "task_name": "신발정리",
                    "completed": true,
                    "taskId": "t000000",
                    "task_point": 3
                },
                {
                    "user_id_to_check": "on",
                    "completed": true,
                    "task_point": 2,
                    "create_user": "won",
                    "taskId": "t000001",
                    "task_name": "이불정리",
                    "used": true
                },
                {
                    "task_name": "독서(20분 이상)",
                    "create_user": "won",
                    "taskId": "t000002",
                    "task_point": 2,
                    "user_id_to_check": "on",
                    "used": true,
                    "completed": true
                },
                {
                    "used": true,
                    "user_id_to_check": "on",
                    "task_point": 6,
                    "task_name": "단어필사",
                    "create_user": "won",
                    "completed": true,
                    "taskId": "t000003"
                },
                {
                    "user_id_to_check": "on",
                    "task_name": "반찬 안남기기",
                    "used": true,
                    "taskId": "t000004",
                    "create_user": "won",
                    "task_point": 2,
                    "completed": true
                },
                {
                    "task_point": 3,
                    "completed": true,
                    "used": true,
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "taskId": "t000005"
                },
                {
                    "used": true,
                    "completed": true,
                    "taskId": "t000006",
                    "task_point": 3,
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "task_name": "저녁밥 먹고 스쿼트 50개"
                }
            ]
        },
        "2025-01-01": {
            "on": [
                {
                    "task_name": "신발정리",
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "completed": false,
                    "taskId": "t000000",
                    "task_point": 3,
                    "used": true
                },
                {
                    "used": true,
                    "completed": true,
                    "task_point": 2,
                    "task_name": "이불정리",
                    "taskId": "t000001",
                    "create_user": "won",
                    "user_id_to_check": "on"
                },
                {
                    "task_name": "독서(20분 이상)",
                    "task_point": 2,
                    "used": true,
                    "taskId": "t000002",
                    "user_id_to_check": "on",
                    "completed": true,
                    "create_user": "won"
                },
                {
                    "used": true,
                    "taskId": "t000003",
                    "task_point": 5,
                    "completed": true,
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "task_name": "단어필사"
                },
                {
                    "used": true,
                    "task_point": 2,
                    "completed": true,
                    "taskId": "t000004",
                    "user_id_to_check": "on",
                    "task_name": "반찬 안남기기",
                    "create_user": "won"
                },
                {
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "on",
                    "taskId": "t000005",
                    "used": true,
                    "completed": false,
                    "task_point": 3,
                    "create_user": "won"
                },
                {
                    "used": true,
                    "user_id_to_check": "on",
                    "taskId": "t000006",
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "completed": false,
                    "task_point": 3,
                    "create_user": "won"
                }
            ],
            "so": [
                {
                    "taskId": "t000000",
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "completed": false,
                    "used": true,
                    "create_user": "won",
                    "task_name": "신발정리"
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
                    "used": true,
                    "taskId": "t000002",
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "completed": true,
                    "create_user": "won",
                    "task_name": "독서(20분 이상)"
                },
                {
                    "taskId": "t000003",
                    "completed": true,
                    "task_point": 5,
                    "create_user": "won",
                    "task_name": "단어필사",
                    "user_id_to_check": "so",
                    "used": true
                },
                {
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "task_name": "반찬 안남기기",
                    "task_point": 2,
                    "taskId": "t000004",
                    "completed": true,
                    "used": true
                },
                {
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "completed": false,
                    "create_user": "won",
                    "taskId": "t000005",
                    "used": true,
                    "task_name": "9시40분까지 잘 준비"
                },
                {
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "taskId": "t000007",
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "used": true,
                    "create_user": "won",
                    "completed": false
                }
            ]
        },
        "2025-01-08": {
            "on": [
                {
                    "user_id_to_check": "on",
                    "task_point": 3,
                    "completed": true,
                    "create_user": "won",
                    "used": true,
                    "taskId": "t000000",
                    "task_name": "신발정리"
                },
                {
                    "create_user": "won",
                    "taskId": "t000001",
                    "task_point": 2,
                    "user_id_to_check": "on",
                    "task_name": "이불정리",
                    "completed": true,
                    "used": true
                },
                {
                    "completed": true,
                    "create_user": "won",
                    "taskId": "t000002",
                    "used": true,
                    "task_name": "독서(20분 이상)",
                    "task_point": 2,
                    "user_id_to_check": "on"
                },
                {
                    "task_point": 5,
                    "completed": true,
                    "user_id_to_check": "on",
                    "taskId": "t000003",
                    "used": true,
                    "task_name": "단어필사",
                    "create_user": "won"
                },
                {
                    "completed": false,
                    "user_id_to_check": "on",
                    "task_point": 2,
                    "create_user": "won",
                    "taskId": "t000004",
                    "used": true,
                    "task_name": "반찬 안남기기"
                },
                {
                    "task_name": "9시40분까지 잘 준비",
                    "task_point": 3,
                    "completed": true,
                    "used": true,
                    "taskId": "t000005",
                    "create_user": "won",
                    "user_id_to_check": "on"
                },
                {
                    "user_id_to_check": "on",
                    "taskId": "t000006",
                    "used": true,
                    "create_user": "won",
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "completed": true,
                    "task_point": 3
                }
            ],
            "so": [
                {
                    "task_point": 3,
                    "task_name": "신발정리",
                    "used": true,
                    "create_user": "won",
                    "taskId": "t000000",
                    "user_id_to_check": "so",
                    "completed": true
                },
                {
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "completed": true,
                    "task_name": "이불정리",
                    "create_user": "won",
                    "taskId": "t000001",
                    "used": true
                },
                {
                    "create_user": "won",
                    "completed": true,
                    "taskId": "t000002",
                    "task_name": "독서(20분 이상)",
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "used": true
                },
                {
                    "create_user": "won",
                    "task_point": 5,
                    "task_name": "단어필사",
                    "completed": true,
                    "user_id_to_check": "so",
                    "used": true,
                    "taskId": "t000003"
                },
                {
                    "task_name": "반찬 안남기기",
                    "user_id_to_check": "so",
                    "taskId": "t000004",
                    "completed": true,
                    "task_point": 2,
                    "create_user": "won",
                    "used": true
                },
                {
                    "create_user": "won",
                    "task_name": "9시40분까지 잘 준비",
                    "task_point": 3,
                    "used": true,
                    "completed": true,
                    "user_id_to_check": "so",
                    "taskId": "t000005"
                },
                {
                    "user_id_to_check": "so",
                    "completed": true,
                    "create_user": "won",
                    "taskId": "t000007",
                    "used": true,
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "task_point": 3
                }
            ]
        },
        "2025-01-11": {
            "on": [
                {
                    "completed": true,
                    "user_id_to_check": "on",
                    "taskId": "t000000",
                    "task_point": 3,
                    "task_name": "신발정리",
                    "used": true,
                    "create_user": "won"
                },
                {
                    "create_user": "won",
                    "taskId": "t000001",
                    "task_name": "이불정리",
                    "used": true,
                    "completed": true,
                    "user_id_to_check": "on",
                    "task_point": 2
                },
                {
                    "user_id_to_check": "on",
                    "taskId": "t000002",
                    "used": true,
                    "task_point": 2,
                    "completed": true,
                    "task_name": "독서(20분 이상)",
                    "create_user": "won"
                },
                {
                    "task_point": 5,
                    "completed": true,
                    "user_id_to_check": "on",
                    "taskId": "t000003",
                    "create_user": "won",
                    "task_name": "단어필사",
                    "used": true
                },
                {
                    "completed": true,
                    "user_id_to_check": "on",
                    "task_point": 2,
                    "create_user": "won",
                    "taskId": "t000004",
                    "used": true,
                    "task_name": "반찬 안남기기"
                },
                {
                    "user_id_to_check": "on",
                    "completed": true,
                    "taskId": "t000005",
                    "task_point": 3,
                    "task_name": "9시40분까지 잘 준비",
                    "used": true,
                    "create_user": "won"
                },
                {
                    "completed": true,
                    "user_id_to_check": "on",
                    "used": true,
                    "task_point": 3,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "create_user": "won",
                    "taskId": "t000006"
                }
            ],
            "so": [
                {
                    "taskId": "t000000",
                    "used": true,
                    "task_name": "신발정리",
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_point": 3,
                    "completed": true
                },
                {
                    "task_point": 2,
                    "completed": true,
                    "taskId": "t000001",
                    "task_name": "이불정리",
                    "used": true,
                    "user_id_to_check": "so",
                    "create_user": "won"
                },
                {
                    "taskId": "t000002",
                    "task_point": 2,
                    "task_name": "독서(20분 이상)",
                    "used": true,
                    "completed": true,
                    "create_user": "won",
                    "user_id_to_check": "so"
                },
                {
                    "create_user": "won",
                    "taskId": "t000003",
                    "task_point": 5,
                    "used": true,
                    "task_name": "단어필사",
                    "user_id_to_check": "so",
                    "completed": true
                },
                {
                    "task_point": 2,
                    "task_name": "반찬 안남기기",
                    "used": true,
                    "taskId": "t000004",
                    "completed": true,
                    "user_id_to_check": "so",
                    "create_user": "won"
                },
                {
                    "completed": true,
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "taskId": "t000005",
                    "used": true,
                    "create_user": "won"
                },
                {
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "taskId": "t000007",
                    "used": true,
                    "completed": true,
                    "task_point": 3
                }
            ]
        },
        "2025-01-17": {
            "so": [
                {
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "task_name": "신발정리",
                    "taskId": "t000000",
                    "used": true,
                    "completed": true,
                    "create_user": "won"
                },
                {
                    "completed": true,
                    "user_id_to_check": "so",
                    "used": true,
                    "task_point": 2,
                    "task_name": "이불정리",
                    "taskId": "t000001",
                    "create_user": "won"
                },
                {
                    "task_point": 2,
                    "used": true,
                    "create_user": "won",
                    "task_name": "독서(20분 이상)",
                    "taskId": "t000002",
                    "user_id_to_check": "so",
                    "completed": true
                },
                {
                    "taskId": "t000003",
                    "task_point": 5,
                    "used": true,
                    "completed": true,
                    "create_user": "won",
                    "task_name": "단어필사",
                    "user_id_to_check": "so"
                },
                {
                    "create_user": "won",
                    "completed": true,
                    "taskId": "t000004",
                    "task_name": "반찬 안남기기",
                    "used": true,
                    "task_point": 2,
                    "user_id_to_check": "so"
                },
                {
                    "used": true,
                    "task_name": "9시40분까지 잘 준비",
                    "completed": true,
                    "taskId": "t000005",
                    "task_point": 3,
                    "user_id_to_check": "so",
                    "create_user": "won"
                },
                {
                    "completed": true,
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "taskId": "t000007",
                    "user_id_to_check": "so",
                    "used": true,
                    "task_point": 3,
                    "create_user": "won"
                }
            ],
            "on": [
                {
                    "create_user": "won",
                    "task_point": 3,
                    "used": true,
                    "taskId": "t000000",
                    "task_name": "신발정리",
                    "user_id_to_check": "on",
                    "completed": true
                },
                {
                    "task_name": "이불정리",
                    "taskId": "t000001",
                    "completed": true,
                    "used": true,
                    "task_point": 2,
                    "user_id_to_check": "on",
                    "create_user": "won"
                },
                {
                    "create_user": "won",
                    "taskId": "t000002",
                    "completed": true,
                    "task_name": "독서(20분 이상)",
                    "used": true,
                    "user_id_to_check": "on",
                    "task_point": 2
                },
                {
                    "create_user": "won",
                    "task_name": "단어필사",
                    "completed": true,
                    "used": true,
                    "task_point": 5,
                    "user_id_to_check": "on",
                    "taskId": "t000003"
                },
                {
                    "taskId": "t000004",
                    "completed": true,
                    "used": true,
                    "task_point": 2,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "task_name": "반찬 안남기기"
                },
                {
                    "used": true,
                    "user_id_to_check": "on",
                    "taskId": "t000005",
                    "task_name": "9시40분까지 잘 준비",
                    "completed": true,
                    "create_user": "won",
                    "task_point": 3
                },
                {
                    "completed": true,
                    "used": true,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "taskId": "t000006",
                    "task_point": 3,
                    "task_name": "저녁밥 먹고 스쿼트 50개"
                }
            ]
        },
        "2025-01-23": {
            "so": [
                {
                    "taskId": "t000000",
                    "create_user": "won",
                    "task_point": 3,
                    "user_id_to_check": "so",
                    "completed": true,
                    "used": true,
                    "task_name": "신발정리"
                },
                {
                    "task_name": "이불정리",
                    "completed": true,
                    "user_id_to_check": "so",
                    "taskId": "t000001",
                    "used": true,
                    "create_user": "won",
                    "task_point": 2
                },
                {
                    "used": true,
                    "taskId": "t000002",
                    "task_name": "독서(20분 이상)",
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "completed": true
                },
                {
                    "create_user": "won",
                    "used": true,
                    "task_point": 5,
                    "taskId": "t000003",
                    "user_id_to_check": "so",
                    "task_name": "단어필사",
                    "completed": true
                },
                {
                    "completed": true,
                    "user_id_to_check": "so",
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "create_user": "won",
                    "task_point": 2,
                    "taskId": "t000004"
                },
                {
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "used": true,
                    "taskId": "t000005",
                    "task_name": "9시40분까지 잘 준비",
                    "create_user": "won",
                    "completed": true
                },
                {
                    "completed": true,
                    "used": true,
                    "taskId": "t000007",
                    "task_point": 3,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "task_name": "저녁밥 먹고 스쿼트 30개"
                }
            ],
            "on": [
                {
                    "user_id_to_check": "on",
                    "task_name": "신발정리",
                    "create_user": "won",
                    "used": true,
                    "task_point": 3,
                    "completed": true,
                    "taskId": "t000000"
                },
                {
                    "task_name": "이불정리",
                    "create_user": "won",
                    "used": true,
                    "taskId": "t000001",
                    "task_point": 2,
                    "user_id_to_check": "on",
                    "completed": true
                },
                {
                    "used": true,
                    "completed": true,
                    "create_user": "won",
                    "task_name": "독서(20분 이상)",
                    "task_point": 2,
                    "taskId": "t000002",
                    "user_id_to_check": "on"
                },
                {
                    "task_name": "단어필사",
                    "task_point": 5,
                    "taskId": "t000003",
                    "completed": true,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "used": true
                },
                {
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "completed": true,
                    "user_id_to_check": "on",
                    "taskId": "t000004",
                    "create_user": "won",
                    "task_point": 2
                },
                {
                    "user_id_to_check": "on",
                    "used": true,
                    "task_point": 3,
                    "create_user": "won",
                    "completed": true,
                    "task_name": "9시40분까지 잘 준비",
                    "taskId": "t000005"
                },
                {
                    "taskId": "t000006",
                    "user_id_to_check": "on",
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "create_user": "won",
                    "task_point": 3,
                    "completed": true,
                    "used": true
                }
            ]
        },
        "2025-01-02": {
            "on": [
                {
                    "create_user": "won",
                    "used": true,
                    "task_name": "신발정리",
                    "user_id_to_check": "on",
                    "completed": false,
                    "task_point": 3,
                    "taskId": "t000000"
                },
                {
                    "create_user": "won",
                    "used": true,
                    "taskId": "t000001",
                    "user_id_to_check": "on",
                    "task_name": "이불정리",
                    "completed": true,
                    "task_point": 2
                },
                {
                    "task_point": 2,
                    "taskId": "t000002",
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "completed": true,
                    "used": true,
                    "task_name": "독서(20분 이상)"
                },
                {
                    "user_id_to_check": "on",
                    "task_point": 5,
                    "completed": true,
                    "used": true,
                    "create_user": "won",
                    "task_name": "단어필사",
                    "taskId": "t000003"
                },
                {
                    "create_user": "won",
                    "task_name": "반찬 안남기기",
                    "taskId": "t000004",
                    "user_id_to_check": "on",
                    "used": true,
                    "task_point": 2,
                    "completed": true
                },
                {
                    "taskId": "t000005",
                    "create_user": "won",
                    "task_name": "9시40분까지 잘 준비",
                    "task_point": 3,
                    "completed": false,
                    "user_id_to_check": "on",
                    "used": true
                },
                {
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "create_user": "won",
                    "used": true,
                    "user_id_to_check": "on",
                    "completed": true,
                    "task_point": 7,
                    "taskId": "t000006"
                }
            ],
            "so": [
                {
                    "used": true,
                    "task_name": "신발정리",
                    "taskId": "t000000",
                    "create_user": "won",
                    "task_point": 3,
                    "user_id_to_check": "so",
                    "completed": false
                },
                {
                    "completed": true,
                    "taskId": "t000001",
                    "task_name": "이불정리",
                    "task_point": 2,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "used": true
                },
                {
                    "taskId": "t000002",
                    "task_name": "독서(20분 이상)",
                    "create_user": "won",
                    "used": true,
                    "task_point": 2,
                    "completed": true,
                    "user_id_to_check": "so"
                },
                {
                    "task_name": "단어필사",
                    "create_user": "won",
                    "completed": true,
                    "used": true,
                    "taskId": "t000003",
                    "user_id_to_check": "so",
                    "task_point": 5
                },
                {
                    "create_user": "won",
                    "used": true,
                    "user_id_to_check": "so",
                    "taskId": "t000004",
                    "task_point": 2,
                    "completed": true,
                    "task_name": "반찬 안남기기"
                },
                {
                    "user_id_to_check": "so",
                    "taskId": "t000005",
                    "create_user": "won",
                    "completed": false,
                    "used": true,
                    "task_name": "9시40분까지 잘 준비",
                    "task_point": 3
                },
                {
                    "task_point": 7,
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "completed": true,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "used": true,
                    "taskId": "t000007"
                }
            ]
        },
        "2025-01-09": {
            "so": [
                {
                    "task_point": 3,
                    "used": true,
                    "user_id_to_check": "so",
                    "task_name": "신발정리",
                    "completed": true,
                    "taskId": "t000000",
                    "create_user": "won"
                },
                {
                    "create_user": "won",
                    "taskId": "t000001",
                    "used": true,
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "completed": true,
                    "task_name": "이불정리"
                },
                {
                    "task_point": 2,
                    "user_id_to_check": "so",
                    "completed": true,
                    "create_user": "won",
                    "taskId": "t000002",
                    "used": true,
                    "task_name": "독서(20분 이상)"
                },
                {
                    "task_name": "단어필사",
                    "completed": true,
                    "task_point": 5,
                    "create_user": "won",
                    "taskId": "t000003",
                    "user_id_to_check": "so",
                    "used": true
                },
                {
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "taskId": "t000004",
                    "task_name": "반찬 안남기기",
                    "create_user": "won",
                    "used": true,
                    "completed": true
                },
                {
                    "used": true,
                    "completed": true,
                    "create_user": "won",
                    "taskId": "t000005",
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "so",
                    "task_point": 3
                },
                {
                    "user_id_to_check": "so",
                    "completed": true,
                    "taskId": "t000007",
                    "task_point": 3,
                    "create_user": "won",
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "used": true
                }
            ],
            "on": [
                {
                    "used": true,
                    "taskId": "t000000",
                    "create_user": "won",
                    "completed": true,
                    "task_name": "신발정리",
                    "user_id_to_check": "on",
                    "task_point": 3
                },
                {
                    "completed": true,
                    "task_point": 2,
                    "task_name": "이불정리",
                    "used": true,
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "taskId": "t000001"
                },
                {
                    "user_id_to_check": "on",
                    "used": true,
                    "completed": true,
                    "task_point": 2,
                    "taskId": "t000002",
                    "create_user": "won",
                    "task_name": "독서(20분 이상)"
                },
                {
                    "task_point": 5,
                    "user_id_to_check": "on",
                    "used": true,
                    "task_name": "단어필사",
                    "taskId": "t000003",
                    "completed": true,
                    "create_user": "won"
                },
                {
                    "task_name": "반찬 안남기기",
                    "task_point": 2,
                    "completed": true,
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "used": true,
                    "taskId": "t000004"
                },
                {
                    "task_name": "9시40분까지 잘 준비",
                    "completed": true,
                    "task_point": 3,
                    "create_user": "won",
                    "used": true,
                    "taskId": "t000005",
                    "user_id_to_check": "on"
                },
                {
                    "taskId": "t000006",
                    "used": true,
                    "task_point": 3,
                    "create_user": "won",
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "completed": true,
                    "user_id_to_check": "on"
                }
            ]
        },
        "2025-01-19": {
            "on": [
                {
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "taskId": "t000000",
                    "task_name": "신발정리",
                    "completed": true,
                    "task_point": 3,
                    "used": true
                },
                {
                    "completed": true,
                    "create_user": "won",
                    "task_name": "이불정리",
                    "taskId": "t000001",
                    "task_point": 2,
                    "user_id_to_check": "on",
                    "used": true
                },
                {
                    "task_name": "독서(20분 이상)",
                    "completed": true,
                    "taskId": "t000002",
                    "create_user": "won",
                    "task_point": 2,
                    "used": true,
                    "user_id_to_check": "on"
                },
                {
                    "used": true,
                    "completed": true,
                    "task_name": "단어필사",
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "taskId": "t000003",
                    "task_point": 5
                },
                {
                    "create_user": "won",
                    "taskId": "t000004",
                    "used": true,
                    "user_id_to_check": "on",
                    "task_name": "반찬 안남기기",
                    "completed": false,
                    "task_point": 2
                },
                {
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "used": true,
                    "completed": true,
                    "task_name": "9시40분까지 잘 준비",
                    "taskId": "t000005",
                    "task_point": 3
                },
                {
                    "user_id_to_check": "on",
                    "completed": true,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "taskId": "t000006",
                    "used": true,
                    "create_user": "won",
                    "task_point": 3
                }
            ],
            "so": [
                {
                    "taskId": "t000000",
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_point": 3,
                    "completed": true,
                    "used": true,
                    "task_name": "신발정리"
                },
                {
                    "user_id_to_check": "so",
                    "completed": false,
                    "task_point": 2,
                    "taskId": "t000001",
                    "task_name": "이불정리",
                    "used": true,
                    "create_user": "won"
                },
                {
                    "used": true,
                    "taskId": "t000002",
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "create_user": "won",
                    "completed": true,
                    "task_name": "독서(20분 이상)"
                },
                {
                    "used": true,
                    "task_name": "단어필사",
                    "create_user": "won",
                    "completed": true,
                    "taskId": "t000003",
                    "task_point": 5,
                    "user_id_to_check": "so"
                },
                {
                    "used": true,
                    "task_point": 2,
                    "task_name": "반찬 안남기기",
                    "create_user": "won",
                    "completed": true,
                    "taskId": "t000004",
                    "user_id_to_check": "so"
                },
                {
                    "create_user": "won",
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "so",
                    "used": true,
                    "taskId": "t000005",
                    "completed": true,
                    "task_point": 3
                },
                {
                    "completed": false,
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "task_point": 3,
                    "used": true,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "taskId": "t000007"
                }
            ]
        },
        "2025-01-24": {
            "so": [
                {
                    "task_point": 6,
                    "taskId": "t000000",
                    "completed": true,
                    "task_name": "신발정리",
                    "create_user": "won",
                    "used": true,
                    "user_id_to_check": "so"
                },
                {
                    "used": true,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_name": "이불정리",
                    "task_point": 2,
                    "taskId": "t000001",
                    "completed": true
                },
                {
                    "create_user": "won",
                    "task_name": "독서(20분 이상)",
                    "taskId": "t000002",
                    "task_point": 2,
                    "used": true,
                    "user_id_to_check": "so",
                    "completed": true
                },
                {
                    "taskId": "t000003",
                    "task_point": 5,
                    "task_name": "단어필사",
                    "used": true,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "completed": true
                },
                {
                    "create_user": "won",
                    "taskId": "t000004",
                    "task_name": "반찬 안남기기",
                    "used": true,
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "completed": true
                },
                {
                    "task_name": "9시40분까지 잘 준비",
                    "used": true,
                    "taskId": "t000005",
                    "task_point": 3,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "completed": true
                },
                {
                    "used": true,
                    "taskId": "t000007",
                    "task_point": 3,
                    "completed": true,
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "user_id_to_check": "so",
                    "create_user": "won"
                }
            ],
            "on": [
                {
                    "taskId": "t000000",
                    "create_user": "won",
                    "completed": true,
                    "user_id_to_check": "on",
                    "used": true,
                    "task_name": "신발정리",
                    "task_point": 5
                },
                {
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "task_name": "이불정리",
                    "taskId": "t000001",
                    "used": true,
                    "completed": true,
                    "task_point": 2
                },
                {
                    "task_name": "독서(20분 이상)",
                    "completed": true,
                    "create_user": "won",
                    "taskId": "t000002",
                    "task_point": 1,
                    "user_id_to_check": "on",
                    "used": true
                },
                {
                    "taskId": "t000003",
                    "task_point": 5,
                    "used": true,
                    "completed": true,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "task_name": "단어필사"
                },
                {
                    "used": true,
                    "task_point": 2,
                    "completed": true,
                    "taskId": "t000004",
                    "task_name": "반찬 안남기기",
                    "create_user": "won",
                    "user_id_to_check": "on"
                },
                {
                    "task_point": 3,
                    "taskId": "t000005",
                    "create_user": "won",
                    "completed": true,
                    "used": true,
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "on"
                },
                {
                    "used": true,
                    "user_id_to_check": "on",
                    "taskId": "t000006",
                    "task_point": 3,
                    "completed": true,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "create_user": "won"
                }
            ]
        },
        "2025-01-22": {
            "so": [
                {
                    "task_name": "신발정리",
                    "used": true,
                    "create_user": "won",
                    "task_point": 3,
                    "taskId": "t000000",
                    "completed": true,
                    "user_id_to_check": "so"
                },
                {
                    "task_name": "이불정리",
                    "user_id_to_check": "so",
                    "completed": true,
                    "taskId": "t000001",
                    "task_point": 2,
                    "used": true,
                    "create_user": "won"
                },
                {
                    "taskId": "t000002",
                    "completed": true,
                    "task_name": "독서(20분 이상)",
                    "user_id_to_check": "so",
                    "used": true,
                    "create_user": "won",
                    "task_point": 2
                },
                {
                    "task_point": 5,
                    "used": true,
                    "taskId": "t000003",
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_name": "단어필사",
                    "completed": true
                },
                {
                    "used": true,
                    "user_id_to_check": "so",
                    "task_name": "반찬 안남기기",
                    "taskId": "t000004",
                    "create_user": "won",
                    "task_point": 2,
                    "completed": true
                },
                {
                    "create_user": "won",
                    "taskId": "t000005",
                    "completed": true,
                    "task_name": "9시40분까지 잘 준비",
                    "task_point": 3,
                    "used": true,
                    "user_id_to_check": "so"
                },
                {
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "task_point": 3,
                    "completed": true,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "used": true,
                    "taskId": "t000007"
                }
            ],
            "on": [
                {
                    "user_id_to_check": "on",
                    "task_name": "신발정리",
                    "create_user": "won",
                    "task_point": 3,
                    "taskId": "t000000",
                    "completed": true,
                    "used": true
                },
                {
                    "taskId": "t000001",
                    "user_id_to_check": "on",
                    "task_name": "이불정리",
                    "create_user": "won",
                    "completed": true,
                    "used": true,
                    "task_point": 2
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
                    "create_user": "won",
                    "used": true,
                    "user_id_to_check": "on",
                    "task_name": "단어필사",
                    "task_point": 6,
                    "taskId": "t000003",
                    "completed": true
                },
                {
                    "create_user": "won",
                    "taskId": "t000004",
                    "user_id_to_check": "on",
                    "completed": true,
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "task_point": 2
                },
                {
                    "user_id_to_check": "on",
                    "used": true,
                    "task_name": "9시40분까지 잘 준비",
                    "create_user": "won",
                    "task_point": 3,
                    "taskId": "t000005",
                    "completed": true
                },
                {
                    "taskId": "t000006",
                    "user_id_to_check": "on",
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "completed": true,
                    "task_point": 3,
                    "create_user": "won",
                    "used": true
                }
            ]
        }
    },
    "users_to_check": [
        {
            "user_id": "on",
            "photo": "/on_w48.png",
            "user_name": "온겸"
        },
        {
            "user_name": "소빈",
            "user_id": "so",
            "photo": "/so_w48.png"
        }
    ],
    "title": "두더지가족 매일매일 챌린지♡",
    "points_reward": [
        {
            "point_reward": 520,
            "award_detail": "뷔페 이용권(4인)",
            "point_reward_detail": "520점이상",
            "ranking": 1,
            "rankingName": "1등"
        },
        {
            "point_reward_detail": "470점이상",
            "ranking": 2,
            "point_reward": 470,
            "award_detail": "키즈까페 이용권(4인)",
            "rankingName": "2등"
        },
        {
            "ranking": 3,
            "rankingName": "3등",
            "point_reward": 430,
            "award_detail": "포시즌 1만원 이용권",
            "point_reward_detail": "430점이상"
        },
        {
            "rankingName": "4등",
            "point_reward": 400,
            "ranking": 4,
            "award_detail": "뽑기방 5천원 이용권",
            "point_reward_detail": "400점이상"
        },
        {
            "award_detail": "2천원 용돈",
            "point_reward_detail": "참가",
            "rankingName": "참가상",
            "point_reward": 0,
            "ranking": 5
        }
    ],
    "tasks_template": {
        "2025-01-13": {
            "on": [
                {
                    "completed": true,
                    "used": true,
                    "task_name": "신발정리",
                    "task_point": 3,
                    "create_user": "won",
                    "taskId": "t000000",
                    "user_id_to_check": "on"
                },
                {
                    "task_name": "이불정리",
                    "task_point": 2,
                    "taskId": "t000001",
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "used": true,
                    "completed": true
                },
                {
                    "task_name": "독서(20분 이상)",
                    "task_point": 2,
                    "user_id_to_check": "on",
                    "used": true,
                    "taskId": "t000002",
                    "completed": false,
                    "create_user": "won"
                },
                {
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "completed": false,
                    "taskId": "t000003",
                    "task_name": "단어필사",
                    "used": true,
                    "task_point": 5
                },
                {
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "used": true,
                    "completed": false,
                    "task_point": 2,
                    "task_name": "반찬 안남기기",
                    "taskId": "t000004"
                },
                {
                    "completed": false,
                    "used": true,
                    "taskId": "t000005",
                    "task_point": 3,
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "on",
                    "create_user": "won"
                },
                {
                    "task_point": 3,
                    "completed": false,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "used": true,
                    "create_user": "won",
                    "taskId": "t000006",
                    "user_id_to_check": "on"
                }
            ],
            "so": [
                {
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "completed": false,
                    "task_name": "신발정리",
                    "taskId": "t000000",
                    "task_point": 3,
                    "used": true
                },
                {
                    "task_name": "이불정리",
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "used": true,
                    "task_point": 2,
                    "taskId": "t000001",
                    "completed": false
                },
                {
                    "used": true,
                    "taskId": "t000002",
                    "create_user": "won",
                    "task_point": 2,
                    "user_id_to_check": "so",
                    "completed": false,
                    "task_name": "독서(20분 이상)"
                },
                {
                    "completed": false,
                    "task_name": "단어필사",
                    "user_id_to_check": "so",
                    "taskId": "t000003",
                    "task_point": 5,
                    "used": true,
                    "create_user": "won"
                },
                {
                    "task_name": "반찬 안남기기",
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "used": true,
                    "taskId": "t000004",
                    "completed": false,
                    "task_point": 2
                },
                {
                    "taskId": "t000005",
                    "task_name": "9시40분까지 잘 준비",
                    "used": true,
                    "completed": false,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_point": 3
                },
                {
                    "used": true,
                    "task_point": 3,
                    "user_id_to_check": "so",
                    "completed": true,
                    "create_user": "won",
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "taskId": "t000007"
                }
            ]
        }
    },
    "users_total_point": {
        "2025-01-13": [
            {
                "total_point": 20,
                "user_id": "on",
                "user_name": "온겸"
            },
            {
                "total_point": 19,
                "user_id": "so",
                "user_name": "소빈"
            }
        ]
    }
}



						