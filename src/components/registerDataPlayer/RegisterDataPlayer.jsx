import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

// import validate from "./validate";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../redux/actions/index.js";
// import toast, { Toaster } from "react-hot-toast";

const RegisterDataPlayer = ({ show, handleClose, player }) => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalUser, setShowModalUser] = useState(false);
  const dispatch = useDispatch();
  const [enabledInput, setEnabledInput] = useState(false);
  const userName = useSelector((state) => state.currentUserNameLoggedIn);

  const [errors, setErrors] = useState({});

  const [currentForm, setCurrentForm] = useState("");

  const handleFormChange = (formName) => {
    setCurrentForm(formName);
  };

  const handleInputChangeUser = (e) => {
    const { name, value } = e.target;
    setFormUser({ ...formUser, [name]: value });
  };

  const handleBlur = (e) => {
    // handleInputChangeUser(e);
    // if (currentForm === "formUser") setErrors(validate(formUser));
    // // console.log('estoy en el blur')
  };

  const handleSubmitUser = async (e) => {
    e.preventDefault();
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

  /* Radio Button */
  const [dataGamePlayer, setDataGamePlayer] = useState({
    _id: "",
    h: 0,
    b2: 0,
    b3: 0,
    hr: 0,
    bb: 0,
    kk: 0,
    out: 0,
  });

  const handleDataGamePlayer = (e) => {
    const { id, name, checked } = e.currentTarget;
    console.log(id, name, checked);
    
    if (name === "_id") {
      setDataGamePlayer({...dataGamePlayer, [name]: id})
    }else{
      // setDataGamePlayer({...dataGamePlayer, [name]:checked ? 1 : 0})

      const updatedDataGamePlayer = {
        ...dataGamePlayer,
        h: 0,
        b2: 0,
        b3: 0,
        hr: 0,
        bb: 0,
        kk: 0,
        out: 0
      };
    
      // Establece el valor del radio button seleccionado
      updatedDataGamePlayer[name] = checked ? 1 : 0;
    
      // Actualiza el estado
      setDataGamePlayer(updatedDataGamePlayer);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataGamePlayer);

    setShowModalUser(false);
  };
  return (
    <>
      <Link
        id={player._id}
        name="_id"
        className="dropdown-item"
        to="#"
        style={{ color: "blue" }}
        onClick={(e) => {handleDataGamePlayer(e);
          setShowModalUser(true);
        }}
      >
        {player.firstName + " " + player.lastName}
      </Link>

      <Modal
        className={styles.wrapper}
        show={showModalUser}
        onHide={() => hideFormUser(false)}
        size="lg"
      >
        <Modal.Header className={styles.headerLogin}>
          <Modal.Title className={styles.titleLogin}>
            🥎 TURN AT BAT {player.firstName + " " + player.lastName}🥎
          </Modal.Title>
          <Link
            className={styles.customCloseButton}
            onClick={() => setShowModalUser(false)}
          >
            X
          </Link>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div>
              <label className={styles.field}>
                Hit:
                <input
                  type="radio"
                  name="h"
                  value={dataGamePlayer.h}
                  checked={dataGamePlayer.h === 1}
                  onChange={handleDataGamePlayer}
                />
              </label>
              <label className={styles.field}>
                2B:
                <input
                  type="radio"
                  name="b2"
                  value={dataGamePlayer.b2}
                  checked={dataGamePlayer.b2 === 1}
                  onChange={handleDataGamePlayer}
                />
              </label>
              <label className={styles.field}>
                3B:
                <input
                  type="radio"
                  name="b3"
                  value={dataGamePlayer.b3}
                  checked={dataGamePlayer.b3 === 1}
                  onChange={handleDataGamePlayer}
                />
              </label>
              <label className={styles.field}>
                HR:
                <input
                  type="radio"
                  name="hr"
                  value={dataGamePlayer.hr}
                  checked={dataGamePlayer.hr === 1}
                  onChange={handleDataGamePlayer}
                />
              </label>
              <label className={styles.field}>
                BB:
                <input
                  type="radio"
                  name="bb"
                  value={dataGamePlayer.bb}
                  checked={dataGamePlayer.bb === 1}
                  onChange={handleDataGamePlayer}
                />
              </label>
              <label className={styles.field}>
                K:
                <input
                  type="radio"
                  name="kk"
                  value={dataGamePlayer.kk}
                  checked={dataGamePlayer.kk === 1}
                  onChange={handleDataGamePlayer}
                />
              </label>
              <label className={styles.field}>
                Out:
                <input
                  type="radio"
                  name="out"
                  value={dataGamePlayer.out}
                  checked={dataGamePlayer.out === 1}
                  onChange={handleDataGamePlayer}
                />
              </label>
            </div>
            <button type="submit">Add</button>
          </form>

          {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterDataPlayer;
