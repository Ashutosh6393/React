import { createContext } from "react";

const PlayerContext = createContext(null);

export const CartProvider = (props) => {
  const value = {
    playerNames: ['player 1', 'player 2'];
  };

  return <PlayerContext.Provider>{props.children}</PlayerContext.Provider>;
};
