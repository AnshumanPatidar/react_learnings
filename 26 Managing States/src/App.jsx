import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodList from "./components/FoodList";
import TextInput from "./components/TextInput";
import { useState } from "react";

function App() {
  let [FoodItems, setFoodItems] = useState([]);

  let [textToShow, setStateMethod] = useState(); // return an array with 2 element , pehle element current state uus value ki and dusra ek method jiski madad se apn uski value change kr ske

  // we can use destructuring of useState
  // let [ textToShow  setStateMethod ] = useState("Food Item Entered by user")
  // normal way let textStateArr = useState("Food Item Entered by user");

  // let textToShow = textStateArr[0]; // value

  // let setStateMethod = textStateArr[1]; // method

  let handelOnkeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      e.target.value = " ";
      setFoodItems([...FoodItems, newFoodItem]); // ...FoodItem , this is spread operator to get the all element of the array
      console.log(e);
    }
  };
  {
  }

  {
    /* yha pr apn ne child to parent communication kra , apn ne bola ki child component ko parent ne method pass kr di "handelOnClick" naam ki FoodList component ko or bola tujhe jb bole toh ye method call kr dena , eska mtlb ye hua ki child ke pass apna khud ka kuch nhi h saara control parent kr rha h , parent hi usko dono props pass kr rha h , method bhi or argument bhi */
  }

  return (
    <>
      <Container>
        <h1>healthy Food</h1>
        <TextInput handelOnkeyDown={handelOnkeyDown}></TextInput>

        <FoodList FoodItems={FoodItems}></FoodList>
      </Container>
    </>
  );
}

export default App;
