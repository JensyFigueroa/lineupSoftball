import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./RegisterDataPlayer.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { addOut, lastOutId, updatePlayersLineup } from "../../redux/actions";

// import { loginUser } from "../../redux/actions/index.js";
// import toast, { Toaster } from "react-hot-toast";

const RegisterDataPlayer = ({ show, handleClose, player }) => {
  const playersLineup = useSelector((state) => state.playersLineup);
  const totalOuts = useSelector((state) => state.totalOuts);
  const lastOut = useSelector((state) => state.lastOut);
  const dispatch = useDispatch();

  const [showModalUser, setShowModalUser] = useState(false);
  // const dispatch = useDispatch();
  // const userName = useSelector((state) => state.currentUserNameLoggedIn);

  const hideFormUser = (bool) => {};
  // const [currentData, setCurrentData] = useState();
  const [dataGamePlayer, setDataGamePlayer] = useState({
    vb: 0,
    h: 0,
    b2: 0,
    b3: 0,
    hr: 0,
    bb: 0,
    k: 0,
    avg: 0,
  });

  const updateData = {
    vb: player.vb + dataGamePlayer.vb,
    h: player.h + dataGamePlayer.h,
    b2: player.b2 + dataGamePlayer.b2,
    b3: player.b3 + dataGamePlayer.b3,
    hr: player.hr + dataGamePlayer.hr,
    bb: player.bb + dataGamePlayer.bb,
    k: player.k + dataGamePlayer.k,
    avg:
      dataGamePlayer.bb === 1
        ? player.avg
        : player.vb + dataGamePlayer.vb > 0
        ? ((player.h +
            dataGamePlayer.h +
            player.b2 +
            dataGamePlayer.b2 +
            player.b3 +
            dataGamePlayer.b3 +
            player.hr +
            dataGamePlayer.hr) /
            (player.vb +
              dataGamePlayer.vb)) /* - (player.bb + dataGamePlayer.bb) */ *
          1000
        : 0,
  };

  // let playersLineup = useSelector((state) => state.playersLineup);

  const handleDataGamePlayer = (e) => {
    const { id, name, checked } = e.currentTarget;

    // console.log(id, name, checked)

    if (name === "_id") {
      setDataGamePlayer({ ...dataGamePlayer, [name]: id });
    
    } else {
      const updatedDataGamePlayer = {
        ...dataGamePlayer,
        vb: 0,
        h: 0,
        b2: 0,
        b3: 0,
        hr: 0,
        bb: 0,
        kk: 0,
      };

      // Establece el valor del radio button seleccionado
      updatedDataGamePlayer[name] = checked ? 1 : 0;
      
      // Actualiza el estado
      setDataGamePlayer(updatedDataGamePlayer);
      setDataGamePlayer({ ...updatedDataGamePlayer, vb: 1 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(dataGamePlayer);
    if (dataGamePlayer.h === 1 || dataGamePlayer.b2 === 1 || dataGamePlayer.b3 === 1 || dataGamePlayer.hr === 1 || dataGamePlayer.bb === 1) {
     const newPlayerLineup = playersLineup.map((player2) => {  
       if (player._id === player2._id) {    
           return {
            ...player2, 
            atBats : player2.atBats === undefined ? 1 : player2.atBats + 1,
            timelyAtBats : player2.timelyAtBats === undefined ? 1 : player2.timelyAtBats + 1
          };
       }else{
        return player2
       }
      })
      
      dispatch(updatePlayersLineup(newPlayerLineup))
    }

    if (dataGamePlayer.k === 1 || dataGamePlayer.out === 1){
      const newPlayerLineup = playersLineup.map((player2) => {  
        if (player._id === player2._id) {  

          if(totalOuts < 3){
            dispatch(addOut(totalOuts + 1))
            return {
              ...player2,
              atBats : player2.atBats === undefined ? 1 : player2.atBats + 1,
              timelyAtBats : player2.timelyAtBats === undefined ? 0 : player2.timelyAtBats,
            };
           
             
          }else{
            dispatch(addOut(totalOuts + 1))
            //Clean lastOut
            const newPlayerLineup = playersLineup.map((player2) => {
              if (player2._id === lastOut) {  
                delete player2.lastOut
              }
            })
            dispatch(updatePlayersLineup(newPlayerLineup))
            dispatch(lastOutId(player2._id))
            dispatch(addOut(1))
            
            return {
              ...player2,
              atBats : player2.atBats === undefined ? 1 : player2.atBats + 1,
              timelyAtBats : player2.timelyAtBats === undefined ? 0 : player2.timelyAtBats,
              lastOut: true
            };
          }
         
        }else{
          return player2
        }
     } )
    dispatch(updatePlayersLineup(newPlayerLineup))
  }
  
  //update AVG in dataBase MongoDB
  axios.put(`https://lineupsoftball-bbdores.onrender.com/players/${player._id}`, updateData)
    // axios.put(`http://localhost:3001/players/${player._id}`, updateData)
    // console.log(updateData);
  
 
    setDataGamePlayer({
      _id: "",
      vb: 0,
      h: 0,
      b2: 0,
      b3: 0,
      hr: 0,
      bb: 0,
      k: 0,
      avg: 0,
    });
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
        onClick={(e) => {
          handleDataGamePlayer(e);
          setShowModalUser(true);
          // setUpdateData(player)
        }}
      >
        {player.firstName + " " + player.lastName} {player.atBats && `(${player.atBats}- ${player.timelyAtBats})`}
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
          <h2>{player.firstName + " " + player.lastName}</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label>
                Hit:
                <input
                  type="radio"
                  name="h"
                  value={dataGamePlayer.h}
                  checked={dataGamePlayer.h === 1}
                  onChange={handleDataGamePlayer}
                />
              </label>
              <label>
                2B:
                <input
                  type="radio"
                  name="b2"
                  value={dataGamePlayer.b2}
                  checked={dataGamePlayer.b2 === 1}
                  onChange={handleDataGamePlayer}
                />
              </label>
              <label>
                3B:
                <input
                  type="radio"
                  name="b3"
                  value={dataGamePlayer.b3}
                  checked={dataGamePlayer.b3 === 1}
                  onChange={handleDataGamePlayer}
                />
              </label>
              <label>
                HR:
                <input
                  type="radio"
                  name="hr"
                  value={dataGamePlayer.hr}
                  checked={dataGamePlayer.hr === 1}
                  onChange={handleDataGamePlayer}
                />
              </label>
              <label>
                BB:
                <input
                  type="radio"
                  name="bb"
                  value={dataGamePlayer.bb}
                  checked={dataGamePlayer.bb === 1}
                  onChange={handleDataGamePlayer}
                />
              </label>
              <label>
                K:
                <input
                  type="radio"
                  name="k"
                  value={dataGamePlayer.k}
                  checked={dataGamePlayer.k === 1}
                  onChange={handleDataGamePlayer}
                />
              </label>
              <label>
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
            <Button className={styles.btnLogin} variant="primary" type="submit">
              Add
            </Button>
          </form>

          {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterDataPlayer;
