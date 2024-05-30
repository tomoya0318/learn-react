import React, { useState } from "react";
import { useToast, VStack, Input, Button, Select } from '@chakra-ui/react';
import { InformTodo } from "./Todo";
import { Time } from "./Time"; 

export const Form: React.FC<{createTodo:( todo: InformTodo ) => void}> = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const toast = useToast();
  
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!enteredTodo){
      toast({
        title: "新しいタスクを入力してください",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    if (!time){
      toast({
        title:"時間を設定してください",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
      time: time,
    };

    createTodo(newTodo);

    setEnteredTodo("");
    setTime("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <VStack>
          <Input
            placeholder="新しいタスク"
            _placeholder={{ opacity: "0.3", color: "gray.500"}}
            size="lg"
            padding={3}
            variant="outline"
            border="1px solid"
            borderColor="blue.100"
            borderRadius="md"
            value={enteredTodo}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setEnteredTodo(e.target.value)}
          />
          <Time setTime = {setTime}/>
          <Button
            colorScheme="blue"
            size="md"
            bgColor="white"
            variant="outline"
            px={7}
            type="submit"
          >
            追加
          </Button>
        </VStack>
      </form>
    </div>
  );
};
