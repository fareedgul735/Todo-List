import { createContext, useContext, useState, type ReactNode } from "react";
import Swal from "sweetalert2";

export type TodosProviderProps = {
    children: ReactNode
}
export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date

}
export type TodosContext = {
    todos: Todo[]
    handleAddTodo: (task: string) => void
    toggleTodoAsCompleted: (id: string) => void
    handleDeleteTodo: (id: string) => void
    handleEditTodo: (id: string) => void
}

export const todoContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {

    const [todos, setTodos] = useState<Todo[]>(() => {
        const newTodos = localStorage.getItem("todos") || "[]"
        return JSON.parse(newTodos) as Todo[]
    })

    const handleAddToDo = (task: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task: task,
                    completed: false,
                    createdAt: new Date()
                },
                ...prev
            ]
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos
        })
    }
    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.map((list) =>
                list.id === id ? { ...list, completed: !list.completed } : list
            )
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos
        })
    }

    const handleDeleteTodo = async (id: string) => {
        const result = await Swal.fire({
            title: "Are you sure you want to delete!",
            showCancelButton: true,
            background: "#000",
            color: "#fff",
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            cancelButtonText: 'Cancel',
            customClass: {
                title: 'swal-title-small',
                popup: 'swal-popup-small',
            },
        })

        if (result.isConfirmed) {
            setTodos((prev) => {
                const newTodos = prev.filter((filterList) => filterList.id !== id)
                localStorage.setItem("todos", JSON.stringify(newTodos))
                return newTodos
            })
        } else {
            console.log("UserCancel??")
        }

    }

    const handleEditTodo = async (id: string) => {
        const todoEdit = todos.find(todo => todo.id === id);
        if (!todoEdit) return

        const result = await Swal.fire({
            title: "Edit your todo",
            input: "text",
            inputValue: todoEdit.task,
            showCancelButton: true,
            confirmButtonText: "Update",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#0080f8",
            background: "#000",
            color: "#fff",
            inputAttributes: {
                autocapitalize: "off"
            },
            customClass: {
                popup: 'swal-popup-small',
                title: 'swal-title-small',
            }
        });

        if (result.isConfirmed && result.value) {
            const updateTodos = todos.map((todo) => todo.id === id ? { ...todo, task: result.value } : todo);
            setTodos(updateTodos);
            localStorage.setItem("todos", JSON.stringify(updateTodos));

            Swal.fire({
                title: "Updated!",
                text: "Your todo has been updated successfully",
                confirmButtonColor: "#0080f8",
                background: "#000",
                color: "#fff",
                customClass: {
                    popup: 'swal-popup-small',
                    title: 'swal-title-small',
                }
            });
        }
    };



    return <todoContext.Provider value={{ todos, handleAddTodo: handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo, handleEditTodo }}>
        {children}
    </todoContext.Provider>
}


export const useTodos = () => {
    const todosConsumer = useContext(todoContext);
    if (!todosConsumer) throw new Error("useTodos used outside of provider");
    return todosConsumer;
}
