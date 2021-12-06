import React from 'react';
import "./Box.css";


function Box(props) {
    const style = {
        background: (props.state) ? "rgb(5, 5, 185)" : "rgb(71, 71, 243)",
    }
    return (
        <div className='Box' style={style} onClick={props.onClick} > {props.state}</div >
    );
}

export default Box;