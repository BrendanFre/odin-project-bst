export default class Leaf {
  constructor(v, l, r) {
    this.value = v;
    this.l = l;
    this.r = r;
  }

  set(newValue, left = undefined, right = undefined) {
    if (newValue === this.value) {
    } else if (newValue > this.value) {
      if (this.r === undefined) {
        this.r = new Leaf(newValue, left, right);
      } else this.r.set(newValue, left, right);
    } else if (this.l === undefined) {
      this.l = new Leaf(newValue, left, right);
    } else this.r.set(newValue, left, right);
  }

  get(search) {
    if (search === this.value) {
      return value;
    } else if (this.r === undefined && this.l === undefined) {
      return false;
    } else if (this.r !== undefined) {
      this.r.get(search);
    } else if (this.l !== undefined) {
      this.l.get(search);
    }
  }
}
