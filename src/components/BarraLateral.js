import React from 'react'
import './BarraLateral.css'
import logo from '../imgs/logo.png'
import home from '../imgs/home.png'

export default () => 
    <div className="BarraLateral">
        <div className="Imagem">
            <img src={logo} alt='logo' />
        </div>
        <div className="Imagem">
            <img src={home} alt='home' />
        </div>
        <div>
            <h2>data</h2>
            <h2>hora</h2>
        </div>
    </div>
