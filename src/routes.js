import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import WeatherDetailPage from './components/WeatherDetailPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="weather/:countryName" component={WeatherDetailPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
