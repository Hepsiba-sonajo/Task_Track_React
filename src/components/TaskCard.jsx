import React from "react"

import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png"

<<<<<<< HEAD
const TaskCard = ({title, tags , handleDelete, index, setActiveCard}) => {
  return (
    <article className="task_card" draggable
    onDragStart={() => setActiveCard(index)}
    onDragEnd={() => setActiveCard(null)}> 
    <p className="task-text">{title}</p>
    <div className="task_card_bottom_line"> 
    <div className="task_card_tags">
      {tags.map((tag,index) => (
        <Tag key={index} tagName={tag}  selected={true}/>
      ))}
    </div>
    <div className="task_delete" onClick={() => handleDelete(index)}>
=======
const TaskCard = () => {
  return (
    <article className="task_card"> 
    <p className="task-text">This is simple text</p>
    <div className="task_card_bottom_line"> 
    <div className="task_card_tags">
      <Tag tagName = "HTML"/>
    </div>
    <div className="task_delete">
>>>>>>> a162edb7b803fe62d44ae0fa465abc20e2f3b09f
    <img  className="delete_icon"  src={deleteIcon} alt=""/>
    </div>
    </div>
    </article>
  )
}

export default TaskCard