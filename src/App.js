import React, { Component } from 'react';
import './App.css';
import padthai from './Pad-Thai-Food-Wallpaper-HD.jpeg'

function buttonStartClick() {
  alert('start!')
}

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="Head">
          {/* image*/}
          <img className="Head-Container Head-Image" src={padthai} width={'100%'}/>
          
          {/* translucent black div, to image a image darker*/}
          <div className="Head-Container Head-Overlay"></div>

          {/*Menu bar, at the top*/}
          <div className="Head-Menu Head-Container">
            <h3 className="Head-Menu-Title">
              <u>AVO</u>CADO
            </h3>
            <span className="Head-Menu-Select">Home</span>
            <span className="Head-Menu-Select">About</span>
            <span className="Head-Menu-Select">Meal</span>
            <span className="Head-Menu-Select">I NaHee</span>
            <span className="Head-Menu-Select">Contact</span>
          </div>

          {/* Main text at the center*/}
          <div className="Head-Text">
            <h1 className="center">SAWATDEEKUB</h1>
            <div className="line"/>
            <p>
              sawatdeekub tan sa ma chick chom rom khon chob hee asd asd sad
              <br />
              asd asd asd asd asd asd asd asd asd asd
            </p>
          </div>

          {/* Start button*/}
          <button className="Head-Button" onClick={buttonStartClick}>Start</button>

          {/*Black footer*/}
          <div className="Head-Footer">
            <h1 style={{width: 'min-content'}}>ABOUT <div className="line"/></h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>

        </div>


      </div>
    );
  }
}

export default App;
