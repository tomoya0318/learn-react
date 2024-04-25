import { useState } from "react";

const useTodoForm = ({ createTodo }) => {
    const [enteredTodo, setEnteredTodo] = useState("");

    const addTodo = (e) => {
        e.preventDefault();

        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: enteredTodo,
        }

        createTodo(newTodo);
        setEnteredTodo("");
    }
    return { enteredTodo, setEnteredTodo, addTodo };

};

export default useTodoForm;