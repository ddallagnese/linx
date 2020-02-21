import React from 'react'
import './Principal.css'
import BarraLateral from './BarraLateral'
import Hoje from './Hoje'
import Previsao from './Previsao'

export default () => 
    <div className="Principal">
        <BarraLateral />
        <Previsao />
        <Hoje />
    </div>
