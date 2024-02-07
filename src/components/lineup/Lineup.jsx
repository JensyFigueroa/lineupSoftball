// Lineup.js
import styles from "./Lineup.module.css";

const Lineup = ({ players }) => {
  const sortedPlayers = players.sort((a, b) => b.average - a.average);

  return (
    <div className={styles.lineup}>
      <h2>Lineup</h2>
      <div className={styles.playersList}>
        {Object.values(players).length > 0 ? (
          <table className="table">
            <thead className="table table-info">
              <tr>
                <th scope="col" className="table-info">
                  #
                </th>
                <th scope="col">FullName</th>
                <th scope="col">Avg</th>
              </tr>
            </thead>
            <tbody className="table-primary">
              {players &&
                sortedPlayers.map((player, index) => (
                  <tr key={index}>
                    <th scope="row" className="table-info">
                      {index + 1}
                    </th>
                    <td>{player.name}</td>
                    <td>{Math.round(player.average)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <h2>No players</h2>
        )}
      </div>
    </div>
  );
};

export default Lineup;
