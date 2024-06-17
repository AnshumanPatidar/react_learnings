import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import "./App.css";
import MyTodoItem from "./component/MyTodoItem";
import WelcomeMsg from "./component/WelcomeMsg";
import TodoItemContextProvider from "./store/todo-item-store";

function App() {
  return (
    <TodoItemContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />

        <WelcomeMsg></WelcomeMsg>

        <MyTodoItem></MyTodoItem>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
