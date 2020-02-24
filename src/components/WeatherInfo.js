import React from 'react';
import sun from '../../images/sun.svg';
import cloud from '../../images/cloud.svg';
import rain from '../../images/rain.svg';
import snow from '../../images/snow.svg';

const WeatherInfo = (props) => (
  <div className="weather-info-wrapper">
    {props.city ? 
      <div>
        <div className="main-info-wrapper">
          <div className="main-info-title-wrapper">
            <h1>{props.temp}°</h1>
            <h2>{props.city}</h2>
          </div>
          <div className="main-info-icon-wrapper">
            {props.conditions.toLowerCase().includes('sun') && <img src={sun} alt="" />}
            {props.conditions.toLowerCase().includes('clear') && <img src={sun} alt="" />}
            {props.conditions.toLowerCase().includes('cloud') && <img src={cloud} alt="" />}
            {props.conditions.toLowerCase().includes('rain') && <img src={rain} alt="" />}
            {props.conditions.toLowerCase().includes('drizzle') && <img src={rain} alt="" />}
            {props.conditions.toLowerCase().includes('snow') && <img src={snow} alt="" />}
          </div>
        </div>
        <div className="secondary-info-wrapper">
          <div className="weather-item-wrapper">
            <h4>{props.precipitation} in</h4>
            <h3>Precipitation</h3>
          </div>
          <div className="weather-item-wrapper">
            <h4>{props.humidity}%</h4>
            <h3>Humidity</h3>
          </div>
          <div className="weather-item-wrapper">
            <h4>{props.visibility} mi</h4>
            <h3>Visibility</h3>
          </div>
          <div className="weather-item-wrapper">
            <h4>{props.uvIndex} of 10</h4>
            <h3>UV Index</h3>
          </div>
        </div>
      </div>
      : 
      <div>Search for a city to receive weather info</div>
    }
  </div>
);

export default WeatherInfo;