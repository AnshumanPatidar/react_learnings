import style from "./MyInput.module.css";
// import style from "../App.module.css"  yhs pr hm direct App.module.css se bhi la skte the agr hm MyInput ki css App.css me rkhe bsss hme "../App" 2 dot us krna hoga kyuki vo eske piche wale folder me h (thoda dimak lga na baki koi khaas baat nhi h )

const MyInput = ({ calVal, handelOnKeyDown }) => {
  return (
    <div>
      <input
        type="text"
        className={style.input}
        value={calVal}
        onKeyDown={(e) => {
          handelOnKeyDown(e);
        }}
        readOnly
      ></input>
    </div>
  );
};

export default MyInput;
