import React, { Component } from 'react';
import axios from 'axios';
import './reset.css';
import './main.css';
import AppGrid from './components/AppGrid.js';


class App extends Component {
  constructor(){
    super()

    this.state = {
      userInput: ''
    }
  }

  render() {
    return (
      <div class='main-page' >
         <AppGrid />
      </div>
    );
  }
}

export default App;
