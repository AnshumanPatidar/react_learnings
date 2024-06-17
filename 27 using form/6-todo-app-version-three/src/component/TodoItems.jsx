import { TiDelete } from "react-icons/ti";
import style from "./TodoItems.module.css";

function TodoItems({ todoDate, todoName, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4 my-row">{todoDate}</div>
        <div className="col-2 my-row">
          <button
            type="button"
            className={`${style.button} btn btn-danger`}
            onClick={() => onDeleteClick(todoName)}
          >
            <TiDelete className={style.icon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
