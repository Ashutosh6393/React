import React from "react";
import classes from "./GamePage.module.css";
import Header from "../components/Header/Header";
import Game from "../components/Game/Game";
import GameInstructions from "../components/GameInstructions/GameInstructions";
const GamePage = () => {
  return (
    <div className={classes.main}>
      <Header />
      <Game />
      <GameInstructions />
    </div>
  );
};

export default GamePage;
