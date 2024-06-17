import React from "react"
import style from "./Items.module.css"


const Items = ({FoodItems}) => {

  // let {FoodItems} = props; distructuring  , its another way to do that


  return <>
        <center><li className={`${style["my-item"]}`}><span className={`${style["my-span"]}`}>{FoodItems}</span></li></center>
  </>
};

export default Items;