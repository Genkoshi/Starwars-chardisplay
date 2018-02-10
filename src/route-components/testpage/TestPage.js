import React, { Component } from 'react';
import '../../reset.css';
import './TestPage.css';
import TestPageGrid from './TestPageGrid.js';
import HomeButton from '../../components/HomeButton.js';

class TestPage extends Component {
    constructor(){
      super()
  
      this.state = {
        
      }
    }
  
    render() {
      return (
        <div className='testpage-main' >
         <HomeButton />
          <TestPageGrid />
        </div>
      );
    }
  }
  
  export default TestPage;
  