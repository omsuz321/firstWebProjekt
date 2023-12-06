import LazyTopologicalSort from "../u4/TopSort.mjs";

class Priority {
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

const handler = {
  iterator: null, // Store the iterator here

  get: function (target, key, receiver) {
    if (key === "iteratorViaGeneraor") {
      if (!this.iterator) {
        this.iterator = target.iteratorViaGeneraor(); // Create the iterator if it doesn't exist
      }

      loggingTable.set([`k${loggingTable.size}`], `there are  ${target.dependencies.length - loggingTable.size} left `);
      result.add(this.iterator.next().value);
    }
  },
};

const studentenLeben = new Priority( [
  [ "schlafen", "studieren" ],
  [ "essen", "studieren" ],
  [ "studieren", "prüfen" ]
]);

let loggingTable = new Map();
let allAttributes = Object.keys(studentenLeben);
let logger = new Proxy(studentenLeben, handler);
let result = new Set();





console.log("All Attributes:", allAttributes);
console.assert(allAttributes.includes('dependencies'), 'Die Vorrang-Klasse sollte ein "dependencies"-Attribut haben.');


// Test der Proxy-Logging-Funktionalität
logger.iteratorViaGeneraor;
console.assert(loggingTable.size > 0, 'Das Logging sollte mindestens einen Eintrag in der Tabelle haben.');
console.assert(result.size > 0, 'Das Ergebnis-Set sollte mindestens einen Wert enthalten.');

console.log(result);
logger.iteratorViaGeneraor;
logger.iteratorViaGeneraor;

console.log(result);

