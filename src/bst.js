const { NodeBT } = require('./node');

class TreeBS {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let root = this.root;

    if (!root) {
      this.root = new NodeBT(value);
      return true;
    }

    while (root) {
      if (root.value === value) {
        return false;
      }

      if (value < root.value) {
        if (root.left) {
          root = root.left;
        } else {
          root.left = new NodeBT(value);
          return true;
        }
      } else {
        if (root.right) {
          root = root.right;
        } else {
          root.right = new NodeBT(value);
          return true;
        }
      }
    }
  }

  find(value) {
    let root = this.root;

    while (root) {
      if (root.value === value) {
        return true;
      }

      if (root.value < value) {
        root = root.left;
      } else if (root.value > value) {
        root = root.right;
      } else {
        throw new Error('Unable to compare root value');
      }
    }

    return false;
  }
}

