import React, {Component} from 'react';
import './Leia.css';
import HomeButton from '../../components/HomeButton.js';

export default class Leia extends Component {
    render(){
        return(
            <div class='leia-main' >
                <HomeButton/>
            </div>
        )
    }
}