import React ,{useState, useEffect} from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import ToDoIcon from './assets/direct-hit.png'
import DoingIcon from './assets/glowing-star.png'
import DoneIcon from './assets/check-mark-button.png'
 
const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  const [tasks , setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);
useEffect(() => {
localStorage.setItem("tasks",JSON.stringify(tasks));
},[tasks])

  const handleDelete = (taskIndex) => {
        const newTasks = tasks.filter((task,index) => index !== taskIndex);
        setTasks(newTasks);
  }
const onDrop = (status , position) => {
  console.log ({activeCard} ,{status} ,{position})
  if(activeCard == null || activeCard === undefined) return;
 const taskToMove = tasks[activeCard];
 const updatedTasks = tasks.filter((task, index) => index !== activeCard)
updatedTasks.splice(position, 0 ,{
  ...taskToMove,
  status : status
})

setTasks(updatedTasks)

}


  return (
    <div className='app'>
     <TaskForm  setTasks ={setTasks}/>
      <main className='app_main'> 
     
     <TaskColumn  
     columnName = 'ToDo'  
     con = {ToDoIcon} 
     tasks={tasks} 
     status="ToDo"
     handleDelete={handleDelete}
     setActiveCard={setActiveCard}
      onDrop = {onDrop}/>
     <TaskColumn  
     columnName = 'Doing' 
     icon = {DoingIcon} 
     tasks={tasks} 
     status="Doing"
      handleDelete={handleDelete}
      setActiveCard={setActiveCard}
     onDrop = {onDrop}/>
     <TaskColumn  
     columnName = 'Done'  
     icon = {DoneIcon} 
     tasks={tasks} 
     status="Done"
     handleDelete={handleDelete}
     setActiveCard={setActiveCard}
     onDrop = {onDrop}/>
      </main>
      {/* <h1>Active Card- {activeCard}</h1> */}
    </div>
  )
}

export default App