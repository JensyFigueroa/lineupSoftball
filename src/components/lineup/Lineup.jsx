import styles from "./Lineup.module.css";
import Alignment from "./alignment/Alignment";
import Score from "./score/Score";
import Substitutes from "./substitutes/Substitutes";

const Lineup = () => {
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
  );
};

export default Lineup;
