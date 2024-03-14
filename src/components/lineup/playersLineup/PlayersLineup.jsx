import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayerLineup } from "../../../redux/actions";
import RegisterDataPlayer from "../../registerDataPlayer/RegisterDataPlayer";
import { Link } from "react-router-dom";
import styles from "./PlayersLineup.module.css"

const PlayersLineup = () => {
  const players = useSelector((state) => state.players);
  const playersLineup = useSelector((state) => state.playersLineup);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const positions = ["P", "1B", "2B", "SS", "SF", "3B", "RF", "CF", "LF", "BA"];

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

  const changePlayer = (player) =>{
    
    console.log( playersLineup.map((changePlayer) => {
      if (changePlayer._id === player._id) {
        changePlayer.stateChange = !player.stateChange ;
      }
      return changePlayer
    })
    )
  }


  return (
    <>
      <table className="table table-bordered">
        <thead className="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">No.</th>
            <th scope="col">Player</th>
            <th scope="col" style={{width:'30%'}}>Position</th>
          </tr>
        </thead>
        <tbody>
          {playersLineup.length === 0
            ? players.map((player) => (
                <tr key={player._id}>
                  <th scope="row"></th>
                  <td></td>
                  <td style={{ height: "36px" }}></td>
                  <td></td>
                </tr>
              ))
            : playersLineup.length > 0 &&
              playersLineup.map((player, i) => (
                <tr key={player._id}>
                  <th scope="row">{i + 1}</th>
                  <td>{player.number}</td>

                  <td>
                    {player && (
                      <RegisterDataPlayer
                        show={showModal}
                        handleClose={handleClose}
                        player={player}
                      />
                    )}
                  </td>

                  <td className={styles.playerLineup}>
                    <select
                      id={player._id}
                      value={player.position}
                      onChange={handleChangePlayer}
                      style={{ textAlign: "center" }}
                    >
                      <option key="default" value="">
                        Select Position
                      </option>
                      {positions.map((position, i) => (
                        <option
                          key={i}
                          disabled={playersLineup.some(
                            (p) =>
                              p.position === position && p._id !== player._id
                          )}
                        >
                          {position}
                        </option>
                      ))}
                    </select>
                    <Link name='LinkChange' onClick={() => changePlayer(player)}><i className="fa-solid fa-arrow-right" style={{ color: player.stateChange && 'Red'}}/></Link>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};

export default PlayersLineup;
