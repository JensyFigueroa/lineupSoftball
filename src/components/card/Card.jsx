import styles from "./Card.module.css";
const Card = ({ avatar, player }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardContainer}>
          <div className={`${styles.cardFace} ${styles.frontFace}`}>
            <img src={avatar} alt="" />
            <h2>
              {player.firstName} {player.lastName}
            </h2>
            <h3>AVG: {Math.round(player.avg)}</h3>
          </div>

          <div className={`${styles.cardFace} ${styles.backFace}`}>
            <div className={styles.containerAbout}>
              <h2>About me</h2>
              <h3>
                {player.firstName} {player.lastName}
              </h3>
              <h4>BirthDate: {player.birthDate}</h4>
              <h3>{player.position}</h3>
              <h3>AVG: {Math.round(player.avg)}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
