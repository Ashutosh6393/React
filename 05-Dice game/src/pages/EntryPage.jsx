import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./EntryPage.module.css";
import heroDiceImage from "../assets/images/dices 1.png";

const EntryPage = () => {
  const navigate = useNavigate();
  const handlePlayNow = () => {
    navigate("/game");
  };

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.left}>
          <img src={heroDiceImage} alt="dices" />
        </div>
        <div className={classes.right}>
          <h1>DICE GAME</h1>
          <button onClick={handlePlayNow} className="">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
