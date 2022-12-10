import React from 'react';
import './WeatherCard.css';

class WeatherCard extends React.Component {

  render() {    
    const ms = this.props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('en', {weekday: 'long'});

    const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x icon-style"

    return (
      <div className="all-content">
          <h3>{weekdayName}</h3>
          <h2>{Math.round(this.props.day.main.temp)} °C</h2>
          <div >
            <p >{this.props.day.weather[0].description}</p>
          </div>
      </div>
    )
  }
}

export default WeatherCard