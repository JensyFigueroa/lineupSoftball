import {
  ADD_SUBTITUTES,
  GET_PLAYERS,
  UPDATE_ASSISTANCE,
  ADD_PLAYERLINEUP,
  ACTIVE_MANAGER,
  ADD_SCORE_HOME,
  ADD_SCORE_VISITOR,
  UPDATE_PLAYERLINEUP,
  TOTAL_OUT,
  LAST_OUT
} from "../actions";

const inicialState = {
  players: [],
  assistancePlayers: [],
  numberUsed: [],
  substitutes: [],
  playersLineup: [],
  statechangePlayer: false,
  totalOuts: 0,
  lastOut:'',
  scoresVisitor: new Array(9).fill(''),
  scoresHomeClub: new Array(9).fill(''),
  activeManager: "",
  // loading: true,
  // detailId: []
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_PLAYERS:
      return {
        ...state,
        players: [...action.payload],
        numberUsed: action.payload.map((player) => player.number),
        // loading: false
      };

    case ADD_SUBTITUTES:
      return {
        ...state,
        substitutes: action.payload,
      };

    case UPDATE_ASSISTANCE:
      return {
        ...state,
        assistancePlayers: [...action.payload],
      };

    case ADD_PLAYERLINEUP:
      return {
        ...state,
        playersLineup: action.payload[0],
        statechangePlayer: action.payload[1],
      };

    case UPDATE_PLAYERLINEUP:
      return {
        ...state,
        playersLineup: action.payload,
      };

    case TOTAL_OUT:
      return{
        ...state,
        totalOuts: action.payload
      }
    case LAST_OUT:
      return{
        ...state,
        lastOut: action.payload
      }

    case ADD_SCORE_VISITOR:
      return {
        ...state,
        scoresVisitor: action.payload,
      };

    case ADD_SCORE_HOME:
      return {
        ...state,
        scoresHomeClub: action.payload,
      };

    case ACTIVE_MANAGER:
      return {
        ...state,
        activeManager: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
