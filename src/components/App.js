import React from 'react';
import Search from './Search';

export default class App extends React.Component {
  state = {
    city: undefined
  };
  handleSearchCity = (city) => {
    console.log('this is city from app component', city);
    this.setState(() => ({
      city
    }));
    console.log('state', this.state.city);
  };
  render() {
    return (
      <div>
        This is my app component!
        <Search handleSearchCity={this.handleSearchCity} />
      </div>
    );
  }
} 