const argv = require("./config/yargs").argv;
const todo = require("./to-do/todo");
const colors = require("colors");
let command = argv._[0];

switch (command) {
  case "create":
    let task = todo.createTask(argv.description);
    // console.log(task);

    console.log("Crear tareas");
    break;
  case "list":
    if (argv.complete || argv.c) {
      let taskDone = todo.listTasksDone();
      console.log(taskDone);
    } else {
      let list = todo.listTasks();
      for (let task of list) {
        console.log("=========POR HACER========".green);
        console.log(task.description);
        console.log("Completado: ", task.complete);
        console.log("==========================".green);
      }
    }
    break;
  case "update":
    todo.updateTask(argv.description, argv.complete);
    console.log("Actualizar tareas");
    break;
  case "delete":
    let deleted = todo.deleteTask(argv.description);
    console.log(deleted);
    break;
  default:
    console.log("Comando no reconocido");
    break;
}
