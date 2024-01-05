import React from "react";
import { useState } from "react";

const Player = ({ name, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing((editing) => !editing); //updating state based on old state
  };
  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing && (
          <input
            type="text"
            defaultValue={playerName}
            required
            onChange={handleNameChange}
          />
        )}
        {!isEditing && (
          <>
            <span className="plaactivePlayerSymbol={activePlayer} yer-name">
              {playerName}
            </span>
            <span className="player-symbol">{symbol}</span>
          </>
        )}
      </span>
      {/* //This is called two way binding */}
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
