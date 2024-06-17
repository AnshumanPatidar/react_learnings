import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import "./App.css";
import MyTodoItem from "./component/MyTodoItem";

function App() {
  let todolist = [
    {
      name: "buy milk",
      dueDate: "3/54/43",
    },
    {
      name: "go to college",
      dueDate: "3/54/43",
    },
    {
      name: "eat food",
      dueDate: "3/54/43",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <MyTodoItem Items={todolist}></MyTodoItem>
    </center>
  );
}

export default App;
