import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../actions/weatherActions';
import capitalize from '../helpers/index';
import { Link } from 'react-router';
import moment from 'moment';

class WeatherDetailPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const imgUrl = `http://openweathermap.org/img/w/${this.props.country.weather[0].icon}.png`;
    const sunrise = moment(this.props.country.sys.sunrise).format('h:mm:ss A');
    const sunset = moment(this.props.country.sys.sunset).format('h:mm:ss A');

    return (
      <div>
        <h2>{this.props.country.name}, {this.props.country.sys.country}</h2>
        <div className="panel panel-primary">
          <div className="panel-heading"><h3 className="panel-title">Details</h3> </div>
          <div className="panel-body">
            <h3>Weather: <img src={imgUrl} alt=""/> {this.props.country.weather[0].main}, {this.props.country.weather[0].description}</h3>
            <ul className="list-group">
              <li className="list-group-item">Humidity: {this.props.country.main.humidity}%</li>
              <li className="list-group-item">Pressure: {this.props.country.main.pressure} hpa</li>
              <li className="list-group-item">Sunrise: {sunrise}</li>
              <li className="list-group-item">Sunset: {sunset}</li>
            </ul>
          </div>
        </div>
        <Link to="/" className="btn btn-primary">Back</Link>
      </div>
    );
  }
}

WeatherDetailPage.propTypes = {
  country: PropTypes.object.isRequired
};

function getWeatherByCountry(countries, countryName) {
  const country = countries.filter(country => country.name === capitalize(countryName));
  if (country) return country[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const countryName = ownProps.params.countryName;
  let country = [];

  if (countryName && state.allWeather.length > 0) {
    country = getWeatherByCountry(state.allWeather, countryName);
  }

  return {
    country: country
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(weatherActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetailPage);
