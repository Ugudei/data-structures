var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {count: 0};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[storage.count] = value;
    storage.count += 1;

  };

  someInstance.pop = function() {
    if (storage.count === 0) {
      return undefined;
    }
    storage.count -= 1;
    var deleted = someInstance[storage.count];
    delete someInstance[storage.count];
    return deleted;
  };

  someInstance.size = function() {
    return storage.count;
  };

  return someInstance;
};
