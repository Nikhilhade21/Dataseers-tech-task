import React from 'react';
import '../Style/Sidebar.css'


const Sidebar = ({button}) => {

  function handlebuton(txt) {
    button(txt)
  }

  return (
      <div className='sidebar'>
        <button className='sidebar-button' onClick={() => {handlebuton(1)}}>Task List</button>
        <button className='sidebar-button'onClick={() => {handlebuton(2)}}>Add Task</button>
        </div>
  )
}

export default Sidebar