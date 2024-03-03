import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

// import validate from "./validate";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
// import { loginUser } from "../../redux/actions/index.js";
// import toast, { Toaster } from "react-hot-toast";

const AddPlayerForm = () => {
  const navigate = useNavigate();
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalUser, setShowModalUser] = useState(false);

  const [errors, setErrors] = useState({});

  const [currentForm, setCurrentForm] = useState("");

  const handleFormChange = (formName) => {
    setCurrentForm(formName);
  };


  const handleBlur = (e) => {
    // handleInputChangeUser(e);
    // if (currentForm === "formUser") setErrors(validate(formUser));
    // // console.log('estoy en el blur')
  };


  const hideFormUser = (bool) => {
    // setShowModalUser(bool);
    // setFormUser({
    //   firstName: "",
    //   lastName: "",
    //   phoneNumber: "",
    //   country: "Your country",
    //   city: "Your city",
    //   emailUser: "",
    //   emailConfirm: "",
    //   passwordUser: "",
    //   passwordConfirm: "",
    // });
    // setErrors({});
  };

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

  const numberUsed = useSelector(state => state.numberUsed)

  const objForm = {
    number: '',
    firstName: "",
    lastName: "",
    birthDate: "",
    position: "",
    vb: 0,
    h: 0,
    b2: 0,
    b3: 0,
    hr: 0,
    bb: 0,
    k: 0,
    avg: 0
  }
  const [form, setForm] = useState(objForm);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    // console.log(name, value, type )
    let newValue;

    if (name === 'number' && numberUsed.includes(parseInt(value))) {
      setErrors({error:'This number already exists, select another'})
    }else{
      setErrors({})
      newValue = type === "number" ? parseInt(value) : value;
    }

    newValue = type === "number" ? parseInt(value) : value;

    setForm({
      ...form,
      [name]: newValue
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    axios.post("https://lineupsoftball-backend-dev-htre.4.us-1.fl0.io/addplayers", form)
    setShowModalUser(false)
    setForm(objForm)
    navigate('/players')
    // console.log(form);
  };

  return (
    <>
      <Link
        className={`dropdown-item ${styles.link}`}
        to="#"
        onClick={() => {
          setShowModalUser(true), handleFormChange("formUser");
        }}
      >
        Register Player
      </Link>

      <Modal
        className={styles.wrapper}
        show={showModalUser}
        onHide={() => hideFormUser(false)}
        size="lg"
      >
        <Modal.Header className={styles.headerLogin}>
          <Modal.Title className={styles.titleLogin}>Create Player</Modal.Title>
          <Link
            className={styles.customCloseButton}
            onClick={() => setShowModalUser(false)}
          >
            X
          </Link>
        </Modal.Header>

        <Modal.Body style={{ background: "rgba(59, 59, 59,.2)" }}>
          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <input
                name="number"
                type="number"
                min={0}
                max={99}
                value={form.number}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="">No. Shirt</label>
            </div>
            {errors.error && (
              <p
                style={{ color: "red", fontStyle: "italic", fontSize: "18px" }}
              >
                {errors.error}
              </p>
            )}

            <div className={styles.field}>
              <input
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="">Firstname </label>
            </div>
            {/* {errors.firstName && (
              <p
                style={{ color: "red", fontStyle: "italic", fontSize: "18px" }}
              >
                {errors.firstName}
              </p>
            )} */}

            <div className={styles.field}>
              <input
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="">Lastname</label>
            </div>
            {/* {errors.lastName && (
              <p
                style={{ color: "red", fontStyle: "italic", fontSize: "18px" }}
              >
                {errors.lastName}
              </p>
            )} */}

            <div className={styles.miniFieldGroup}>
              <div className={styles.miniField}>
                <label htmlFor="birthDate">Birthday</label>
                <input
                  name="birthDate"
                  type="date"
                  value={form.birthDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* {errors.lastName && (
                <p
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "18px",
                  }}
                >
                  {errors.lastName}
                </p>
              )} */}

              <div className={styles.miniField}>
                <label htmlFor="">Position</label>
                <select
                  className={styles.select}
                  name="position"
                  value={form.position}
                  onChange={handleInputChange}
                >
                  <option>Select options</option>
                  <option>Infield</option>
                  <option>Outfield</option>
                  <option>Both</option>
                </select>
              </div>
              {/* {errors.phoneNumber && (
                <p
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "18px",
                  }}
                >
                  {errors.phoneNumber}
                </p>
              )} */}
            </div>

            <div className={styles.field}>
              <Button
                className={styles.btnLogin}
                variant="primary"
                type="submit"
              >
                Register Player
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddPlayerForm;
