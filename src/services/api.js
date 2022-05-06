import axios from "axios";

const USERS_API = "http://localhost:3200/task/";

export function getAll() {
  return axios.get(USERS_API);
}

export function set(task) {
  console.log({ task });
  return axios.post(USERS_API, task);
}
export function update(task, updateData) {
  console.log(task);
  return axios.patch(USERS_API + task.id, updateData);
}
export function remove(id) {
  return axios.delete(USERS_API + id);
}
