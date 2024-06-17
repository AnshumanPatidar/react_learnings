import { useContext } from "react";
import style from "./WelcomeMsg.module.css";
import { TodoItemContext } from "../store/todo-item-store";

const WelcomeMsg = () => {
  const { todolist } = useContext(TodoItemContext);
  return (
    <>{todolist.length === 0 && <p className={style.msg}>Enjoy your DAY</p>}</>
  );
};

export default WelcomeMsg;
