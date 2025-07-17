// const {add,multiply} = require("./code");
// // const mul = require("./code");

// test("add should return sum of a + b", () => {
//   let sum = add(1, 2);
//   expect(sum).toBe(3);
// });

// test("add should return sum of a + b", () => {
//   let prod = multiply(1, 2);
//   expect(prod).toBe(3);
// });
const AM = require("./code");
test("should convert two arrays of equal length to a single object with key-values from the arrays", () => {
  let arrayManipulator = new AM();
  let x = ["food", "item", "location"];
  let y = ["cherry", "lightbulb", "Tazmania"];

  let result = arrayManipulator.manipulate(x, y);

  expect(result).toEqual({
    food: "cherry",
    item: "lightbulb",
    location: "Tazmania",
  });
});

test("should return a message when array lengths don't match", () => {
  let arrayManipulator = new AM();
  let x = ["food", "item", "location"];
  let y = ["cherry", "lightbulb"];

  let result = arrayManipulator.manipulate(x, y);

  expect(result).toEqual({ error: "Array lengths don't match" });
});