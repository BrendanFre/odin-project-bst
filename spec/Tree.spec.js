import Tree from "../src/Tree.js";

describe("Tree", () => {
  const tree = new Tree([2, 5, 5]);
  it("Root node should have value of 5", () => {
    expect(tree.constructor.name).toEqual("Tree");
    expect(tree.root.value).toEqual(5);
  });
  it("Left child node should be 2", () => {
    expect(tree.constructor.name).toEqual("Tree");
    expect(tree.root.l.value).toEqual(2);
  });
  it("Create a new tree with 5 elements, with 5 being the root.", () => {
    const test = new Tree([2, 3, 5, 7, 8]);
    expect(test.root.value).toEqual(5);
  });
});

describe("Tree Set", () => {
  const treeSet = new Tree([2, 1, 5, 6]);
  it("Check tree contains the correct nodes.", () => {
    expect(treeSet.root.value).toEqual(5);
  });
  it("Add new number 9 which should be a right child", () => {
    treeSet.insert(9);
    expect(treeSet.root.r.r.value).toBe(9);
  });
});

describe("Tree Removes:", () => {
  const testRem = new Tree([2]);
  it("Remove root node", () => {
    testRem.deleteItem(2);
    expect(testRem.root).toBe(undefined);
  });
  it("Remove child node on the left, should have no children", () => {
    const testChild = new Tree([2, 1]);
    // console.log(testChild.root.value);
    expect(testChild.root.value).toBe(2);
    testChild.deleteItem(1);
  });
});

describe("Tree Find:", () => {
  const testOne = new Tree([2]);
  it("Find root node and return contents.", () => {
    expect(testOne.find(2)).toBe(testOne.root);
  });
  const testTwo = new Tree([1, 2, 3]);
  // console.log(testTwo);
  it("Find value 1 in tree and return the node", () => {
    expect(testTwo.find(1)).toBe(testTwo.root.l);
  });
});

describe("Tree levelOrder:", () => {
  it("throw error when no callback function is provided", () => {
    const testOne = new Tree([2]);
    expect(() => {
      testOne.levelOrder();
    }).toThrow(new Error("Callback function not provided."));
  });
  it("throw error when no nodes are in the tree", () => {
    const testOne = new Tree([]);
    expect(() => {
      testOne.levelOrder((a, item) => {
        a + item;
      });
    }).toThrow(new Error("Tree does not contain any nodes."));
  });
  it("Return an array", () => {
    const testOne = new Tree([3]);
    expect(() => {
      testOne.levelOrder((a, item) => {
        a + item;
      });
    }).toEqual("tree");
  });
});
