import { useEffect, useState } from "react";
import "../index.css";

export default function AddTodo({ AddTodoItem, edit, setEdit, updateTodo }) {
  // Stores todo title
  const [todo, setTodo] = useState("");

  // Stores selected priority
  const [priority, setPriority] = useState("low");

  // Populate form fields when editing a todo
  useEffect(() => {
    if (edit.active && edit.todo) {
      setTodo(edit.todo.title || "");
      setPriority(edit.todo.priority || "low");
    }
  }, [edit]);

  // Add a new todo item
  function handleAddTodo() {
    AddTodoItem({
      title: todo,
      priority: priority,
    });

    setTodo("");
    setPriority("low");
  }

  // Update an existing todo item
  function handleUpdateTodo() {
    updateTodo(edit.todo.id, {
      title: todo,
      priority: priority,
    });

    setEdit({
      active: false,
      todo: null,
    });

    setTodo("");
    setPriority("low");
  }

  return (
    <div className="task_form">
      {/* Todo title input */}
      <input
        type="text"
        name="todo"
        placeholder="Write your important todo"
        value={todo ?? ""}
        onChange={(e) => setTodo(e.target.value)}
      />

      {/* Priority selection */}
      <select
        value={priority ?? "low"}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value={"high"}>High</option>
        <option value={"medium"}>Medium</option>
        <option value={"low"}>Low</option>
      </select>

      {/* Render add or update button based on edit mode */}
      {edit.active ? (
        <button className="add_task_btn" onClick={handleUpdateTodo}>
          Update Todo
        </button>
      ) : (
        <button className="add_task_btn" onClick={handleAddTodo}>
          Add Todo
        </button>
      )}
    </div>
  );
}
