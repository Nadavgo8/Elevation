const express = require("express");
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;
const Ajv = require("ajv");
const ajv = new Ajv();

const postsSchema = {
  type: "object",
  properties: {
    title: { type: "string", minLength: 5, maxLength: 100 },
    content: { type: "string", minLength: 10, maxLength: 1000 },
    category: { type: "string" },
    tags: {
      type: "array",
      items: { type: "string" },
    },
  },
  required: ["title", "content", "category", "tags"],
  additionalProperties: false,
};

// const data = { foo: 1, bar: "abc" };
// // const validate = ajv.compile(postsSchema);
// // if (!validate(data)) console.log(validate.errors);
// const valid = ajv.validate(postsSchema, data);
// if (!valid) console.log(ajv.errors);

app.use(express.json()); // parsing JSON to body

// Running the server
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome!", requestCount: req.requestCount });
});

const validateSchema = (schema) => {
  const validate = ajv.compile(schema);

  return (req, res, next) => {
    const valid = validate(req.body);

    if (!valid) {
      return res.status(400).json({
        error: "Validation failed",
        details: validate.errors,
      });
    }

    next();
  };
};


app.post("/posts", validateSchema(postsSchema), (req, res) => {
  res.send("created successfully");
});

// Error Handling Middleware (always in the END)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});
