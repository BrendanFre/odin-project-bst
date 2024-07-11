import Tree from "../src/Tree.js";

describe("Tree", () => {
  const tree = new Tree([2, 5, 5]);
  it("Root node should have value of 5", () => {
    expect(tree.constructor.name).toEqual("Tree");
    expect(tree.root.value).toEqual(5);
  });
  it("Left child node should have value of 2", () => {
    expect(tree.constructor.name).toEqual("Tree");
    expect(tree.root.l.value).toEqual(2);
  });
});

describe("Tree Removes:", () => {
  it("Remove root node", () => {
    const testTwo = new Tree([4]);
    testTwo.remove(4);
    expect(testTwo.root).toBe(undefined);
  });
  it("Remove the number 1 child of root", () => {
    const testRem = new Tree([3, 1]);
    testRem.remove(1);
    expect(testRem.l).toBe(undefined);
  });
  it("Remove the number 1 from root 3 > l 2> l1", () => {
    const testRem = new Tree([3, 1, 4]);
    testRem.remove(1);
    expect(testRem.l).toBe(undefined);
  });
});
