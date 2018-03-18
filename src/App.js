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
          <h1 className="App-title">Aria Orienteering</h1>
        </header>
          <div className="container-fluid">
              <div className="row">
                <Hello className="col-xs-3"/>
                  <MapContainer className="col-xs-9"/>
            </div>
          </div>
      </div>

    );
  }
}

export default App;
