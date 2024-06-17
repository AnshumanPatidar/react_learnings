import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  let FoodItems = [];
  // let FoodItems = ["dal", "chaawal", "ghee", "paneer", "chapaati", "baigan"]


  // if (FoodItems.length === 0) {
  //   return <h1>this is empty</h1>
  // } one way to put condition (if else)

  // let emptyNess = FoodItems.length === 0 ? <h2>this is empty</h2> : null; used the emptyness variable at 19th line 😎


  return <>
    <h1>healthy Food</h1>
    {/* {emptyNess} */}

    {FoodItems.length === 0 && <h2>this is empty</h2>}{/* {third way toh do this }<h2>this is empty</h2> ye return ho jaaye ga agr pehli condition true ho jaati h toh*/}
    <ul className="list-group">

      {/* {FoodItems.length === 0 ? <h2>this is empty</h2> : null} second way i.e ternary operator */}

      {
        FoodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))
      }
    </ul>
  </>
}


export default App;
