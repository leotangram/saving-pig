import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm'
import { updateData } from '../../services/services'

const GoalForm = ({ setGoal }) => {
  const [{ amount }, handleInputChange, reset] = useForm({
    amount: 0
  })

  const handleSubmit = async e => {
    e.preventDefault()
    updateData({ amount }, 'goal')
    setGoal(amount)
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        placeholder="Ingresa tu meta"
        autoComplete="off"
        className=""
        onChange={handleInputChange}
      />
      <button className="btn btn-outline-primary mt-1 btn-block" type="submit">
        Agregar
      </button>
    </form>
  )
}

GoalForm.propTypes = {
  setGoal: PropTypes.func.isRequired
}

export default GoalForm
