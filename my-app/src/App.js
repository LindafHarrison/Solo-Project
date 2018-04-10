import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Eating your way through Manhattan</h1>
        </header>
        <p className="App-intro">
        Explore the city through food, one plate at a time
        <ul className="list">
          <li> Save your personal favorites </li>
          <li> Create your own lists </li>
          <li> find new discoveries </li>
        </ul>
        Bringing a community of foodies together to explore one of the most diverse cities out there.
        </p>
      </div>
    );
  }
}

export default App;
