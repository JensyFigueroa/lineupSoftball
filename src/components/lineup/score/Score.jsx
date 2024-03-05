import styles from "./Score.module.css";
const Score = () => {
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
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Visitor</th>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              {" "}
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
          </tr>
          <tr>
            <th scope="row">Home</th>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <input type="text" name="" id="" />
            </td>
            <td>
              <label></label>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Score;
