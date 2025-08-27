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

app.listen(PORT, () => {
  console.log(`Running server on http://localhost:${PORT}`);
});
