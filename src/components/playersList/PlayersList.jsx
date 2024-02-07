// PlayerList.js
import styles from "./PlayersList.module.css";
import PlayerForm from "../addPlayer/PlayerForm";
const PlayersList = ({ players, addOrUpdatePlayer }) => {
  return (
    <div className={styles.players}>
      <h2>Players List</h2>
      <PlayerForm addOrUpdatePlayer={addOrUpdatePlayer} />
      <div className={styles.playersList}>

        {Object.values(players).length > 0 ? (
          <table className="table">
            <thead className="table table-info">
              <tr>
                <th scope="col" className="table-info">#</th>
                <th scope="col">FullName</th>
                <th scope="col">Avg</th>
              </tr>
            </thead>
            <tbody className="table-primary">
              {players &&
                players.map((player, index) => (
                  <tr key={index}>
                    <th scope="row" className="table-info">{index+1}</th>
                    <td>{player.name}</td>
                    <td>{player.average}</td>
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

export default PlayersList;
