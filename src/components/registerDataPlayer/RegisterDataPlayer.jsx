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

  const [formUser, setFormUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "Your country",
    city: "Your city",
    emailUser: "",
    emailConfirm: "",
    passwordUser: "",
    passwordConfirm: "",
  });
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

  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' }
  ];

  return (
    <>
      <Link
        className="dropdown-item"
        to="#"
        style={{ color: "blue" }}
        onClick={() => {
          setShowModalUser(true), handleFormChange("formUser");
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
            🥎 TURN AT BAT 🥎
          </Modal.Title>
          <Link
            className={styles.customCloseButton}
            onClick={() => setShowModalUser(false)}
          >
            X
          </Link>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmitUser}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <div className="radio-buttons">
                        <label>
                          <input
                            type="radio"
                            name={`option-${item.id}`}
                            value="opcion1"
                          />
                          Opción 1
                        </label>
                        <label>
                          <input
                            type="radio"
                            name={`option-${item.id}`}
                            value="opcion2"
                          />
                          Opción 2
                        </label>
                        <label>
                          <input
                            type="radio"
                            name={`option-${item.id}`}
                            value="opcion3"
                          />
                          Opción 3
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.field}>
              <label htmlFor="">Hits </label>
              <input
                type="radio"
                name="hit"
                onChange={handleInputChangeUser}
                onBlur={handleBlur}
                value={formUser.firstName}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="">Hits </label>
              <input
                type="radio"
                name="hit"
                onChange={handleInputChangeUser}
                onBlur={handleBlur}
                value={formUser.firstName}
                required
              />
            </div>

            {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterDataPlayer;
