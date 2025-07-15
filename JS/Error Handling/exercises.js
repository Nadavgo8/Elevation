const safeJsonParse = function(json){
    try {
      const result = JSON.parse(json);
      return result;
    } catch (err) {
        return err.message;
    }
}


console.log(safeJsonParse('{"name": "John"}'));
// Output: { name: "John" }

console.log(safeJsonParse("invalid json"));
// Output: "Invalid JSON format"
