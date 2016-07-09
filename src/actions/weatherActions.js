import * as types from './actionTypes';
import weatherApi from '../api/weatherApi';

export function fetchAllWeatherSuccess(allWeather) {
  return { type: types.FETCH_ALL_WEATHER_SUCCESS, allWeather};
}

export function fetchAllWeather() {
  return function(dispatch) {
    return weatherApi.fetchAllWeather().then(weather => {
      dispatch(fetchAllWeatherSuccess(weather.list));
    }).catch(error => {
      throw(error);
    });
  };
}
