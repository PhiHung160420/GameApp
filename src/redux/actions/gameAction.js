import {callGameAPI} from '../../api/gameAPI';
import {callGameDetailAPI} from '../../api/gameDetailAPI';
export const FETCH_GAME_DATA_SUCCESS = 'FETCH_GAME_DATA_SUCCESS';
export const FETCH_GAME_DETAIL_SUCCESS = 'FETCH_GAME_DETAIL_SUCCESS';
export const FETCH_GAME_DATA_FAILED = 'FETCH_GAME_DATA_FAILED';
export const FETCH_GAME_DETAIL_FAILED = 'FETCH_GAME_DETAIL_FAILED';

export const getSetGameDataSuccess = () => {
  return dispatch => {
    callGameAPI().then(res =>
      dispatch({
        type: FETCH_GAME_DATA_SUCCESS,
        payload: res.data,
      }),
    );
  };
};

export const getSetGameDetailSuccess = id => {
  return dispatch => {
    callGameDetailAPI(id).then(res =>
      dispatch({
        type: FETCH_GAME_DETAIL_SUCCESS,
        payload: res.data,
      }),
    );
  };
};

export const getSetGameDataFailed = error => {
  return {
    type: FETCH_GAME_DATA_FAILED,
    payload: error,
  };
};

export const getSetGameDetailFailed = error => {
  return {
    type: FETCH_GAME_DETAIL_FAILED,
    payload: error,
  };
};
