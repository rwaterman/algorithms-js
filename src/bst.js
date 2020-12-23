import  

class BinarySearchTree {
  constructor() {
    this.root = null;
  }


  add(val) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }

    let curr = this.root;

    while (curr) {
      if (val === curr.value) {
        break;
      }

      if (val < curr.value) {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr.left = new Node(val);
          break;
        }
      } else {
        if (curr.right) {
          curr = curr.right;
        } else {
          curr.right = new Node(val);
          break;
        }
      }
    }
  }
}


const bst = new BinarySearchTree();
bst.add(1);
bst.add(2);
bst.add(3);

