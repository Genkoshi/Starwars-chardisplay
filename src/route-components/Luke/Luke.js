import React, {Component} from 'react';
import './Luke.css';
import HomeButton from '../../components/HomeButton.js';

export default class Luke extends Component {
    render(){
        return(
            <div class='luke-main' >
                <HomeButton/>
            </div>
        )
    }
}