import { useState } from "react";
import "./task.css";

function Task({ taskInfo, deleteTask, updateTask }) {
  const [edit, setEdit] = useState(false);
  const handleToggle = (ev) => {
    ev.preventDefault();
    console.log(taskInfo);
    updateTask(taskInfo, { isDone: !taskInfo.isDone });
  };
  const handleEdit = (ev) => {
    ev.preventDefault();
    updateTask(taskInfo, { description: ev.target.value });
  };
  const handleRemove = (ev) => {
    ev.preventDefault();
    deleteTask(taskInfo);
  };
  const handleSwapEdit = () => {
    setEdit(!edit);
  };
  return (
    <div className="task-main-container">
      <div className="task-container">
        <h3 className="task-title">{taskInfo.title}</h3>
        <div>
          <span className="task-tags">{taskInfo.tags}</span>
        </div>

        {edit ? (
          <input
            type="text"
            onChange={handleEdit}
            defaultValue={taskInfo.description}
          />
        ) : (
          <p className="task-description">{taskInfo.description}</p>
        )}
      </div>
      <div className="remove-update">
        <button className="button-edit" onClick={handleSwapEdit}>
          Edit
        </button>
        <button className="button-remove" onClick={handleRemove}>
          Delete
        </button>
      </div>
      <button
        className={taskInfo.isDone ? "task-button" : "task-done-button"}
        type="submit"
        onClick={handleToggle}
      >
        {taskInfo.isDone ? "DONE" : "TO-DO"}
      </button>
    </div>
  );
}

export default Task;
