class TrieNode {
  constructor(value = "") {
    this.value = value;
    this.children = {};
    this.endOfWord = false;
    this.frequency = 0;
  }
}

module.exports = TrieNode;
