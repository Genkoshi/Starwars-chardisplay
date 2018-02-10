import React, {Component} from 'react';
import '../../reset.css';
import './Leia.css';
import HomeButton from '../../components/HomeButton.js';

export default class Leia extends Component {
    render(){
        return(
            <div className='leia-main' >
                <HomeButton/>
            </div>
        )
    }
}