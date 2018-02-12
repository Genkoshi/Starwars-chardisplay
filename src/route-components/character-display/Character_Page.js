import React, {Component} from 'react';
import '../../reset.css';
import './CSS/Finn.css';
import './CSS/Leia.css';
import './CSS/Maul.css';
import './CSS/Obi-Wan.css';
import './CSS/Rey.css';
import './CSS/Luke.css';
import './CSS/Default.css';
import HomeButton from '../../components/HomeButton.js';
import axios from 'axios';

export default class Character_Page extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            height: 0,
            hairColor: '',
            skinColor: '',
            eyeColor: '',
            birthYear: '',
            gender: '',
            homeworld: '',
            backIMG: 'default-main',
            statPos: 'default-stats'
        }
        this.changeBackImg = this.changeBackImg.bind(this);
        this.changeStatPos = this.changeStatPos.bind(this);
    }

    changeBackImg(name){
        switch(name){
            case 'Luke':
                this.setState({ backIMG: 'luke-main' });
                break;
            case 'Leia':
                this.setState({ backIMG: 'leia-main' });
                break;
            case 'Finn':
                this.setState({ backIMG: 'finn-main' });
                break;
            case 'Rey':
                this.setState({ backIMG: 'rey-main' });
                break;
            case 'Maul':
                this.setState({ backIMG: 'maul-main' });
                break;
            case 'Obi-Wan': 
                this.setState({ backIMG: 'obi-main' })
                break;
            default: break;
        }
    }
    changeStatPos(name){
        switch(name){
            case 'Luke':
                this.setState({ statPos: 'luke-stats' });
                break;
            case 'Leia':
                this.setState({ statPos: 'leia-stats' });
                break;
            case 'Finn':
                this.setState({ statPos: 'finn-stats' });
                break;
            case 'Rey':
                this.setState({ statPos: 'rey-stats' });
                break;
            case 'Maul':
                this.setState({ statPos: 'maul-stats' });
                break;
            case 'Obi-Wan': 
                this.setState({ statPos: 'obi-stats' });
                break;
            default: break;
        }
    }


    componentDidMount(){
        //change background image based on url param.
        this.changeBackImg(this.props.match.params.name)
        //change style of stats.
        this.changeStatPos(this.props.match.params.name)
        //search swapi for people that have url param in the name,
        //then decunstruct the values wanted and put them in state.
        
        axios.get(`https://swapi.co/api/people/?search=${this.props.match.params.name}`).then(res => {
            if(res.data.count !== 0){
            let {name, height, hair_color, skin_color, eye_color, birth_year, gender, homeworld} = res.data.results[0];
            this.setState({
                        name: name,
                        height: height,
                        hairColor: hair_color,
                        skinColor: skin_color,
                        eyeColor: eye_color,
                        birthYear: birth_year,
                        gender: gender,
                    })
                    //homeworld must be nested since it returns an endpoint
                    axios.get(`${homeworld}`).then(res => {
                                let {name} = res.data;
                                this.setState({
                                    homeworld: name
                                })
                            })
            }
        }
    )
    
 }

    render(){
        //turns state into an array[[,],[,]] filters out backIMG/statPos key and maps over it
            //ruturning a copy that puts each item in the multi-arr into a <p>.
            //Doesn't display unless homeworld is truthy.
        var stats = !!this.state.homeworld ? 
                            Object.entries(this.state)
                                    .filter(val => val[0] !== 'backIMG' && val[0] !== 'statPos')
                                    .map((val, i) =><p key={i}>{`${val[0].charAt().toUpperCase()+val[0].slice(1).replace('Color', ' Color').replace('Year', ' Year')} : ${val[1]}`}</p>) 
                            : null;


        return(
            <div className={this.state.backIMG} >
                <HomeButton/>
                <div className={this.state.statPos} >
                    {stats}   
                </div>
            </div>
        )
    }
}