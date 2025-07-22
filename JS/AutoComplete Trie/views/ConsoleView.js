class ConsoleView {
  printWelcome() {
    console.log("*** AutoComplete Trie Console ***");
    console.log("Type 'help' for commands\n");
  }

  printHelp() {
    console.log(`Commands:
  add <word>     - Add word to dictionary
  find <word>    - Check if word exists
  complete <prefix> - Get completions
  help           - Show help
  exit           - Quit program\n`);
  }

  printFoundWord(word) {
    console.log(`✓ '${word}' exists in dictionary`);
  }

  printNotFound(word) {
    console.log(`✗ '${word}' not found in dictionary`);
  }

  printSuggestions(prefix, suggestions) {
    if (suggestions.length > 0) {
      console.log(`Suggestions for '${prefix}': ${suggestions.join(", ")}`);
    } else {
      console.log(`No suggestions found for '${prefix}'`);
    }
  }
}

module.exports = ConsoleView;
