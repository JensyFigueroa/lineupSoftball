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
  const statechangePlayer = useSelector((state) => state.statechangePlayer);

  const dispatch = useDispatch();

  const handleOnClickSubstitutes = (player, op) => {
    //Checking if there are change Player
    const checkedChangePlayer = playersLineup.filter(
      (player) => player.stateChange === true
    );
    //Checking if there are 10 players in the 10 positions
    const maxPlayers = playersLineup.length;

    if (checkedChangePlayer.length && op === "changePlayer") {
      // Removing the player from the lineup and sending him to the substitutes
      let newPlayersLineup = playersLineup.filter(
        (player) => player._id !== checkedChangePlayer[0]._id
      );

      dispatch(addPlayerLineup(newPlayersLineup));
      //Adding the player from Lineup to the Substitutes on the same turn as the replacement player
      const UpdateSubstitutes = [...substitutes, checkedChangePlayer[0]];
      dispatch(addSubstitutes(UpdateSubstitutes));

      //Adding the substitute to the lineup on the same turn as the replacement player
      checkedChangePlayer[0].stateChange = false;
      newPlayersLineup.splice(checkedChangePlayer[0].index, 0, player);
      dispatch(addPlayerLineup(newPlayersLineup));

      //Update again substitutes
      const newUpdateSubstitutes = UpdateSubstitutes.filter(
        (substitute) => substitute._id !== player._id
      );
      dispatch(addSubstitutes(newUpdateSubstitutes));
    }

    if (player && op === "addPlayer") {
      if (maxPlayers === 10) {
        alert("Maximum of 10 players in the lineup");
      } else {
        player.stateChange = false;
        player.orderAtBat = playersLineup.length + 1;
        dispatch(addPlayerLineup([...playersLineup, player]));

        const newSubstitutes = substitutes.filter(
          (substitute) => substitute._id !== player._id
        );
        dispatch(addSubstitutes(newSubstitutes));
      }
    }
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
                  <td style={{ height: "32.8px" }}></td>
                </tr>
              ))
            : substitutes.length > 0 &&
              substitutes.map((substitute) => (
                <tr key={substitute._id}>
                  <td
                    className={
                      substitute.stateChange === undefined
                        ? styles.substituteChange
                        : styles.substitute
                    }
                  >
                    <span>
                      {statechangePlayer && (
                          <Link
                            onClick={() =>
                              handleOnClickSubstitutes(
                                substitute,
                                "changePlayer"
                              )
                            }
                          >
                            <i
                              className="fa-solid fa-arrow-left"
                              style={{ color: "#00faaf" }}
                            />
                          </Link>
                        )}
                    </span>
                    {!statechangePlayer ? <Link
                      onClick={() =>
                        handleOnClickSubstitutes(substitute, "addPlayer")
                      }
                    >
                      {substitute.firstName} {substitute.lastName}
                    </Link>
                    : <span>{substitute.firstName} {substitute.lastName}</span>}
                    
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
