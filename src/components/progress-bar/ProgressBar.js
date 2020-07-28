import React from 'react'
import PropTypes from 'prop-types'
import './ProgressBar.scss'
import PigIcon from '../../assets/icons/PigIcon'
import MapIconDisabled from '../../assets/icons/MapIconDisabled'
import MapIconEnabled from '../../assets/icons/MapIconEnabled'
import SandIconDisabled from '../../assets/icons/SandIconDisabled'
import SandIconEnabled from '../../assets/icons/SandIconEnabled'
import GreatestTreasureIconDisabled from '../../assets/icons/GreatestTreasureIconDisabled'
import GreatestTreasureIconEnabled from '../../assets/icons/GreatestTreasureIconEnabled'
import Step from '../step/Step'

const ProgressBar = ({ totalAmount, goal }) => {
  const percentage = (100 * totalAmount()) / Number(goal)

  const steps = [
    {
      id: 'pig',
      step: <PigIcon size={35} />,
      value: percentage
    },
    {
      id: 'firstStep',
      step:
        percentage < 25 ? (
          <MapIconDisabled size={35} />
        ) : (
          <MapIconEnabled size={35} />
        ),
      value: 25
    },
    {
      id: 'secondStep',
      step:
        percentage < 50 ? (
          <SandIconDisabled size={35} />
        ) : (
          <SandIconEnabled size={35} />
        ),
      value: 50
    },
    {
      id: 'thirdStep',
      step:
        percentage < 75 ? (
          <GreatestTreasureIconDisabled size={35} />
        ) : (
          <GreatestTreasureIconEnabled size={35} />
        ),
      value: 75
    }
  ]

  return (
    <div className="progress-bar">
      <div className="progress-bar__circle" />
      <div className="progress-bar__bar-section">
        <div className="progress-bar__bar-section__bar" />
        {steps.map(step => (
          <Step key={step.id} {...step} />
        ))}
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  totalAmount: PropTypes.func.isRequired,
  goal: PropTypes.number.isRequired
}

export default ProgressBar

// Autor cerdo <div>Iconos diseñados por <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>

// Autor Arena <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>

// Autor Tesoro <div>Iconos diseñados por <a href="https://creativemarket.com/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>
