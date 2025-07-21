const { Node, BSNode } = require("./Node.js");
const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];

let bSTree = new BSNode();

letters.forEach((l) => bSTree.insertNode(l));

// console.log(bSTree.findNode("H")); // true
// console.log(bSTree.findNode("G")); // true
// console.log(bSTree.findNode("Z")); // false
// console.log(bSTree.findNode("F")); // false
// console.log(bSTree.findNode("y")); // false (case-sensitive)

console.log(`findCommonParent("B", "I") => ${bSTree.findCommonParent("B", "I")}`); // "H"
console.log(`findCommonParent("B", "G") => ${bSTree.findCommonParent("B", "G")}`); // "E"
console.log(`findCommonParent("B", "L") => ${bSTree.findCommonParent("B", "L")}`); // "J"
console.log(`findCommonParent("L", "Y") => ${bSTree.findCommonParent("L", "Y")}`); // "R"
console.log(`findCommonParent("E", "H") => ${bSTree.findCommonParent("E", "H")}`); // "J"
