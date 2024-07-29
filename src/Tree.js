import Leaf from "./Leaf.js";

export default class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }
  find(value, currentNode = this.root) {
    if (currentNode.value == value) {
      return currentNode;
    } else {
      if (currentNode.l !== undefined) {
        return currentNode.l.find(value);
      }
      if (currentNode.r !== undefined) {
        return currentNode.r.find(value);
      }
    }
  }
  deleteItem(item, currentNode = this.root) {
    if (currentNode === undefined) {
      return false;
    } else {
      return currentNode.remove(item, this);
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
      const middleIndex = Math.floor(uniqueArray.length / 2);
      const middle = uniqueArray[middleIndex];
      uniqueArray.splice(middleIndex, 1);
      // console.log(
      //   `The middle index value of: ${uniqueArray} is ${middleIndex} which is ${middle}`
      // );
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
