import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const WeatherPanel = ({weather}) => {
  const imgUrl = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{weather.name}, {weather.sys.country}</h3>
      </div>
      <div className="panel-body">
        <h4>
          <img src={imgUrl} alt=""/>
          {weather.weather[0].main}
        </h4>
        <p>{weather.weather[0].description}</p>
        <Link to={'/weather/' + weather.name.toLowerCase()} className="btn btn-primary">Learn more</Link>
      </div>
    </div>
  );
};

WeatherPanel.propTypes = {
  weather: PropTypes.object.isRequired
};

export default WeatherPanel;
