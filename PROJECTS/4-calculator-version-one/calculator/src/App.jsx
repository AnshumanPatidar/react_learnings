import style from "./App.module.css";
import MyButtons from "./component/MyButtons";
import MyInput from "./component/MyInput";

function App() {
  let Items = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
  ];

  return (
    <>
      <center>
        <div className={style.calculator}>
          <MyInput></MyInput>
          <MyButtons Items={Items}></MyButtons>
        </div>
      </center>
    </>
  );
}

export default App;
