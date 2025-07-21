class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
  insertLeft(value) {
    if (!this.leftChild) {
      this.leftChild = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.leftChild = this.leftChild;
      this.leftChild = newNode;
    }
  }
  insertRight(value) {
    if (!this.rightChild) {
      this.rightChild = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.rightChild = this.rightChild;
      this.rightChild = newNode;
    }
  }
}
class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild;
    this.rightChild;
  }
  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }
  findNode(toFind) {
    if (this == null) {
      return false;
    }

    if (toFind === this.value) {
      return true;
    }

    if (toFind > this.value) {
      return this.rightChild ? this.rightChild.findNode(toFind) : false;
    } else {
      return this.leftChild ? this.leftChild.findNode(toFind) : false;
    }
  }
  findCommonParent(val1, val2) {
    if (val1 < this.value && val2 < this.value) {
      return this.leftChild.findCommonParent(val1, val2);
    }
    if (val1 > this.value && val2 > this.value) {
      return this.rightChild.findCommonParent(val1, val2);
    }
    return this.value;
  }
}

// const letters = ["H", "E", "S", "G", "L", "Y", "I"];

// let bSTree = new BSNode();

// letters.forEach((l) => bSTree.insertNode(l));
module.exports = { Node, BSNode };

// const H = new Node("H");

// H.insertLeft("E");
// H.insertRight("S");

// let E = H.leftChild;
// let S = H.rightChild;

// E.insertRight("G");
// S.insertLeft("L");
// S.insertRight("Y");

// let L = S.leftChild;
// L.insertLeft("I");

// console.log(H);
// //initial setup
// let tree = new Node(3)
// tree.insertLeft(1)
// tree.insertRight(5)

// //adding a new node to the tree
// tree.insertLeft(2)
// console.log(tree);
