import React from 'react'
import './component-styles/statitic-box.css'

const StatiticsBox = (props) =>{
    return(
        <div className="statitic-box">
        <div className="stattic-box-blur">
        <div>
            <p id="stat-title">{props.number}</p>
        </div>
        <div id="stat-heading">
            <p>{props.title}</p>
        </div>
        </div>
        </div>
    );
}

export default StatiticsBox;