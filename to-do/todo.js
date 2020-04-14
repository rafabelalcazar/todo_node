const fs = require("fs");

let tasks = [];

const save2DB = () => {
  let data = JSON.stringify(tasks);
  fs.writeFile("db/data.json", data, (err) => {
    if (err) throw new Error("No se pudo guardas en data.json", err);
  });
};

const readDB = () => {
  try {
    tasks = require("../db/data.json");
  } catch (error) {
    tasks = [];
  }
  //   console.log(tasks);
  return tasks;
};

const listTasks = () => {
  return readDB();
};

const listTasksDone = () => {
  readDB();
  let tasksDone = tasks.filter((task) => task.complete == true);
  return tasksDone;
};

const createTask = (description) => {
  readDB();
  let task = {
    description,
    complete: false,
  };

  tasks.push(task);
  save2DB();
  return task;
};

const updateTask = (description, complete = true) => {
  readDB();
  let index = tasks.findIndex((task) => task.description === description);
  if (index >= 0) {
    tasks[index].complete = complete;
    save2DB();
  }
  console.log(index);
};

const deleteTask = (description) => {
  readDB();
  let newList = tasks.filter((item) => item.description !== description);
  if (newList.length == tasks.length) {
    return false;
  } else {
    tasks = newList;
    save2DB();
    return true;
  }
};

module.exports = {
  createTask,
  listTasks,
  updateTask,
  deleteTask,
  listTasksDone,
};
