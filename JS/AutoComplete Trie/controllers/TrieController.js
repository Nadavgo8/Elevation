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
          this.trie.addWord(argument);
          console.log(`✓ Added '${argument}' to dictionary`);
          break;
        case "find":
          this.trie.findWord(argument)
            ? this.view.printFoundWord(argument)
            : this.view.printNotFound(argument);
          break;
        case "complete":
          const suggestions = this.trie.predictWords(argument);
          this.view.printSuggestions(argument, suggestions);
          break;
        case "help":
          this.view.printHelp();
          break;
        case "exit":
          console.log("Goodbye!");
          this.rl.close();
          return;
        default:
          console.log("Unknown command. Type 'help' for available commands.");
      }
      this.rl.prompt();
    });
  }
}

module.exports = TrieController;