// function topsort(dependencies) {
//     var graph = new Map();
//     var visited = [];
//     var result = [];

//     // Build the graph
//     for (var i = 0; i < dependencies.length; i++) {
//         var dependency = dependencies[i][0];
//         var task = dependencies[i][1];

//         if (!graph.has(task)) {
//             graph.set(task, []);
//         }
//         if (!graph.has(dependency)) {
//             graph.set(dependency, []);
//         }
//         graph.get(task).push(dependency);
//     }

//     // DFS function
//     function dfs(node) {
//         if (visited.includes(node)) {
//             return;
//         }

//         visited.push(node);

//         if (graph.has(node)) {
//             for (var j = 0; j < graph.get(node).length; j++) {
//                 var neighbor = graph.get(node)[j];
//                 dfs(neighbor);
//             }
//         }

//         result.push(node);
//     }

//     // Perform DFS for each unvisited node
//     for (var node of graph.keys()) {
//         dfs(node);
//     }

//     return result;
// }

export default class LazyTopologicalSort {
    constructor(dependencies) {
        this.graph = new Map();
        this.visited = [];
        this.result = [];
        this.currentIndex = 0;

        // Build the graph
        for (const [dependency, task] of dependencies) {
            if (!this.graph.has(task)) {
                this.graph.set(task, []);
            }
            if (!this.graph.has(dependency)) {
                this.graph.set(dependency, []);
            }
            this.graph.get(task).push(dependency);
        }
    }

    next() {
        if (this.currentIndex === 0) {
            for (const node of this.graph.keys()) {
                if (!this.visited.includes(node)) {
                    this.dfs(node);
                }
            }
        }

        if (this.currentIndex < this.result.length) {
            const node = this.result[this.currentIndex];
            this.currentIndex++;
            return { value: node, done: false };
        } else {
            return { done: true };
        }
    }

    dfs(node) {
        if (this.visited.includes(node)) {
            return;
        }

        this.visited.push(node);

        if (this.graph.has(node)) {
            for (const neighbor of this.graph.get(node)) {
                this.dfs(neighbor);
            }
        }

        this.result.push(node);
    }

    [Symbol.iterator]() {
        return this;
    }
}

// Beispielverwendung
var dependencies = [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D']
];





function topsort(dependencies){
    let topsort  = new LazyTopologicalSort(dependencies);
    let result = [];
    let i = 0;
    for(const node of topsort){
        result[i++] = node;
    }
    return result;
}




var dependencies = [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D']
];


// const lazySort = new LazyTopologicalSort(dependencies);

// // Iteration über das Iterationsprotokoll
// for (const node of lazySort) {
//     console.log(node);
// }


// var result = topsort(dependencies);
// console.log(result);
