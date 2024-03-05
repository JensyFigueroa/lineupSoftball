import { useEffect } from "react";
import Roster from "../../roster/Roster";
import {useSelector} from 'react-redux'

const Substitutes = () => {

  const players = useSelector((state) => state.players)
  const substitutes = useSelector((state) => state.substitutes)
 
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
        </tr>)) : substitutes.length > 0 && substitutes.map(substitute =>  substitute.checked === true && (<tr key={substitute._id}>
          <td>{substitute.firstName} {substitute.lastName}</td>
        </tr>))}
          {/* <tr>
            <td>Mark Otto</td>
          </tr>
          <tr>
            <td>Mark Otto</td>
          </tr> */}
  
         
        </tbody>
      </table>
    </>
  );
};

export default Substitutes;
