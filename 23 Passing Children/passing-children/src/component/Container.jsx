import styles from "./Container.module.css";

const Container = ({ children }) => {
  // you can give props without destructuring ex : Container = (props) =>{....} use {} for distruturing
  return <div className={styles.container}>{children}</div>;
};

export default Container;
