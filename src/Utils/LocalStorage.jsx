const employees = [
    {
        "id": 1,
        "email": "employee1@gmail.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Employee Records",
                "taskDescription": "Review and update the employee information in the management system.",
                "taskDate": "2026-10-04",
                "category": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Prepare Monthly Report",
                "taskDescription": "Prepare the monthly department performance report and submit it to the manager.",
                "taskDate": "2026-10-02",
                "category": "Reports"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend the weekly team meeting and discuss current project progress.",
                "taskDate": "2026-10-05",
                "category": "Meeting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Submit Project Documentation",
                "taskDescription": "Complete and submit the required project documentation.",
                "taskDate": "2026-10-01",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@gmail.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Client Follow Up",
                "taskDescription": "Follow up with the client regarding the pending project requirements.",
                "taskDate": "2026-10-04",
                "category": "Client"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Database Cleanup",
                "taskDescription": "Remove outdated records and organize the employee database.",
                "taskDate": "2026-10-01",
                "category": "Database"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Presentation",
                "taskDescription": "Create a presentation for the upcoming project review.",
                "taskDate": "2026-10-06",
                "category": "Presentation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Email Campaign Review",
                "taskDescription": "Review the latest email campaign results and prepare observations.",
                "taskDate": "2026-09-30",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Inventory Verification",
                "taskDescription": "Verify the current inventory against the recorded stock.",
                "taskDate": "2026-09-29",
                "category": "Inventory"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@gmail.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Dashboard UI",
                "taskDescription": "Create a clean and professional UI for the employee dashboard.",
                "taskDate": "2026-10-04",
                "category": "Design"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix Login Issue",
                "taskDescription": "Investigate and resolve the reported login authentication issue.",
                "taskDate": "2026-10-05",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review the latest code changes and provide feedback to the development team.",
                "taskDate": "2026-10-02",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update Documentation",
                "taskDescription": "Update the technical documentation with the latest system changes.",
                "taskDate": "2026-09-30",
                "category": "Documentation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Deploy New Version",
                "taskDescription": "Deploy the latest application version to the staging environment.",
                "taskDate": "2026-09-28",
                "category": "Deployment"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Test New Features",
                "taskDescription": "Test the newly implemented features and report any bugs.",
                "taskDate": "2026-10-07",
                "category": "Testing"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@gmail.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Sales Report",
                "taskDescription": "Compile the weekly sales numbers and prepare a detailed report.",
                "taskDate": "2026-10-04",
                "category": "Sales"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Customer Feedback Analysis",
                "taskDescription": "Analyze customer feedback and identify common issues.",
                "taskDate": "2026-10-02",
                "category": "Customer Support"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Product Training",
                "taskDescription": "Complete the assigned product training session.",
                "taskDate": "2026-10-06",
                "category": "Training"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@gmail.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "System Maintenance",
                "taskDescription": "Perform routine maintenance and verify that all services are running correctly.",
                "taskDate": "2026-10-04",
                "category": "IT"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Backup Verification",
                "taskDescription": "Verify that the latest system backups have been completed successfully.",
                "taskDate": "2026-10-01",
                "category": "IT"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Security Audit",
                "taskDescription": "Review system security settings and identify potential vulnerabilities.",
                "taskDate": "2026-10-07",
                "category": "Security"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Server Monitoring",
                "taskDescription": "Monitor server performance and document any unusual activity.",
                "taskDate": "2026-09-30",
                "category": "IT"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Network Configuration",
                "taskDescription": "Update the network configuration according to the latest requirements.",
                "taskDate": "2026-09-27",
                "category": "Networking"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Access Control Review",
                "taskDescription": "Review employee access permissions and remove unnecessary access.",
                "taskDate": "2026-10-08",
                "category": "Security"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Software Update",
                "taskDescription": "Install and verify the latest approved software updates.",
                "taskDate": "2026-09-25",
                "category": "Maintenance"
            }
        ]
    }
]

const admin = [
    {
        "id": 1,
        "email": "admin@gmail.com",
        "password": "123"
    }
]

export const setLocalStorage = ()=>{
    localStorage.setItem('employee' , JSON.stringify(employees))
    localStorage.setItem('admin' , JSON.stringify(admin))    
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employee'))
    const admins = JSON.parse(localStorage.getItem('admin'))
    return({employees,admins})
    
}