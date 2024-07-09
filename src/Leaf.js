export default class Leaf {
  constructor(v, l, r) {
    this.value = v;
    this.l = l;
    this.r = r;
  }

  set(newValue) {
    if (newValue === this.value) {
    } else if (newValue > this.value) {
      if (this.r === undefined) {
        this.r = new Leaf(newValue);
      } else this.r.set(newValue);
    } else if (this.l === undefined) {
      this.l = new Leaf(newValue);
    } else this.r.set(newValue);
  }
}
