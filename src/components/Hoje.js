import React from 'react'
import './Hoje.css'
import fundo from '../imgs/cloud-background.png'
import cloud from '../imgs/cloud (2).png'
import HojeLinha from './HojeLinha'

export default () =>
    <div className="Hoje">
        <div className="superior">
            <div className="dia-cidade">
                <label className="dia">Hoje</label>
                <label className="cidade">São Paulo</label>
            </div>
            <div className="top-right-image">
                <img src={cloud} alt='cloud' />
            </div>
        </div>
        <div className="center">
            <img className="image" src={fundo} alt='fundo' />
            <div className="linha_temperatura">
                <label>28</label>
                <label className="unidade">ºC</label>
            </div>
            <div className="atual">
                <label>Scattered clouds</label>
                <label>14:03 Fev 19</label>
            </div>
        </div>
        <div className="inferior">
            <HojeLinha label="Wind" value="Gentle Breeze, 4,6 m/s, East (90)"/>
            <HojeLinha label="Cloudiness" value="Scattered clouds"/>
            <HojeLinha label="Pressure" value="1009 hpa"/>
            <HojeLinha label="Humidity" value="74%"/>
            <HojeLinha label="Sunrise" value="06:02"/>
            <HojeLinha label="Sunset" value="18:57"/>
            <HojeLinha label="Geo coords" value="[-26.92, -49.07]"/>
        </div>
    </div>
