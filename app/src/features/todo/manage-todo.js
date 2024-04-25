import AddList from "../list/add-list";
import UpdateForm from "../form/update-form"
import useTodos from "./hooks/useTodo";

const ManageTodo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const { todos, deleteTodo, createTodo } = useTodos(todosList);

  return (
    <>
      <AddList todos={todos} deleteTodo={deleteTodo}/>
      <UpdateForm createTodo={createTodo}/>
    </>
  )
};
export default ManageTodo;
