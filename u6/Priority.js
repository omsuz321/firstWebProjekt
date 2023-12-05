class Priority{
    
    constructor(dependencies){
        this.dependencies = dependencies ;
        [Symbol.iterator] = () =>{
            let sort = new LazyTopologicalSort(this.dependencies);
            return sort[Symbol.iterator];
            };
        
    }
     
}

let v = new Vorrang([
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D']
]);

for (const node of v){
    console.log(node);
}