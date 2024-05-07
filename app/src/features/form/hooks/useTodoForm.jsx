import { useState } from "react";

const useTodoForm = ({ createTodo }) => {
    const [enteredTodo, setEnteredTodo] = useState("");
    const [error, setError] = useState("");

    const addTodo = (e) => {
        e.preventDefault();

        if (enteredTodo === ''){
            setError('This field cannot empty.');
        }else{
            const newTodo = {
                id: Math.floor(Math.random() * 1e5),
                content: enteredTodo,
            }
            createTodo(newTodo);
            setEnteredTodo("");
        }
    }
    return { enteredTodo, setEnteredTodo, addTodo, error, setError };

};

export default useTodoForm;