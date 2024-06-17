import React from "react"

let fooditem = ["daal", "paratha", "sabji", "chaawal", "kheer", "roti", "paneer",];
// let fooditem = [];



function App() {



  return <>
    <h1>healthy food</h1>
    {
      fooditem.length === 0 && <h1>i am still hungry</h1>
    }
    <ul>
      {
        fooditem.map((item) => (
          <li key={item}>{item}</li>
        ))
      }
    </ul>
  </>
}

export default App;
