class Exercises {
  //should return true if n is even, false otherwise
  isEven(n) {
    if (typeof n !== "number") {
      throw new Error("Input must be a number");
    }
    return n % 2 == 0 ? true : false;
  }
  //should remove at least one element from the array `arr`
  removeAtLeastOne(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array");
    }
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
  }
  //should return a clean string without these symbols: "!", "#", ".", ",", "'"
  simplify(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string");
    }
    let symbols = ["!", "#", ".", ",", "'"];
    return str
      .split("")
      .filter((c) => symbols.indexOf(c) == -1)
      .join("");
  }
  validate(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array");
    }
    const booleansArr = arr.filter((val) => typeof val === "boolean");

    if (booleansArr.length === 0) {
      return { error: "Need at least one boolean" };
    }
    const trueCount = booleansArr.filter((b) => b === true).length;
    const falseCount = booleansArr.length - trueCount;

    return trueCount > falseCount;
  }
}
module.exports = Exercises;
