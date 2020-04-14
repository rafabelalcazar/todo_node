const opts = {
  description: {
    alias: "d",
    describe: "Descripción de una tarea",
    demandOption: true,
  },
  complete: {
    alias: "c",
    describe: "Fijar una tarea como realizada",
    default: true,
  },
};

const argv = require("yargs")
  .command("create", "Crea una nueva tarea", { description: opts.description })
  .command("list", "Lista todas las tareas")
  .command("update", "Actualiza todas las tareas", opts)
  .command("delete", "Elimina una tarea", { description: opts.description })
  .help().argv;

module.exports = {
  argv,
};
