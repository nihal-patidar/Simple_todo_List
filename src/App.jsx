import { useState } from 'react';
import './index.css'
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItemList from './components/TodoItemList';

function App (){

  // Stores all todo items
  const [todoList , setTodoList] = useState([]);

  // Stores edit mode state and selected todo
  const [edit , setEdit] = useState({active : false , todo : null});
  
  // Add a new todo item to the list
  function AddTodoItem(todo){
    setTodoList((prev) => {
      return [{
        title : todo.title,
        priority : todo.priority,
        id : Date.now(),
        isCompleted : false
      }, ...prev]
    })
  }

  // Remove a todo item by id
  function removeTask(id){
    setTodoList(prev => {
      return prev.filter(todo => todo.id !== id)
    })
  }

  // Update an existing todo item
  function updateTodo(id,newTask){
    setTodoList(prev => prev?.map(todo => todo.id === id ? {id : id , ...newTask} : todo)
    )
  }

  // Toggle completion status of a todo item
  function markTodoAsCompleted(id){
    setTodoList(prev => prev.map(todo => (todo.id === id) ? {...todo, isCompleted : !todo.isCompleted} : todo))
  }

  return <>
    <div className="container">

        {/* Application header */}
        <Header />

        {/* Form for adding and editing todo items */}
        <AddTodo
          AddTodoItem={AddTodoItem}
          setTodoList={setTodoList}
          updateTodo={updateTodo}
          edit={edit}
          setEdit={setEdit}
        />

        {/* Displays all todo items */}
        <TodoItemList
          todoList={todoList}
          removeTask={removeTask}
          updateTodo={updateTodo}
          setEdit={setEdit}
          markTodoAsCompleted={markTodoAsCompleted}
        />

    </div>
  </>
}

export default App;