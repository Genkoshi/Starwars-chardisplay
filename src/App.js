import React, { Component } from 'react';
import './reset.css';
import './main.css';
import AppGrid from './components/AppGrid.js';


class App extends Component {

  render() {
    return (
      <div className='main-page' >
         <AppGrid />
      </div>
    );
  }
}

export default App;
