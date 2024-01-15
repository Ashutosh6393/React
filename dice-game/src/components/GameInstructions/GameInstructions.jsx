import React, { useContext } from "react";
import classes from "./GameInstructions.module.css";
import { gameContext } from "../../store/GameContext";
const GameInstructions = () => {
  const { showInstruction } = useContext(gameContext);
  return (
    showInstruction && (
      <div className={classes.gameInstructions}>
        <h1>How to play dice game.</h1>
        <p>
          Select any number
          <br />
          Click on dice image
          <br />
          After click on dice if selected number is equal to dice number you
          will get same point as dice <br />
          if you get wrong guess then 2 point will be dedcuted{" "}
        </p>
      </div>
    )
  );
};

export default GameInstructions;
