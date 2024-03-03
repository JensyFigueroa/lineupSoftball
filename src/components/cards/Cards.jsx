import Card from "../card/Card";
import styles from './Cards.module.css'

const Cards = ({ allplayers, avatar }) => {
  // console.log(allplayers, avatar);
  return (
    <>
      {Object.values(allplayers).length > 0 ? <div className={styles.cards}>
        {allplayers &&
                allplayers.map((player, index) => (
                  <Card key={index} player={player} avatar={avatar}/>
                ))}
        
      </div>  : <h2>No players</h2>}
    </>
  );
};

export default Cards;
