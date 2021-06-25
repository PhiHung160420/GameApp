import {callGameAPI} from '../../api/gameAPI';
import {callGameDetailAPI} from '../../api/gameDetailAPI';
import {CHANGE_LOADING} from './loadingAction';
export const FETCH_GAME_DATA_SUCCESS = 'FETCH_GAME_DATA_SUCCESS';
export const FETCH_GAME_DETAIL_SUCCESS = 'FETCH_GAME_DETAIL_SUCCESS';
export const FETCH_GAME_DATA_FAILED = 'FETCH_GAME_DATA_FAILED';
export const FETCH_GAME_DETAIL_FAILED = 'FETCH_GAME_DETAIL_FAILED';

export const getSetGameDataSuccess = () => {
  return async dispatch => {
    try {
      const gameResult = await callGameAPI();
      dispatch({
        type: FETCH_GAME_DATA_SUCCESS,
        payload: gameResult.data,
      });
      dispatch({
        type: CHANGE_LOADING,
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSetGameDetailSuccess = id => {
  return async dispatch => {
    try {
      const response = await callGameDetailAPI(id);
      dispatch({
        type: FETCH_GAME_DETAIL_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
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
