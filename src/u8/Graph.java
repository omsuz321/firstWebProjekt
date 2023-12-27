import java.io.*;
import java.lang.*;
import java.util.*;

class Graph {

    class Edge {
        int src, dest, weight;

        Edge() {
            src = dest = weight = 0;
        }
    }

    int V, E;
    Edge edge[];

    Graph(int v, int e) {
        V = v;
        E = e;
        edge = new Edge[e];
        for (int i = 0; i < e; ++i)
            edge[i] = new Edge();
    }

    void BellmanFord(Graph graph, int src) {
        int V = graph.V, E = graph.E;
        int dist[] = new int[V];

        for (int i = 0; i < V; ++i)
            dist[i] = Integer.MAX_VALUE;
        dist[src] = 0;

        for (int i = 1; i < V; ++i) {
            for (int j = 0; j < E; ++j) {
                int u = graph.edge[j].src;
                int v = graph.edge[j].dest;
                int weight = graph.edge[j].weight;
                if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v])
                    dist[v] = dist[u] + weight;
            }
        }

        for (int j = 0; j < E; ++j) {
            int u = graph.edge[j].src;
            int v = graph.edge[j].dest;
            int weight = graph.edge[j].weight;
            if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                System.out.println("Graph contains negative weight cycle");
                return;
            }
        }
        printArr(dist, V);
    }

    void printArr(int dist[], int V) {
        System.out.println("Vertex Distance from Source");
        for (int i = 0; i < V; ++i)
            System.out.println(i + "\t\t" + dist[i]);
    }

    public static void main(String[] args) {
        int V = 16; // Number of vertices in graph
        int E = 16; // Number of edges in graph

        Graph graph = new Graph(V, E);

        // Add edges based on the given adjacency matrix
        int k = 0;
        for (int i = 0; i < V; ++i) {
            for (int j = 0; j < V; ++j) {
                int weight = adjacency_matrix[i][j];
                if (weight != 0) {
                    graph.edge[k].src = i;
                    graph.edge[k].dest = j;
                    graph.edge[k].weight = weight;
                    k++;
                }
            }
        }

        // Function call
        graph.BellmanFord(graph, 0);
    }

    // Your provided adjacency matrix
    static int[][] adjacency_matrix = {
            {0, 8, 0, 0, 7, -6, -1, 0, 0, 0, 0, 0, 0, 0, 0, -6},
            {0, 0, -6, 6, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0},
            {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
            {0, 0, 0, 0, 0, 5, 0, -5, 0, 0, 0, 0, 0, 0, 0, 0},
            {0, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
            {0, 0, 0, 0, 0, 0, 5, -4, 0, 0, 0, 0, 0, 0, 0, 0},
            {0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0},
            {0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
            {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 9, 0, -4, 0, 0},
            {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, -4, 0, 0, 0},
            {0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0},
            {0,
