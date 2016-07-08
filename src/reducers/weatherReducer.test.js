import expect from 'expect';
import weatherReducer from './weatherReducer';
import * as actions from '../actions/weatherActions';


describe('Weather Reducer', () => {
  it('should get all course', () => {

    const initialState = [
      {
        description: 'light rain'
      },
      {
        description: 'sunny'
      }
    ];

    const action = actions.fetchAllWeather();
    const newState = weatherReducer(initialState, action);
    const descriptionFirst = newState.find( d => d.description == 'light rain');
    expect(newState.length).toEqual(2);
    expect(descriptionFirst.description).toEqual('light rain');
  });
});
