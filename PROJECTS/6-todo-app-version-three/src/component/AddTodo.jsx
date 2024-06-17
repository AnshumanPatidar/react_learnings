import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import style from "./AddTodo.module.css";

function AddTodo({ handleOnNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    handleOnNewItem(todoName, todoDate);
    setTodoDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4 my-row">
          <input type="date" onChange={handleDateChange} value={todoDate} />
        </div>
        <div className="col-2 my-col">
          <button
            type="button"
            className="btn btn-success my-button "
            onClick={handleAddButtonClicked}
          >
            <IoIosAddCircle className={style.icon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
