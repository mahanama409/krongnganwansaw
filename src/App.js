import React, { Component } from 'react';
import './App.css';
import padthai from './Pad-Thai-Food-Wallpaper-HD.jpeg'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Head">
          <img className="tex black" src={padthai} width={'100%'}></img>
          <div className="tex">
            <h1 className="center">SAWATDEEKUB</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
