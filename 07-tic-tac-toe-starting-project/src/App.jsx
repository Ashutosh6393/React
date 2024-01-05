import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const[gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X')
  const handleSelectSquare= ()=>{
    setActivePlayer((currentPlayer)=> (currentPlayer==='X'?'O':'X'))
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" isActive={activePlayer==='X'} />
          <Player name="Player 2" symbol="O" isActive={activePlayer==='O'} />
        </ol>
        <GameBoard onSelectSquare = {handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      log
    </main>
  );
}

export default App;
