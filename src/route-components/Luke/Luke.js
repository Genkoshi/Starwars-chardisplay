import React, {Component} from 'react';
import '../../reset.css';
import './Luke.css';
import HomeButton from '../../components/HomeButton.js';
import axios from 'axios';

export default class Luke extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            height: 0,
            hairColor: '',
            skinColor: '',
            eyeColor: '',
            birthYear: '',
            gender: '',
            homeworld: ''
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/people/1/').then((res)=>{
            let {name, height, hair_color, skin_color, eye_color, birth_year, gender, homeworld} = res.data;
            this.setState({
                name: name,
                height: height,
                hairColor: hair_color,
                skinColor: skin_color,
                eyeColor: eye_color,
                birthYear: birth_year,
                gender: gender,
                homeworld: homeworld
            })
            console.log(this.state)
        })
    }

    render(){
        return(
            <div className='luke-main' >
                <HomeButton/>
            </div>
        )
    }
}