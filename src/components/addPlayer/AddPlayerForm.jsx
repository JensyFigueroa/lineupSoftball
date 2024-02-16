// PlayerForm.js

import { useState } from "react";
import styles from "./AddPlayerForm.module.css";
import axios from "axios";
// import {useSelector} from 'react-redux'

const AddPlayerForm = () => {
  const objForm = {
    number: 0,
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

    const newValue = type === "number" ? parseInt(value) : value;

    setForm({
      ...form,
      [name]: newValue
    });

    if (["vb", "h", "b2", "b3", "hr"].includes(name)) {
      
      const hits = ["h", "b2", "b3", "hr"].includes(name) && parseInt(value) ;
      const totalHits = hits + form.h + form.b2 + form.b3 + form.hr;
      const totalVb = name === "vb" ? parseInt(value) + form.vb : form.vb;
      const average = totalVb > 0 ? (totalHits / totalVb) * 1000 : 0;
      setForm(prevForm => ({ ...prevForm, avg: average }));
    }
  };



  // const getAvg = () => {
  //   console.log(form, 'get')
  //   // const totalVb = form.vb
  //   // const  totalHits = form.h + form.b2 + form.b3 + form.hr
  //   // console.log(totalHits)
  //   // const average = totalVb > 0 ? (totalHits / totalVb) * 1000 : 0;
  //   // setForm(prevForm => ({ ...prevForm, avg: average }));
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://lineupsoftball-backend-dev-htre.4.us-1.fl0.io/addplayers", form)
    console.log(form);
    setForm(objForm)
    
    console.log(form);
  };

  return (
    <div className={styles.playersBox}>
      <div className={styles.containerForm}>
        <h3 style={{ textAlign: "center" }}>Create new player</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.field} style={{ gap: "8px" }}>
            <label className={styles.label}>
              Number
              <input
                name="number"
                type="number"
                min={0}
                max={99}
                value={form.number}
                onChange={handleInputChange}
              />
            </label>
            <label className={styles.label}>
              FirstName
              <input
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleInputChange}
              />
            </label>
            <label className={styles.label}>
              LastName
              <input
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className={styles.field} style={{ gap: "8px" }}>
            <label className={styles.label}>
              Birthdate
              <input
                name="birthDate"
                type="date"
                value={form.birthDate}
                onChange={handleInputChange}
                /* onBlur={handleBlur}*/ required
              />
              {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
            </label>
            <label className={styles.label}>
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
                <option>Both</option>
              </select>
            </label>

            <label className={styles.label}>
              At bat
              <input
                name="vb"
                type="number"
                min={0} max={5}
                onChange={handleInputChange}
                value={form.vb}
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
                  value={form.h}
                  /*onBlur={handleBlur}*/ required
                />
                {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
              </label>
              <label className={styles.label}>
                Dobles
                <input
                  name="b2"
                  type="number"
                  min={0} max={1}
                  onChange={handleInputChange}
                  value={form.b2}
                  /*onBlur={handleBlur}*/ required
                />
                {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
              </label>
              <label className={styles.label}>
                Triples
                <input
                  name="b3"
                  type="number"
                  min={0} max={1}
                  onChange={handleInputChange}
                  value={form.b3}
                  /*onBlur={handleBlur}*/ required
                />
                {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
              </label>
            </div>
          <div className={styles.field} style={{ gap: "8px" }}>
              <label className={styles.label}>
                Home Run
                <input
                  name="hr"
                  type="number"
                  min={0} max={1}
                  onChange={handleInputChange}
                  value={form.hr}
                  /*onBlur={handleBlur}*/ required
                />
                {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
              </label>
              <label className={styles.label}>
                Base per balls
                <input
                  name="bb"
                  type="number"
                  min={0} max={1}
                  onChange={handleInputChange}
                  value={form.bb}
                  /*onBlur={handleBlur}*/ required
                />
                {/* {errors.name && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '18px' }}>{errors.name}</p>} */}
              </label>
              <label className={styles.label}>
                Strike Out
                <input
                  name="k"
                  type="number"
                  min={0} max={1}
                  onChange={handleInputChange}
                  value={form.k}
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


