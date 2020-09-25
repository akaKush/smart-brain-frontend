import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js'


const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'db79ea9b302c4aef84f4e56791c69b52'
});



const particlesOptions = {
  particles: {
    number: {
      value:30,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: ''
    }
  }
  

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, 
        this.state.input).then(
          function(response) {
            console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
          },
          function(err) {
            // there was an error
          }
      );
  }

  
  render(){
    return (
      <div className="App">
        <Particles className= 'particles'
          params={particlesOptions}
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        {<FaceRecognition imageURL={this.state.imageURL}/>}

      </div>
    );
  }
}

export default App;
