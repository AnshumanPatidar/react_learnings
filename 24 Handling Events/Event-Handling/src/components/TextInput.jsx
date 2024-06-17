import style from "./TextInput.module.css";
const TextInput = () => {
  let handelOnChange = (e) => {
    console.log(e, e.target.value);
  };

  return (
    <>
      <input
        placeholder="Enter your food item here"
        name="input"
        className={style.TextInput}
        onChange={(e) => {
          handelOnChange(e);
        }}
      ></input>
    </>
  );
};

export default TextInput;
