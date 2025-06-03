# React + TypeScript + Vite

📝 Todo App with React, TypeScript, and React Router
This is a simple Todo List application built using React, TypeScript, React Router, and localStorage. It is designed to help beginners understand how to manage state, routing, context, and persistence in a React project.

🔧 Technologies & Features Used
✅ React
React is used to build the user interface with reusable components.

✅ TypeScript
TypeScript helps catch errors early with strong type checking and improves code readability and maintainability.

✅ useState & useEffect Hooks
useState is used to store todos in memory. useEffect (if used) can be used to load/save todos from localStorage when the app starts or updates.

# Optional "It's not necessary"
✅ Context API (createContext and useContext)
Context API is used to share the todos and actions (like add, delete, toggle) between components without using props.

✅ React Router (useSearchParams)
Used to filter todos based on URL query parameters like ?completed, ?active, or ?all.

✅ LocalStorage
Todos are saved in localStorage so the data doesn't disappear after refreshing the page.

✅ Form Validation
Input validation is done to prevent submitting empty tasks. If the input is empty, a red border and error message is shown.

💡 Project Features
Add new todo tasks.

Mark tasks as completed or uncompleted.

Delete completed tasks.

Filter todos by:

All

Active (not completed)

Completed

Persistent todos using localStorage.

URL-based filtering using query parameters (e.g., ?todos=active).

📁 Folder Structure (Example)
less
Copy
Edit
src/
│
├── components/
│ ├── AddTodo.tsx
│ └── TodoList.tsx
│
├── store/
│ └── todos.tsx // Context and logic for todos
│
├── App.tsx
└── main.tsx
📘 How This Helps Beginners
Understand how to build a real React + TypeScript project.

Learn state management using Context API.

Practice routing with filters using React Router.

Learn how to store data in localStorage.

Improve typing skills in TypeScript.

Write cleaner and more maintainable code.
