const TrieNode = require("./TrieNode");

class AutoCompleteTrie {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    // TODO: Implement addWord
  }

  findWord(word) {
    // TODO: Implement findWord
  }

  predictWords(prefix) {
    // TODO: Implement predictWords
  }

  _getRemainingTree(prefix, node) {
    // TODO: Implement _getRemainingTree
  }

  _allWordsHelper(prefix, node, allWords) {
    // TODO: Implement _allWordsHelper
  }
}

module.exports = AutoCompleteTrie;
