import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import "./App.css";
import TodoItem from "./component/TodoItem";
import Container from "./component/Container";

function App() {
  let todoItems = [
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
    <>
      <Container>
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <TodoItem todoItems={todoItems}></TodoItem>
        </center>
      </Container>

      <Container>
        <p>Hii I am Anshuman Patidar .</p>
      </Container>
    </>
  );
}

export default App;
