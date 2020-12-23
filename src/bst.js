const { NodeBT } = require('./node');

class TreeBS {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new NodeBT(value);
      return true;
    }

    let root = this.root;
    while (root) {
      if (root.value === value) {
        break;
      }

      if (value < root.value) {
        if (root.left) {
          root = root.left;
        } else {
          root.left = new NodeBT(value);
          break;
        }
      } else {
        if (root.right) {
          root = root.right;
        } else {
          root.right = new NodeBT(value);
          break;
        }
      }
    }
  }

  search(value) {
    // TODO
  }
}


// const bst = new TreeBS();
// bst.insert(1);
// bst.insert(2);
// bst.insert(3);
// bst.search(2);

