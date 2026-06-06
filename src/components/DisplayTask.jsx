export default function DisplayTask(props){
    console.log(props.taskList)
    return (
        <div className="task_list">
            {props.taskList?.map((task)=>{
                return <h1>{task.title}</h1>
            })}
        </div>
    )
}