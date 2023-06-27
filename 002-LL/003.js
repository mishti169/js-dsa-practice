class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class CircularSinglyLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(val) {
    const node = new Node(val);
    this.size++;

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.tail.next = this.head;
      return;
    }

    node.next = this.head;
    this.head = node;
    this.tail.next = node;
  }

  push(val) {
    const node = new Node(val);
    this.size++;

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.tail.next = this.head;
      return;
    }

    this.tail.next = node;
    this.tail = node;
    this.tail.next = this.head;
  }
  pop() {
    console.log('i am pop');
    let temp = this.head;
    if (this.head === null) {
      throw Error('list is empty');
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }

    do {
      temp = temp.next;
    } while (temp !== this.head);
    temp.next = null;
    this.tail = temp;
    this.tail.next = this.head;
    this.size--;
  }
}

const csll = new CircularSinglyLL();
csll.append(9);
csll.append(8);
csll.push(10);
csll.push(20);
csll.push(30);
csll.pop();
console.log(csll);
