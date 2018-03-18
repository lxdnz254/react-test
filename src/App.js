import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Hello from './Hello' ;
import MapContainer from "./MapContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Hello/>
          <MapContainer/>
      </div>

    );
  }
}

export default App;
