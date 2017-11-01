import React, { Component } from 'react';
import Searchbar from './Searchbar';
import WeatherList from './WeatherList';
import './App.css';
require('dotenv').config();

export default class App extends Component {

  render() {
    return (
      <div className='weather_box'>
        <div className='weather_box1'>
          <Searchbar />
        </div>
        <div className='weather_box2'>
        <WeatherList /></div>
      </div>
    );
  }
}
