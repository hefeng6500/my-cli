const { program } = require("commander");
const inquirer = require("inquirer");

program.version("0.0.1");

program
  .command("create <app-name>")
  .description("create app")
  .action(async () => {
    let answer = await inquirer.prompt([
      {
        name: "features",
        type: "checkbox",
        message: "Check the features needed for your project",
        choices: [
          "Babel",
          "TypeScript",
          "Router",
          "Vuex",
          "CSS Pre-processors",
        ],
      },
      {
        name: "use_class_style",
        type: "confirm",
        message: "Use class-style component syntax?",
      },
    ]);
  });

program.parse(process.argv);
