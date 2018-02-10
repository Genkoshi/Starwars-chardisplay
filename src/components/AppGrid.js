import React, { Component } from 'react';
import Input from './Input.js';
import Button from './Button.js';
import EnterButton from './EnterButton.js'

export default class Grid extends Component {
    render() {
        return(
        <div className='wrapper-main' >
            <div ></div>
            <div className='box1'></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div >
                <EnterButton url='/TestPage' img={<img src='http://www.kidsnest.a2v.in/images/H&K%20enter%20button.png'alt='enter button'/>}/>
            </div>
            <div></div>          
        </div>
        );
    }
}