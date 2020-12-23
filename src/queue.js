class Node {
  constructor(val) {
   this.val = val;
   this.next = null;
  }
}

class Queue {
	constructor() {
		this.front = null;
		this.back = null;
		this.size = 0;
	}

	enqueue(val) {
		if (!this.front) {
			this.front = this.back = new Node(val);
		}  else {
			this.back.next = new Node(val);
			this.back = this.back.next;
		}

	}

	dequeue() {
    if (!this.front) {
      return null;
    }

    const val = this.front.val;
    this.front = this.front.next;

    if (!this.front) {
      this.back = null;
    }

    this.size--;
  }

	toArray() {
		let curr = this.front;
		let arr = [];

		while (curr) {
			arr.push(curr.val);

			curr = curr.next;
		}

		return arr;
	}
}

(() => {
	const queue = new Queue();
	
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	console.log(queue.toArray());

	queue.dequeue();
	console.log(queue.toArray());

	queue.enqueue(3);
	console.log(queue.toArray());
})();


