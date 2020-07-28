import React, { useState, useEffect } from 'react'
import './App.scss'
import { getData } from './services/services'
import { GOAL } from './constants/dataService'
import ProgressBar from './components/progress-bar/ProgressBar'
import GoalForm from './components/goal-form/GoalForm'

function App() {
  const [goal, setGoal] = useState(0)

  useEffect(() => {
    getGoal()
  }, [goal])

  const getGoal = async () => {
    const { amount } = await getData(GOAL)
    setGoal(amount)
  }

  return (
    <div className="app">
      <h1>Barra de progreso</h1>
      <h3>Meta a alcanzar: {goal}</h3>
      <GoalForm setGoal={setGoal} />
      <ProgressBar />
    </div>
  )
}

export default App
