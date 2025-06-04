import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/todos"
import "./global.css"
const TodoList = () => {
    const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
    const [searchParams] = useSearchParams();
    const { handleEditTodo } = useTodos()
    const todosData = searchParams.get("todos");

    let filterData = todos;

    if (todosData === "action") {
        filterData = filterData.filter((task) => !task.completed)
    }
    if (todosData === "completed") {
        filterData = filterData.filter((task) => task.completed)
    }


    return (
        <ul>
            {filterData?.length === 0 ? <p className="empty-todo">Todos Not Found !</p> :
                filterData.map((list) => {
                    return <li key={list.id}>
                        <input type="checkbox" key={`todo-${list.id}`}
                            checked={list.completed}
                            onChange={() => toggleTodoAsCompleted(list.id)}
                        />
                        <label className={list.completed ? "list-comp" : "list-unComp"} htmlFor={`todos-${list.id}`}>{list.task}</label>

                        {
                            !list.completed && <button className="edit-btn" onClick={() => handleEditTodo(list.id)}>
                                <i className="fa-solid fa-pencil"></i>
                            </button>
                        }

                        {
                            list.completed && <button className="delete-btn" onClick={() => handleDeleteTodo(list.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        }


                    </li>

                })
            }
        </ul>
    )
}

export default TodoList
