import style from "./AppName.module.css";

function AppName() {
  return (
    <h1 id={`${style.Appname}`}>
      {/*use brackey notation i.e style["app-name"] you have given id name or classame like this app-name*/}
      To-do list app
    </h1>
  );
}

export default AppName;
