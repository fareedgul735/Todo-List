import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/todos"

const TodoList = () => {
    const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
    const [searchParams] = useSearchParams();
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
            {filterData.length === 0 ? "todos not found" :
                filterData.map((list) => {
                    return <li key={list.id}>
                        <input type="checkbox" id={`todo-${list.id}`}
                            checked={list.completed}
                            onChange={() => toggleTodoAsCompleted(list.id)}
                        />
                        <label htmlFor={`todos-${list.id}`}>{list.task}</label>
                        {
                            list.completed && <button onClick={() => handleDeleteTodo(list.id)}>
                                Delete
                            </button>
                        }

                    </li>

                })
            }
        </ul>
    )
}

export default TodoList
