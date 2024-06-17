import style from "./App.module.css";
import MyButtons from "./component/MyButtons";
import MyInput from "./component/MyInput";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  let handelOnKeyDown = (Items) => {
    Items = Items.key;
    if (Items === "Delete") {
      5;
      setCalVal("");
    } else if (Items === "Enter") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (Items === "Backspace") {
      setCalVal(calVal.slice(0, calVal.length - 1));
    } else if (
      Items >= 0 ||
      Items <= 9 ||
      Items <= "+" ||
      Items <= "-" ||
      Items <= "/" ||
      Items <= "*"
    ) {
      let DisplayVal = calVal + Items;
      setCalVal(DisplayVal);
    } else {
      null;
    }
  };

  let handelOnButtonClick = (Items) => {
    if (Items === "C") {
      setCalVal("");
    } else if (Items === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      let DisplayVal = calVal + Items;
      setCalVal(DisplayVal);
    }
  };
  return (
    <>
      <center>
        <div className={style.calculator}>
          <MyInput calVal={calVal} handelOnKeyDown={handelOnKeyDown}></MyInput>
          <MyButtons handelOnButtonClick={handelOnButtonClick}></MyButtons>
        </div>
      </center>
    </>
  );
}

export default App;
