import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import "./App.css";
import MyTodoItem from "./component/MyTodoItem";
import { useState } from "react";
import WelcomeMsg from "./component/WelcomeMsg";
import { TodoItemContext } from "./store/todo-item-store";

function App() {
  const [todolist, setTodoList] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
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

  const deleteItem = (todoItemName) => {
    const newTodoItem = todolist.filter((item) => item.name !== todoItemName);
    setTodoList(newTodoItem);
    console.log(` item delete ${todoItemName}`);
  };

  return (
    <TodoItemContext.Provider value={{ todolist, addNewItem, deleteItem }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />

        <WelcomeMsg></WelcomeMsg>

        <MyTodoItem></MyTodoItem>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
