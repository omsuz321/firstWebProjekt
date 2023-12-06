import LazyTopologicalSort from "../u4/TopSort.mjs";

export default class Priority {
  constructor(dependencies) {
    this.dependencies = dependencies;
    this[Symbol.iterator] = () => {
      let sort = new LazyTopologicalSort(this.dependencies);
      return sort[Symbol.iterator]();
    };
  }

  *iteratorViaGeneraor() {
    const iterator = this[Symbol.iterator]();
    let result;
    while (!(result = iterator.next()).done) {
      yield result.value;
    }
  }
}


const studentenLeben = new Priority( [
  [ "schlafen", "studieren" ],
  [ "essen", "studieren" ],
  [ "studieren", "prüfen" ]
] )

//checks if both functions work the same
console.assert(
  //using  "..." here results in getting all the values from the function into in array. 
  [...studentenLeben.iteratorViaGeneraor()].toString() === 
    [...studentenLeben[Symbol.iterator]()].toString(),
  "iteratorViaGeneraor does not match the original iterator."
);

