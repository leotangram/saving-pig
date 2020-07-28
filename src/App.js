import React, { useState, useEffect } from 'react'
import './App.scss'
import { getData } from './services/services'
import { GOAL, VALUES } from './constants/dataService'
import ProgressBar from './components/progress-bar/ProgressBar'
import GoalForm from './components/goal-form/GoalForm'
import ValueForm from './components/value-form/ValueForm'
import Values from './components/values/Values'
import { usePrevious } from './hooks/usePrevious'

function App() {
  const [goal, setGoal] = useState(0)
  const [values, setValues] = useState([])
  const [value, setValue] = useState({})

  const prevGoal = usePrevious(goal)

  useEffect(() => {
    if (prevGoal !== goal) {
      getGoal()
    }
  }, [goal, prevGoal])

  useEffect(() => {
    getValues()
  }, [value])

  const getGoal = async () => {
    const { amount } = await getData(GOAL)
    setGoal(amount)
  }

  const getValues = async () => {
    const values = await getData(VALUES)
    setValues(values)
  }

  return (
    <div className="app">
      <h1>Barra de progreso</h1>
      <h3>Meta a alcanzar: {goal}</h3>
      <GoalForm setGoal={setGoal} />
      <ProgressBar />
      <ValueForm setValue={setValue} />
      <Values values={values} />
    </div>
  )
}

export default App
