import React, {Component} from 'react';
import '../../reset.css';
import './Obi-Wan.css';
import HomeButton from '../../components/HomeButton.js';

export default class Obi extends Component {
    render(){
        return(
            <div className='obi-main' >
                <HomeButton/>
            </div>
        )
    }
}