import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    const { fetching, people, fetchStarWarsRequest } = this.props;

    let swPeople;
    if (people.length) {
      swPeople = people.map((person, i) => <h4 key={i}>{person.name}</h4>);
    }

    return (
      <div>
        <header><h1>Redux saga</h1></header>
        {swPeople}
        <button onClick={fetchStarWarsRequest}>{!fetching ? 'Call API' : 'Getting people...'}</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    people: state.people,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStarWarsRequest: () => dispatch({ type: 'FETCH_STAR_WARS_REQUEST' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);