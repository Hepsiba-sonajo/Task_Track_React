import React from "react"

import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png"

const TaskCard = () => {
  return (
    <article className="task_card"> 
    <p className="task-text">This is simple text</p>
    <div className="task_card_bottom_line"> 
    <div className="task_card_tags">
      <Tag tagName = "HTML"/>
    </div>
    <div className="task_delete">
    <img  className="delete_icon"  src={deleteIcon} alt=""/>
    </div>
    </div>
    </article>
  )
}

export default TaskCard