import React, { Component } from 'react';
import EnterButton from './EnterButton.js';
import axios from 'axios';

export default class Grid extends Component {
    constructor(){
        super()

        this.state = {
            name: []
        }
    }
    componentWillMount(){
        axios.post('/api/char', {name: 'Scott'}).then(res => {
            this.setState({name: res.data});
            console.log(this.state.name);
        })
    }
    
    componentDidMount(){
        axios.delete('/api/char').then(res => {
            this.setState({name: res.data});
            console.log(this.state.name);
        })
    }

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