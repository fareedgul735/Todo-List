import { useState, type FormEvent } from "react"
import { useTodos } from "../store/todos";
import "./global.css"

const AddTodo = () => {
    const [todo, setTodo] = useState("");
    const [error, setError] = useState(false);
    const { handleAddTodo } = useTodos()

    const handlerForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (todo.trim() === "") return setError(true)
        handleAddTodo(todo);
        setTodo("");
    }



    return (
        <form onSubmit={handlerForm}>
            <input type="text" value={todo} className={error ? "blank-input" : "fill-input"} onChange={(e) => {
                setTodo(e.target.value)
                setError(false)
            }} />
            {error && <p className="error-para">field is required</p>}
            <button>Add</button>
        </form>
    )
}

export default AddTodo
