// PlayerList.js
import { useEffect } from "react";
import styles from "./PlayersList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../../redux/actions";
import AddPlayerForm from "../addPlayer/AddPlayerForm";
import avatar from '../../assets/avatar.png'
import Cards from "../cards/Cards";

const PlayersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  const allplayers = useSelector((state) => state.players);

  return (
    <div className={styles.playersList}> 
      
        <h3 className="subtitles3">Players List</h3>
        {/* <AddPlayerForm/>   */}{/* to place when manager login */}
        <Cards allplayers={allplayers} avatar={avatar}/>
    </div>
  );
};

export default PlayersList;
