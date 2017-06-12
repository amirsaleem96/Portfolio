import React, { Component } from 'react';
//import logo from './logo.svg';
//import bg from './dark-mosaic.png';
import './App.css';

class App extends Component {
  render() {
    return (
      < Container/>
    );
  }
}

class Container extends Component {
  render(){
    return(
      <div className = "container">
        <h3>AMIR <span style = {{color: 'gold'}}>SALEEM</span></h3>
        <h1>Website Under Construction</h1>
        <p>An all-new site is coming soon</p>
        <div className = "icons-container">
          <a href = "https://twitter.com/developer_amir" target = "_blank" rel = "noopener noreferrer"><i className = "fa fa-twitter"></i></a>
          <a href = "https://www.linkedin.com/in/developer-amir/" target = "_blank" rel = "noopener noreferrer"><i className = "fa fa-linkedin"></i></a>
          <a href = "https://www.quora.com/profile/Amir-Saleem-15" target = "_blank" rel = "noopener noreferrer"><i className = "fa fa-quora"></i></a>
          <a href = "https://codepen.io/amirsaleem" target = "_blank" rel = "noopener noreferrer"><i className = "fa fa-codepen"></i></a>
          <a href = "https://github.com/amirsaleem96" rel = "noopener noreferrer"><i className = "fa fa-github"></i></a>
        </div>
      </div>
    );
  }
}

export default App;
