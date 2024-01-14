import React from 'react';
import classes from './Game.module.css'

const Game = () => {
    const diceNumber = Math.floor(Math.random()*6+1);
    
    return (
        <div className={classes.game}>
            <img src={`/images/dice_${diceNumber}.png`} alt="" />
            <h3>Click to roll a dice.</h3>
            <button className={classes.firstButton}>Reset Score</button>
            <button className={classes.secondButton}>Show Rules</button>
            
            
        </div>
    );
}

export default Game;
