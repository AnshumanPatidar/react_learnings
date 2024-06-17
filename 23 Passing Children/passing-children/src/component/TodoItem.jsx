import TodoItems from "./TodoItems";
import style from "./TodoItem.module.css"

const TodoItem = ({ todoItems }) => {

  return (
    <>
      <div className={`${style["item-container"]}`}>
        {
          todoItems.map((items) =>
            <TodoItems key={items.name} todoName={items.name} todoDate={items.dueDate}></TodoItems>
          )
        }
      </div>
    </>
  );
};

export default TodoItem;
