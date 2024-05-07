import useTodoForm from "./hooks/useTodoForm";
const UpdateForm = ({ createTodo }) => {
  const { enteredTodo, setEnteredTodo, addTodo, error } = useTodoForm({ createTodo });

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default UpdateForm;
