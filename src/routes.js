import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './components/App';
import WeatherList from './components/WeatherList';

export default (
  <Router>
    <Route exact path='/' component={App} />
  </Router>
);
