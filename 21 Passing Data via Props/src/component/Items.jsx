import React from "react"


const Items = ({FoodItems}) => {

  // let {FoodItems} = props; distructuring  , its another way to do that


  return <>
        <li className="list-group-item">{FoodItems}</li>
  </>
};

export default Items;