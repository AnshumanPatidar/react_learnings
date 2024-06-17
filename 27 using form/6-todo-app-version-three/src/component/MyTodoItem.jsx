import style from "./MyTodoItem.module.css";
import TodoItems from "./TodoItems";

const MyTodoItem = ({ Items, onDeleteClick }) => {
  return (
    <div className={style.itemContainer}>
      {Items.map((item) => (
        <TodoItems
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItems>
      ))}
    </div>
  );
};

export default MyTodoItem;
