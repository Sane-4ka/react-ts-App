import { useAppDispatch } from "../hooks";
import { removeTodo, toggleComplete } from "../store/todoSlice";

interface TodoItemsProps {
  id:string, 
  title:string, 
  completed: boolean
}

const TodoItem:React.FC<TodoItemsProps> = ({id, title, completed}) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input 
      type="checkbox" 
      checked={completed} 
      onChange={() => dispatch(toggleComplete(id))} 
      />
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;