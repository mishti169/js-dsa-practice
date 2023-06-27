// console.log('hey there! i am doubly LL');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  push(val) {
    const node = new Node(val);
    this.size++;

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  pop() {
    if (this.head === null) {
      throw Error('list is empty');
    }
    let temp = this.tail.prev;
    this.tail.prev = null;
    temp.next = null;
    this.tail = temp;
  }

  print() {
    if (this.head === null) {
      throw Error('head is already null');
    }

    let temp = this.head;
    while (temp != null) {
      console.log(temp.val);
      temp = temp.next;
    }
  }

  printReverse() {
    if (this.head === null) {
      throw Error('list is empty');
    }
    let temp = this.tail;
    while (temp !== null) {
      console.log(temp.val);
      temp = temp.prev;
    }
  }
}
const dll = new DoublyLinkedList();
// dll.push(10);
// dll.push(20);
// dll.push(30);
// dll.push(40);
// dll.pop();
// dll.append(9);
// dll.append(8);
// dll.append(7);
// dll.print();
// dll.printReverse();
