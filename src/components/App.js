import React from 'react';
import Search from './Search';
import WeatherInfo from './WeatherInfo';

export default class App extends React.Component {
  state = {
    city: undefined, 
    temp: undefined
  };
  handleSearchCity = (city) => {
    this.setState(() => ({
      city
    }));
    this.handleUpdateWeatherInfo();
  };
  handleUpdateWeatherInfo = () => {
    // const cityName = this.state.city;
    // const API_KEY = 'saaz5KR11ILe85HhGsnXvQk8K7qt4bYc';
    // let cityKey;
    // const LOCATION_URL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`;

    // fetch(LOCATION_URL)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((myJson) => {
    //     console.log(myJson);
    //     cityKey = myJson[0].Key;
    //     const WEATHER_URL = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}&details=true`;
    //     return fetch(WEATHER_URL)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((myJson) => {
    //     console.log(myJson);
    //     this.setState(() => ({
    //       temp: myJson[0].Temperature.Imperial.Value
    //     }));
    //   })
    //   });
  }
  componentDidUpdate() {
    
  }
  componentDidMount() {
    // const cityName = 'Denver';
    // const API_KEY = 'saaz5KR11ILe85HhGsnXvQk8K7qt4bYc';
    // let cityKey;
    // const LOCATION_URL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`;
    
    // fetch(LOCATION_URL)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((myJson) => {
    //     console.log(myJson);
    //     cityKey = myJson[0].Key;
    //     const WEATHER_URL = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}&details=true`;
    //     return fetch(WEATHER_URL)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((myJson) => {
    //     console.log(myJson);
    //   })
    //   });
  };
  render() {
    return (
      <div>
        This is my app component!
        <Search handleSearchCity={this.handleSearchCity} />
        <WeatherInfo 
          city={this.state.city}
          temp={this.state.temp}
        />
      </div>
    );
  }
} 