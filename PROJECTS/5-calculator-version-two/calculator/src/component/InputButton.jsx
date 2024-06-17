import style from "./InputButton.module.css";

const InputButton = ({ Items, handelOnButtonClick }) => {
  return (
    <>
      <button
        className={style.button}
        onClick={() => {
          handelOnButtonClick(Items);
        }}
      >
        {Items}
      </button>
    </>
  );
};

export default InputButton;
