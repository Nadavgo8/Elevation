const express = require("express");
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;
const { logger } = require("./middlewares/logger.js");

// Middleware that runs for every route

let count = 0;
const requestCounter = (req, _res, next) => {
  count += 1;
  req.requestCount = count;
  next();
};
app.use(logger);
app.use(requestCounter);

app.use(express.json()); // parsing JSON to body
app.use(express.static("public")); // opens access to public folder


// Running the server
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});


app.get("/", (req, res) => {
  res.json({ message: "Welcome!", requestCount: req.requestCount });
});

app.get("/about", (req, res) => {
  res.json({ message: "About", requestCount: req.requestCount });
});

// Demo Route
app.get("/demo", (req, res) => {
  console.log("Headers:", req.headers);
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Query:", req.query);
  console.log("Params:", req.params);
  console.log("Body:", req.body); // Needs body parser
  res.send("Check console for request data");
});

// Error Handling Middleware (always in the END)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});
