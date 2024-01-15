import React from "react";
import styles from "./Buttons.module.css";
const SecondaryButton = ({text, icon}) => {
  return (
    <button className={`${styles.secondary} ${styles.primary}`}>
      {icon}
      {text}
    </button>
  );
};

export default SecondaryButton;
