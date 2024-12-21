const employees = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Submit Report",
        taskDescription: "Complete the monthly report for the finance team.",
        taskDate: "2024-12-14",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Attend Meeting",
        taskDescription: "Participate in the quarterly review meeting.",
        taskDate: "2024-12-15",
        category: "Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update Profile",
        taskDescription: "Update your personal information in the system.",
        taskDate: "2024-12-13",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Anjali",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Fix Bug #456",
        taskDescription: "Resolve the UI bug in the login module.",
        taskDate: "2024-12-14",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Write Documentation",
        taskDescription: "Prepare the user manual for the new feature.",
        taskDate: "2024-12-16",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Vikram",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage design.",
        taskDate: "2024-12-13",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client Feedback",
        taskDescription: "Incorporate feedback from the last client meeting.",
        taskDate: "2024-12-15",
        category: "Client Relations",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Inventory Check",
        taskDescription: "Perform a check of the inventory database.",
        taskDate: "2024-12-14",
        category: "Inventory",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Audit Preparation",
        taskDescription: "Prepare documents for the internal audit.",
        taskDate: "2024-12-18",
        category: "Audit",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 5,
    firstName: "Pooja",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Run Performance Tests",
        taskDescription: "Execute load and performance tests on the application.",
        taskDate: "2024-12-15",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Prepare Training",
        taskDescription: "Develop content for the team training session.",
        taskDate: "2024-12-20",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 1,
    firstName: "Arjun",
    email: "admin@example.com",
    password: "123",
  }
];


export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}
