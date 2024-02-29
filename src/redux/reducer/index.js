import { GET_PLAYERS } from "../actions";

const inicialState = {
  players: [],
  numberUsed: [],
  // allGames: [],
  // tempGames: [],
  // genres: [],
  // loading: true,
  // detailId: []
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_PLAYERS:
      
      return {
        ...state,
        players: [...action.payload],
        numberUsed: action.payload.map(player => player.number),
        // allGames: [...action.payload],
        // loading: false
      };

    // case GET_DETAIL:
    //     return {
    //         ...state,
    //         detailId: action.payload
    //     }

    // case GET_GAME_X_NAME:

    //     let filterName;

    //     if (!action.payload) {
    //         filterName = state.allGames
    //     } else {
    //         filterName = action.payload// tiene los 15 name de la API Y DB
    //     }
    //     return {
    //         ...state,
    //         games: filterName
    //     }

    // case GET_GENRES:
    //     return {
    //         ...state,
    //         genres: [...action.payload],
    //     }

    // case FILTER_GENRES:
    //     let filterGameXGenres;

    //     if (action.payload === 'Select Option') {
    //         filterGameXGenres = state.tempGames
    //     } else {
    //         filterGameXGenres = state.tempGames.filter(game => game.genres.includes(action.payload))
    //     }

    //     return {
    //         ...state,
    //         games: [...filterGameXGenres],
    //     }

    // case ORDER_CARDS:

    //        let orderCards = [...state.games];

    //        orderCards.sort((a, b) => {
    //            const nameA = a.name.toUpperCase();
    //            const nameB = b.name.toUpperCase();
    //            if (nameA < nameB) {
    //                return -1;
    //            }
    //            if (nameA > nameB) {
    //                return 1;
    //            }
    //            return 0;
    //        })

    //        if (action.payload) {

    //            return {
    //                ...state,
    //                games: orderCards
    //            }
    //        }

    //        let reverse = orderCards.reverse();
    //        return {
    //            ...state,
    //            games: reverse
    //        }

    // case FILTER_ORIGIN:

    //     let filterXorigin;
    //     if (action.payload === 'Select Option') {
    //         filterXorigin = state.allGames
    //     }

    //     if (action.payload === 'Local') {
    //         filterXorigin = state.allGames.filter(game => typeof game.id === 'string')
    //     }
    //     if (action.payload === 'Api') {
    //         filterXorigin = state.allGames.filter(game => typeof game.id === 'number')
    //     }

    //     return {
    //         ...state,
    //         games: filterXorigin,
    //         tempGames: [...filterXorigin]
    //     }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
