// Lineup.js
import RegisterDataPlayer from "../registerDataPlayer/RegisterDataPlayer";
import styles from "./Statistics.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPlayers } from "../../redux/actions";
import axios from "axios";

const Statistics = () => {
  const dispatch = useDispatch()
  const allplayers = useSelector((state) => state.players);
  const activeManager = useSelector((state) => state.activeManager);

  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch])

  const sortedPlayers = allplayers.sort((a, b) => b.avg - a.avg);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);

  const cleanedAVG = async () => {

    const lotSize = 6;

    for (let i = 0; i < allplayers.length; i+= lotSize) {
      const lot = allplayers.slice(i, i + lotSize);
      console.log(lot)
      
      await Promise.all(lot.map(async player => {
        const cleanAVGPlayer = {
          ...player,
          vb: 0,
          h: 0,
          b2: 0,
          b3: 0,
          hr: 0,
          bb: 0,
          k: 0,
          avg: 0
        }

        try {
          // axios.put(`http://localhost:3001/cleanavgplayer/${player._id}`, cleanAVGPlayer)
        axios.put(`https://lineupsoftball-bbdores.onrender.com/cleanavgplayer/${player._id}`, cleanAVGPlayer)
        } catch (error) {
          console.error('Error sending data for player with ID', error)
        }
      }))
    }


  }

  return (
    <div className={styles.statitics}>
      <h3 className="subtitles3">Statistics</h3>
      <div className={`${styles.playersList} table-responsive`}>
        {Object.values(allplayers).length > 0 ? (
          <table className="table">
            <thead className="table table-info sticky-top">
              <tr>
                <th scope="col" className="table-info">
                  Items
                </th>
                <th scope="col">#</th>
                <th scope="col" colSpan={2}>
                  FullName
                </th>
                <th scope="col">VB</th>
                <th scope="col">H</th>
                <th scope="col">2B</th>
                <th scope="col">3B</th>
                <th scope="col">HR</th>
                <th scope="col">BB</th>
                <th scope="col">K</th>
                <th scope="col">Avg</th>
              </tr>
            </thead>
            <tbody className="table-primary">
              {allplayers &&
                sortedPlayers.map((player, index) => (
                  <tr key={index}>
                    <th scope="row" className="table-info">
                      {index + 1}
                    </th>
                    <td>{player.number}</td>
                    <td colSpan={2}>{player.firstName +" "+ player.lastName}</td>
                    <td>{player.vb}</td>
                    <td>{player.h}</td>
                    <td>{player.b2}</td>
                    <td>{player.b3}</td>
                    <td>{player.hr}</td>
                    <td>{player.bb}</td>
                    <td>{player.k}</td>
                    <td>{Math.round(player.avg)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <h2>No players</h2>
        )}
      </div>
      {
        activeManager && <button type="submit" onClick={cleanedAVG}>Clean AVG</button>
      }
      
    </div>
  );
};

export default Statistics;
