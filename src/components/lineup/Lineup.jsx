import styles from "./Lineup.module.css";
import Alignment from "./alignment/Alignment";
import Score from "./score/Score";
import Substitutes from "./substitutes/Substitutes";
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
      <h2>Lineup</h2>
      <div className={styles.gridLineup}>
        <div className={`${styles.box} ${styles.b1}`}>
          <Alignment/>
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

