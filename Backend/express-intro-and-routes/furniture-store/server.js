const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("dist"));

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

app.get("/", (req, res) => {
  res.send("Server is up and running smoothly");
});
app.get("/priceCheck/:name", (req, res) => {
  const { name } = req.params;
  const item = store.find((p) => p.name.toLowerCase() === name.toLowerCase());
  res.json({ price: item ? item.price : null });
});
app.get("/buy/:name", (req, res) => {
  const { name } = req.params;
  const item = store.find((p) => p.name.toLowerCase() === name.toLowerCase());
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  if (item.inventory <= 0) {
    return res.status(409).json({ error: "Out of stock", item });
  }
  item.inventory--;
  res.json(item);
});
app.listen(PORT, () => {
  console.log(`Running server on http://localhost:${PORT}`);
});
