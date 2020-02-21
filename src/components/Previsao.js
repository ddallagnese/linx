import React from 'react'
import SelecaoCidade from './SelecaoCidade'
import PrevisaoSemana from './PrevisaoSemana'
import './Previsao.css'

export default () =>
<div className="previsao">
    <SelecaoCidade />
    <PrevisaoSemana />
</div>