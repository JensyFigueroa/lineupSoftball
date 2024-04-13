import styles from "./Card.module.css";
const Card = ({ avatar, player }) => {
  return (
      <div className={styles.card}>
        <div className={styles.cardContainer}>
          <div className={`${styles.cardFace} ${styles.frontFace}`}>
            <img src={avatar} alt="" />
            <h5>
              {player.firstName} {player.lastName}
            </h5>
            <h5>AVG: {Math.round(player.avg)}</h5>
          </div>

          <div className={`${styles.cardFace} ${styles.backFace}`}>
            <div className={styles.containerAbout}>
              <h4>About me</h4>
              <h6>
                {player.firstName} {player.lastName}
              </h6>
              <h5>BirthDate:</h5>
              <span>{player.birthDate}</span>
              <h6>{player.position}</h6>
              <h4>AVG: {Math.round(player.avg)}</h4>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
