import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm'
import { addData } from '../../services/services'

const GoalForm = ({ getGoal }) => {
  const [{ amount }, handleInputChange, reset] = useForm({
    amount: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    addData({ amount }, 'goal')
    getGoal()
    reset()
  }

  const disabled = amount <= 0 || amount === ''

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        placeholder="Ingresa tu meta"
        autoComplete="off"
        className=""
        onChange={handleInputChange}
        value={amount}
      />
      <button
        className="btn btn-outline-primary mt-1 btn-block"
        type="submit"
        disabled={disabled}
      >
        Agregar
      </button>
    </form>
  )
}

GoalForm.propTypes = {
  getGoal: PropTypes.func.isRequired
}

export default GoalForm
