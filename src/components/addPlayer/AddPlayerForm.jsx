// PlayerForm.js

import { useState } from "react";
import styles from "./AddPlayerForm.module.css";
import axios from 'axios'

const AddPlayerForm = ({ addOrUpdatePlayer }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    position: "",
  });
  const [atBats, setAtBats] = useState(0);
  const [hits, setHits] = useState(0);

  const handleInputChange = (e) => {
    // console.log("handleInputChange ", e.target.value);
    const { name, value } = e.target;

    if (
      name === "firstName" ||
      name === "lastName" ||
      name === "birthDate" ||
      name === "position"
    ) {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* ******************** Para el agregar en el roster ********************/
    // const average = atBats > 0 ? (hits / atBats) * 1000 : 0; // Calcula el average si hay al menos una aparición al bate
    // addOrUpdatePlayer({ name, average });
    // setName("");
    // setAtBats(0);
    // setHits(0);

    // axios.post('http://localhost:3001/addplayers', form)
    axios.post('https://lineupsoftball-backend-dev-htre.4.us-1.fl0.io:8080/addplayers', form)

    console.log(form)
  };

  return (
    <div className={styles.playersBox}>
      <div className={styles.containerForm} /* onClick={showCheckboxes} */>
        <h3 style={{ textAlign: "center" }}>Create new player</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.field} style={{ gap: "8px" }}>
            <label id="label" className={styles.label}>
              FirstName
              <input
                id="input"
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleInputChange} 
                /* onChange={handleInputChange} onBlur={handleBlur} value={form.name}  */ required
              />
              {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
            </label>
            <label id="label" className={styles.label}>
              LastName
              <input
                id="input"
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleInputChange} 
                /* onChange={handleInputChange} onBlur={handleBlur} value={form.name}  */ required
              />
              {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
            </label>
          </div>

          <div className={styles.field} style={{ gap: "8px" }}>
            <label id="label" className={styles.label}>
              Birthdate
              <input
                id="input"
                name="birthDate"
                type="date"
                value={form.birthDate}
                onChange={handleInputChange} 
                /* onChange={handleInputChange} onBlur={handleBlur} value={form.name}  */ required
              />
              {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
            </label>
            <label id="label" className={styles.label}>
              Position
              <select
                id="platforms"
                className={styles.select}
                name="position"
                value={form.position}
                onChange={handleInputChange} 
              >
                <option>Select options</option>
                <option>Infield</option>
                <option>Outfield</option>
              </select>
            </label>
          </div>

          <button className={styles.btn} type="submit">
            Add player
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlayerForm;
