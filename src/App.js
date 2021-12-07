import Header from './components/Header'
import Tasks from './components/Tasks'
import React, { useState } from 'react'


const App = () => {
  const [tasks, setTasks] = useState (
    [
      {
        id: 1,
        text: "Rendez-vous chez le docteur",
        day: "5 Février à 14h30", 
        reminder: true, 
      },
      {
        id: 2,
        text: "Réunion à l'école",
        day: "6 Février à 13h30", 
        reminder: true, 
      },
      {
        id: 3,
        text: 'Courses',
        day: '7 Février à 15h30', 
        reminder: false, 
      }
    ]
  )

  const deleteTask = (id) => {
    console.log('deleted', id)
  }

  return (
    <div className="container">
      <Header title = { "Task Tracker" } />
      <Tasks tasks = { tasks } onDelete={deleteTask}/>
    </div>
  )
}

export default App
