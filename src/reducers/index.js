import { combineReducers } from 'redux';
import allWeather from './weatherReducer';

const rootReducer = combineReducers({
  allWeather
});

export default rootReducer;
