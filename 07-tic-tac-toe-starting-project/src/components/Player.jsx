import React from "react";
import { useState, useReducer } from "react";

const reducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case "EDITING":
      return { ...state, isEditing: !state.isEditing };
    case "CHANGENAME":
      return { ...state, playerName: action.newName};

    default:
      break;
  }
};

const Player = ({ name, symbol, isActive, onChangeName }) => {
  
  const initialState = {
    playerName: name,
    isEditing: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEditClick = () => {
    console.log(state.isEditing);
    dispatch({ type: "EDITING" });
    if (state.isEditing) {
      onChangeName(symbol, state.playerName);
    }
  };
  const handleNameChange = (event) => {
    dispatch({ type: "CHANGENAME", newName: event.target.value });
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {console.log(state, "hhh")}
        {state.isEditing && (
          <input
            type="text"
            defaultValue={state.playerName}
            required
            onChange={handleNameChange}
          />
        )}
        {!state.isEditing && (
          <>
            <span className="player-name">{state.playerName}</span>
            <span className="player-symbol">{symbol}</span>
          </>
        )}
      </span>
      {/* //T`his is called two way binding */}
      <button onClick={handleEditClick}>
        {state.isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
