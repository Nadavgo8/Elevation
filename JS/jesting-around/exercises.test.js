const ex = require("./exercises");
let exercise = new ex();

test("returns error for non numbers", () => {
  expect(() => exercise.isEven()).toThrow("Input must be a number");
  expect(() => exercise.isEven("")).toThrow("Input must be a number");
  expect(() => exercise.isEven("yes")).toThrow("Input must be a number");
  expect(() => exercise.isEven(true)).toThrow("Input must be a number");
});
test("returns true for even numbers", () => {
  expect(exercise.isEven(4)).toBeTruthy();
});
test("returns false for odd numbers", () => {
  expect(exercise.isEven(3)).toBeFalsy();
});
test("returns error for non array", () => {
  const arr = 14;
  expect(() => exercise.removeAtLeastOne(arr)).toThrow(
    "Input must be an array"
  );
});
test("removes at least one element", () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const afterFunc = exercise.removeAtLeastOne([1, 2, 3, 4, 5, 6]);
  expect(afterFunc.length).toBeLessThan(arr.length);
});
test("returns error for non string", () => {
  expect(() => exercise.simplify(3)).toThrow("Input must be a string");
});
test("returns a simplified string", () => {
  const str = "Hi! My #name# is, my'' name is.";
  const cleanStr = exercise.simplify(str);
  expect(cleanStr).not.toMatch(/[!#.,']/);
});
test("no boolean returns message", () => {
  const noBool = [1, 2, 3, 4, 5, "true"];
  expect(exercise.validate(noBool)).toEqual({
    error: "Need at least one boolean",
  });
});
test("returns false when true and false are equal", () => {
  const equalTF = [1, 2, true, false, 3, 4, false, 5, true];
  expect(exercise.validate(equalTF)).toBeFalsy();
});
test("returns true when more true", () => {
  const moreTrue = [true, false, false, 1, 2, 3, true, false, 4, 5, true, true];
  expect(exercise.validate(moreTrue)).toBeTruthy();
});
test("returns false when more false", () => {
  const moreFalse = [false];
  expect(exercise.validate(moreFalse)).toBeFalsy();
});
test("throws error when no parameter is passed", () => {
  expect(() => exercise.validate()).toThrow("Input must be an array");
});
