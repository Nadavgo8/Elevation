const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// app.use(express.static("dist"));

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];


app.get("/", (_req, res) => {
  res.send("Server is up and running smoothly");
});

app.listen(PORT, () => {
  console.log(`Running server on http://localhost:${PORT}`);
});
