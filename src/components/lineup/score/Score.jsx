import { useState } from "react";
import styles from "./Score.module.css";
import { useDispatch ,useSelector } from "react-redux";
import {addScoreHomeClub, addScoreVisitor } from "../../../redux/actions";
import { persistor } from "../../../redux/store";

const Score = () => {
  const dispatch = useDispatch()
  const scoresVisitor = useSelector((state) => state.scoresVisitor);
  const scoresHomeClub = useSelector((state) => state.scoresHomeClub);

  // const [visitorRunsInning, setVisitorRunsInning] = useState(new Array(9).fill(0))
  // const [homeClubRunsInning, setHomeClubRunsInning] = useState(new Array(9).fill(0))

  const handleRunsInningChange = (e, i) => {
    const {value} = e.target
    const dugOut = e.target.parentNode.parentNode.querySelector('th').getAttribute('name')

    if (dugOut === 'Visitor' && value !== '') {
      const newRuns = [...scoresVisitor];
      newRuns[i] = parseInt(value)
      // console.log(newRuns,'')
      // setVisitorRunsInning(newRuns)
      dispatch(addScoreVisitor(newRuns))
    }
    if (dugOut === 'HomeClub' && value !== '') {
      const newRuns = [...scoresHomeClub];
      newRuns[i] = parseInt(value)
      // setHomeClubRunsInning(newRuns)
      dispatch(addScoreHomeClub(newRuns))
    }
  }

  console.log(scoresHomeClub,scoresVisitor)

  const totalRunsVisitantes = scoresVisitor.reduce((total, runs) => total + runs, 0)
  const totalRunsHomeClub = scoresHomeClub.reduce((total, runs) => total + runs, 0)


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
            {scoresVisitor.map((runs, i) => (
              <td key={i}>
                <input type="text" value={runs === null ? '' : runs} onChange={(e) => handleRunsInningChange(e,i)}/>
              </td>
            ))}
            <td className={styles.totalRuns}>{totalRunsVisitantes}</td>
          </tr>
          <tr name="Home">
            <th scope="row" name="HomeClub">Home Club</th>
            {scoresHomeClub.map((runs, i) => (
              <td key={i}>
                <input type="text" value={runs === null ? '' : runs} onChange={(e) => handleRunsInningChange(e,i)}/>
              </td>
            ))}
            <td className={styles.totalRuns}>{totalRunsHomeClub}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => persistor.purge()}>Clean Lineup</button>
    </>
  );
};

export default Score;
