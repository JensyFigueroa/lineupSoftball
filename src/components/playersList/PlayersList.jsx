// PlayerList.js

const PlayersList = ({ players }) => {
  return (
    <div className="player-list">
      <h2>Jugadores</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - Average: {Math.round(player.average)}
          </li>
        ))}     
      </ul>
    </div>
  );
};

export default PlayersList;
