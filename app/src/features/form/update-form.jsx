import useTodoForm from "./hooks/useTodoForm";
const UpdateForm = ({ createTodo }) => {
  const { enteredTodo, setEnteredTodo, addTodo } = useTodoForm({ createTodo });
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default UpdateForm;
