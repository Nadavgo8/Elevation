const TrieNode = require("./TrieNode");

class AutoCompleteTrie {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let node = this.root;
    for (const char of word.toLowerCase()) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode(char);
      }
      node = node.children[char];
    }
    node.endOfWord = true;
    node.frequency += 1;
  }

  findWord(word) {
    let node = this.root;
    for (const char of word.toLowerCase()) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.endOfWord;
  }

  predictWords(prefix) {
    let node = this._getRemainingTree(prefix.toLowerCase(), this.root);
    const allWords = [];
    if (node) this._allWordsHelper(prefix.toLowerCase(), node, allWords);
    return allWords;
  }

  _getRemainingTree(prefix, node) {
    for (const char of prefix) {
      if (!node.children[char]) return null;
      node = node.children[char];
    }
    return node;
  }

  _allWordsHelper(prefix, node, allWords) {
    if (node.endOfWord) allWords.push(prefix);
    for (const child in node.children) {
      this._allWordsHelper(prefix + child, node.children[child], allWords);
    }
  }
}

module.exports = AutoCompleteTrie;
