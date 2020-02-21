import React from 'react'
import './HojeLinha.css'

export default props => 
    <div className="linha">
        <label className="label">{props.label}</label>
        <label className="value">{props.value}</label>
    </div>
