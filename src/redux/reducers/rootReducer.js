import {combineReducers} from 'redux';
import GameReducer from './gameReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({GameReducer, loadingReducer});

export default rootReducer;
