import react from "react";
import styles from "../styles/Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      {props.isOpen ? <a className={styles.button}>AUTENDI</a> : null}
    </div>
  );
};

export default Sidebar;
