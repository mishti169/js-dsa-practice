console.log('hii', 123)

class Queue{
  constructor(){
    this.items = []
  }


// check if queue is empty
isEmpty(){
  return this.items.length ===0;
}

// return the size of the q
size(){
  return this.items.length;
}

//clear the q
clear(){
  this.items=[]
}

// add an item to back 
enqueue(val){
  this.items.push(val);
}

//remove and return the front item from the q
dequeue(){
  if(this.isEmpty()){
    return null;
  }
  return this.items.shift()
}

//return the front item from the q without removing it 
peek(){
  if(this.isEmpty()){
    return null;
  }
  return this.items[0];
}



}



const queue  = new Queue();
// queue.enqueue(10)