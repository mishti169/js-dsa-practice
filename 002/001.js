console.log('hii i am linkedList');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);

    this.head = node;
    this.tail = node;

    const temp = this.head;
  }

  print() {}
}

const ll = new LinkedList();
ll.push(10);
