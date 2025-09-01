import React , {useState} from "react";


import "./TaskForm.css";
import Tag from "./Tag"

const TaskForm = () => {
  const [taskData , setTaskData] = useState (
  {
    task : "",
    status : "ToDo",
  }
  );

 const handleChange  = (e) => {
  const {name , value} = e.target;
    setTaskData ((prev) => {
      return{...prev, [name] : value}
    });
     }

     const handleSubmit = (e) => {
      e.preventDefault();
      // setTasks((prev) => {
      //   return [...prev, taskData];
      // })
      console.log(taskData)
     }
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
         
          onChange={handleChange}
          className="task_input"
          placeholder="Enter your task"
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag tagName = 'JavaScript'/>
            <Tag tagName = 'React'/>
            <Tag tagName = 'Node'/>
           
          </div>

          <div>
            <select onChange={handleChange} 
            name="status" 
            
            className="task_status">
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
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
