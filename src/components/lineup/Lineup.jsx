// Lineup.js
const Lineup = ( {players} ) => {
  const sortedPlayers = players.sort((a, b) => b.average - a.average);

  return (
    <div className="lineup">
      <h2>Lineup</h2>
      <ul>
        {sortedPlayers.map((player, index) => (
          <li key={index}>
            {player.name} - Promedio: {Math.round(player.average)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lineup;
