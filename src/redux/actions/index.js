import axios from 'axios'

export const GET_PLAYERS = 'GET_PLAYERS'
export const ADD_SUBTITUTES = 'ADD_SUBTITUTES'
export const UPDATE_ASSISTANCE = 'UPDATE_ASSISTANCE'
export const ADD_PLAYERLINEUP = 'ADD_PLAYERLINEUP'

export const getPlayers = () => {
  return async function (dispatch) {
    // const apiData = await axios.get('http://localhost:3001/players')
    const apiData = await axios.get('https://lineupsoftball-backend-dev-htre.4.us-1.fl0.io/players')
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
  // console.log(substitutes,'actions')
  return async function (dispatch) {
    dispatch({ type: ADD_SUBTITUTES, payload: substitutes })
  }
}

export const addPlayerLineup = (playerLineup) => {
  // console.log(playerLineup,'actions')
  return async function (dispatch) {
    dispatch({ type: ADD_PLAYERLINEUP, payload: playerLineup })
  }
}

export const updateAssistance = (assistance) => {
  // console.log(substitutes,'actions')
  return async function (dispatch) {
    dispatch({ type: UPDATE_ASSISTANCE, payload: assistance })
  }
}

/* 
export const getGameName = (name) => {
  console.log(name,'action')
  return async function (dispatch) {
    // const apiData = await axios.get(`http://localhost:3001/videogames/name?name=${name}`)
    if (!name.length) {
      dispatch({ type: GET_GAME_X_NAME, payload: name })
    } else {
      const apiData = await axios.get(`https://likely-knife-production.up.railway.app/videogames/name?name=${name}`)
      const games = apiData.data;
      // console.log(games,'Actions get x name');
      dispatch({ type: GET_GAME_X_NAME, payload: games })
    }

  }
}

export const getGenres = () => {
  return async function (dispatch) {
    // const apiData = await axios.get(`http://localhost:3001/genres`)
    const apiData = await axios.get(`https://likely-knife-production.up.railway.app/genres`)
    const genres = apiData.data;
    //  console.log(genres, 'Actions');
    dispatch({ type: GET_GENRES, payload: genres })
  }
}

export const filterGenres = (status) => {
  // console.log(status,'actions');
  return {
    type: FILTER_GENRES,
    payload: status
  }
}


export const orderCards = (id) => {
  //  console.log(id,'actions');
  return {
    type: ORDER_CARDS,
    payload: id
  }
}

export const filterOrigin = (status) => {
  // console.log(id,'actions');
  return {
    type: FILTER_ORIGIN,
    payload: status
  }
}
 */