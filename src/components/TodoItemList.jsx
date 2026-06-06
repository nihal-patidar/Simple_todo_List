import TodoItem from "./TodoItem";
import "../index.css";

export default function TodoItemList(props) {

    // Render all todo items dynamically
    return (
        <div className="task_list">

            {props.todoList?.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id} // Unique key for React list rendering
                        todo={todo}
                        removeTask={props.removeTask}
                        updateTodo={props.updateTodo}
                        setEdit={props.setEdit}
                        markTodoAsCompleted={props.markTodoAsCompleted}
                    />
                );
            })}

        </div>
    );
}