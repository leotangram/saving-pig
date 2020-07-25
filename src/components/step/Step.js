import React from 'react'
import PropTypes from 'prop-types'
import './Step.scss'

const Step = ({ id, step, value }) => {
  return (
    <div
      className={id === 'pig' ? 'step step--principal' : 'step'}
      style={{ width: `${value}%` }}
    >
      {step}
    </div>
  )
}

Step.propTypes = {
  id: PropTypes.string.isRequired,
  step: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired
}

export default Step
