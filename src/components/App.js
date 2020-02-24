import React from 'react';
import Search from './Search';
import WeatherInfo from './WeatherInfo';

export default class App extends React.Component {
  state = {
    city: undefined, 
    temp: undefined,
    conditions: undefined,
    isDayTime: undefined,
    visibility: undefined,
    humidity: undefined,
    uvIndex: undefined,
    precipitation: undefined
  };
  handleSearchCity = (city) => {
    this.setState(() => ({
      city
    }));
    this.getWeatherData(city);
  };
  getWeatherData = (city) => {
    const cityName = city;
    const API_KEY = 'saaz5KR11ILe85HhGsnXvQk8K7qt4bYc';
    let cityKey;
    const LOCATION_URL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`;

      fetch(LOCATION_URL)
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          cityKey = myJson[0].Key;
          const WEATHER_URL = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}&details=true`;
          return fetch(WEATHER_URL)
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          console.log(myJson);
          this.setState(() => ({
            city: cityName,
            temp: myJson[0].Temperature.Imperial.Value,
            conditions: myJson[0].WeatherText,
            isDayTime: myJson[0].isDayTime,
            visibility: myJson[0].Visibility.Imperial.Value,
            humidity: myJson[0].RelativeHumidity,
            uvIndex: myJson[0].UVIndex,
            precipitation: myJson[0].PrecipitationSummary.Precipitation.Imperial.Value
          }));
        })
        });
  }
  componentDidUpdate() {
    const json = JSON.stringify(this.state.city);
    localStorage.setItem('city', json);
  }
  componentDidMount() {
    // localStorage.clear();
    if (localStorage.getItem('city')) {
      const json = localStorage.getItem('city');
      const city = JSON.parse(json);
      this.getWeatherData(city);
    }
};
  render() {
    return (
      <div className="container">
        <Search handleSearchCity={this.handleSearchCity} />
        <WeatherInfo 
          city={this.state.city}
          temp={this.state.temp}
          conditions={this.state.conditions}
          isDayTime={this.state.isDayTime}
          visibility={this.state.visibility}
          humidity={this.state.humidity}
          uvIndex={this.state.uvIndex}
          precipitation={this.state.precipitation}
        />
      </div>
    );
  }
} 