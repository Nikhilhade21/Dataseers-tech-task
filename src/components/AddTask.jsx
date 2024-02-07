import { useRef, useState } from 'react'
import '../Style/AddTask.css'

const AddTask = ({onSave, exit}) => {
  const [error, setError] = useState(false)
  const title  = useRef()
  const  description = useRef()
  const date  = useRef()

  function handleDataSave(){
    const enteredTitle = title.current.value
    const enteredDesc = description.current.value
    const enteredDate = date.current.value
    
    if(enteredDesc.trim() === '' || enteredDate.trim() === '' ||
      enteredTitle.trim() === ''
    ){
      setError(true)
    } else {

    onSave({
      title: enteredTitle,
      description: enteredDesc,
      date: enteredDate
    })
    setError(false)
  }}
  function handleCancel(){
    exit(1)
  }

  return (
    <div className="add-task">
    <h2>Add Task</h2>
    <label>Title:</label>
    <input type="text" ref={title}/>

    <label>Description:</label>
    <textarea ref={description} />

    <label>Date:</label>
    <input type="date" ref={date} />

    <div className="button-container">
      <button className="save-button" onClick={handleDataSave}>
        Save
      </button>
      <button className="cancel-button" onClick={handleCancel}>
        Cancel
      </button>
    </div>
    <div className={error ? ('errorCss') : ('')}>
      {error ? (<p>Fill All Input Field's To Save...</p>) : (<p>{error}</p>)}

    </div>
    
  </div>
  )
}

export default AddTask
