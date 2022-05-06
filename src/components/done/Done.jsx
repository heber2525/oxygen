// import React, { useState } from "react";
import Task from "../task/Task";

import "./done.css";
function Done({ tasks, updateTask, deleteTask }) {
  const mapDone = tasks.map((task) => {
    if (task.isDone)
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
      <div className="done-container">
        <h2 className="done-title">DONE</h2>
        <div>{mapDone}</div>
      </div>
    </>
  );
}

export default Done;
