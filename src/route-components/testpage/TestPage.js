import React, { Component } from 'react';
import axios from 'axios';
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
        <div class='testpage-main' >
         <HomeButton />
          <TestPageGrid />
        </div>
      );
    }
  }
  
  export default TestPage;
  