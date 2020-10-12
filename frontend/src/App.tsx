import React, { useEffect, useState } from "react";
import "./App.css";
import PlayerCard from "./components/player";

interface IAppProps {}

function App() {
  const [players, setPlayers] = useState<any[]>([]);

  useEffect(() => {
    getPlayers();
  }, []);

  //Fetch the players from API
  const getPlayers = async () => {
    const response = await fetch("http://localhost:3000/players");
    const data = await response.json();
    setPlayers(data);
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Players</h1>
      {players.slice(0, 10).map((player) => (
        <PlayerCard name={player.Name} />
      ))}
    </div>
  );
}

export default App;
