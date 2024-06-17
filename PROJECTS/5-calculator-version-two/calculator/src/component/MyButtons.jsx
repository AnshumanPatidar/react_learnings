import InputButton from "./InputButton";
import style from "./MyButtons.module.css";

const MyButtons = ({ handelOnButtonClick }) => {
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
    "=",
  ];

  return (
    <>
      <div className={style.buttonContainer}>
        {Items.map((items) => (
          <InputButton
            key={items}
            Items={items}
            handelOnButtonClick={handelOnButtonClick}
          ></InputButton>
        ))}
      </div>
    </>
  );
};

export default MyButtons;
