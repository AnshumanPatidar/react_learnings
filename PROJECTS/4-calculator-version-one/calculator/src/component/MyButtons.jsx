import InputButton from "./InputButton";
import style from "./MyButtons.module.css";

const MyButtons = ({ Items }) => {
  return (
    <>
      <div className={style.buttonContainer}>
        {Items.map((items) => (
          <InputButton key={items} Items={items}></InputButton>
        ))}
      </div>
    </>
  );
};

export default MyButtons;
