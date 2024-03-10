import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "../roster/Roster.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSubstitutes, updateAssistance } from "../../redux/actions";
// import { loginUser } from "../../redux/actions/index.js";
// import toast, { Toaster } from "react-hot-toast";

const Roster = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalUser, setShowModalUser] = useState(false);

  const [errors, setErrors] = useState({});

  const [currentForm, setCurrentForm] = useState("");

  const handleFormChange = (formName) => {
    setCurrentForm(formName);
  };

  const hideFormUser = (bool) => {};

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = (e) => {
    console.log(e.targe);
    setShowPassword(!showPassword);
  };

  const [showPasswordConfirm, setSshowPasswordConfirm] = useState(false);
  // const togglePasswordConfirmVisibility = (e) => {
  //   console.log(e.targe)
  //   setSshowPasswordConfirm(!showPasswordConfirm);
  // };

  const [arrSubstitutes, setArrSubstitutes] = useState([]);
  
  const assistancePlayers = useSelector((state) => state.assistancePlayers)
  const substitutes = useSelector((state) => state.substitutes)

  const handleChangeAssistance = (e) => {
    const { checked } = e.target;
    const player = JSON.parse(e.target.getAttribute("data-player")); // Recuperar el objeto player desde el atributo data
    const existPlayer = substitutes.some(
      (substitute) => substitute._id === player._id
    );

    if (existPlayer) {
      setArrSubstitutes(arrSubstitutes.filter(substitute => substitute._id !== player._id));

      const updateAssistace = assistancePlayers.map((assistancePlayer) => {
        if (assistancePlayer._id === player._id) {
          assistancePlayer.checked = checked;
        }
        return assistancePlayer;
      });
      dispatch(updateAssistance(updateAssistace));

    } else {
      setArrSubstitutes([...arrSubstitutes, player]);
      
      const updateAssistace = assistancePlayers.map((assistancePlayer) => {
        if (assistancePlayer._id === player._id) {
          assistancePlayer.checked = checked;
        }
        return assistancePlayer;
      });
    //   console.log(updateAssistace);

      dispatch(updateAssistance(updateAssistace));
    }
  };
  

const dispatch = useDispatch()

useEffect(() => {
  dispatch(addSubstitutes(arrSubstitutes))
}, [dispatch,arrSubstitutes])

  return (
    <>
      <Link
        className={styles.linkRoster}
        to="#"
        onClick={() => {
          setShowModalUser(true), handleFormChange("formUser");
        }}
      >
        <i className="fa-solid fa-user-plus" />
      </Link>

      <Modal
        className={styles.wrapper}
        show={showModalUser}
        onHide={() => hideFormUser(false)}
        size="lg"
      >
        <Modal.Header className={styles.headerLineup}>
          <Modal.Title className={styles.titleLineup}>
            Add players to lineup
          </Modal.Title>
          <Link
            className={styles.customCloseButton}
            onClick={() => setShowModalUser(false)}
          >
            X
          </Link>
        </Modal.Header>

        <Modal.Body style={{ background: "rgba(59, 59, 59,.2)" }}>
          <div className={styles.listPlayers}>
            <table className="table table-bordered">
              <thead>
                <tr className="table-info">
                  <th scope="col">#</th>
                  <th scope="col">Players Roster</th>
                  <th scope="col">assistance</th>
                </tr>
              </thead>
              <tbody>
                {assistancePlayers.map((player, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td key={player._id} style={{ height: "40px" }}>
                      {player.firstName} {player.lastName}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="checkbox"
                        name="player"
                        checked= {player.checked}
                        onChange={handleChangeAssistance}
                        data-player={JSON.stringify(player)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Roster;
