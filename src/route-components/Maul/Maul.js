import React, {Component} from 'react';
import '../../reset.css';
import './Maul.css';
import HomeButton from '../../components/HomeButton.js';

export default class Maul extends Component {
    render(){
        return(
            <div className='maul-main' >
                <HomeButton/>
            </div>
        )
    }
}