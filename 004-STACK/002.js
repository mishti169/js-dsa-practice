console.log('stack using LL');

//STACK using LL

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Add the value at the top of the stack
  push(val) {
    const node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  // Remove and return the value from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const popVal = this.top;
    this.top = this.top.next;
    this.size--;
    return popVal;
  }

  //Return the top val from the stack without removing it
  peek() {
    return this.top.value;
  }

  // get the size of the stack
  getSize() {
    return this.size;
  }

  // to check the stack is empty or not
  isEmpty() {
    return this.size === 0;
  }

  // to clear the stack
  clear() {
    this.top = null;
    this.size = 0;
  }
}

const stack = new Stack();

// stack.push(10);
// stack.push(12);
// stack.push(14);
// stack.push(16);
// console.log(stack.getSize());

// stack.pop();
// console.log(stack.getSize());
// console.log(stack.peek());
// console.log(stack.isEmpty());
// stack.clear();
// console.log(stack.getSize());
