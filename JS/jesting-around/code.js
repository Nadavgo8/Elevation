// const add = function (a, b) {
//   return a + b;
// };
// const multiply = function (a, b) {
//   return a * b;
// };



// module.exports = {add, multiply};
class ArrayManipulator {
  manipulate(arr1, arr2) {
    let obj = {};
    for (let i in arr1) {
      obj[i] = arr2[i];
    }
    return obj;
  }
}

module.exports = ArrayManipulator;
