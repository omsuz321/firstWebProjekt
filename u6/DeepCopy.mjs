function deepCopy (struct) {
    if (Array.isArray(struct)) {
        //create an copy on an array 
      return struct.map(deepCopy);
    } else if (typeof struct === 'object' && struct !== null) {
      return Object.fromEntries(Object.entries(struct).map(([key, value]) => [key, deepCopy(value)]));
    } else {
      return struct;
    }
  };
  

  /**
   * object.entries helps me to iterate over an objet
   * then i craate a copy of thet array and create more objects via the arrow function
   * and if i getthe the buttom of  the tree then one layer above will be able to execute Objects.fromEntries to an object 
   */