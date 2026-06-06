import { useState } from 'react';
import './app.css'
import AddTask from './components/AddTask';
import Header from './components/Header';
import DisplayTask from './components/DisplayTask';
function App (){

  const [taskList , setTaskList] = useState([]);

  function addTask(task){
    setTaskList((prev) => {
      return [...prev , {
        title : task.title,
        priority : task.priority,
        id : Date.now()
      }]
    })
  }


  function removeTask(id){
    setTaskList(prev => {
      return prev.filter(task => task.id !== id)
    })
  }


  function updateTask(id,newTask){
    setTaskList(prev => prev?.map(task => task.id === id ? newTask : task)
    )
  }

  return <>
    <div className="container">
        {// Header containing Application display Name.
        }
        <Header />  

        {
          // simple Input tag for adding new task with priority using useState.
        <AddTask addTask={addTask} setTaskList={setTaskList}/>
        }

        {
          // Container for displaying task list.
        <DisplayTask taskList={taskList} removeTask={removeTask} updateTask={updateTask}/> 
        }

        {
          // 
        }
        
    </div>
  </>
}

export default App ;