import style from "./MyTodoItem.module.css";
import TodoItems from "./TodoItems";

const MyTodoItem = ({ Items }) => {
  return (
    <div className={style.itemContainer}>
      {Items.map((item) => (
        <TodoItems todoDate={item.dueDate} todoName={item.name}></TodoItems>
      ))}
    </div>
  );
};

export default MyTodoItem;
