// import "./AddTodo.css";
import "../index.css";

export default function TodoItem(props) {
  return (
    <div className={`todo`}>
      <div className="left">
        <input
          className="checkbox"
          type="checkbox"
          checked={props.todo.isCompleted}
          onChange={() => props.markTodoAsCompleted(props.todo.id)}
        />

        <div>
          <h4
            style={{
              textDecoration: props.todo.isCompleted ? "line-through" : "none",
            }}
          >
            {props.todo.title}
          </h4>
          <span className={`priority ${props.todo.priority}`}>Priority : {props.todo.priority}</span>
        </div>
      </div>

      <div className="actions">
        <button
          className="edit"
          onClick={() => props.setEdit({ active: true, todo: props.todo })}
        >
          Edit
        </button>

        <button
          className="delete"
          onClick={() => props.removeTask(props.todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
