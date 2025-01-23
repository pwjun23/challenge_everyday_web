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
    "users_to_check": [
        {
            "photo": "/profile_default.svg",
            "user_name": "온겸",
            "user_id": "on"
        },
        {
            "photo": "/profile_default.svg",
            "user_id": "so",
            "user_name": "소빈"
        }
    ],
    "creation_users_id": [
        "won",
        "hyun"
    ],
    "tasks": {
        "2025-01-18": {
            "so": [
                {
                    "task_point": 3,
                    "completed": false,
                    "user_id_to_check": "so",
                    "taskId": "t000000",
                    "used": true,
                    "task_name": "신발정리",
                    "create_user": "won"
                },
                {
                    "task_name": "이불정리",
                    "task_point": 2,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "completed": false,
                    "used": true,
                    "taskId": "t000001"
                },
                {
                    "create_user": "won",
                    "completed": false,
                    "task_name": "독서(20분 이상)",
                    "used": true,
                    "user_id_to_check": "so",
                    "task_point": 2,
                    "taskId": "t000002"
                },
                {
                    "user_id_to_check": "so",
                    "completed": true,
                    "create_user": "won",
                    "used": true,
                    "task_name": "단어필사",
                    "task_point": 5,
                    "taskId": "t000003"
                },
                {
                    "task_name": "반찬 안남기기",
                    "user_id_to_check": "so",
                    "taskId": "t000004",
                    "task_point": 2,
                    "create_user": "won",
                    "completed": false,
                    "used": true
                },
                {
                    "completed": false,
                    "task_point": 3,
                    "user_id_to_check": "so",
                    "task_name": "9시40분까지 잘 준비",
                    "used": true,
                    "taskId": "t000005",
                    "create_user": "won"
                },
                {
                    "completed": false,
                    "task_point": 3,
                    "used": true,
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "create_user": "won",
                    "taskId": "t000007",
                    "user_id_to_check": "so"
                }
            ]
        },
        "2025-01-23": {
            "on": [
                {
                    "task_point": 3,
                    "completed": true,
                    "taskId": "t000000",
                    "create_user": "won",
                    "task_name": "신발정리",
                    "used": true,
                    "user_id_to_check": "on"
                },
                {
                    "used": true,
                    "task_point": 2,
                    "user_id_to_check": "on",
                    "completed": true,
                    "taskId": "t000001",
                    "create_user": "won",
                    "task_name": "이불정리"
                },
                {
                    "used": true,
                    "user_id_to_check": "on",
                    "completed": true,
                    "task_point": 2,
                    "create_user": "won",
                    "task_name": "독서(20분 이상)",
                    "taskId": "t000002"
                },
                {
                    "used": true,
                    "create_user": "won",
                    "task_point": 5,
                    "completed": true,
                    "taskId": "t000003",
                    "task_name": "단어필사",
                    "user_id_to_check": "on"
                },
                {
                    "task_name": "반찬 안남기기",
                    "used": true,
                    "task_point": 2,
                    "user_id_to_check": "on",
                    "completed": true,
                    "create_user": "won",
                    "taskId": "t000004"
                },
                {
                    "task_name": "9시40분까지 잘 준비",
                    "taskId": "t000005",
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "used": true,
                    "task_point": 3,
                    "completed": true
                },
                {
                    "used": true,
                    "completed": true,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "taskId": "t000006",
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "task_point": 3
                }
            ]
        },
        "2025-01-16": {
            "so": [
                {
                    "create_user": "won",
                    "task_name": "신발정리",
                    "user_id_to_check": "so",
                    "completed": false,
                    "taskId": "t000000",
                    "task_point": 3,
                    "used": true
                },
                {
                    "completed": false,
                    "task_point": 2,
                    "user_id_to_check": "so",
                    "used": true,
                    "taskId": "t000001",
                    "create_user": "won",
                    "task_name": "이불정리"
                },
                {
                    "taskId": "t000002",
                    "create_user": "won",
                    "used": true,
                    "task_name": "독서(20분 이상)",
                    "task_point": 2,
                    "completed": false,
                    "user_id_to_check": "so"
                },
                {
                    "used": true,
                    "task_name": "단어필사",
                    "task_point": 5,
                    "create_user": "won",
                    "completed": false,
                    "taskId": "t000003",
                    "user_id_to_check": "so"
                },
                {
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "task_point": 2,
                    "taskId": "t000004",
                    "completed": false,
                    "create_user": "won",
                    "user_id_to_check": "so"
                },
                {
                    "taskId": "t000005",
                    "user_id_to_check": "so",
                    "task_point": 3,
                    "used": true,
                    "task_name": "9시40분까지 잘 준비",
                    "create_user": "won",
                    "completed": false
                },
                {
                    "completed": true,
                    "user_id_to_check": "so",
                    "taskId": "t000007",
                    "used": true,
                    "create_user": "won",
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "task_point": 3
                }
            ],
            "on": [
                {
                    "task_name": "신발정리",
                    "used": true,
                    "task_point": 3,
                    "completed": false,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "taskId": "t000000"
                },
                {
                    "create_user": "won",
                    "used": true,
                    "completed": false,
                    "task_point": 2,
                    "taskId": "t000001",
                    "user_id_to_check": "on",
                    "task_name": "이불정리"
                },
                {
                    "task_name": "독서(20분 이상)",
                    "taskId": "t000002",
                    "used": true,
                    "user_id_to_check": "on",
                    "task_point": 2,
                    "create_user": "won",
                    "completed": false
                },
                {
                    "create_user": "won",
                    "task_point": 5,
                    "user_id_to_check": "on",
                    "used": true,
                    "taskId": "t000003",
                    "task_name": "단어필사",
                    "completed": false
                },
                {
                    "task_point": 2,
                    "task_name": "반찬 안남기기",
                    "completed": false,
                    "user_id_to_check": "on",
                    "used": true,
                    "taskId": "t000004",
                    "create_user": "won"
                },
                {
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "taskId": "t000005",
                    "used": true,
                    "task_name": "9시40분까지 잘 준비",
                    "completed": false,
                    "task_point": 3
                },
                {
                    "task_point": 3,
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "taskId": "t000006",
                    "completed": true,
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "used": true
                }
            ]
        },
        "2025-01-14": {
            "on": [
                {
                    "task_name": "신발정리",
                    "used": true,
                    "user_id_to_check": "on",
                    "task_point": 3,
                    "create_user": "won",
                    "completed": true,
                    "taskId": "t000000"
                },
                {
                    "completed": true,
                    "user_id_to_check": "on",
                    "task_name": "이불정리",
                    "used": true,
                    "taskId": "t000001",
                    "create_user": "won",
                    "task_point": 2
                },
                {
                    "completed": false,
                    "task_point": 2,
                    "create_user": "won",
                    "task_name": "독서(20분 이상)",
                    "taskId": "t000002",
                    "used": true,
                    "user_id_to_check": "on"
                },
                {
                    "completed": false,
                    "create_user": "won",
                    "task_name": "단어필사",
                    "used": true,
                    "taskId": "t000003",
                    "task_point": 5,
                    "user_id_to_check": "on"
                },
                {
                    "create_user": "won",
                    "task_point": 2,
                    "completed": false,
                    "task_name": "반찬 안남기기",
                    "taskId": "t000004",
                    "used": true,
                    "user_id_to_check": "on"
                },
                {
                    "create_user": "won",
                    "completed": false,
                    "task_point": 3,
                    "user_id_to_check": "on",
                    "task_name": "9시40분까지 잘 준비",
                    "used": true,
                    "taskId": "t000005"
                },
                {
                    "task_name": "저녁밥 먹고 스쿼트 50개",
                    "taskId": "t000006",
                    "completed": false,
                    "used": true,
                    "create_user": "won",
                    "task_point": 3,
                    "user_id_to_check": "on"
                }
            ],
            "so": [
                {
                    "task_name": "신발정리",
                    "completed": false,
                    "used": true,
                    "user_id_to_check": "so",
                    "create_user": "won",
                    "task_point": 3,
                    "taskId": "t000000"
                },
                {
                    "task_point": 2,
                    "taskId": "t000001",
                    "completed": false,
                    "user_id_to_check": "so",
                    "used": true,
                    "create_user": "won",
                    "task_name": "이불정리"
                },
                {
                    "used": true,
                    "completed": false,
                    "user_id_to_check": "so",
                    "task_name": "독서(20분 이상)",
                    "taskId": "t000002",
                    "task_point": 2,
                    "create_user": "won"
                },
                {
                    "completed": false,
                    "task_point": 5,
                    "used": true,
                    "taskId": "t000003",
                    "task_name": "단어필사",
                    "create_user": "won",
                    "user_id_to_check": "so"
                },
                {
                    "task_point": 2,
                    "completed": false,
                    "create_user": "won",
                    "taskId": "t000004",
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "user_id_to_check": "so"
                },
                {
                    "used": true,
                    "completed": true,
                    "taskId": "t000005",
                    "task_name": "9시40분까지 잘 준비",
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "task_point": 3
                },
                {
                    "user_id_to_check": "so",
                    "used": true,
                    "completed": true,
                    "taskId": "t000007",
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "create_user": "won",
                    "task_point": 3
                }
            ]
        },
        "2025-01-15": {
            "on": [
                {
                    "completed": true,
                    "create_user": "won",
                    "task_point": 3,
                    "used": true,
                    "taskId": "t000000",
                    "task_name": "신발정리",
                    "user_id_to_check": "on"
                },
                {
                    "user_id_to_check": "on",
                    "taskId": "t000001",
                    "completed": false,
                    "create_user": "won",
                    "task_point": 2,
                    "used": true,
                    "task_name": "이불정리"
                },
                {
                    "create_user": "won",
                    "completed": false,
                    "user_id_to_check": "on",
                    "task_point": 2,
                    "used": true,
                    "task_name": "독서(20분 이상)",
                    "taskId": "t000002"
                },
                {
                    "create_user": "won",
                    "taskId": "t000003",
                    "user_id_to_check": "on",
                    "task_name": "단어필사",
                    "used": true,
                    "completed": false,
                    "task_point": 5
                },
                {
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "task_point": 2,
                    "taskId": "t000004",
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "completed": false
                },
                {
                    "task_name": "9시40분까지 잘 준비",
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "completed": false,
                    "taskId": "t000005",
                    "used": true,
                    "task_point": 3
                },
                {
                    "task_point": 3,
                    "create_user": "won",
                    "user_id_to_check": "on",
                    "used": true,
                    "taskId": "t000006",
                    "completed": false,
                    "task_name": "저녁밥 먹고 스쿼트 50개"
                }
            ]
        },
        "2025-01-13": {
            "on": [
                {
                    "completed": true,
                    "task_name": "신발정리",
                    "task_point": 3,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "taskId": "t000000",
                    "used": true
                },
                {
                    "user_id_to_check": "on",
                    "taskId": "t000001",
                    "task_point": 2,
                    "create_user": "won",
                    "used": true,
                    "completed": true,
                    "task_name": "이불정리"
                },
                {
                    "task_name": "독서(20분 이상)",
                    "create_user": "won",
                    "taskId": "t000002",
                    "user_id_to_check": "on",
                    "task_point": 2,
                    "completed": false,
                    "used": true
                },
                {
                    "create_user": "won",
                    "task_point": 5,
                    "taskId": "t000003",
                    "user_id_to_check": "on",
                    "used": true,
                    "task_name": "단어필사",
                    "completed": false
                },
                {
                    "taskId": "t000004",
                    "completed": false,
                    "create_user": "won",
                    "task_point": 2,
                    "task_name": "반찬 안남기기",
                    "user_id_to_check": "on",
                    "used": true
                },
                {
                    "completed": false,
                    "user_id_to_check": "on",
                    "task_name": "9시40분까지 잘 준비",
                    "used": true,
                    "task_point": 3,
                    "create_user": "won",
                    "taskId": "t000005"
                },
                {
                    "create_user": "won",
                    "completed": false,
                    "task_point": 3,
                    "user_id_to_check": "on",
                    "taskId": "t000006",
                    "used": true,
                    "task_name": "저녁밥 먹고 스쿼트 50개"
                }
            ],
            "so": [
                {
                    "used": true,
                    "task_name": "신발정리",
                    "user_id_to_check": "so",
                    "completed": false,
                    "create_user": "won",
                    "task_point": 3,
                    "taskId": "t000000"
                },
                {
                    "create_user": "won",
                    "task_point": 2,
                    "completed": false,
                    "user_id_to_check": "so",
                    "taskId": "t000001",
                    "used": true,
                    "task_name": "이불정리"
                },
                {
                    "create_user": "won",
                    "task_point": 2,
                    "taskId": "t000002",
                    "used": true,
                    "task_name": "독서(20분 이상)",
                    "user_id_to_check": "so",
                    "completed": false
                },
                {
                    "taskId": "t000003",
                    "used": true,
                    "task_name": "단어필사",
                    "completed": false,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "task_point": 5
                },
                {
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "completed": false,
                    "task_point": 2,
                    "taskId": "t000004"
                },
                {
                    "completed": false,
                    "used": true,
                    "task_point": 3,
                    "taskId": "t000005",
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "task_name": "9시40분까지 잘 준비"
                },
                {
                    "taskId": "t000007",
                    "used": true,
                    "create_user": "won",
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "completed": true,
                    "user_id_to_check": "so",
                    "task_point": 3
                }
            ]
        }
    },
    "title": "2025 challenge every day",
    "users_total_point": {
        "2025-01-13": [
            {
                "total_point": 20,
                "user_name": "온겸",
                "user_id": "on"
            },
            {
                "user_name": "소빈",
                "total_point": 19,
                "user_id": "so"
            }
        ]
    },
    "tasks_template": {
        "2025-01-13" : {
            "on": [
                {
                    "completed": true,
                    "task_name": "신발정리",
                    "task_point": 3,
                    "user_id_to_check": "on",
                    "create_user": "won",
                    "taskId": "t000000",
                    "used": true
                },
                {
                    "user_id_to_check": "on",
                    "taskId": "t000001",
                    "task_point": 2,
                    "create_user": "won",
                    "used": true,
                    "completed": true,
                    "task_name": "이불정리"
                },
                {
                    "task_name": "독서(20분 이상)",
                    "create_user": "won",
                    "taskId": "t000002",
                    "user_id_to_check": "on",
                    "task_point": 2,
                    "completed": false,
                    "used": true
                },
                {
                    "create_user": "won",
                    "task_point": 5,
                    "taskId": "t000003",
                    "user_id_to_check": "on",
                    "used": true,
                    "task_name": "단어필사",
                    "completed": false
                },
                {
                    "taskId": "t000004",
                    "completed": false,
                    "create_user": "won",
                    "task_point": 2,
                    "task_name": "반찬 안남기기",
                    "user_id_to_check": "on",
                    "used": true
                },
                {
                    "completed": false,
                    "user_id_to_check": "on",
                    "task_name": "9시40분까지 잘 준비",
                    "used": true,
                    "task_point": 3,
                    "create_user": "won",
                    "taskId": "t000005"
                },
                {
                    "create_user": "won",
                    "completed": false,
                    "task_point": 3,
                    "user_id_to_check": "on",
                    "taskId": "t000006",
                    "used": true,
                    "task_name": "저녁밥 먹고 스쿼트 50개"
                }
            ],
            "so": [
                {
                    "used": true,
                    "task_name": "신발정리",
                    "user_id_to_check": "so",
                    "completed": false,
                    "create_user": "won",
                    "task_point": 3,
                    "taskId": "t000000"
                },
                {
                    "create_user": "won",
                    "task_point": 2,
                    "completed": false,
                    "user_id_to_check": "so",
                    "taskId": "t000001",
                    "used": true,
                    "task_name": "이불정리"
                },
                {
                    "create_user": "won",
                    "task_point": 2,
                    "taskId": "t000002",
                    "used": true,
                    "task_name": "독서(20분 이상)",
                    "user_id_to_check": "so",
                    "completed": false
                },
                {
                    "taskId": "t000003",
                    "used": true,
                    "task_name": "단어필사",
                    "completed": false,
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "task_point": 5
                },
                {
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "used": true,
                    "task_name": "반찬 안남기기",
                    "completed": false,
                    "task_point": 2,
                    "taskId": "t000004"
                },
                {
                    "completed": false,
                    "used": true,
                    "task_point": 3,
                    "taskId": "t000005",
                    "create_user": "won",
                    "user_id_to_check": "so",
                    "task_name": "9시40분까지 잘 준비"
                },
                {
                    "taskId": "t000007",
                    "used": true,
                    "create_user": "won",
                    "task_name": "저녁밥 먹고 스쿼트 30개",
                    "completed": true,
                    "user_id_to_check": "so",
                    "task_point": 3
                }
            ]
        }
    }
}



						