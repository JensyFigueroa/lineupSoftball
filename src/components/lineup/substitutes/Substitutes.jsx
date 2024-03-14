import { useEffect, useState } from "react";
import Roster from "../../roster/Roster";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addPlayerLineup, addSubstitutes } from "../../../redux/actions";
import styles from "./Substitutes.module.css";

const Substitutes = () => {
  const players = useSelector((state) => state.players);
  const substitutes = useSelector((state) => state.substitutes);
  const playersLineup = useSelector((state) => state.playersLineup);

  const dispatch = useDispatch();

  const handleOnClickSubstitutes = (player) => {
    //Checking if there are change Player
    const checkedChangePlayer = playersLineup.filter(
      (player) => player.stateChange === true
    );
    //Checking if there are 10 players in the 10 positions
    const maxPlayers = playersLineup.length;

    if (checkedChangePlayer.length) {
      // Removing the player from the lineup and sending him to the substitutes
      let newPlayersLineup = playersLineup.filter((player) => player.
      _id !== checkedChangePlayer[0]._id)
      console.log(newPlayersLineup,'new')
      dispatch(addPlayerLineup(newPlayersLineup))
      const newSubstitutes = [...substitutes, checkedChangePlayer[0]]
      dispatch(addSubstitutes(newSubstitutes))
      /* **************************************************************** */

      //Adding the substitute to the lineup on the same turn as the replacement player
      //  newPlayersLineup = [...playersLineup]
      //  newPlayersLineup.splice(checkedChangePlayer[0].orderAtBat - 1,0 player[orderAtBat])
      // const newSubstitutes = [...substitutes, checkedChangePlayer[0]]
      // dispatch(addSubstitutes(newSubstitutes))

      console.log(newSubstitutes)
    }else{
      if (maxPlayers === 4) {
        alert("Maximum of 10 players in the lineup");
      } else {
        player.stateChange = false;
        player.orderAtBat = playersLineup.length + 1;
        dispatch(addPlayerLineup([...playersLineup, player]));

        const newSubstitute = substitutes.filter(
          (substitute) => substitute._id !== player._id
        );
        dispatch(addSubstitutes(newSubstitute));
      }
    }
  };

  const handleChangePlayerLineup = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr className="table-danger">
            <th scope="col">
              Substitutes
              <Roster />
            </th>
          </tr>
        </thead>
        <tbody>
          {substitutes.length === 0
            ? players.map((player) => (
                <tr key={player._id}>
                  <td style={{ height: "40px" }}></td>
                </tr>
              ))
            : substitutes.length > 0 &&
              substitutes.map((substitute) => (
                <tr key={substitute._id}>
                  <td className={styles.substitute}>
                    <Link onChange={handleChangePlayerLineup}>
                      <i
                        className="fa-solid fa-arrow-left"
                        style={{ color: "#00faaf" }}
                      />
                    </Link>
                    <Link onClick={() => handleOnClickSubstitutes(substitute)}>
                      {substitute.firstName} {substitute.lastName}
                    </Link>
                    <span style={{ color: "black" }}>
                      AVG: {Math.round(substitute.avg)}
                    </span>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Substitutes;
