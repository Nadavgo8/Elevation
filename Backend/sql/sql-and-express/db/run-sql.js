// db/run-sql.js
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const { Sequelize } = require("sequelize");

// Use the DB in your URL. No need for "USE ..." inside tables.sql.
const sequelize = new Sequelize(process.env.DB_CONNECTION, {
  dialect: "mysql",
  logging: false,
});

// Strip comments and split by ";" into individual statements
function splitSqlFile(sql) {
  // remove /* ... */ block comments
  sql = sql.replace(/\/\*[\s\S]*?\*\//g, "");
  // remove -- line comments
  sql = sql
    .replace(/\r\n/g, "\n")
    .split("\n")
    .filter((line) => !line.trim().startsWith("--"))
    .join("\n");

  // split by semicolon
  const stmts = sql
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);

  return stmts;
}

(async () => {
  const filePath = path.join(__dirname, "..", "tables.sql");
  let raw = fs.readFileSync(filePath, "utf8");

  // OPTIONAL: if your file has "USE ..." at the top, drop it —
  // we already selected the DB via the connection URL.
  raw = raw.replace(/\bUSE\b\s+[^\s;]+;?/i, "");

  const statements = splitSqlFile(raw);

  for (const stmt of statements) {
    console.log("> " + stmt.slice(0, 80) + (stmt.length > 80 ? "..." : ""));
    await sequelize.query(stmt);
  }

  console.log("Tables created ✅");
  await sequelize.close();
})().catch(async (e) => {
  console.error(e);
  process.exit(1);
});
