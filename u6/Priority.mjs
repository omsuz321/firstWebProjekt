import  LazyTopologicalSort  from "../u4/TopSort.mjs";
class Priority{
    
    constructor(dependencies){
        this.dependencies = dependencies ;
        //i also yould have crated an instance variable 
        this[Symbol.iterator] = () =>{ // if i do not use "this", this objet does not get enuerable, so it can not be found by Object.keys(), even if it does exist
            let sort = new LazyTopologicalSort(this.dependencies);
            return sort[Symbol.iterator]();
            };

        
    }
    *iteratorViaGeneraor() {
      const iterator = this[Symbol.iterator](); // to keep using same iterator
      let result;//  = iterator.next();
      //assigns and checks, if there is a value
      while( !(result = iterator.next()).done ){
        //return the value for this iterration
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
  
  
  // for ( const next of studentenLeben ) {
  //   console.log( next );
  // }
  // for (const next of studentenLeben.iteratorViaGeneraor()){
  //   console.log(next);
  // }