import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addPlayerLineup } from "../../../redux/actions";

const PlayersLineup = () => {
  const players = useSelector((state) => state.players);
  const playersLineup = useSelector((state) => state.playersLineup);

  const [positions, setPositions] = useState(["P","1B", "2B", "SS", "SF", "3B", "RF", "CF", "LF", "BA"]);

  const dispatch = useDispatch()

  const  handleAssignPositonChange = (e) => {
    const {value, id} =  e.target
    // console.log(id, value)
    if (value !== 'Select Position') {
      const updatePlayerPositon =  playersLineup.map(player => {

        if (player._id === id) {
          return{...player, position:value}

        } 
        return player
       })

      dispatch(addPlayerLineup(updatePlayerPositon))
      
      const updatePosition = positions.filter((position)=> position !== value) 
      // console.log(updatePosition)
      setPositions(updatePosition)
    }
  }

  console.log(playersLineup)

  return (
    <>
      <table className="table table-bordered">
        <thead className="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">No.</th>
            <th scope="col">Player</th>
            <th scope="col">Position</th>
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
                    <Link>
                      {player.firstName} {player.lastName}
                    </Link>
                  </td>
                  <td>
                    <select id={player._id} onChange={handleAssignPositonChange} value={player.position}>
                      <option>{player.position === "Infield"  && 'Select Position'}</option>
                      {positions.map(position => (
                        <option key={position}>{position}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};

export default PlayersLineup;
