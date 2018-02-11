import React, { Component } from 'react';
import Episode from './Episode.js'
import Characters from './Characters.js';
import EnterButon from '../../components/EnterButton.js';

export default class Grid extends Component {
    constructor(){
        super()

        this.state={
            movie: '',
            character: '',
        }
        this.changeMovie = this.changeMovie.bind(this);
        this.changeCharacter = this.changeCharacter.bind(this);
    }
    changeMovie(e){
        this.setState({
            movie: e.target.value,
        })
    }
    changeCharacter(e){
        this.setState({
            character: e.target.value
        })
    }


    render() {
        var charDisplay = !!this.state.movie ? <Characters movie={this.state.movie} name="Characters" changeFn={this.changeCharacter}/> : null;

        var subButton = !!this.state.character ? <EnterButon param={this.state.character} url={`/Character`} img={<img src='http://www.freepngimg.com/thumb/submit_button/25387-5-submit-button-clipart-thumb.png' alt='Submit Button'/>} /> : null;


        return(
        <div className='wrapper-testpage' >
            <div ></div>
            <div id='episode-box' >
                <Episode name="Movie" changeFn={this.changeMovie}/>
            </div>
            <div></div>
            <div></div>
            <div>
                { charDisplay }
            </div>
            <div></div>
            <div ></div>
            <div id='charSubmit' >
                { subButton }
            </div>
            <div></div>          
        </div>
        );
    }
}