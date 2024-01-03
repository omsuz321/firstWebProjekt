import Priority from "./Priority.mjs";

const handler = {
    iterator: null, // Store the iterator here
  
    get: function (target, key, receiver) {
      if (key === "iteratorViaGeneraor") {
        if (!this.iterator) {
          this.iterator = target.iteratorViaGeneraor(); // Create the iterator if it didnt exist
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
  console.assert(allAttributes.includes('dependencies'), 'The priority class should have a "dependencies" attribute.');
  
  
  // Test der Proxy-Logging-Funktionalität
  logger.iteratorViaGeneraor;
  console.assert(loggingTable.size > 0, 'The logging should have at least one entry in the table.');
  console.assert(result.size > 0, 'The result set should contain at least one value.');
  
  console.log(result);
  logger.iteratorViaGeneraor;
  logger.iteratorViaGeneraor;
  
  console.log(result);