import React, { useState } from "react";
import { VStack, Heading } from "@chakra-ui/react";
import { List } from "./List"
import { Form } from "./Form"

export type InformTodo = {
  id: number,
  content: string,
  time: string,
}

const Todo: React.FC = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
      time: "0:00",
    },
    {
      id: 2,
      content: "卵買う",
      time: "0:00",
    },
    {
      id: 3,
      content: "郵便出す",
      time: "0:00",
    },
  ];

  const [ todos, setTodos ] = useState<InformTodo[]>(todosList);

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  const createTodo = (todo: InformTodo) => {
    setTodos([...todos, todo]);
  }

  return (
    <VStack p="10" spacing="10">
      <Heading color="blue.200" fontSize="5xl">
        Reminder
      </Heading>
      <List todos={todos} deleteTodo={deleteTodo}/>
      <Form createTodo={createTodo}/>
    </VStack>
  )
};
export default Todo;
