import { VStack, HStack, StackDivider, IconButton, Text } from "@chakra-ui/react";
import { VscCheck } from "react-icons/vsc";
import { InformTodo } from "./Todo";

type TaskListProps = {
    todos: InformTodo[]
    deleteTodo: (id: number) => void
}

export const List: React.FC<TaskListProps> = ({ todos, deleteTodo }) => {
    const complete = (id: number) => {
        deleteTodo(id)
    }
    return (
        <VStack
            divider={<StackDivider />}
            width="80%"
            bgColor="White"
            borderColor="blackAlpha.100"
            borderWidth="1px"
            borderRadius="3px"
            p={5}
            alignItems="start"
        >
            {todos.map(todo => {
                return (
                    <HStack key={todo.id} spacing="5">
                        <IconButton
                            onClick={() => complete(todo.id)}
                            icon={<VscCheck />}
                            isRound
                            bgColor="cyan.100"
                            opacity="0.5"
                            >
                            完了
                        </IconButton>
                        <Text>{todo.content}</Text>
                        <Text>{todo.time}</Text>
                    </HStack>
                )
            })}
        </VStack>
    );
};