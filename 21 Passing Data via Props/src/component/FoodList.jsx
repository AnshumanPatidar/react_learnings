import React from "react";
import Items from "./Items";


const FoodList = ({items}) =>{

  return <>
  
  <ul className="list-group">
        {items.map((item) => (  // ye apn ne () normal bracket use kre h jabki {} use hote h arrow function me 
          // <li className="list-group-item">{item}</li>  
          <Items  key={item} FoodItems={item}></Items> 
        ))}
      </ul>
  
  
  </>

}

export default FoodList;