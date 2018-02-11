import React from 'react';
import {Link} from 'react-router-dom';

export default function EnterButton(props){
    return(
        <div className='enter-button' >
            <Link to={`${props.url}/${!!props.param ? props.param : '' }`}>{props.img}</Link>
        </div>
    )
}