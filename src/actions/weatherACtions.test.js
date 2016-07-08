import expect from 'expect';
import * as weatherActions from './weatherActions';
import * as types from './actionTypes';

describe('Weather Actions', () => {
  describe('fetchAllWeatherSuccess', () => {
    it('should create a FETCH_ALL_WEATHER_SUCCESS action', () => {
      const weather = {
        allWeather: {
          weather: [
            {
              description: 'light rain',
              icon: '10n',
              id: 500,
              main: 'Rain' }
            ]
          },
          type: 'FETCH_ALL_WEATHER_SUCCESS'
        };

      const epectedAction = {
        type: types.FETCH_ALL_WEATHER_SUCCESS,
        allWeather: weather
      };

      const action = weatherActions.fetchAllWeatherSuccess(weather);

      expect(action).toEqual(epectedAction);
    });
  });
});
