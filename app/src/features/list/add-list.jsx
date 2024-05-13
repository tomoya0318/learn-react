export const AddList = ({ todos, deleteTodo }) => {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <button onClick={() => deleteTodo(todo.id)}>完了</button>
                        <span>{todo.content}</span>
                        <span>{todo.time}</span>
                    </div>
                )
            })}
        </div>
    )
};
