// PlayerList.js
import { useEffect } from "react";
import styles from "./PlayersList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../../redux/actions";
import AddPlayerForm from "../addPlayer/AddPlayerForm";
import avatar from '../../assets/avatar.jpg'
import Cards from "../cards/Cards";

const PlayersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  const allplayers = useSelector((state) => state.players);

  return (
    <div className={styles.players}>
      <div className={styles.container}>
        <h2>Players List</h2>
        <AddPlayerForm/>
        <Cards allplayers={allplayers} avatar={avatar}/>
      </div>
    </div>
  );
};

export default PlayersList;
