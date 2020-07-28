import React from 'react'
import PropTypes from 'prop-types'
import './Value.scss'
import { INCOME } from '../../constants/typeValueConstants'

const Value = ({ amount, type }) => {
  return <li className={type === INCOME ? 'income' : 'expenses'}>{amount}</li>
}

Value.propTypes = {
  amount: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Value
