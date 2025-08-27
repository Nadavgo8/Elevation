const express = require("express");
const app = express();
const PORT = 3000;

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


app.listen(PORT, () => {
  console.log(`Running server on http://localhost:${PORT}`);
});
