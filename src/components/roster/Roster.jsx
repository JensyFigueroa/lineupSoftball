import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "../roster/Roster.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSubstitutes } from "../../redux/actions";
// import { loginUser } from "../../redux/actions/index.js";
// import toast, { Toaster } from "react-hot-toast";

const Roster = () => {
  const navigate = useNavigate();
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
  
  const players = useSelector((state) => state.players)
  const substitutes = useSelector((state) => state.substitutes)

  const handleChangeAssistance = (e) => {
    const { name, checked } = e.target;
    const player = JSON.parse(e.target.getAttribute('data-player')); // Recuperar el objeto player desde el atributo data

    console.log(player)
    const playerIndex = substitutes.some((substitute) => substitute._id === player._id);
  
    if (playerIndex) {
        //Verificamos si existe en el arreglo para poder modificar la propiedad
        substitutes.map((substitute) => {
            console.log(substitute._id === player._id)
            // if (substitute._id === player._id) {
            //     setArrSubstitutes(substitute.checked = checked)
            // }
        });
      } else {
        // Si el jugador no está en la lista, agregarlo con su estado de 'checked'
        player.checked = checked; 
        setArrSubstitutes([...arrSubstitutes, player]);
       
      }

  };

const dispatch = useDispatch()

useEffect(() => {
  dispatch(addSubstitutes(arrSubstitutes))
}, [dispatch,arrSubstitutes])


// console.log(substitutes.some(substitute => substitute.checked === true),'roster')
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
