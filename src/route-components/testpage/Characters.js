import React from 'react';
import Radio from '../../components/Radio.js';

export default function Characters(props){

    var episodeIV = 
    <div id='top-radio' >
        <Radio name={props.name} value='Luke' changeFn={props.changeFn} option='Luke Skywalker' />
        <Radio name={props.name} value='Leia' changeFn={props.changeFn} option='Princess Leah' />
    </div>;

    var episodeI = 
    <div id='top-radio' >
        <Radio name={props.name} value='Obi-Wan' changeFn={props.changeFn} option='Obi-Wan Kenobi' />
        <Radio name={props.name} value='Maul' changeFn={props.changeFn} option='Darth Maul' />
    </div>;

    var episodeVII =
    <div id='top-radio' >
        <Radio name={props.name} value='Finn' changeFn={props.changeFn} option='Finn' />
        <Radio name={props.name} value='Rey' changeFn={props.changeFn} option='Rey' />
    </div>;

    return(
        <section>
            <div id='title' >Characters</div>
            { props.movie==='Episode I' ? 
            episodeI : props.movie==="Episode IV" ? 
            episodeIV : props.movie==='Episode VII' ? 
            episodeVII : null }
        </section>
    )
}