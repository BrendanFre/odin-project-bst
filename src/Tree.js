export default class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(treeArray) {
    return treeArray.sort((a, b) => a - b);
  }
}
