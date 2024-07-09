import Leaf from "./Leaf.js";

export default class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(treeArray) {
    const sortedArray = treeArray.sort((a, b) => a - b);

    let uniqueArray = [;
    sortedArray.forEach((item) => {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item)
      }
    });
    console.log(`Unique array: ${uniqueArray}`)
    const middle = uniqueArray[uniqueArray.length / 2]
    uniqueArray.pop()
    this.root = Leaf(middle)
    uniqueArray.forEach((item) => {
      console.log(item)
      this.root.insertNode(item, this.root)
    });
    return this.root
  }
}
