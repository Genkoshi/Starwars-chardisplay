import React from 'react';

export default function Radio(props){
    return(
        <div id='top-radio' >
            <input type='radio' name={props.name} value={props.value} onChange={props.changeFn}/> {props.option}
        </div>
    )
}