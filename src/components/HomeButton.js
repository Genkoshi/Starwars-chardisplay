import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../main.css';

export default function HomeButton(){
    return(
        <div class='home-button' >
           <Link to={'/'}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png' />
            </Link> 
        </div>
        
    )
}