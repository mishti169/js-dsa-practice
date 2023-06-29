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
  }

  reverseLl() {
    //     Check if the head is NULL. If it is, it means the list is empty, so we return the head as it is.
    // Create two pointers, "current" and "previous," and initialize "current" with the head of the list and "previous" with NULL.
    // Enter a loop that continues until "current" becomes NULL.
    // Inside the loop, create a temporary pointer, "temp," and store the next node of the current node.
    // Set the "next" pointer of the current node to the previous node, effectively reversing the pointer direction.
    // Update the "previous" pointer to the current node.
    // Update the "current" pointer to the next node (stored in "temp") for the next iteration.
    // Once the loop finishes, all the pointers have been reversed, and the "previous" pointer will be pointing to the new head of the reversed list.
    // Return the "previous" pointer as the new head of the reversed list.
  }
}

const ll = new LinkedList();
ll.push(10);
ll.push(20);
ll.push(30);
ll.push(40);
ll.push(50);
// ll.pop();
ll.deletAtStart();
ll.deletAnode(3);
ll.print();
