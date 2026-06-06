import "../index.css";

export default function TodoItem(props) {
  return (
    <div className="todo">

      {/* Todo completion checkbox */}
      <div className="left">
        <input
          className="checkbox"
          type="checkbox"
          checked={props.todo.isCompleted}
          onChange={() => props.markTodoAsCompleted(props.todo.id)}
        />

        {/* Todo details */}
        <div>
          <h4
            style={{
              textDecoration: props.todo.isCompleted
                ? "line-through"
                : "none",
            }}
          >
            {props.todo.title}
          </h4>

          {/* Todo priority */}
          <span className={`priority ${props.todo.priority}`}>
            Priority : {props.todo.priority}
          </span>
        </div>
      </div>

      {/* Edit and delete actions */}
      <div className="actions">

        {/* Edit todo */}
        <button
          className="edit"
          onClick={() =>
            props.setEdit({
              active: true,
              todo: props.todo,
            })
          }
        >
          Edit
        </button>

        {/* Delete todo */}
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