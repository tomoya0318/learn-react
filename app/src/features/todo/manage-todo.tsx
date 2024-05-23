import { AddList } from "../list"
import { UpdateForm } from "../form"
import { useTodos } from "./hooks"

const ManageTodo = () => {
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
    ]

    const { todos, deleteTodo, createTodo } = useTodos(todosList)

    return (
        <>
            <AddList todos={todos} deleteTodo={deleteTodo} />
            <UpdateForm createTodo={createTodo} />
        </>
    )
}
export default ManageTodo
