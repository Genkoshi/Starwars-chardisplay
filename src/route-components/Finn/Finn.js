import React, {Component} from 'react';
import '../../reset.css';
import './Finn.css';
import HomeButton from '../../components/HomeButton.js';

export default class Finn extends Component {
    render(){
        return(
            <div className='finn-main' >
                <HomeButton/>
            </div>
        )
    }
}