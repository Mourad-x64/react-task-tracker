import React, { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'




const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)

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

  const showAddForm = () => {
    setShowAddTask(!showAddTask)
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }

    setTasks([...tasks, newTask])
    setShowAddTask(false)

  }

  const deleteTask = (id) => {
    
      setTasks(tasks.filter(task => task.id !== id ))
    
  }

  const toggleReminder = (id) => {
      setTasks(
        tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder }
        : task
        )
      )
  }

  return (
    <div className="container">
      <Header title = { "Task Tracker" } showAddForm={ showAddForm } showAddTask= { showAddTask }/>
      { showAddTask && <AddTask onAdd={addTask}/> }
      { 
        tasks.length > 0 ? 
        (<Tasks tasks = { tasks } onDelete={deleteTask} onToggle={toggleReminder}/>) 
        : ("Aucune tâche à afficher") 
      }
    </div>
  )
}

export default App
