import React, { useContext } from "react";
import classes from "./Game.module.css";
import { gameContext } from "../../store/GameContext";
import { useEffect } from "react";

const Game = () => {
  const {
    diceNumber,
    setNewDiceNumber,
    setShowError,
    selectedNumber,
    setSelectedNumber,
    setScore,
    setShowInstructions,
  } = useContext(gameContext);

  const handleDiceRoll = () => {
    if (!selectedNumber) {
      setShowError(true);
    } else {
      setNewDiceNumber(Math.floor(Math.random() * 6 + 1));
    }
  };

  useEffect(() => {
    if (selectedNumber === diceNumber) {
      setScore((prev) => prev + diceNumber);
      setSelectedNumber(null);
    } else {
      if (selectedNumber) {
        setSelectedNumber(null);
        setScore((prev) => prev - 2);
      }
    }
  }, [diceNumber]);

  const handleShowRules = () => {
    setShowInstructions((prev) => !prev);
  };
  const handleResetScore = () => {
    setNewDiceNumber(1);
    setScore(0);
  };

  return (
    <div className={classes.game}>
      <img
        src={`/images/dice_${diceNumber ? diceNumber : 1}.png`}
        alt="dice-image"
        onClick={handleDiceRoll}
      />
      <h3>Click dice to roll it.</h3>
      <button className={classes.firstButton} onClick={handleResetScore}>
        Reset Score
      </button>
      <button className={classes.secondButton} onClick={handleShowRules}>
        Show Rules
      </button>
    </div>
  );
};

export default Game;
