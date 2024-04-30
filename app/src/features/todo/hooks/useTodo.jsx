import { useState } from "react";

const useTodos = (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return { todos, setTodos, deleteTodo, createTodo };
};

export default useTodos;
