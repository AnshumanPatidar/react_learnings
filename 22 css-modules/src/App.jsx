import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodList from "./component/FoodList";
import EmptyMsg from "./component/EmptyMsg";


function App() {
  let FoodItems = ["daal", "chaawal", "roti" , "paneer"];
  // let FoodItems = [];    

  return (
    <>
      <h1 className="my-heading">healthy food</h1>
      <EmptyMsg items={FoodItems}></EmptyMsg>
      <FoodList items={FoodItems}></FoodList>
    </>
  );
}

export default App;
