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
                    "name" : "2025 challenge every day",
                    "create_at" : {
                        "2025-01-13" : {
                                        "tasks" : [ 
                                                    { 
                                                        "task_name" : "이불정리",
                                                        "task_point" : 5,
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
                                                    }
                                                ],
                                        "users_total_point"	: [
                                                                {
                                                                    "user_id" : "on",
                                                                    "user_name" : "온겸",
                                                                    "total_point" : 20
                                                                },
                                                                {
                                                                    "user_id" : "so",
                                                                    "user_name" : "소빈",
                                                                    "total_point" : 19
                                                                }
                                                            ]
                                        }
                                    },
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
						