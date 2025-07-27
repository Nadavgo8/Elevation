import AutoCompleteTrie from "../models/AutoCompleteTrie.js";

const trie = new AutoCompleteTrie();

const wordInput = document.getElementById("word-input");
const addBtn = document.getElementById("add-word-btn");
const msgDiv = document.getElementById("message");
const countDiv = document.getElementById("count");
const suggestionInput = document.getElementById("suggestion-input");
const suggestionList = document.getElementById("suggestions");

let wordCount = 0;

addBtn.addEventListener("click", () => {
  const word = wordInput.value.trim().toLowerCase();
  if (!word) {
    showMessage("✗ Cannot add empty word", "error");
    return;
  }

  trie.addWord(word);
  wordCount++;
  updateCount();
  showMessage(`✓ Added '${word}' to dictionary`, "success");
  wordInput.value = "";
});

suggestionInput.addEventListener("input", () => {
  const prefix = suggestionInput.value.trim().toLowerCase();
  suggestionList.innerHTML = "";

  if (!prefix) return;

  const suggestions = trie.predictWords(prefix);
  for (const word of suggestions) {
    const li = document.createElement("li");
    li.textContent = word;
    suggestionList.appendChild(li);
  }
});

function showMessage(msg, type) {
  msgDiv.textContent = msg;
  msgDiv.className = type;
}

function updateCount() {
  countDiv.textContent = `${wordCount} Words in Dictionary`;
}


addBtn.addEventListener("click", () => {
  const word = wordInput.value.trim().toLowerCase();
  if (!word) return;
  trie.addWord(word);
  console.log(`Added: ${word}`); // Debug log
});