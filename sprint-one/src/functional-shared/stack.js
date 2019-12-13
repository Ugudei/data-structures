
var size = 0;
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var someStorage = {}
  _.extend(storage, stackMethods)
  return storage;
};

var stackMethods = {
  push: function(value){

    this[size] = value;
    size++

  },
  pop: function(){
    if (size < 0) {
      return 0;
    }
    size--;
    var deleted = this[size];
    delete this[size];
    return deleted;
  },
  size: function(){

    console.log(size);
    return size;
  }
};





