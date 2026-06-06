import { useEffect, useState } from 'react'
import './addtask.css'

export default function AddTask({addTask , edit , setEdit , updateTask}){

    const [task , setTask] = useState("");
    const [priority , setPriority] = useState('low');

    
    useEffect(()=>{
        console.log(edit)
        if(edit.active){ // if edit is on , value will be updated
        setTask(edit.task.title);
        setPriority(edit.task.priority);
    }
    },[edit])


    function handleAddTask(){
        addTask({title : task , priority : priority});
        setTask("")
        setPriority("low");
    }

    function handleUpdateTask(){
        updateTask(edit.task.id , {title : task , priority : priority})
        setEdit({active : false , task : null})
        setTask("")
        setPriority("low");
    }

    return (
        <div className="task_form">
            <input type="text" name="task" placeholder="Write your important task" value={task} onChange={(e)=> setTask(e.target.value)}></input>

            <select value={priority} onChange={(e)=> setPriority(e.target.value)}>
                <option value={'high'}>High</option>
                <option value={'med'}>Medium</option>
                <option value={'low'}>Low</option>
            </select>

            {edit.active ?
            <button className='add_task_btn' onClick={handleUpdateTask}>Update Task</button>
            :
            <button className='add_task_btn' onClick={handleAddTask}>Add Task</button>
            }
        </div>
    )

}

