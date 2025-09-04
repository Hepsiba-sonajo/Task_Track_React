import React , {useState} from "react";


import "./TaskForm.css";
import Tag from "./Tag"

<<<<<<< HEAD
const TaskForm = ({setTasks}) => {
=======
const TaskForm = () => {
>>>>>>> a162edb7b803fe62d44ae0fa465abc20e2f3b09f
  const [taskData , setTaskData] = useState (
  {
    task : "",
    status : "ToDo",
<<<<<<< HEAD
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
=======
  }
  );

>>>>>>> a162edb7b803fe62d44ae0fa465abc20e2f3b09f
 const handleChange  = (e) => {
  const {name , value} = e.target;
    setTaskData ((prev) => {
      return{...prev, [name] : value}
    });
     }

     const handleSubmit = (e) => {
      e.preventDefault();
<<<<<<< HEAD
      console.log(taskData);
      setTasks((prev) => {
        return [...prev, taskData];
         
      });
      setTaskData({
            task: "",
            status: "todo",
            tags: [],
        });
      
=======
      // setTasks((prev) => {
      //   return [...prev, taskData];
      // })
      console.log(taskData)
>>>>>>> a162edb7b803fe62d44ae0fa465abc20e2f3b09f
     }
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
<<<<<<< HEAD
          value={taskData.task}
=======
         
>>>>>>> a162edb7b803fe62d44ae0fa465abc20e2f3b09f
          onChange={handleChange}
          className="task_input"
          placeholder="Enter your task"
        />

        <div className="task_form_bottom_line">
          <div>
<<<<<<< HEAD
            <Tag tagName = 'JavaScript' selectTag = {selectTag} selected = {checkTag("JavaScript")} />
            <Tag tagName = 'React' selectTag = {selectTag} selected = {checkTag("React")} />
            <Tag tagName = 'Node' selectTag = {selectTag} selected = {checkTag("Node")}/>
=======
            <Tag tagName = 'JavaScript'/>
            <Tag tagName = 'React'/>
            <Tag tagName = 'Node'/>
>>>>>>> a162edb7b803fe62d44ae0fa465abc20e2f3b09f
           
          </div>

          <div>
            <select onChange={handleChange} 
            name="status" 
<<<<<<< HEAD
            value={taskData.status}
            className="task_status">
              <option value="ToDo">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
=======
            
            className="task_status">
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
>>>>>>> a162edb7b803fe62d44ae0fa465abc20e2f3b09f
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
