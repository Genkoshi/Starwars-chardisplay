import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default function EnterButton(props){
    return(
        <div class='enter-button' >
            <Link to={props.url}>{props.img}</Link>
        </div>
    )
}