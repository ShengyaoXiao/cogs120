import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Routes from './Routes';

class App extends Component {
  render() {
    console.log("here");
    return (
      <div>
        <header className="App-header">
          <Routes />
        </header>
      </div>
    );
  }
}

export default App;
