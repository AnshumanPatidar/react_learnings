import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import TodoItem1 from "./component/TodoItem1";
import TodoItem2 from "./component/TodoItem2";
import "./App.css";

function App() {

  return <center class="todo-container">
    <AppName />
    <AddTodo />
    <div className="item-container">
      <TodoItem1 />
      <TodoItem2 />
    </div>

  </center>
}

export default App;
