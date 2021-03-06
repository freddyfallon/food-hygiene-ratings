import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Search from './containers/search';
import Ratings from './containers/ratings';


class App extends Component {

  render() {
    return (
      <div>
      <Jumbotron>
        <h1>Food Hygiene Ratings</h1>
        <p>A simple tool to check the food ratings for your local authority.</p>
      </Jumbotron>
      <Search />
      <Ratings />
      </div>
    );
  }
}

export default App;
