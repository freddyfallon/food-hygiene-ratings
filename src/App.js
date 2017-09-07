import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import Search from './components/search';
import Ratings from './components/ratings';


class App extends Component {

  render() {
    return (
      <div>
      <Jumbotron>
        <h1>Food Ratings Checker</h1>
        <p>A simple tool to check the food ratings for your local authority.</p>
      </Jumbotron>
      <Search />
      <Ratings />
      </div>
    );
  }
}

export default App;
