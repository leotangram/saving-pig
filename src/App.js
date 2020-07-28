import React, { useState, useEffect } from 'react'
import './App.scss'
import { getData } from './services/services'
import { GOAL, VALUES } from './constants/dataService'
import { INCOME, EXPENSES } from './constants/typeValueConstants'
import ProgressBar from './components/progress-bar/ProgressBar'
import GoalForm from './components/goal-form/GoalForm'
import ValueForm from './components/value-form/ValueForm'
import Values from './components/values/Values'

function App() {
  const [goal, setGoal] = useState(0)
  const [values, setValues] = useState([])

  useEffect(() => {
    getGoal()
    getValues()
    // eslint-disable-next-line
  }, [])

  const getGoal = async () => {
    const { amount } = await getData(GOAL)
    setGoal(Number(amount))
  }

  const getValues = async () => {
    const values = await getData(VALUES)
    setValues(values)
    totalAmount()
  }

  const totalAmount = () => {
    if (values?.length === 0) return
    const amountsIncomes = values
      .filter(({ amount, type }) => type === INCOME && amount)
      .map(value => Number(value.amount))
    const amountsExpenses = values
      .filter(({ amount, type }) => type === EXPENSES && amount)
      .map(value => Number(value.amount))
    return (
      amountsIncomes.reduce((a, b) => a + b) -
      amountsExpenses.reduce((a, b) => a + b)
    )
  }

  return (
    <div className="app">
      <h1>Barra de progreso</h1>
      <h3>Meta a alcanzar: {goal}</h3>
      <GoalForm getGoal={getGoal} />
      <ProgressBar totalAmount={totalAmount} goal={goal} />
      <ValueForm getValues={getValues} />
      <Values values={values} />
    </div>
  )
}

export default App
