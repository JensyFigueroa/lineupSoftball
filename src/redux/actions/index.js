import axios from 'axios'

export const GET_PLAYERS = 'GET_PLAYERS'
export const ADD_SUBTITUTES = 'ADD_SUBTITUTES'
export const UPDATE_ASSISTANCE = 'UPDATE_ASSISTANCE'
export const ADD_PLAYERLINEUP = 'ADD_PLAYERLINEUP'
export const ADD_SCORE_VISITOR = 'ADD_SCORE_VISITOR'
export const ADD_SCORE_HOME = 'ADD_SCORE_HOME'
export const ACTIVE_MANAGER = 'ACTIVE_MANAGER'
export const UPDATE_PLAYERLINEUP = 'UPDATE_PLAYERLINEUP'

export const getPlayers = () => {
  return async function (dispatch) {
    // const apiData = await axios.get('http://localhost:3001/players')
    const apiData = await axios.get('https://lineupsoftball-bbdores.onrender.com/players')
    // console.log(apiData.data,'actions')
    // const players = apiData.data
    const players = apiData.data.map((player) => ({
      ...player,
      checked: false,
    }));
    dispatch({ type: GET_PLAYERS, payload: players })
  }
}

export const addSubstitutes = (substitutes) => {
  return async function (dispatch) {
    dispatch({ type: ADD_SUBTITUTES, payload: substitutes })
  }
}

export const addPlayerLineup = (playerLineup, changePlayer) => {
  // console.log(changePlayer,'actions')
  return async function (dispatch) {
    dispatch({ type: ADD_PLAYERLINEUP, payload: [playerLineup, changePlayer] })
  }
}
export const updatePlayerLineup = (playerLineup) => {
  // console.log(changePlayer,'actions')
  return async function (dispatch) {
    dispatch({ type: UPDATE_PLAYERLINEUP, payload: playerLineup })
  }
}

export const updateAssistance = (assistance) => {
  // console.log(substitutes,'actions')
  return async function (dispatch) {
    dispatch({ type: UPDATE_ASSISTANCE, payload: assistance })
  }
}

export const addScoreVisitor = (score) => {
  // console.log(score,'actions Visitor')
  return async function (dispatch) {
    dispatch({ type: ADD_SCORE_VISITOR, payload: score })
  }
}
export const addScoreHomeClub = (score) => {
  // console.log(score,'actions HomeClub')
  return async function (dispatch) {
    dispatch({ type: ADD_SCORE_HOME, payload: score })
  }
}

export const activeManager = (manager) => {
  // console.log(manager,'actions')
  return async function (dispatch) {
    dispatch({ type: ACTIVE_MANAGER, payload: manager })
  }
}

