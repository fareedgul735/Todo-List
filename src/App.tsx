import AddTodo from "./components/addtodo"
import Header from "./components/header"
import Navbar from "./components/navbar"
import TodoList from "./components/todolist"

const App = () => {


  return (
    <main>
      <Header />
      <Navbar />
      <AddTodo />
      <TodoList />
    </main>

  )
}

export default App
