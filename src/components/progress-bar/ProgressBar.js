import React from 'react'
import './ProgressBar.scss'
import Step from '../step/Step'

const ProgressBar = () => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__circle" />
      <div className="progress-bar__bar-section">
        <div className="progress-bar__bar-section__bar" />
        <Step />
      </div>
    </div>
  )
}

export default ProgressBar

// Autor cerdo <div>Iconos diseñados por <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>

// Autor Arena <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>

// Autor Tesoro <div>Iconos diseñados por <a href="https://creativemarket.com/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>
