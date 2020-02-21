import React from 'react';

export default class Search extends React.Component {
  handleSearchCity = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim();
    this.props.handleSearchCity(city);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSearchCity}>
          <input type="text" name="city" />
          <button>Search</button>
        </form>
      </div>
    );
  }
}