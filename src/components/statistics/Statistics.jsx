// Lineup.js
import RegisterDataPlayer from "../registerDataPlayer/RegisterDataPlayer";
import styles from "./Statistics.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPlayers } from "../../redux/actions";

const Statistics = () => {
  const dispatch = useDispatch()
  const allplayers = useSelector((state) => state.players);

  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch])

  const sortedPlayers = allplayers.sort((a, b) => b.avg - a.avg);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);

  return (
    <div className={styles.statitics}>
      <h1>Statistics</h1>
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
    </div>
  );
};

export default Statistics;
