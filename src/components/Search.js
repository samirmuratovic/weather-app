import React from 'react';

export default class Search extends React.Component {
  handleSearchCity = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim();
    this.props.handleSearchCity(city);
    e.target.elements.city.value = '';
  };
  render() {
    return (
      <div className="search">
        <form 
          className="search__form"
          onSubmit={this.handleSearchCity}
        >
          <input className="search__box" type="text" name="city" placeholder="Please enter a city name" />
          <button className="btn">Search</button>
        </form>
      </div>
    );
  }
}