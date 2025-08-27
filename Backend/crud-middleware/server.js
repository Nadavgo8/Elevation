const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
const wordCounter = { lebron: 1 };

app.get("/sanity", (req, res) => {
  res.send("Server is up and running ");
});

app.get("/:word", (req, res) => {
  let word = req.params.word;
  console.log(word);
  const count = wordCounter[word] || 0;
  res.json({ count: count });
});

app.post("/word", (req, res) => {
  const { word } = req.body || {};

  // must be a single word string
  if (typeof word !== "string" || !word.trim() || /\s/.test(word)) {
    return res.status(400).json({ error: "Provide a single word in 'word'" });
  }

  const key = word.trim().toLowerCase();
  const count = (wordCounter[key] = (wordCounter[key] || 0) + 1);

  res.json({ text: `Added ${word}`, currentCount: count });
});

// Exercise — POST /sentence
app.post("/sentence", (req, res) => {
  const { sentence } = req.body || {};
  if (typeof sentence !== "string" || !sentence.trim()) {
    return res.status(400).json({ error: "Provide a non-empty 'sentence' string" });
  }

  // normalize + tokenize (words with letters/digits/underscore or apostrophes)
  const tokens = sentence.toLowerCase().match(/[a-z]+/g) || [];

let numNewWords = 0;
let numOldWords = 0;
const seen = {}; // words we've counted for THIS sentence only

for (let i = 0; i < tokens.length; i++) {
  const w = tokens[i];
  if (seen[w]) continue; // skip duplicates in the same sentence
  seen[w] = true;
  if (w in wordCounter) numOldWords++;
  else numNewWords++;
}
  // now update counts for each occurrence
  for (const w of tokens) {
    wordCounter[w] = (wordCounter[w] || 0) + 1;
  }

  res.json({
    text: `Added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1
  });
});

app.listen(PORT, () => {
  console.log(`Running server on http://localhost:${PORT}`);
});
