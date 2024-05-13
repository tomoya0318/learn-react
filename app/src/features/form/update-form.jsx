import { useTodoForm } from "./hooks"
import { ProvideTime } from "../time"

export const UpdateForm = ({ createTodo }) => {
    const { enteredTodo, setEnteredTodo, addTodo, error } = useTodoForm({
        createTodo,
    })

    return (
        <>
            <form onSubmit={addTodo}>
                <div>
                    <span>todo</span>
                    <input
                        type='text'
                        value={enteredTodo}
                        onChange={(e) => setEnteredTodo(e.target.value)}
                    />
                    <ProvideTime />
                </div>
                <div>
                    <button>追加</button>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </>
    )
};