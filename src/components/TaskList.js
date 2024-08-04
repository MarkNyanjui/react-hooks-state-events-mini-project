import React, {useState} from 'react'
import Task from  "../components/Task"
import CategoryFilter from './CategoryFilter'


function TaskList({tasks, handleDelete}) {
  
  return (
    <div className="tasks">
     {tasks.map((task) => (
      <Task key={task.text} task={task} handleDelete={handleDelete}/>
     ))}
    </div>
  );
}



export default TaskList;
  
