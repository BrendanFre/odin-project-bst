import Leaf from "./Leaf.js";

export default class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }
  remove(target, currentNode = this) {
    if (currentNode instanceof Tree) {
      if (currentNode.root.value === target) {
        if (
          currentNode.root.l === undefined &&
          currentNode.root.r === undefined
        ) {
          currentNode.root = undefined;
        } else if (
          currentNode.root.l !== undefined &&
          currentNode.root.r === undefined
        ) {
          currentNode.root = currentNode.root.l;
        } else if (
          currentNode.root.r !== undefined &&
          currentNode.root.l === undefined
        ) {
          currentNode.root = currentNode.root.l;
        } else {
          currentNode.root.value = getNext(currentNode.root.r);
        }
      }
    }
  }
  insert(newNumber) {
    if (this.root !== undefined) {
      if (this.root instanceof Leaf) {
        this.root.set(newNumber);
      }
    }
  }

  buildTree(treeArray) {
    if (treeArray.length === 1) {
      return (this.root = new Leaf(treeArray[0]));
    } else {
      const sortedArray = treeArray.sort((a, b) => a - b);

      let uniqueArray = [];
      sortedArray.forEach((item) => {
        if (!uniqueArray.includes(item)) {
          uniqueArray.push(item);
        }
      });
      const middleIndex = Math.floor(uniqueArray.length / 2) - 1;
      const middle = uniqueArray[middleIndex];
      uniqueArray.splice(middleIndex, 1);
      console.log(
        `The middle index value of: ${uniqueArray} is ${middleIndex} which is ${middle}`
      );
      this.root = new Leaf(middle);
      uniqueArray.forEach((item) => {
        this.root.set(item);
      });
      return this.root;
    }
  }
}

function getNext(currentNode) {
  let newValue;
  if (currentNode.l === undefined && currentNode.r === undefined) {
    newValue = currentNode.value;
    currentNode = undefined;
    return newValue;
  } else if (currentNode.l !== undefined) {
    return getNext(currentNode.l);
  }
}
