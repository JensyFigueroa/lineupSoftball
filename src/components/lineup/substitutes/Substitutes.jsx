import { useEffect, useState } from "react";
import Roster from "../../roster/Roster";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { addPlayerLineup, addSubstitutes } from "../../../redux/actions";

const Substitutes = () => {
  const players = useSelector((state) => state.players)
  const substitutes = useSelector((state) => state.substitutes)

  const dispatch = useDispatch()

  const [playersLineup, setPlayersLineup] = useState([])  

  const handleOnClickSubstitutes = (player) => {
    console.log(player)
    setPlayersLineup([...playersLineup, player])

    const newSubstitute = substitutes.filter(substitute => substitute._id !== player._id )
    dispatch(addSubstitutes(newSubstitute))
  }

  useEffect(() => {
    dispatch(addPlayerLineup(playersLineup))
  }, [dispatch, playersLineup])
  
  return (
    <>
      <table className="table">
        <thead>
          <tr className="table-danger">
            <th scope="col">
                Substitutes 
                <Roster/>
            </th>
          </tr>
        </thead>
        <tbody>
        {substitutes.length === 0 ? players.map(player => (<tr key={player._id}>
          <td style={{height:'40px'}}></td>
        </tr>)) : substitutes.length > 0 && substitutes.map(substitute =>  (<tr key={substitute._id}>
          <td ><Link onClick={() => handleOnClickSubstitutes(substitute)}>{substitute.firstName} {substitute.lastName}</Link></td>
        </tr>))}    
        </tbody>
      </table>
    </>
  );
};

export default Substitutes;
