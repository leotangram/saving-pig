import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm'
import { addData } from '../../services/services'

const ValueForm = props => {
  const [{ amount, type }, handleInputChange, reset] = useForm({
    amount: '',
    type: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    addData({ amount, type }, 'values')
    // setGoal(amount)
    reset()
  }

  const disabled = amount <= 0 || amount === '' || type === ''

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        placeholder="Valor"
        autoComplete="off"
        className=""
        onChange={handleInputChange}
        value={amount}
      />
      <select value={type} name="type" onChange={handleInputChange}>
        <option value="">--Tipo--</option>
        <option value="income">Ingreso</option>
        <option value="expenses">Egreso</option>
      </select>
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

ValueForm.propTypes = {}

export default ValueForm
