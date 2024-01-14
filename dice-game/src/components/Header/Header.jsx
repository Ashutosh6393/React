import React from "react";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header>
      <div className={classes.left}>
        <h1>0</h1>
        <p>Total Score</p>
      </div>
      <div className={classes.right}>
        <p className={classes.errorText}>You have not selected any number</p>
        <ul>
          <li>1</li>
          <li className={classes.selected}>2</li>
          <li>3</li>
          <li>4</li>
          <li>6</li>
        </ul>
        <p>Select a number.</p>
      </div>
    </header>
  );
};

export default Header;
