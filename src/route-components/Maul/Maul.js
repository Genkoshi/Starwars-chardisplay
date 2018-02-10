import React, {Component} from 'react';
import './Maul.css';
import HomeButton from '../../components/HomeButton.js';

export default class Maul extends Component {
    render(){
        return(
            <div class='maul-main' >
                <HomeButton/>
            </div>
        )
    }
}