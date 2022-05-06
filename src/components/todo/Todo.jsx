import React from "react";
import Task from "../task/Task";
import "./todo.css";

function List({ tasks, updateTask, deleteTask }) {
  const mapTodo = tasks.map((task) => {
    if (!task.isDone)
      return (
        <Task
          key={task.id}
          taskInfo={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      );
  });
  return (
    <>
      <div className="todo-container">
        <div className="tasks-container">
          <h2 className="todo-title ">TO-DO</h2>
          <div>{mapTodo}</div>
        </div>
      </div>
    </>
  );
}

export default List;
