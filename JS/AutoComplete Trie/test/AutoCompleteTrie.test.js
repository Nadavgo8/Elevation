// === test/AutoCompleteTrie.test.js ===
const AutoCompleteTrie = require("../models/AutoCompleteTrie");

describe("AutoCompleteTrie", () => {
  let trie;

  beforeEach(() => {
    trie = new AutoCompleteTrie();
  });

  describe("addWord", () => {
    test("adds a single word to the trie", () => {
      trie.addWord("cat");
      expect(trie.findWord("cat")).toBe(true);
    });

    test("adds multiple words with shared prefixes", () => {
      trie.addWord("car");
      trie.addWord("cart");
      expect(trie.findWord("car")).toBe(true);
      expect(trie.findWord("cart")).toBe(true);
    });

    test("increments frequency when word is added multiple times", () => {
      trie.addWord("cat");
      trie.addWord("cat");
      let node = trie._getRemainingTree("cat", trie.root);
      expect(node.frequency).toBe(2);
    });

    test("handles adding uppercase word and matches lowercase query", () => {
      trie.addWord("HELLO");
      expect(trie.findWord("hello")).toBe(true);
    });

    test("adds words with non-overlapping prefixes", () => {
      trie.addWord("apple");
      trie.addWord("banana");
      expect(trie.findWord("apple")).toBe(true);
      expect(trie.findWord("banana")).toBe(true);
    });
  });

  describe("findWord", () => {
    test("returns true for existing word", () => {
      trie.addWord("dog");
      expect(trie.findWord("dog")).toBe(true);
    });

    test("returns false for non-existent word", () => {
      expect(trie.findWord("dragon")).toBe(false);
    });

    test("returns false for partial match", () => {
      trie.addWord("cart");
      expect(trie.findWord("car")).toBe(false);
    });

    test("is case insensitive when searching", () => {
      trie.addWord("Moon");
      expect(trie.findWord("moon")).toBe(true);
    });

    test("returns false for empty trie", () => {
      expect(trie.findWord("anything")).toBe(false);
    });
  });

  describe("predictWords", () => {
    test("returns empty array when no matches", () => {
      expect(trie.predictWords("zzz")).toEqual([]);
    });

    test("returns matching words for given prefix", () => {
      trie.addWord("cat");
      trie.addWord("car");
      trie.addWord("cart");
      expect(trie.predictWords("ca")).toEqual(
        expect.arrayContaining(["cat", "car", "cart"])
      );
    });

    test("is case insensitive", () => {
      trie.addWord("Dog");
      expect(trie.findWord("dog")).toBe(true);
      expect(trie.predictWords("do")).toEqual(["dog"]);
    });

    test("returns full word if prefix matches complete word", () => {
      trie.addWord("test");
      expect(trie.predictWords("test")).toEqual(["test"]);
    });

    test("returns all valid completions in correct order if sorted manually", () => {
      trie.addWord("apple");
      trie.addWord("apricot");
      trie.addWord("application");
      const results = trie.predictWords("ap");
      expect(results).toEqual(
        expect.arrayContaining(["apple", "apricot", "application"])
      );
      expect(results.length).toBe(3);
    });
  });
});
