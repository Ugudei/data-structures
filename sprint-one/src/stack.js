class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
   //
       this.store = {};
       this.index = 0;
  }

  size() {
    if (this.index < 0) {
      this.index =  0;
     }
     return this.index;
  };
  push(value) {
    this.store[this.index] = value;
    this.index++;
  };

  pop() {
    this.index--;
    var deleted = this.store[this.index];
    //delete this.store[this.index];
    return deleted;
  };
};

