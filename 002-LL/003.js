console.log('hey there! i am circular doubly LL');

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
    // console.log('i am pop');
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
    } while (temp.next !== this.tail);

    temp.next = this.head;
    this.tail = temp;
    this.tail.next = this.head;
    this.size--;
  }

  print() {
    // console.log('i am print');
    if (this.head === null) {
      throw Error('head is already null');
    }

    let temp = this.head;
    do {
      console.log(temp.val);
      temp = temp.next;
    } while (temp != this.head);
  }
}

const csll = new CircularSinglyLL();
csll.push(10);
csll.push(20);
csll.push(30);
csll.append(9);
csll.append(8);
csll.pop();
csll.pop();
csll.print();
