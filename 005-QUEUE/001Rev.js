console.log('hii')

class Queue{
  constructor(){
    this.items = []
  }


// check if queue is empty
isEmpty(){
  return this.items.length ===0;
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




}



const queue  = new Queue();
// queue.enqueue(10)