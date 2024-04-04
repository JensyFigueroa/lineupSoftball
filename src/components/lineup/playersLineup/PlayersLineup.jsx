import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayerLineup } from "../../../redux/actions";
import RegisterDataPlayer from "../../registerDataPlayer/RegisterDataPlayer";
import { Link } from "react-router-dom";
import styles from "./PlayersLineup.module.css"

const PlayersLineup = () => {
  const manager = useSelector (state => state.activeManager)
  // const players = useSelector((state) => state.players);
  const maxPlayerLineup = new Array(11).fill('')
  const playersLineup = useSelector((state) => state.playersLineup);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const positions = ["P", "C", "1B", "2B", "SS", "SF", "3B", "RF", "CF", "LF", "BA"];

  const dispatch = useDispatch();

  const handleChangePlayer = (e) => {
    const {value, id } = e.target;
    // console.log(id, value)

    //Position assignment
    if (value !== "Select Position") {
      const updatePlayerPositon = playersLineup.map((player) => {
        if (player._id === id) {
          return { ...player, position: value };
        }
        return player;
      });

      dispatch(addPlayerLineup(updatePlayerPositon));

    }

  };

  const changePlayer = (player,i) =>{

    console.log(player)
    
    const updatePlayersLineup =  playersLineup.map((changePlayer) => {
      if (changePlayer._id === player._id) {
        changePlayer.stateChange = !player.stateChange ;
        changePlayer.index = i
      }
      return changePlayer
    })

    const statechangePlayer = player.stateChange/*  !== undefined ? false : !player.stateChange */

    // console.log(statechangePlayer,'chancePlayer')

    dispatch(addPlayerLineup(updatePlayersLineup, statechangePlayer))
  }


  return (
    <>
      <table className={`table table-bordered ${styles.tableLineUp}`}>
        <thead className="table-primary sticky-top">
          <tr>
            <th scope="col">#</th>
            <th scope="col">No.</th>
            <th scope="col">Player</th>
            <th scope="col" className={styles.cellPosition}>Position</th>
          </tr>
        </thead>
        <tbody>
          {playersLineup.length === 0
            ? maxPlayerLineup.map((player) => (
                <tr key={player._id}>
                  <th scope="row"></th>
                  <td></td>
                  <td className={styles.cellsLineUp}></td>
                  <td></td>
                </tr>
              ))
            : playersLineup.length > 0 &&
              playersLineup.map((player, i) => (
                <tr key={player._id}>
                  <th scope="row">{i + 1}</th>
                  <td className={styles.cellsLineUp}>{player.number}</td>

                  <td className={styles.cellsLineUp}>
                    {manager === "" ? <span>{player.firstName} {player.lastName}</span>
                                    : <RegisterDataPlayer
                                    show={showModal}
                                    handleClose={handleClose}
                                    player={player}
                                  />}
                  </td>

                  <td className={styles.cellPosition}>
                    <select
                      id={player._id}
                      value={player.position}
                      onChange={handleChangePlayer}
                      style={{ textAlign: "center" }}
                      className={styles.selectPosition}
                    >
                      <option key="default" value="">
                        Position
                      </option>
                      {positions.map((position, i) => (
                        <option
                          key={i}
                          disabled={playersLineup.some(
                            (p) =>
                              p.position === position && p._id !== player._id
                          )}

                          className={ playersLineup.some(
                            (p) =>
                              p.position === position && p._id !== player._id
                          ) ? styles.trueDisable : styles.falseDisable }
                        >
                          {position}
                        </option>
                      ))}
                    </select>
                    <Link name='LinkChange' onClick={() => changePlayer(player, i)}><i className="fa-solid fa-arrow-right" style={{ color: player.stateChange && 'Red'}}/></Link>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};

export default PlayersLineup;
