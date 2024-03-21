import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "./Login.module.css";
import { Link, NavLink } from "react-router-dom";

// import validate from "./validate";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
// import { loginUser } from "../../redux/actions/index.js";
// import toast, { Toaster } from "react-hot-toast";

const Login = () => {
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
    userName: "",
    password: "",
 
  }
  const [form, setForm] = useState(objForm);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value )

    setForm({...form, [name]:value})


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // axios.post("https://lineupsoftball-backend-dev-htre.4.us-1.fl0.io/addplayers", form)
    setShowModalUser(false)
    // setForm(objForm)
    // navigate('/players')
    // console.log(form);
  };

  return (
    <>
      <NavLink className={({ isActive }) => (isActive ? 'link' : 'activeLink')}
        // className={`dropdown-item ${styles.linkLogin}`}
        to="#"
        onClick={() => {
          setShowModalUser(true), handleFormChange("formUser");
        }}
      >
        <i className="fa-solid fa-circle-user" /> &nbsp;Login In
      </NavLink>

      <Modal
        className={styles.wrapper}
        show={showModalUser}
        onHide={() => hideFormUser(false)}
        size="lg"
      >
        <Modal.Header className={styles.headerLogin}>
          <Modal.Title className={styles.titleLogin}>Login Manager</Modal.Title>
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
                name="userName"
                type="text"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="">UserName</label>
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
                name="password"
                type="password"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="">Password</label>
            </div>
            {/* {errors.lastName && (
              <p
                style={{ color: "red", fontStyle: "italic", fontSize: "18px" }}
              >
                {errors.lastName}
              </p>
            )} */}

            <div className={styles.field}>
              <Button
                className={styles.btnLogin}
                variant="primary"
                type="submit"
              >
                 LogIn
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
