import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import style from "./AddTodo.module.css";

function AddTodo({ handleOnNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    // to avoid the default nature of onSubmit method
    console.log(event);
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    handleOnNewItem(todoName, todoDate);
  };

  return (
    <div className="container text-center">
      <form className="row my-row" onSubmit={handleAddButtonClicked}>
        {" "}
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4 my-row">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2 my-col">
          <button className="btn btn-success my-button ">
            <IoIosAddCircle className={style.icon} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
