import React from 'react'
import './TaskColumn.css'
import ToDo from '../assets/direct-hit.png'
import TaskCard from './TaskCard'


const TaskColumn = ({columnName , icon}) => {
   
  return (
     <section className='task_column'> 
     <h2 className='task_column_heading'> 
     <img  className='task_column_icon' src={icon}  alt="" /> 
     {columnName}  </h2>
     <TaskCard />
     </section>
  )
}

export default TaskColumn 