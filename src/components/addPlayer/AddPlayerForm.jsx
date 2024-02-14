// PlayerForm.js

import { useState } from "react";
import styles from "./AddPlayerForm.module.css";
import axios from "axios";
import {useSelector} from 'react-redux'

const AddPlayerForm = ({ addOrUpdatePlayer }) => {
  /* const [atBats, setAtBats] = useState(0);
  const [hits, setHits] = useState(0); */

  const players = useSelector(state => state.players)

  const [form, setForm] = useState({
    number: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    position: "",
    vb: "",
    h: "",
    b2: "",
    b3: "",
    hr: "",
    bb: "",
    k: "",
    avg: "",
  });

  const handleInputChange = (e) => {
    // console.log("handleInputChange ", e.target.value);
    const { name, value } = e.target;
    // console.log(name, value)

    if (
      (name === "number" ||
      name === "firstName" ||
        name === "lastName" ||
        name === "birthDate" ||
        name === "position" ||
        name === "vb" ||
        name === "h" ||
        name === "b2" ||
        name === "b3" ||
        name === "hr" ||
        name === "bb" ||
        name === "k")
    ) {
      const hits = form.h + form.b2 + form.b3 + form.hr
      const average = form.vb > 0 ? (hits / form.vb) * 1000 : 0; // Calcula el average si hay al menos una aparición al bate
      addOrUpdatePlayer({ name, average });
      setForm({ ...form, [name]: value });
      setForm(form.avg = average);
    }
  };

  /* const average = atBats > 0 ? (hits / atBats) * 1000 : 0; // Calcula el average si hay al menos una aparición al bate
    addOrUpdatePlayer({ name, average });
    setName("");
    setAtBats(0);
    setHits(0); */

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios.post('http://localhost:3001/addplayers', form)
    axios.post("https://lineupsoftball-backend-dev-htre.4.us-1.fl0.io/addplayers", form);

     console.log(form);
  };

  return (
    <div className={styles.playersBox}>
      <div className={styles.containerForm} /* onClick={showCheckboxes} */>
        <h3 style={{ textAlign: "center" }}>Create new player</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.field} style={{ gap: "8px" }}>
          <label id="label" className={styles.label}>
              At bat
              <input
                id="input"
                name="number"
                type="number"
                min={0} max={99}
                onChange={handleInputChange}
                /*onBlur={handleBlur}*/ required
              />
              {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
            </label>
            <label id="label" className={styles.label}>
              FirstName
              <input
                id="input"
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleInputChange}
                /*onBlur={handleBlur} */ required
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
                /*onBlur={handleBlur}*/ required
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
                /* onBlur={handleBlur}*/ required
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

            <label id="label" className={styles.label}>
              At bat
              <input
                id="input"
                name="vb"
                type="number"
                min={0} max={1}
                onChange={handleInputChange}
                /*onBlur={handleBlur}*/ required
              />
              {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
            </label>

          </div>

          <div className={styles.field} style={{ gap: "8px" }}>
              <label id="label" className={styles.label}>
                Hits
                <input
                  id="input"
                  name="h"
                  type="number"
                  min={0} max={1}
                  onChange={handleInputChange}
                  /*onBlur={handleBlur}*/ required
                />
                {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
              </label>
              <label id="label" className={styles.label}>
                Dobles
                <input
                  id="input"
                  name="b2"
                  type="number"
                  min={0} max={1}
                  onChange={handleInputChange}
                  /*onBlur={handleBlur}*/ required
                />
                {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
              </label>
              <label id="label" className={styles.label}>
                Triples
                <input
                  id="input"
                  name="b3"
                  type="number"
                  min={0} max={1}
                  onChange={handleInputChange}
                  /*onBlur={handleBlur}*/ required
                />
                {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
              </label>
            </div>
          <div className={styles.field} style={{ gap: "8px" }}>
              <label id="label" className={styles.label}>
                Home Run
                <input
                  id="input"
                  name="hr"
                  type="number"
                  min={0} max={1}
                  onChange={handleInputChange}
                  /*onBlur={handleBlur}*/ required
                />
                {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
              </label>
              <label id="label" className={styles.label}>
                Base per balls
                <input
                  id="input"
                  name="bb"
                  type="number"
                  min={0} max={1}
                  onChange={handleInputChange}
                  /*onBlur={handleBlur}*/ required
                />
                {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
              </label>
              <label id="label" className={styles.label}>
                Strike Out
                <input
                  id="input"
                  name="k"
                  type="number"
                  min={0} max={1}
                  onChange={handleInputChange}
                  /*onBlur={handleBlur}*/ required
                />
                {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
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
