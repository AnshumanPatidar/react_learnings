import style from "./TextInput.module.css";
const TextInput = ({ handelOnkeyDown }) => {
  return (
    <>
      <input
        placeholder="Enter your food item here"
        name="input"
        className={style.TextInput}
        onKeyDown={handelOnkeyDown}
      ></input>
    </>
  );
};

export default TextInput;
