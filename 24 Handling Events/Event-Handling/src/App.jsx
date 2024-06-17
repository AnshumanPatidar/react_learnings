import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodList from "./components/FoodList";
import TextInput from "./components/TextInput";

function App() {
  let FoodItems = ["dal", "chaawal", "ghee", "paneer", "chapaati", "baigan"];

  return (
    <>
      <Container>
        <h1>healthy Food</h1>
        <TextInput></TextInput>
        <FoodList FoodItems={FoodItems}></FoodList>
      </Container>
    </>
  );
}

export default App;
