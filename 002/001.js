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

    this.tail.next = node;
    this.tail = node;
  }

  print() {
    console.log('hiii i am print ');
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}

// const ll = new LinkedList();
// ll.push(10);
// ll.push(20);
// ll.push(30);
// ll.print();
