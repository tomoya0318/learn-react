import { useState } from "react"

export const useTodoForm = ({ createTodo }) => {
    const [enteredTodo, setEnteredTodo] = useState("")
    const [error, setError] = useState("")

    const addTodo = (e) => {
        e.preventDefault()

        if (enteredTodo === "") {
            setError("This field cannot empty.")
        } else {
            const newTodo = {
                id: Math.floor(Math.random() * 1e5),
                content: enteredTodo,
            }
            createTodo(newTodo)
            setEnteredTodo("")
            setError("")
        }
    }
    return { enteredTodo, setEnteredTodo, addTodo, error }
};
