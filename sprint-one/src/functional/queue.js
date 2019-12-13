var Queue = function() {
  var someInstance = {};

  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {  // get in queue
    storage[size] = value; // storage[0] = value;
    size++;                         // add size + 1
  };

  someInstance.dequeue = function() {  // get out of queue
    ;
    if (size === 0){
      return undefined;
    }
    size--
    var myQue = storage[0];
    delete storage[0];
    saveQue(storage);
    return myQue;
  };

  someInstance.size = function() {
    return size;
  };
  var saveQue = function (value) {
    for (var i =0; i < size; i++){
      storage[i] = storage[i + 1]
    }
  }
  return someInstance;

};
 /*
  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  storage.enqueue = function(value) {  // get in queue
    storage[size] = value; // storage[0] = value;
    storage[size][]
    storage[size] = storage[size]
    size++;                         // add size + 1

  };

  storage.dequeue = function() {  // get out of queue
    if (size === 0) {     // if the queue is empty return undefined.
      return undefined;
    }
              // substract 1 from size.
    delete storage[size];     // delete the first element
    size--;
    return storage[size];

  };

  storage.size = function() {
    return size;
  };

  return storage;

};
*/