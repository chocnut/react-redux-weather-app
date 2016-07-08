import React, { PropTypes } from 'react';
import WeatherPanel from './WeatherPanel';

const WeatherList = ({allWeather}) => {
  return (
    <div>
      {allWeather.map( (weather) =>
        <div className="col-md-4" key={weather.id}>
          <WeatherPanel weather={weather} />
        </div>
      )}
    </div>
  );
};

WeatherList.propTypes = {
  allWeather: PropTypes.array.isRequired
};

export default WeatherList;
