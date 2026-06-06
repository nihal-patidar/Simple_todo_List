import { useState } from 'react';
import './app.css'
import AddTask from './components/AddTask';
import Header from './components/Header';
import DisplayTask from './components/DisplayTask';
function App (){

  const [taskList , setTaskList] = useState([]);
  const [edit , setEdit] = useState({active : false , task : null});
  
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
    setTaskList(prev => prev?.map(task => task.id === id ? {id : id , ...newTask} : task)
    )
  }

  return <>
    <div className="container">
        {// Header containing Application display Name.
        }
        <Header />  

        {
          // simple Input tag for adding new task with priority using useState.
        <AddTask addTask={addTask} setTaskList={setTaskList} updateTask={updateTask} edit={edit} setEdit={setEdit}/>
        }

        {
          // Container for displaying task list.
        <DisplayTask taskList={taskList} removeTask={removeTask} updateTask={updateTask} setEdit={setEdit}/> 
        }

        {
          // 
        }
        
    </div>
  </>
}

export default App ;