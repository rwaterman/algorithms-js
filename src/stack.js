class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.last = null;
    this.length = 0;
  }

  push(val) {

    if (!this.last) {
      this.last = new Node(val);
    } else {
      const last = new Node(val);
      last.next = this.last;
      this.last = last;
    }

    this.length++;
  }

  pop() {
    if (!this.last) {
      return null;
    }

    const val = this.last.val;
    this.last = this.last.next;

    this.size--;
    return val;
  }

  display() {
    let curr = this.last;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }
}





(() => {
  const stack = new Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);

  stack.pop();

  stack.display();
})();
