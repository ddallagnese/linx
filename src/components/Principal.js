import React from 'react'
import './Principal.css'
import BarraLateral from './BarraLateral'
import Hoje from './Hoje'

export default () => 
    <div className="Principal">
        <BarraLateral />
        <h2>Seja bem vindo</h2>
        <Hoje />
    </div>
