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
		
		
    
export const checkLists_collection = {
                    "creation_user_id" : ["won","hyun"],
                    "title" : "2025 challenge every day",
                    "tasks" : [ 
                        { 
                            "create_at" : "2025-01-13",
                            "task_name" : "신발정리",
                            "task_point" : 3,
                            "target_users" : 
                                [
                                    {
                                        "user_id" : "on",
                                        "used" : true,
                                        "completed" : true
                                    },
                                    {
                                        "user_id" : "so",
                                        "used" : true,
                                        "completed" : true
                                    }
                                ]
                        },
                        { 
                            "create_at" : "2025-01-13",
                            "task_name" : "이불정리",
                            "task_point" : 2,
                            "target_users" : 
                                [
                                    {
                                        "user_id" : "on",
                                        "used" : true,
                                        "completed" : false
                                    },
                                    {
                                        "user_id" : "so",
                                        "used" : true,
                                        "completed" : false
                                    }
                                ]
                        },
                        { 
                            "create_at" : "2025-01-13",
                            "task_name" : "단어필사",
                            "task_point" : 5,
                            "target_users" : 
                                [
                                    {
                                        "user_id" : "on",
                                        "used" : true,
                                        "completed" : false
                                    },
                                    {
                                        "user_id" : "so",
                                        "used" : true,
                                        "completed" : false
                                    }
                                ]
                        },
                        { 
                            "create_at" : "2025-01-13",
                            "task_name" : "반찬 안남기기",
                            "task_point" : 2,
                            "target_users" : 
                                [
                                    {
                                        "user_id" : "on",
                                        "used" : true,
                                        "completed" : false
                                    },
                                    {
                                        "user_id" : "so",
                                        "used" : true,
                                        "completed" : false
                                    }
                                ]
                        },
                        { 
                            "create_at" : "2025-01-13",
                            "task_name" : "9시40분까지 잘 준비",
                            "task_point" : 3,
                            "target_users" : 
                                [
                                    {
                                        "user_id" : "on",
                                        "used" : true,
                                        "completed" : false
                                    },
                                    {
                                        "user_id" : "so",
                                        "used" : true,
                                        "completed" : false
                                    }
                                ]
                        },
                        { 
                            "create_at" : "2025-01-13",
                            "task_name" : "저녁밥 먹고 스쿼트 50개",
                            "task_point" : 3,
                            "target_users" : 
                                [
                                    {
                                        "user_id" : "on",
                                        "used" : true,
                                        "completed" : false
                                    },
                                    {
                                        "user_id" : "so",
                                        "used" : false,
                                        "completed" : false
                                    }
                                ]
                        },
                        { 
                            "create_at" : "2025-01-13",
                            "task_name" : "저녁밥 먹고 스쿼트 30개",
                            "task_point" : 3,
                            "target_users" : 
                                [
                                    {
                                        "user_id" : "on",
                                        "used" : false,
                                        "completed" : false
                                    },
                                    {
                                        "user_id" : "so",
                                        "used" : true,
                                        "completed" : false
                                    }
                                ]
                        }
                    ],
                    "users_total_point"	: [
                                            {
                                                "create_at" : "2025-01-13",
                                                "user_id" : "on",
                                                "user_name" : "온겸",
                                                "total_point" : 20
                                            },
                                            {
                                                "create_at" : "2025-01-13",
                                                "user_id" : "so",
                                                "user_name" : "소빈",
                                                "total_point" : 19
                                            }
                                        ],
                    "task_hist" : {
                                    "v_0" :
                                    [ 
                                        {
                                        "task_name" : "이불정리",
                                        "task_point" : 5,
                                        "target_users" : [
                                            {
                                                "user_id" : "on",
                                                "used" : true
                                            },
                                            {
                                                "user_id" : "so",
                                                "used" : false
                                            }
                                        ]
                                        }
                                    ]
                                }
                    }

export const tasks_250120 =  [ 
    { 
        "task_name" : "신발정리",
        "task_point" : 3,
        "target_users" : 
            [
                {
                    "user_id" : "on",
                    "used" : true,
                    "completed" : true
                },
                {
                    "user_id" : "so",
                    "used" : true,
                    "completed" : true
                }
            ]
    },
    { 
        "task_name" : "이불정리",
        "task_point" : 2,
        "target_users" : 
            [
                {
                    "user_id" : "on",
                    "used" : true,
                    "completed" : false
                },
                {
                    "user_id" : "so",
                    "used" : true,
                    "completed" : false
                }
            ]
    },
    { 
        "task_name" : "단어필사",
        "task_point" : 5,
        "target_users" : 
            [
                {
                    "user_id" : "on",
                    "used" : true,
                    "completed" : false
                },
                {
                    "user_id" : "so",
                    "used" : true,
                    "completed" : false
                }
            ]
    },
    { 
        "task_name" : "반찬 안남기기",
        "task_point" : 2,
        "target_users" : 
            [
                {
                    "user_id" : "on",
                    "used" : true,
                    "completed" : false
                },
                {
                    "user_id" : "so",
                    "used" : true,
                    "completed" : false
                }
            ]
    },
    { 
        "task_name" : "9시40분까지 잘 준비",
        "task_point" : 3,
        "target_users" : 
            [
                {
                    "user_id" : "on",
                    "used" : true,
                    "completed" : false
                },
                {
                    "user_id" : "so",
                    "used" : true,
                    "completed" : false
                }
            ]
    },
    { 
        "task_name" : "저녁밥 먹고 스쿼트 50개",
        "task_point" : 3,
        "target_users" : 
            [
                {
                    "user_id" : "on",
                    "used" : true,
                    "completed" : false
                },
                {
                    "user_id" : "so",
                    "used" : false,
                    "completed" : false
                }
            ]
    },
    { 
        "task_name" : "저녁밥 먹고 스쿼트 30개",
        "task_point" : 3,
        "target_users" : 
            [
                {
                    "user_id" : "on",
                    "used" : false,
                    "completed" : false
                },
                {
                    "user_id" : "so",
                    "used" : true,
                    "completed" : false
                }
            ]
    }
];
						