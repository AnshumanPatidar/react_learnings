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

  const handleAddButtonClicked = (event) => {
    // to avoid the default nature of onSubmit method
    console.log(event);
    event.preventDefault();
    handleOnNewItem(todoName, todoDate);
    setTodoDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row my-row" onSubmit={handleAddButtonClicked}>
        {" "}
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
          <button className="btn btn-success my-button ">
            <IoIosAddCircle className={style.icon} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
