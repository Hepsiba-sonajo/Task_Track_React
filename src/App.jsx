import React from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import ToDoIcon from './assets/direct-hit.png'
import DoingIcon from './assets/glowing-star.png'
import DoneIcon from './assets/check-mark-button.png'

const App = () => {
  return (
    <div className='app'>
     <TaskForm />
      <main className='app_main'> 
     
     <TaskColumn  columnName = 'ToDo'  icon = {ToDoIcon} />
     <TaskColumn  columnName = 'Doing' icon = {DoingIcon}/>
     <TaskColumn  columnName = 'Done'  icon = {DoneIcon}/>
      </main>
    </div>
  )
}

export default App