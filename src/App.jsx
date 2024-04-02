// App.js

import "./App.css";
// import PlayerForm from "./components/PlayerForm";
 import Statistics from "./components/statistics/Statistics";
import LandingPage from "./components/LandingPage/LandingPage"
import Navbar from "./components/navbar/Navbar"
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PlayersList from "./components/playersList/PlayersList";
import Home from "./components/home/Home";
import Lineup from "./components/lineup/Lineup";
import Footer from "./components/layout/Footer";

// const players = [{
//   firstName: 'Jensy',
//   lastName:'Figueroa',
//   birthDate:'04/18/1983',
//   vb:10,
//   hit:5,
//   avg:500
// }]

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
      <div className="containerRoutes">
      {location.pathname !== '/' && <Navbar/>}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/players" element={<PlayersList players={players} addOrUpdatePlayer={addOrUpdatePlayer} />} />
          <Route exact path="/statistics" element={<Statistics players={players} />} />
          <Route exact path="/lineup" element={<Lineup />} />
          {/*<Route exact path="/detail/:id" element={<Details />} />
          <Route exact path="/createGame" element={<CreateGame />} /> */}
        </Routes>
      </div>
      {location.pathname !== '/' && <Footer/>}
    
    </div>
  );
}

export default App;
