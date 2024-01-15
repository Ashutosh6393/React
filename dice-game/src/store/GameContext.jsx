import { createContext, useState } from "react";

export const gameContext = createContext({
  score: 0,
  diceNumber: 0,
  selectedNumber: 0,
  showError: false,
  showInstruction: false,

  setScore: () => {},
  setNewDiceNumber: () => {},
  setSelectedNumber: () => {},
  setShowInstructions: () => {},
  setShowError: () => {},
});

export const GameProvider = (props) => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [diceNumber, setNewDiceNumber] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showInstruction, setShowInstructions] = useState(false);
  const [score, setScore] = useState(0);
  const data = {
    score,
    showError,
    selectedNumber,
    setSelectedNumber,
    diceNumber,
    setNewDiceNumber,
    setScore,
    setShowError,
    showInstruction,
    setShowInstructions,
  };

  return (
    <gameContext.Provider value={data}>{props.children}</gameContext.Provider>
  );
};
