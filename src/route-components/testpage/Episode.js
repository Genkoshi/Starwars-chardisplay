import React from 'react';
import Radio from '../../components/Radio.js';

export default function Episode(props){
    return(
    <section>
    <div id='title' >EPISODE</div>
                <div id='top-radio'>
                    <Radio name={props.name} value='Episode I' changeFn={props.changeFn} option='I' />
                    <Radio name={props.name} value='Episode IV' changeFn={props.changeFn} option='IV'/>
                    <Radio name={props.name} value='Episode VII' changeFn={props.changeFn} option='VII'/>
                </div>
    </section>
    )
}