// console.log('hii i am linkedList');

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
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    this.size++;
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    // adds another node
    this.tail.next = node;
    this.tail = node;
  }

  pop() {
    this.size--;
    let temp = this.head;
    if (this.head === null) {
      throw Error('first go and get some food then poop');
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    while (temp.next.next !== null) {
      temp = temp.next;
    }
    temp.next = null;
    this.tail = temp;
  }

  print() {
    console.log('hiii i am print ');
    if (this.head === null) {
      throw Error('first go and get some food then print');
    }
    let temp = this.head;
    //jump till temp is null
    while (temp !== null) {
      console.log(temp.val);
      temp = temp.next;
    }
  }

  deletAtStart() {
    let temp = this.head;
    this.head = this.head.next;
    temp = null;
    this.size--;
  }

  deletAnode(val) {
    //delet 3rd node
    let temp = this.head;
    for (let i = 1; i < val - 1; i++) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
    this.size--;
  }

  reverseLl() {
    let curr = this.head;
    let prev = null;
    let next;
    if (!this.head) {
      throw Error('LinkedList is Empty');
    }

    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

const ll = new LinkedList();
ll.push(10);
ll.push(20);
ll.push(30);
ll.push(40);
ll.push(50);
// ll.pop();
// ll.deletAtStart();
// ll.deletAnode(3);
// ll.reverseLl();
// ll.print();
