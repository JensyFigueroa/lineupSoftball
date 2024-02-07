// PlayerList.js
import styles from "./PlayersList.module.css"
import PlayerForm from "../addPlayer/PlayerForm"
const PlayersList = ({ players, addOrUpdatePlayer }) => {
  
  return (
    <div className={styles.playerList}>
      <h2>Players List</h2>
      <PlayerForm addOrUpdatePlayer={addOrUpdatePlayer} />
      <ol>
        {players ? players.map((player, index) => (
          <li key={index}>
            {player.name} - Average: {Math.round(player.average)}
          </li>
        )):'Not players'}     
      </ol>
    </div>
  );
};

export default PlayersList;
