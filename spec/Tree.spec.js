import Tree from "../src/Tree.js";

describe("Tree", () => {
  const tree = new Tree([2, 5, 5]);
  it("Root node should have value of 2", () => {
    expect(tree.constructor.name).toEqual("Tree");
    expect(tree.root.value).toEqual(2);
  });
  it("Left child node should have value of Undefined", () => {
    expect(tree.constructor.name).toEqual("Tree");
    expect(tree.root.l).toEqual(undefined);
  });
  it("Create a new tree with 5 elements, with 5 being the root.", () => {
    const test = new Tree([2, 3, 5, 7, 8]);
    expect(test.root.value).toEqual(3);
  });
});

describe("Tree Set", () => {
  const treeSet = new Tree([2, 1, 5, 6]);
  it("Check tree contains the correct nodes.", () => {
    expect(treeSet.root.value).toEqual(2);
  });
  it("Add new number 9 which should be a right child", () => {
    treeSet.insert(9);
    expect(treeSet.root.r.r.r.value).toBe(9);
  });
});

describe("Tree Removes:", () => {
  const testRem = new Tree([2]);
  it("Remove root node", () => {
    testRem.remove(2);
    expect(testRem.root).toBe(undefined);
  });
  it("Remove child node on the right, should have no children", () => {
    const testChild = new Tree([2, 1]);
    expect(testChild.root.value).toBe(1);
    testChild.remove(2);
    // console.log(testChild);
    expect(testChild.root.l).toBe(undefined);
  });
});
