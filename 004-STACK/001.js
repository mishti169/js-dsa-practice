console.log('i am stack');

// stack using array

class Stack {
  constructor() {
    this.items = [];
  }

  // add  value at the top/end of the stack;
  push(val) {
    this.items.push(val);
  }

  // remove and return last inserted value(top) of stack
  pop() {
    return this.items.pop();
  }

  // return last inserted value(top) without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // to clear the stack
  clear() {
    this.items.length = 0;
  }

  // to check the stack is empty or not
  isEmpty() {
    return this.items.length === 0;
  }

  // to get the size of stack
  getSize() {
    return this.items.length;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.getSize()); // output 4

stack.pop();
stack.pop();
stack.pop();
console.log(stack.getSize()); // output 1
console.log(stack.isEmpty()); // false

stack.pop();
console.log(stack.isEmpty()); // true

stack.push(10);
console.log(stack.peek()); // 10
stack.clear();
console.log(stack.isEmpty()); // true
