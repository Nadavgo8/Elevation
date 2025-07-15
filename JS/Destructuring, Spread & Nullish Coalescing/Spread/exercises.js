const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// The properties `a` and `b` are assigned to properties of `numbers`
console.log(numbers);

//Factory

let meatArr = ["beef", "chicken"];
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];
meatArr = [...meatArr, vegetableArr[0]];
vegetableArr = vegetableArr.slice(1); // or vegetableArr = [...vegetableArr.slice(1)];


console.log(meatArr);      // ["beef", "chicken", "rabbit"]
console.log(vegetableArr); // ["carrots", "potatoes", "lettuce"]

//Torn passport
var firstPiece = { id: 101, name: "Ofri" };

var secondPiece = { country: "Israel" };
 
let passport = {...firstPiece, ...secondPiece}
console.log(passport)