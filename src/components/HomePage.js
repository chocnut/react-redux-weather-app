import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from '../actions/weatherActions';
import { bindActionCreators } from 'redux';
import WeatherList from './WeatherList';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {allWeather} = this.props;

    return (
      <div>
        <div className="container">
          <h1>Weather List By City</h1>
          <WeatherList allWeather={allWeather} />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  allWeather: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    allWeather: state.allWeather
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(weatherActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
