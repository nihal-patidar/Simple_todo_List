import { useEffect, useState } from 'react'
import './addtask.css'

export default function AddTask({addTask}){

    const [task , setTask] = useState("");
    const [priority , setPriority] = useState('low');

    function handleAddTask(){
        addTask({title : task , priority : priority});
    }

    return (
        <div className="task_form">
            <input type="text" name="task" placeholder="Write your important task" onChange={(e)=> setTask(e.target.value)}></input>

            <select onChange={(e)=> setPriority(e.target.value)}>
                <option value={'high'}>High</option>
                <option value={'med'}>Medium</option>
                <option value={'low'}>Low</option>
            </select>

            <button className='add_task_btn' onClick={handleAddTask}>Add Task</button>
        </div>
    )

}

