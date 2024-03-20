import styles from "./Card.module.css";
const Card = ({ avatar, player }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardContainer}>
          <div className={`${styles.cardFace} ${styles.frontFace}`}>
            <img src={avatar} alt="" />
            <h4>
              {player.firstName} {player.lastName}
            </h4>
            <h5>AVG: {Math.round(player.avg)}</h5>
          </div>

          <div className={`${styles.cardFace} ${styles.backFace}`}>
            <div className={styles.containerAbout}>
              <h2>About me</h2>
              <h5>
                {player.firstName} {player.lastName}
              </h5>
              <h6>BirthDate: {player.birthDate}</h6>
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
