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
        <div>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <button onClick={() => complete(todo.id)}>完了</button>
                        <span>{todo.content}</span>
                        <span>{todo.time}</span>
                    </div>
                )
            })}
        </div>
    );
};