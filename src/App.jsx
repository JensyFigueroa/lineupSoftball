// App.js

import "./App.css";
// import PlayerForm from "./components/PlayerForm";
// import PlayerList from "./components/PlayerList";
// import Lineup from "./components/Lineup";
import LandingPage from "./components/LandingPage/LandingPage"
import Navbar from "./components/navbar/Navbar"
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PlayersList from "./components/playersList/PlayersList";

function App() {
  const [players, setPlayers] = useState([]);

  const addOrUpdatePlayer = (player) => {
    const existingPlayer = players.find((p) => p.name === player.name);
    if (existingPlayer) {
      // Actualiza los datos del jugador existente
      const updatedPlayers = players.map((p) =>
        p.name === player.name ? player : p
      );
      setPlayers(updatedPlayers);
    } else {
      // Agrega un nuevo jugador
      setPlayers([...players, player]);
    }
  };
  
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== '/' && <Navbar/>}
      
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/players" element={<PlayersList />} />
        {/*<Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:id" element={<Details />} />
        <Route exact path="/createGame" element={<CreateGame />} /> */}
      </Routes>

      {/* <h1>Armar Lineup de Béisbol</h1>
      <PlayerForm addOrUpdatePlayer={addOrUpdatePlayer} />
      <div className="lineup-section">
        <PlayerList players={players} />
        <Lineup players={players} />
      </div> */}
    </div>
  );
}

export default App;
