import { Route, Routes } from "react-router-dom"
import AddTodo from "./components/addtodo"
import Navbar from "./components/navbar"
import TodoList from "./components/todolist"

const App = () => {
  return (
    <main>
      <h1>Todo React + TypeScript</h1>
      <Navbar />
      <AddTodo />
      <TodoList />
    </main>

  )
}

export default App
