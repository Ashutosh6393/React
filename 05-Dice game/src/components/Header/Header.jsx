import React, { useContext } from "react";
import classes from "./Header.module.css";
import { gameContext } from "../../store/GameContext";

const Header = () => {
  const { setSelectedNumber, selectedNumber, showError, setShowError, score } =
    useContext(gameContext);

  const handleNumberSelect = (event) => {
    setShowError(false);
    setSelectedNumber(() => +event.target.textContent);
  };

  return (
    <header>
      <div className={classes.left}>
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
      <div className={classes.right}>
        {showError && (
          <p className={classes.errorText}>You have not selected any number</p>
        )}

        <ul onClick={handleNumberSelect}>
          <li className={selectedNumber === 1 ? classes.selected : undefined}>
            1
          </li>
          <li className={selectedNumber === 2 ? classes.selected : undefined}>
            2
          </li>
          <li className={selectedNumber === 3 ? classes.selected : undefined}>
            3
          </li>
          <li className={selectedNumber === 4 ? classes.selected : undefined}>
            4
          </li>
          <li className={selectedNumber === 5 ? classes.selected : undefined}>
            5
          </li>
          <li className={selectedNumber === 6 ? classes.selected : undefined}>
            6
          </li>
        </ul>
        <p>Select a number.</p>
      </div>
    </header>
  );
};

export default Header;
