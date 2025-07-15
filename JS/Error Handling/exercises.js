//ex1
const safeJsonParse = function (json) {
  try {
    const result = JSON.parse(json);
    return result;
  } catch (err) {
    return err.message;
  }
};

console.log(safeJsonParse('{"name": "John"}'));
// Output: { name: "John" }

console.log(safeJsonParse("invalid json"));
// Output: "Invalid JSON format"

//ex2

const fs = require("fs");
const path = require("path");

function readFileWithErrorHandling(filePath, callback) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        // File does not exist
        callback(`File not found: ${filePath}`);
      } else if (err.code === "EISDIR") {
        // Path is a directory
        callback(`Expected a file but got a directory: ${filePath}`);
      } else {
        // Other file system error
        callback(`Error reading file: ${err.message}`);
      }
    } else {
      // File read successfully
      const size = Buffer.byteLength(data);
      callback(`File read successfully. Size: ${size} bytes`);
    }
  });
}

readFileWithErrorHandling("Error Handling", (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});
readFileWithErrorHandling(
  "../Destructuring, Spread & Nullish Coalescing/Nullish",
  (result) => {
    console.log(result);
  }
);
