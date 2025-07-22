const { Node, BSNode } = require("./Node.js");
// const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];

// let bSTree = new BSNode();

// letters.forEach((l) => bSTree.insertNode(l));

// console.log(bSTree.findNode("H")); // true
// console.log(bSTree.findNode("G")); // true
// console.log(bSTree.findNode("Z")); // false
// console.log(bSTree.findNode("F")); // false
// console.log(bSTree.findNode("y")); // false (case-sensitive)

// console.log(`findCommonParent("B", "I") => ${bSTree.findCommonParent("B", "I")}`); // "H"
// console.log(`findCommonParent("B", "G") => ${bSTree.findCommonParent("B", "G")}`); // "E"
// console.log(`findCommonParent("B", "L") => ${bSTree.findCommonParent("B", "L")}`); // "J"
// console.log(`findCommonParent("L", "Y") => ${bSTree.findCommonParent("L", "Y")}`); // "R"
// console.log(`findCommonParent("E", "H") => ${bSTree.findCommonParent("E", "H")}`); // "J"




const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 
    
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 





// const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
// let nodeWithOneChild = new BSNode();
// numbers.forEach((n) => nodeWithOneChild.insertNode(n));

// console.log("Before removing 9 (one child case):");
// nodeWithOneChild.printInOrder();

// nodeWithOneChild.removeNode(nodeWithOneChild, 9); // will return tree like the first image (the 9 will be deletied)

// console.log("After removing 9:");
// nodeWithOneChild.printInOrder();

// let nodeWithTwoChildren = new BSNode();
// numbers.forEach((n) => nodeWithTwoChildren.insertNode(n));

// console.log("\nBefore removing 8 (two children case):");
// nodeWithTwoChildren.printInOrder();

// nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8); // will return tree like the second image (the root will be 5)

// console.log("After removing 8:");
// nodeWithTwoChildren.printInOrder();