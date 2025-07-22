const readline = require("readline");
const AutoCompleteTrie = require("../models/AutoCompleteTrie");
const ConsoleView = require("../views/ConsoleView");

class TrieController {
  constructor() {
    this.trie = new AutoCompleteTrie();
    this.view = new ConsoleView();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  start() {
    this.view.printWelcome();
    this.rl.setPrompt("> ");
    this.rl.prompt();

    this.rl.on("line", (input) => {
      const [command, ...args] = input.trim().split(/\s+/);
      const argument = args.join(" ");

      switch (command) {
        case "add":
          // TODO: Handle 'add' command
          break;
        case "find":
          // TODO: Handle 'find' command
          break;
        case "complete":
          // TODO: Handle 'complete' command
          break;
        case "help":
          // TODO: Handle 'help' command
          break;
        case "exit":
          // TODO: Handle 'exit' command
          return;
        default:
        // TODO: Handle unknown command
      }

      this.rl.prompt();
    });
  }
}

module.exports = TrieController;
