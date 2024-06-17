import style from "./MyTodoItem.module.css";
import TodoItems from "./TodoItems";
import { TodoItemContext } from "../store/todo-item-store";
import { useContext } from "react";

const MyTodoItem = () => {
  const contextObj = useContext(TodoItemContext);
  const Items = contextObj.todolist;

  return (
    <div className={style.itemContainer}>
      {Items.map((item) => (
        <TodoItems
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItems>
      ))}
    </div>
  );
};

export default MyTodoItem;
