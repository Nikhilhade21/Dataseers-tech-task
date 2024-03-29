
import '../Style/TaskList.css'


const TaskList = ({tasks, listItem }) => { 
  return (
    <div className='list-container'>
      <div >
        <h2>Task List</h2>
      </div>
      <div
       className='cat-container'>
          <div className='con-1'>
            <h3>Added</h3>
            <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                  <button className='but-list' onClick={() => listItem(task.id)}>
                  {task.title}
                  </button>
                </li>
              ))}
            </ul> 
          </div>
          <div className='con-2'>
            <h3>Started</h3>
            <ul>
            {tasks.map((task) => 
              (<li key={task.id}>
                <button className='but-list' onClick={() => listItem(task.id)}>
                  {task.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='con-3'>
            <h3>Completed</h3>
            <ul>
            {tasks.map((task) => 
              (<li key={task.id}>
                <button className='but-list' onClick={() => listItem(task.id)}>
                  {task.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  )
}

export default TaskList
