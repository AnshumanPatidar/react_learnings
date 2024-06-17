import style from "./TextInput.module.css";
const TextInput = ({ handelOnChange }) => {
  return (
    <>
      <input
        placeholder="Enter your food item here"
        name="input"
        className={style.TextInput}
        onChange={handelOnChange}
      ></input>
    </>
  );
};

export default TextInput;
