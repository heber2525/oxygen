import React, { useEffect, useState } from "react";
import Create from "./components/create/Create";
import "./App.css";
import * as api from "./services/api";
import Header from "./components/header/Header";
import Todo from "./components/todo/Todo";
import Done from "./components/done/Done";

function App() {
  const [tasks, setTasks] = useState([]);

  // const newTask = (task) => {
  //   setTasks([...tasks, task]);
  //   console.log(task);
  // };

  // const toggleDone = (id) => {
  //   const updateTask = tasks.map((task) => {
  //     console.log("Ha llegado");
  //     if (task.id === id) {
  //       return { ...task, done: !task.done };
  //     } else {
  //       return task;
  //     }
  //   });
  //   setTasks(updateTask);
  // };

  useEffect(() => {
    api.getAll().then((resp) => {
      return setTasks(resp.data);
    });
  }, []);
  function addTask(task) {
    api.set(task).then((resp) => {
      return setTasks([...tasks, resp.data]);
    });
  }
  function deleteTask(task) {
    api.remove(task.id).then((resp) => {
      return setTasks(tasks.filter((e) => e.id !== task.id));
    });
  }
  function updateTask(task, update) {
    api.update(task, update).then((resp) => {
      return setTasks(
        tasks.map((e) => (e.id === resp.data.id ? { ...e, ...update } : e))
      );
    });
  }
  console.log(tasks);

  return (
    <>
      <Header />
      <Create addTask={addTask} tasks={tasks} setTasks={setTasks} />
      <div className="main-container">
        <Todo updateTask={updateTask} deleteTask={deleteTask} tasks={tasks} />
        <Done updateTask={updateTask} deleteTask={deleteTask} tasks={tasks} />
      </div>
    </>
  );
}

export default App;
