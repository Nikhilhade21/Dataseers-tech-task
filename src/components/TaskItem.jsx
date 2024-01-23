import React from 'react'
import '../Style/TaskItem.css';

const TaskItem = ({tasks, deleteItem}) => {
  // console.log(tasks)
  return (
    <div className='item-container' >
      <div className='head-cont'>
        <h2>{tasks.title}</h2>
        <button onClick={() => deleteItem(tasks.id)}>Delete</button>
      </div>
      <div className='desc'>
        <p>{tasks.date}</p>
        <p>{tasks.description}</p>   
      </div>
    </div>
  )
}

export default TaskItem