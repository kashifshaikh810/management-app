import {combineReducers} from 'redux';
import {reducer} from './Reducers';

const RootReducer = combineReducers({reduc: reducer});

export default RootReducer;
