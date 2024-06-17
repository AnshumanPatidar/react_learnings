import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodList from "./components/FoodList";
import TextInput from "./components/TextInput";

function App() {
  let FoodItems = ["dal", "chaawal", "ghee", "paneer", "chapaati", "baigan"];

  let handelOnChange = (e) => {
    console.log(e, e.target.value);
  };

  let handelOnClick = (event) => {
    console.log(event);
    console.log(`${FoodItems} being bought`);
  };

  {
    /* yha pr apn ne child to parent communication kra , apn ne bola ki child component ko parent ne method pass kr di "handelOnClick" naam ki FoodList component ko or bola tujhe jb bole toh ye method call kr dena , eska mtlb ye hua ki child ke pass apna khud ka kuch nhi h saara control parent kr rha h , parent hi usko dono props pass kr rha h , method bhi or argument bhi */
  }

  return (
    <>
      <Container>
        <h1>healthy Food</h1>
        <TextInput handelOnChange={handelOnChange}></TextInput>
        <FoodList
          FoodItems={FoodItems}
          handelOnClick={handelOnClick}
        ></FoodList>
      </Container>
    </>
  );
}

export default App;
