class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
        this.store = {};
        this.index = 0;
   }

   size() {
     if (this.index < 0) {
       this.index =  0;
      }
      return this.index;
   };
   enqueue(value) {
     this.store[this.index] = value;
     this.index++;
   };

   dequeue() {
    this.index--;
  var a = this.store[0]
  for(var i = 0; i < this.index; i++){
  this.store[i] = this.store[i + 1];
  }
  //delete this.store[this.index];

  return a;
   };
 };