import { useState } from 'react'
import './App.css'
import { Sidebar, AddTask, TaskList, TaskItem }from './components/index'

let value; 
function App() {
  const [tasks, setTasks] = useState([])
  const [button, setButton] = useState(1);

  function handleData(taskDetails) {
    const newTask = {...taskDetails, id: Date.now() };
    setTasks([...tasks, newTask]);
    setButton(1)

  }

  function handleHalf(txt) {
    setButton(txt)
    // console.log(txt)
  }

  function handleListItem(itemId) {
    handleHalf(3)
    tasks.map((item) => {
    if (item.id === itemId){
     value=item}
     })
  }

  function handleDelete(taskId) {
  const updatedList = tasks.filter((task) => task.id !== taskId)
  setTasks(updatedList)
  handleHalf(1)
}

  let content;

  if(button === 1) {
     content =   (<TaskList tasks={tasks} listItem={handleListItem}/>) 
  }else if(button === 2){
    content = (<AddTask onSave={handleData} exit={handleHalf}/>)
  }else if (button === 3){
   content =  (<TaskItem tasks={value} deleteItem={handleDelete}/>)
  }

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return; // Item was dropped outside of a droppable area
    }

    const updatedItems = [...items];
    const draggedItem = updatedItems[result.source.index];

    // Move the item to the new category
    draggedItem.category = getCategory(result.destination.droppableId);

    // Remove the item from the source position
    updatedItems.splice(result.source.index, 1);

    // Insert the item at the destination position
    updatedItems.splice(result.destination.index, 0, draggedItem);

    setItems(updatedItems);
  };
     

  return (
    <>
    <div className='container'>
      <div>
      <Sidebar button={handleHalf}/>
      </div>
      <div className='half2'>
        {content}
      </div>
    </div>
    </>
  )
}

export default App
