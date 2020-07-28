import React from 'react'
import PropTypes from 'prop-types'
import './Values.scss'
import Value from '../value/Value'

const Values = ({ values }) => {
  return (
    <ul>
      {values?.map(value => (
        <Value key={value.id} {...value} />
      ))}
    </ul>
  )
}

Values.propTypes = {
  values: PropTypes.array.isRequired
}

export default Values
