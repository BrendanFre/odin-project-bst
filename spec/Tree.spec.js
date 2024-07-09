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
