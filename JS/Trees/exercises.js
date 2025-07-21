const { Node, BSNode } = require("./Node.js");
const letters = ["H", "E", "S", "G", "L", "Y", "I"];

let bSTree = new BSNode();

letters.forEach((l) => bSTree.insertNode(l));
console.log(bSTree.findNode("H")); // true
console.log(bSTree.findNode("G")); // true
console.log(bSTree.findNode("Z")); // false
console.log(bSTree.findNode("F")); // false
console.log(bSTree.findNode("y")); // false (case-sensitive)
