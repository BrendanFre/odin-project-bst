import Tree from "../src/Tree.js";

describe("Tree", () => {
  it("Should have the correct class name", () => {
    const tree = new Tree([2, 5, 5]);
    expect(tree.constructor.name).toEqual("Tree");
  });
});
