import { useState } from 'react';
import './index.css'
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import DisplayTodo from './components/DisplayTodo';
function App (){

  const [TodoList , setTaskList] = useState([]);
  const [edit , setEdit] = useState({active : false , todo : null});
  
  function AddTodoItem(todo){
    setTaskList((prev) => {
      return [...prev , {
        title : todo.title,
        priority : todo.priority,
        id : Date.now(),
        isCompleted : false
      }]
    })
  }


  function removeTask(id){
    setTaskList(prev => {
      return prev.filter(todo => todo.id !== id)
    })
  }


  function updateTodo(id,newTask){
    setTaskList(prev => prev?.map(todo => todo.id === id ? {id : id , ...newTask} : todo)
    )
  }

  function markTodoAsCompleted(id){
    setTaskList(prev => prev.map(todo => (todo.id === id) ? {...todo, isCompleted : !todo.isCompleted} : todo))
  }

  return <>
    <div className="container">
        {// Header containing Application display Name.
        }
        <Header />  

        {
          // simple Input tag for adding new todo with priority using useState.
        <AddTodo AddTodoItem={AddTodoItem} setTaskList={setTaskList} updateTodo={updateTodo} edit={edit} setEdit={setEdit}/>
        }

        {
          // Container for displaying todo list.
        <DisplayTodo TodoList={TodoList} removeTask={removeTask} updateTodo={updateTodo} setEdit={setEdit} markTodoAsCompleted={markTodoAsCompleted}/> 
        }

        {
          // 
        }
        
    </div>
  </>
}

export default App ;