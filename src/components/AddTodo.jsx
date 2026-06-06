import { useEffect, useState } from 'react'
import '../index.css'

export default function AddTodo({AddTodoItem , edit , setEdit , updateTodo}){

    const [todo , setTodo] = useState("");
    const [priority , setPriority] = useState('low');

    
    useEffect(()=>{
        console.log(edit)
        if(edit.active){ // if edit is on , value will be updated
        setTodo(edit.todo.title);
        setPriority(edit.todo.priority);
    }
    },[edit])


    function handleAddTodo(){
        AddTodoItem({title : todo , priority : priority});
        setTodo("")
        setPriority("low");
    }

    function handleUpdateTodo(){
        updateTodo(edit.todo.id , {title : todo , priority : priority})
        setEdit({active : false , todo : null})
        setTodo("")
        setPriority("low");
    }

    return (
        <div className="task_form">
            <input type="text" name="todo" placeholder="Write your important todo" value={todo} onChange={(e)=> setTodo(e.target.value)}></input>

            <select value={priority} onChange={(e)=> setPriority(e.target.value)}>
                <option value={'high'}>High</option>
                <option value={'medium'}>Medium</option>
                <option value={'low'}>Low</option>
            </select>

            {edit.active ?
            <button className='add_task_btn' onClick={handleUpdateTodo}>Update todo</button>
            :
            <button className='add_task_btn' onClick={handleAddTodo}>Add todo</button>
            }
        </div>
    )

}

