import React, { useState } from "react";
import { InformTodo } from "./Todo";
import { Time } from "./Time"; 

export const Form: React.FC<{createTodo:( todo: InformTodo ) => void}> = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState<string>("");
  const [time, setTime] = useState<string>("0:00");

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
      time: time,
    };

    createTodo(newTodo);

    setEnteredTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <Time setTime = {setTime}/>
        <button>追加</button>
      </form>
    </div>
  );
};
