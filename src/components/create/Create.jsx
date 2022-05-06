import React, { useState } from "react";
import "./create.css";

const Create = ({ addTask, tasks, setTasks }) => {
  const [newTask, setNewTask] = useState({});

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
    console.log(newTask);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      ...newTask,
      isDone: false,
      date: new Date().toLocaleDateString(),
    });
    setNewTask(newTask);
  };

  return (
    <div className="create-container">
      <h2 className="create-title">CREATE</h2>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="tag-container">
          <label htmlFor="create-input">Title</label>
          <input
            className="title-input"
            type="text"
            placeholder=""
            name="title"
            onChange={handleChange}
            value={tasks.title}
          />
          <label htmlFor="create-tags">Tags</label>
          <input
            className="create-tags"
            type="text"
            name="tags"
            onChange={handleChange}
            value={tasks.tags}
          />
        </div>
        <div className="description">
          <label htmlFor="create-description">Description</label>
          <textarea
            className="create-description"
            type="text"
            name="description"
            onChange={handleChange}
            value={tasks.description}
          />
          <button className="create-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Create;
