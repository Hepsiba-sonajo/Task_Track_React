import React from 'react'
import './TaskColumn.css'
import ToDo from '../assets/direct-hit.png'
import TaskCard from './TaskCard'
<<<<<<< HEAD
import DropArea from './DropArea'


const TaskColumn = ({columnName , icon , tasks, status, handleDelete, setActiveCard , onDrop}) => {
=======


const TaskColumn = ({columnName , icon}) => {
>>>>>>> a162edb7b803fe62d44ae0fa465abc20e2f3b09f
   
  return (
     <section className='task_column'> 
     <h2 className='task_column_heading'> 
     <img  className='task_column_icon' src={icon}  alt="" /> 
     {columnName}  </h2>
<<<<<<< HEAD
     <DropArea onDrop ={() => onDrop(status, 0)} />
     {tasks.map(
      (task, index) => task.status === status && 
      <React.Fragment key={index}>
      <TaskCard 
      title={task.task} 
      tags={task.tags}
      handleDelete={handleDelete}
       index={index}
       setActiveCard={setActiveCard}
      /> 
      <DropArea  onDrop ={() => onDrop(status, index + 1)}/>
      </React.Fragment>
      )}
=======
     <TaskCard />
>>>>>>> a162edb7b803fe62d44ae0fa465abc20e2f3b09f
     </section>
  )
}

export default TaskColumn 