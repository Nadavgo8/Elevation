const express = require("express");
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;
const Ajv = require("ajv");
const ajv = new Ajv();
const { body, validationResult, param } = require("express-validator");

const postsData = [];
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
  postsData.push({ ...req.body, id: postsData.length + 1, comments: [] });
  res.send("created successfully");
});
app.get("/posts", (req, res) => {
  res.send(postsData);
});

const validateComment = [
  param("postId")
    .isInt({ min: 1 })
    .withMessage("postId must be a positive integer")
    .toInt()
    .bail()
    .custom(
      (id) =>
        postsData.some((p) => p.id === id) || Promise.reject("Post not found")
    ),

  body("content")
    .isString()
    .withMessage("content must be a string")
    .trim()
    .isLength({ min: 5, max: 500 })
    .withMessage("content must be between 5 and 500 characters"),

  body("email").isEmail().withMessage("Must be a valid email").normalizeEmail(),
];

app.post("/posts/:postId/comments", validateComment, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const postId = req.params.postId; // already toInt()'d by validator
  const post = postsData.find((p) => p.id === postId);
  if (!post) {
    // extra safety, though validator checks this
    return res.status(404).json({ error: "Post not found" });
  }

  const { content, email } = req.body;

  const comment = {
    id: (post.comments?.length || 0) + 1,
    content,
    email,
    createdAt: new Date().toISOString(),
  };

  if (!post.comments) post.comments = [];
  post.comments.push(comment);

  return res.status(201).json(comment); // or res.json({ postId, comment })
});

app.get("/posts/:postId/comments", (req, res) => {
  const postId = Number(req.params.postId);
  if (!Number.isInteger(postId) || postId <= 0) {
    return res.status(400).json({ error: "Invalid postId" });
  }

  const post = postsData.find((p) => p.id === postId);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.json(post.comments || []);
});


// Error Handling Middleware (always in the END)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});
