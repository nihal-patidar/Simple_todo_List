import Task from "./Task"

export default function DisplayTask(props){
    console.log(props.taskList)
    return (
        <div className="task_list">
            {props.taskList?.map((task)=>{
                return <Task key={task.id} task={task} removeTask={props.removeTask} updateTask={props.updateTask} setEdit={props.setEdit}/>
            })}
        </div>
    )
}