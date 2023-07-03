console.log('i am queue using array');

class Queue {
  constructor() {
    this.items = [];
  }

  // Add an item to the back of the queue
  enqueue(val) {
    this.items.push(val);
  }

  // Remove and return the front item from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  // Return the front item from the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }
  // Return the size of the queue
  size() {
    return this.items.length;
  }
  // clear the queue
  clear() {
    this.items = [];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();

// console.log(queue.size()); // 0
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// console.log(queue.peek());
// queue.dequeue();
// console.log(queue.isEmpty());
// console.log(queue.size(), 'size'); // 0
// queue.clear();
// console.log(queue.size(), 'size'); // 0
// console.log(queue.isEmpty());
// console.log(queue);
