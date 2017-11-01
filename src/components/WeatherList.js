import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class WeatherList extends Component {

  renderWeather(data) {
    if (data.city) {
      let tableData = data.list.map((weather, i) => {
        let days = [];
        days.push(moment().add(i, 'days').format("dddd"));
          return (
            <tr key={i}>
              <td className='dow'>{days}</td>
              <td><img src={'http://openweathermap.org/img/w/' + weather.weather[0].icon +'.png'} alt='weather-icon'/>
              {weather.weather[0].main}</td>
              <td>{weather.temp.max.toFixed()}°</td>
              <td>{weather.temp.min.toFixed()}°</td>
              <td>{weather.humidity}%</td>
            </tr>
          )
        });

        return (
          <div className='main-content fade-in slidein'>
            <table>
              <thead>
                <tr>
                  <th><img src={require('../images/day.png')} alt='day-icon' /></th>
                  <th><img src={require('../images/forecast.png')} alt='forecast-icon' /></th>
                  <th><img src={require('../images/max.png')} alt='maxtemp-icon' /></th>
                  <th><img src={require('../images/min.png')} alt='mintemp-icon' /></th>
                  <th><img src={require('../images/humidity.png')} alt='humidity-icon'/></th>
                </tr>
              </thead>
              <tbody>{tableData}</tbody>
            </table>
          </div>
        )
    }

    else {
      return (
        <div >

        </div>
      )
    }
}
  renderCity(data) {
    if (data.city) {
      const name = data.city.name;
      return (
        <div>
          <h1 className='main-content fade-in'>{name}</h1>
          <h1>{data.list[0].temp.day.toFixed()}° F <img src={'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon +'.png'} alt='weather-icon'/></h1>
        </div>
      );
    }

    else {
      return <div></div>
    }
  }

	render(){
		return(
      <div>
        <div>{this.renderCity(this.props.weather)}</div>
        <div>{this.renderWeather(this.props.weather)}</div>
      </div>
		);
	}
}

function mapStateToProps(state) {
  return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);
