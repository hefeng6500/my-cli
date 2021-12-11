const { program } = require("commander");
const inquirer = require("inquirer");
const { promisify } = require("util");
const chalk = require("chalk");
const download = promisify(require("download-git-repo"));


program.version("0.0.1");

const clone = (appName) =>
  download(
    "direct:https://github.com/hefeng6500/interview-blog#main",
    appName,
    {
      clone: true,
    },
    function (err) {
      console.log(err);
    }
  );
const log = (content, color) => console.log(chalk[color](content));

program
  .command("create <app-name>") // 命令
  .description("create app")
  .action(async (appName) => {
    await inquirer.prompt([
      {
        name: "language",
        type: "checkbox",
        message: "请选择你的语言版本?",
        choices: ["JavaScript", "TypeScript"],
      },
      {
        name: "pre_css",
        type: "checkbox",
        message: "请选择css预处理器?",
        choices: ["sass", "less"],
      },
    ]);

    clone(appName);

    log(
      `
      you can
      cd ${appName}
      yarn or npm install
      yarn dev or npm run dev
      `,
      "blue"
    );
  });

program.parse(process.argv);
