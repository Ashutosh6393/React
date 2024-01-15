import React, {useState, useRef} from "react";

export default function Player() {
  const newPlayerName = useRef();
  const [playerName, setPlayerName] = useState('unknown entity')
  const handleSetName = ()=>{
    setPlayerName(newPlayerName.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        < input ref={newPlayerName} type="text" defaultValue={playerName} />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
