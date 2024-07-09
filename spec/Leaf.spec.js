import Leaf from "../src/Leaf.js";

describe("Leaf", () => {
  const testLeaf = new Leaf(3);
  it("Should have the correct default options", () => {
    expect(testLeaf.value).toBe(3);
  });
  it("Updating new leaf with 2 should create a left child with value 2", () => {
    testLeaf.set(2);
    expect(testLeaf.l.value).toBe(2);
  });
  it("Updating leaf with 4 should make the right child equal 4", () => {
    testLeaf.set(4);
    expect(testLeaf.r.value).toBe(4);
  });
  it("Updating leaf with 5 should make the right child's child equal 5", () => {
    testLeaf.set(5);
    expect(testLeaf.r.r.value).toBe(5);
  });
});
