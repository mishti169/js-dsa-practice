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
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
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
}

const ll = new LinkedList();
ll.push(10);
ll.push(20);
ll.push(30);
ll.pop();
ll.pop();
ll.print();
