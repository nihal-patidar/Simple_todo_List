import './addtask.css'
import '../index.css'


export default function Task(props){
    return (
        <div className="task">

            <div className="left">

                <input
                    className="checkbox"
                    type="checkbox"
                />

                <div>
                    <h4>{props.task.title}</h4>
                    <span className="">
                        Priority : { props.task.priority }
                    </span>
                </div>

            </div>

            <div className="actions">
                <button className="edit" onClick={()=>props.updateTask(props.task.id)}>
                    Edit
                </button>

                <button className="delete" onClick={()=>props.removeTask(props.task.id)}>
                    Delete
                </button>
            </div>

        </div>
    )
}