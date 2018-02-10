import React, {Component} from 'react';
import './Finn.css';
import HomeButton from '../../components/HomeButton.js';

export default class Finn extends Component {
    render(){
        return(
            <div class='finn-main' >
                <HomeButton/>
            </div>
        )
    }
}