// PlayerForm.js

import { useState } from "react";
import styles from "./AddPlayerForm.module.css";
import axios from "axios";

const AddPlayerForm = ({ addOrUpdatePlayer }) => {
  /* const [atBats, setAtBats] = useState(0);
  const [hits, setHits] = useState(0); */

  const [num, setNum] = useState(0);
  const [atBats, setAtBats] = useState(1);
  const [hits, setHits] = useState(0);
  const [dobles, setDobles] = useState(0);
  const [triples, setTriple] = useState(0);
  const [homeRuns, setHomeRun] = useState(0);
  const [bb, setBb] = useState(0);
  const [strikeOut, setStrikeOut] = useState(0);

  const [form, setForm] = useState({
    num: num,
    firstName: "",
    lastName: "",
    birthDate: "",
    position: "",
    vb: 0 + atBats,
    h: 0 + hits,
    b2: 0 + dobles,
    b3: 0 + triples,
    hr: 0 + homeRuns,
    bb: 0 + bb,
    k: 0 + strikeOut,
    avg: 0,
  });

  const handleInputChange = (e) => {
    // console.log("handleInputChange ", e.target.value);
    const { name, value } = e.target;

    if (
      (name === "num",
      name === "firstName" ||
        name === "lastName" ||
        name === "birthDate" ||
        name === "position" ||
        name === "vb" ||
        name === "ca" ||
        name === "h" ||
        name === "b2" ||
        name === "b3" ||
        name === "hr" ||
        name === "bb" ||
        name === "k" ||
        name === "avg")
    ) {
      let hitsNumb = hits || dobles || triples || homeRuns
      const average = form.vb + atBats > 0 ? (hitsNumb / atBats) * 1000 : 0; // Calcula el average si hay al menos una aparición al bate
      addOrUpdatePlayer({ name, average });
      setForm({ ...form, [name]: value });
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
    axios.post(
      "https://lineupsoftball-backend-dev-htre.4.us-1.fl0.io/addplayers",
      form
    );

    console.log(form);
  };

  return (
    <div className={styles.playersBox}>
      <div className={styles.containerForm} /* onClick={showCheckboxes} */>
        <h3 style={{ textAlign: "center" }}>Create new player</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.field} style={{ gap: "8px" }}>
            <label id="label" className={styles.label}>
              number
              <input
                id="input"
                name="num"
                type="number"
                value={num}
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
                name="atBat"
                type="number"
                value={form.vb}
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
                  name="hits"
                  type="number"
                  value={hits}
                  onChange={handleInputChange}
                  /*onBlur={handleBlur}*/ required
                />
                {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
              </label>
              <label id="label" className={styles.label}>
                Dobles
                <input
                  id="input"
                  name="dobles"
                  type="number"
                  value={dobles}
                  onChange={handleInputChange}
                  /*onBlur={handleBlur}*/ required
                />
                {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
              </label>
              <label id="label" className={styles.label}>
                Triples
                <input
                  id="input"
                  name="triples"
                  type="number"
                  value={triples}
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
                  name="homenRun"
                  type="number"
                  value={homeRuns}
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
                  value={bb}
                  onChange={handleInputChange}
                  /*onBlur={handleBlur}*/ required
                />
                {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
              </label>
              <label id="label" className={styles.label}>
                Strike Out
                <input
                  id="input"
                  name="strikeOut"
                  type="number"
                  value={strikeOut}
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
