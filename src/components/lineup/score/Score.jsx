import { useState } from "react";
import styles from "./Score.module.css";
import { useDispatch ,useSelector } from "react-redux";
import { addScore } from "../../../redux/actions";

const Score = () => {
  const dispatch = useDispatch()
  const scores = useSelector((state) => state.scores);

  const [visitorRunsInning, setVisitorRunsInning] = useState(new Array(9).fill(''))
  const [homeClubRunsInning, setHomeClubRunsInning] = useState(new Array(9).fill(''))

  const handleRunsInningChange = (e, i) => {
    const {value} = e.target
    const dugOut = e.target.parentNode.parentNode.querySelector('th').getAttribute('name')

    if (dugOut === 'Visitor' && value !== '') {
      const newRuns = [...visitorRunsInning];
      newRuns[i] = parseInt(value)
      setVisitorRunsInning(newRuns)
    }
    if (dugOut === 'HomeClub' && value !== '') {
      const newRuns = [...homeClubRunsInning];
      newRuns[i] = parseInt(value)
      setHomeClubRunsInning(newRuns)
    }
  }

  const totalRunsVisitantes = visitorRunsInning.reduce((total, runs) => total + runs, 0)
  const totalRunsHomeClub = homeClubRunsInning.reduce((total, runs) => total + runs, 0)

  return (
    <>
      <table className={`${styles.score} table table-bordered`}>
        <thead className="table-primary">
          <tr>
            <th scope="col"></th>
            <th scope="col">1</th>
            <th scope="col">2</th>
            <th scope="col">3</th>
            <th scope="col">4</th>
            <th scope="col">5</th>
            <th scope="col">6</th>
            <th scope="col">7</th>
            <th scope="col">8</th>
            <th scope="col">9</th>
            <th scope="col">Runs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" name="Visitor">Visitor</th>
            {visitorRunsInning.map((runs, i) => (
              <td key={i}>
                <input type="text"  onChange={(e) => handleRunsInningChange(e,i)}/>
              </td>
            ))}
            <td>{totalRunsVisitantes}</td>
          </tr>
          <tr name="Home">
            <th scope="row" name="HomeClub">Home Club</th>
            {homeClubRunsInning.map((runs, i) => (
              <td key={i}>
                <input type="text" onChange={(e) => handleRunsInningChange(e,i)}/>
              </td>
            ))}
            <td>{totalRunsHomeClub}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Score;
