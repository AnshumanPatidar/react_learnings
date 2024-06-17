import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {

  let FoodItems = ["dal", "chaawal", "ghee", "paneer", "chapaati", "baigan"]

  return <>
    <h1>healthy Food</h1>
    <ul className="list-group">
      {
        FoodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))
      }

    </ul>
  </>
}


export default App;
