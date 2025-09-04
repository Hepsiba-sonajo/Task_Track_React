import React , {useState} from "react";


import "./TaskForm.css";
import Tag from "./Tag"

const TaskForm = ({setTasks}) => {
  const [taskData , setTaskData] = useState (
  {
    task : "",
    status : "ToDo",
    tags : []
  }
  );
const checkTag = (tag) => {
  return taskData.tags.some(item => item == tag)
}
  const selectTag = (tag) => {
     if(taskData.tags.some(item => item == tag)){
      const filterTags = taskData.tags.filter(item => item !==tag)
      setTaskData(prev => {
        return {...prev, tags:filterTags}
      })
     } else {
      setTaskData(prev => {
        return{...prev, tags:[...prev.tags, tag]}
      })
     }
  }
console.log(taskData.tags);
 const handleChange  = (e) => {
  const {name , value} = e.target;
    setTaskData ((prev) => {
      return{...prev, [name] : value}
    });
     }

     const handleSubmit = (e) => {
      e.preventDefault();
      console.log(taskData);
      setTasks((prev) => {
        return [...prev, taskData];
         
      });
      setTaskData({
            task: "",
            status: "todo",
            tags: [],
        });
      
     }
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          onChange={handleChange}
          className="task_input"
          placeholder="Enter your task"
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag tagName = 'JavaScript' selectTag = {selectTag} selected = {checkTag("JavaScript")} />
            <Tag tagName = 'React' selectTag = {selectTag} selected = {checkTag("React")} />
            <Tag tagName = 'Node' selectTag = {selectTag} selected = {checkTag("Node")}/>
           
          </div>

          <div>
            <select onChange={handleChange} 
            name="status" 
            value={taskData.status}
            className="task_status">
              <option value="ToDo">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
