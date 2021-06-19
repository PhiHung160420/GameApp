import mapIP from '../../utils/common';
import {
  FETCH_GAME_DATA_FAILED,
  FETCH_GAME_DATA_SUCCESS,
  FETCH_GAME_DETAIL_SUCCESS,
  FETCH_GAME_DETAIL_FAILED,
} from '../actions/gameAction';

const initalState = {
  games: [],
  gameDetail: {},
  error: null,
};

const GameReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_GAME_DATA_SUCCESS:
      return {
        ...state,
        games: mapIP(action.payload),
      };
    case FETCH_GAME_DETAIL_SUCCESS:
      return {
        ...state,
        gameDetail: mapIP(action.payload),
      };
    case FETCH_GAME_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_GAME_DETAIL_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default GameReducer;
