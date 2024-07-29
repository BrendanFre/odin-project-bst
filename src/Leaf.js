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
    } else this.l.set(newValue, left, right);
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

  remove(target, parent) {
    if (this.value === target) {
      if (this.l === undefined && this.r === undefined) {
        return (parent.root = undefined);
      } else if (this.l !== undefined) {
        if (this.r === undefined) {
          const newValue = this.l;
          this.value = newValue.value;
          this.l = newValue.l;
          this.r = newValue.r;
        } else {
          const x = this.r;
          const y = this.l;
          this.value = x.value;
          this.r.l = x.l;
          this.r.r = x.r;
        }
      } else {
        const newValue = this.r;
        this.value = newValue.value;
        this.l = newValue.l;
        this.r = newValue.r;
      }
    } else {
      if (this.l !== undefined) {
        this.l.remove(target, this);
      }
      if (this.r !== undefined) {
        this.r.remove(target, this);
      }
    }
  }

  checkChildren(leaf) {
    if (leaf.l === undefined && leaf.r === undefined) {
      return false;
    } else if (leaf.l !== undefined && leaf.r === undefined) {
      leaf.value = leaf.l.value;
      leaf.r = leaf.l.r;
      leaf.l = leaf.l.l;
    }
  }

  find(target) {
    if (this.value === target) {
      return this;
    } else {
      if (this.l !== undefined) {
        return this.l.find(target);
      }
      if (this.r !== undefined) {
        return this.r.find(target);
      }
    }
  }
}
