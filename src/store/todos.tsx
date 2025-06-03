import { createContext, useContext, useState, type ReactNode } from "react";

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
                    task: task.toUpperCase(),
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

    const handleDeleteTodo = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.filter((filterList) => filterList.id !== id)
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos
        })
    }


    return <todoContext.Provider value={{ todos, handleAddTodo: handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo }}>
        {children}
    </todoContext.Provider>
}

// consumer 

export const useTodos = () => {
    const todosConsumer = useContext(todoContext);
    if (!todosConsumer) throw new Error("useTodos used outside of provider");
    return todosConsumer;
}
