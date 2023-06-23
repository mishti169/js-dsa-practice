console.log('circular singly LL');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class CircularSinglyLL {
  constructor(val) {
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
}

const csll = new CircularSinglyLL();
csll.append(9);
csll.append(8);
// csll.push(10);
// csll.push(20);
console.log(csll);
