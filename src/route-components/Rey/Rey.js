import React, {Component} from 'react';
import '../../reset.css';
import './Rey.css';
import HomeButton from '../../components/HomeButton.js';

export default class Rey extends Component {
    render(){
        return(
            <div className='rey-main' >
                <HomeButton/>
            </div>
        )
    }
}