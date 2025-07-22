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
    this.leftChild = null;
    this.rightChild = null;
  }

  insertNode(newVal) {
    if (newVal <= this.value) {
      if (this.leftChild) {
        this.leftChild.insertNode(newVal);
      } else {
        this.leftChild = new BSNode(newVal);
      }
    } else {
      if (this.rightChild) {
        this.rightChild.insertNode(newVal);
      } else {
        this.rightChild = new BSNode(newVal);
      }
    }
  }

  getMinNode() {
    let current = this;
    while (current.leftChild) {
      current = current.leftChild;
    }
    return current;
  }

  removeNode(parent, value) {
    if (value < this.value && this.leftChild) {
      return this.leftChild.removeNode(this, value);
    } else if (value > this.value && this.rightChild) {
      return this.rightChild.removeNode(this, value);
    } else if (value !== this.value) {
      return false; // Not found
    }

    // Node found
    if (!this.leftChild && !this.rightChild) {
      if (parent) {
        if (parent.leftChild === this) parent.leftChild = null;
        else parent.rightChild = null;
      }
    } else if (this.leftChild && !this.rightChild) {
      if (parent) {
        if (parent.leftChild === this) parent.leftChild = this.leftChild;
        else parent.rightChild = this.leftChild;
      }
    } else if (!this.leftChild && this.rightChild) {
      if (parent) {
        if (parent.leftChild === this) parent.leftChild = this.rightChild;
        else parent.rightChild = this.rightChild;
      }
    } else {
      // Two children: find smallest value in right subtree
      let successor = this.rightChild;
      let successorParent = this;

      while (successor.leftChild) {
        successorParent = successor;
        successor = successor.leftChild;
      }

      this.value = successor.value;

      if (successorParent.leftChild === successor) {
        successorParent.leftChild = successor.rightChild;
      } else {
        successorParent.rightChild = successor.rightChild;
      }
    }

    return true;
  }

  findMinValue() {
    let current = this;
    while (current.leftChild) {
      current = current.leftChild;
    }
    return current.value;
  }
  copyNode(node) {
    this.value = node.value;
    this.leftChild = node.leftChild;
    this.rightChild = node.rightChild;
  }
  printInOrder() {
    if (this.leftChild) this.leftChild.printInOrder();
    console.log(this.value);
    if (this.rightChild) this.rightChild.printInOrder();
  }
}




// class BSNode {
//   constructor(value) {
//     this.value = value;
//     this.leftChild = null;
//     this.rightChild = null;
//   }
//   insertNode(newVal) {
//     if (!this.value) {
//       this.value = newVal;
//     } else if (newVal > this.value && this.rightChild) {
//       this.rightChild.insertNode(newVal);
//     } else if (newVal <= this.value && this.leftChild) {
//       this.leftChild.insertNode(newVal);
//     } else if (newVal <= this.value) {
//       this.leftChild = new BSNode(newVal);
//     } else {
//       this.rightChild = new BSNode(newVal);
//     }
//   }
//   findNode(toFind) {
//     if (this == null) {
//       return false;
//     }

//     if (toFind === this.value) {
//       return true;
//     }

//     if (toFind > this.value) {
//       return this.rightChild ? this.rightChild.findNode(toFind) : false;
//     } else {
//       return this.leftChild ? this.leftChild.findNode(toFind) : false;
//     }
//   }
//   findCommonParent(val1, val2) {
//     if (val1 < this.value && val2 < this.value) {
//       return this.leftChild.findCommonParent(val1, val2);
//     }
//     if (val1 > this.value && val2 > this.value) {
//       return this.rightChild.findCommonParent(val1, val2);
//     }
//     return this.value;
//   }
//   removeNode(value, parent = null) {
//     if (value < this.value && this.leftChild) {
//       return this.leftChild.removeNode(value, this);
//     } else if (value > this.value && this.rightChild) {
//       return this.rightChild.removeNode(value, this);
//     } else if (value === this.value) {
//       // Case 1 & 2: Node with 0 or 1 child
//       if (!this.leftChild && !this.rightChild) {
//         if (parent) {
//           if (parent.leftChild === this) parent.leftChild = null;
//           else parent.rightChild = null;
//         }
//       } else if (this.leftChild && !this.rightChild) {
//         if (parent) {
//           if (parent.leftChild === this) parent.leftChild = this.leftChild;
//           else parent.rightChild = this.leftChild;
//         } else {
//           this.copyNode(this.leftChild);
//         }
//       } else if (!this.leftChild && this.rightChild) {
//         if (parent) {
//           if (parent.leftChild === this) parent.leftChild = this.rightChild;
//           else parent.rightChild = this.rightChild;
//         } else {
//           this.copyNode(this.rightChild);
//         }
//       }
//       // Case 3: Node with 2 children
//       else {
//         let minNode = this.rightChild.getMinNode();
//         this.value = minNode.value;
//         this.rightChild.removeNode(minNode.value, this);
//       }
//     }
//     return this;
//   }

//   getMinNode() {
//     let current = this;
//     while (current.leftChild) {
//       current = current.leftChild;
//     }
//     return current;
//   }

//   copyNode(node) {
//     this.value = node.value;
//     this.leftChild = node.leftChild;
//     this.rightChild = node.rightChild;
//   }
// }

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
