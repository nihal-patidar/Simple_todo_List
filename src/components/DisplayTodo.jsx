import TodoItem from "./TodoItem"
import '../index.css'

export default function DisplayTodo(props){
    console.log(props.TodoList)
    return (
        <div className="task_list">
            {props.TodoList?.map((todo)=>{
                return <TodoItem key={todo.id} todo={todo} removeTask={props.removeTask} updateTodo={props.updateTodo} setEdit={props.setEdit} markTodoAsCompleted={props.markTodoAsCompleted} />
            })}
        </div>
    )
}