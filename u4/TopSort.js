function topsort(dependencies) {
    var graph = new Map();
    var visited = [];
    var result = [];

    // Build the graph
    for (var i = 0; i < dependencies.length; i++) {
        var dependency = dependencies[i][0];
        var task = dependencies[i][1];

        if (!graph.has(task)) {
            graph.set(task, []);
        }
        if (!graph.has(dependency)) {
            graph.set(dependency, []);
        }
        graph.get(task).push(dependency);
    }

    // DFS function
    function dfs(node) {
        if (visited.includes(node)) {
            return;
        }

        visited.push(node);

        if (graph.has(node)) {
            for (var j = 0; j < graph.get(node).length; j++) {
                var neighbor = graph.get(node)[j];
                dfs(neighbor);
            }
        }

        result.push(node);
    }

    // Perform DFS for each unvisited node
    for (var node of graph.keys()) {
        dfs(node);
    }

    return result;
}

var dependencies = [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D']
];

var result = topsort(dependencies);
console.log(result);
