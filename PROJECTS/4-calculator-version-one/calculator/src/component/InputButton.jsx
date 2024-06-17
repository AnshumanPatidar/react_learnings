import style from "./InputButton.module.css";

const InputButton = ({ Items }) => {
  return (
    <>
      <button className={style.button}>{Items}</button>
    </>
  );
};

export default InputButton;
