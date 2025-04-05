const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskSummary: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login UI for the app.",
        taskDate: "2025-04-06",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix header bug",
        taskDescription: "Resolve the sticky header overflow issue.",
        taskDate: "2025-04-07",
        category: "Bugfix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Update README",
        taskDescription: "Add documentation for setup instructions.",
        taskDate: "2025-04-05",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskSummary: { active: 2, newTask: 2, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Create API routes",
        taskDescription: "Setup backend routes for login and signup.",
        taskDate: "2025-04-06",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Test MongoDB connection",
        taskDescription: "Ensure database connection and error handling.",
        taskDate: "2025-04-04",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Create test cases",
        taskDescription: "Write unit tests for auth module.",
        taskDate: "2025-04-06",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskSummary: { active: 2, newTask: 2, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Create UI animations",
        taskDescription: "Implement smooth transitions with Framer Motion.",
        taskDate: "2025-04-06",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Add 404 Page",
        taskDescription: "Design and add a custom 404 error page.",
        taskDate: "2025-04-07",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Dark Mode Toggle",
        taskDescription: "Implement dark mode feature using Tailwind CSS.",
        taskDate: "2025-04-06",
        category: "UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskSummary: { active: 2, newTask: 2, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Optimize images",
        taskDescription: "Compress images to improve loading speed.",
        taskDate: "2025-04-06",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "SEO improvements",
        taskDescription: "Add meta tags for better SEO rankings.",
        taskDate: "2025-04-07",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure GitHub Actions for automated deployment.",
        taskDate: "2025-04-08",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Riya",
    email: "employee5@example.com",
    password: "123",
    taskSummary: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        taskTitle: "Configure ESLint",
        taskDescription: "Add ESLint to enforce code style rules.",
        taskDate: "2025-04-04",
        category: "Code Quality",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Refactor code",
        taskDescription: "Clean and modularize the Home component.",
        taskDate: "2025-04-06",
        category: "Refactoring",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Add notifications",
        taskDescription: "Integrate toast notifications on actions.",
        taskDate: "2025-04-07",
        category: "UX",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


const admin=[{
  "id": 101,
  "email": "admin@example.com",
  "password": "123"
}]

export const setLocalStorage=()=>{
  localStorage.setItem("employees",JSON.stringify(employees));
  localStorage.setItem("admin",JSON.stringify(admin));
}
export const getLocalStorage=()=>{
   const employees=JSON.parse(localStorage.getItem("employees"));
    const admin=JSON.parse(localStorage.getItem("admin"));

    return {employees,admin}
}