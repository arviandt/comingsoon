import React from 'react';
import Arviandt from './Arviandt.png';
import blob from './blob.png';
import triangle from './triangle.png';
import './App.css';
import Tilt from 'react-tilt';
import ParticleComponent from "./ParticleComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiltOptions: {
        reverse: true,  // reverse the tilt direction
        max: 10,     // max tilt rotation (degrees)
      }
    };
  }

  render() {
    return (
      <div className="container">
        <ParticleComponent />
        <img src={blob} className="blob" alt="blob" />
        <Tilt className="bg" options={{ reverse: true, max: 20, scale: 1 }} >
          <img src={Arviandt} className="logo" alt="Arviandt" />
        </Tilt>
        <div className="title">
          <h1>Prepare Yourself,</h1>
          <span>Our new website is on its way...</span>
        </div>
        <img src={triangle} className="triangle" alt="triangle" />
      </div>
    );
  }
}

export default App;
