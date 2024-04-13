import styles from "./Lineup.module.css";
import Score from "./score/Score";
import Substitutes from "./substitutes/Substitutes";
import PlayersLineup from "./playersLineup/PlayersLineup";
import { useDispatch } from "react-redux";
import { getPlayers } from "../../redux/actions";
import { useEffect } from "react";

const Lineup = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch])

  return (
    <div className={styles.lineup}>
      <h3 className="subtitles3">Lineup</h3>
      <div className={styles.gridLineup}>
        <div className={`${styles.box} ${styles.b1}`}>
          <PlayersLineup/>
        </div>

        <aside className={`${styles.box} ${styles.b2}`}>
          <Substitutes/>
        </aside>

        <div className={`${styles.box} ${styles.b3}`}>
          <Score/>
        </div>
      </div>
    </div>
  )
}

export default Lineup