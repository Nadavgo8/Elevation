const ex = require("./exercises");
let exercise = new ex();

test("returns true for even numbers", () => {
  expect(exercise.isEven(4)).toBeTruthy();
});

test("returns false for odd numbers", () => {
  expect(exercise.isEven(3)).toBeFalsy();
});
test("removes at least one element", () => {
    const arr = [1,2,3,4,5,6];
    const afterFunc = exercise.removeAtLeastOne([1, 2, 3, 4, 5, 6]);
    expect(afterFunc.length).toBeLessThan(arr.length);
});
