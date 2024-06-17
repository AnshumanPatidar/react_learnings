import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import "./App.css";
import MyTodoItem from "./component/MyTodoItem";
import { useState } from "react";
import WelcomeMsg from "./component/WelcomeMsg";

function App() {
  const [todolist, setTodoList] = useState([]);

  const handleOnNewItem = (itemName, itemDueDate) => {
    console.log(`new item added ${itemName} , Date: ${itemDueDate}`);
    if (itemName !== "" && itemDueDate !== "") {
      const newTodoList = [
        ...todolist,
        { name: itemName, dueDate: itemDueDate },
      ];
      setTodoList(newTodoList);
    } else {
      alert("PLEASE ENTER PROPER DETAILS");
    }
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todolist.filter((item) => item.name !== todoItemName);
    setTodoList(newTodoItem);
    console.log(` item delete ${todoItemName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleOnNewItem={handleOnNewItem} />
      {todolist.length === 0 ? (
        <WelcomeMsg></WelcomeMsg>
      ) : (
        <MyTodoItem
          Items={todolist}
          onDeleteClick={handleDeleteItem}
        ></MyTodoItem>
      )}
    </center>
  );
}

export default App;
