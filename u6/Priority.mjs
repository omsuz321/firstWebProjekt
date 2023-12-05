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
     
}

// let v = new Vorrang([
//     ['A', 'B'],
//     ['B', 'C'],
//     ['C', 'D']
// ]);

// for (const node of v){
//     console.log(node);
// }
const studentenLeben = new Priority( [
    [ "schlafen", "studieren" ],
    [ "essen", "studieren" ],
    [ "studieren", "prüfen" ]
  ] )

  for ( const next of studentenLeben ) {
    console.log( next );
  }