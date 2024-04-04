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

  const assistancePlayers = useSelector((state) => state.assistancePlayers);
  const playersLineup = useSelector((state) => state.playersLineup);
  const players = useSelector((state) => state.players);
  const substitutes = useSelector((state) => state.substitutes);
  const dispatch = useDispatch();

  const handleChangeAssistance = (e) => {
    const { checked } = e.target;
    const player = JSON.parse(e.target.getAttribute("data-player")); // Recuperar el objeto player desde el atributo data
    const existPlayer = substitutes.some(
      (substitute) => substitute._id === player._id
    );

    if (existPlayer) {
      // Si existe en el en substitute lo saca y lo coloca en Roster(Assistance)
      dispatch(
        addSubstitutes(
          substitutes.filter((substitute) => substitute._id !== player._id)
        )
      );

      const updateAssistace = assistancePlayers.filter((assistancePlayer) => {
        if (assistancePlayer._id === player._id) {
          assistancePlayer.checked = checked;
        }
        return assistancePlayer;
      });
      dispatch(updateAssistance(updateAssistace));
    } else { //Si no existe lo coloca en arrSubstitutes y cuando se actualice se ejecuta el useEffect
      const existOnlineup = playersLineup.some(
        (playerOnLineup) => playerOnLineup._id === player._id
      );

      if (!existOnlineup) {
        const updateSubstitutes = [...substitutes, player];
        dispatch(addSubstitutes(updateSubstitutes));

        const updateAssistace = players.map((assistancePlayer) => {
          if (assistancePlayer._id === player._id) {
            assistancePlayer.checked = checked;
          }
          return assistancePlayer;
        });

        dispatch(updateAssistance(updateAssistace));
      }
    }
  };


  return (
    <>
      <Link
        className={styles.linkRoster}
        to="#"
        onClick={() => {
          setShowModalUser(true), handleFormChange("formUser");
        }}
      >Substitutes
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
                {players.map((player, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td key={player._id} style={{ height: "40px" }}>
                      {player.firstName} {player.lastName}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="checkbox"
                        name="player"
                        checked={player.checked}
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
