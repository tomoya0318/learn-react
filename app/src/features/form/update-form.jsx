import useTodoForm from "./hooks/useTodoForm";
const UpdateForm = ({ createTodo }) => {
  const { enteredTodo, setEnteredTodo, addTodo, error, setError  } = useTodoForm({ createTodo });
  
  const handleChnage = (e) =>{
    const value = e.target.value;
    setEnteredTodo(value);
    if (e.target.value === '') {
      setError('This field cannot be empty.');
    } else {
        setError('');
    }
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={handleChnage}
        />
        <button>追加</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default UpdateForm;
