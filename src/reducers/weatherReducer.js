import * as types from '../actions/actionTypes';

export default function weatherReducer(state = [], action) {
  switch (action.type) {
    case types.FETCH_ALL_WEATHER_SUCCESS:
      return action.allWeather;
    default:
      return state;
  }
}
