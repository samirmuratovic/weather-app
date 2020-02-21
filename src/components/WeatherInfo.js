import React from 'react';

const WeatherInfo = (props) => (
  <div>
    <h1>City: {props.city}</h1>
    <p>Temp: {props.temp} F</p>
  </div>
);

export default WeatherInfo;