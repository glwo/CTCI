/*
Given a directed graph design an algorithm to find out whether there is a route between two nodes
*/
class Node {
    constructor(data) {
        this.data = data;
        this.adjacent = [];
        this.visited = false;
    }

    addAdjacent(node) {
        this.adjacent.push(node);
    }
}

function hasRoute(start, end) {
    if (start === end) {
        return true; // Trivial case: The start node is the same as the end node.
    }

    let queue = [];
    start.visited = true;
    queue.unshift(start);

    while (queue.length) {
        let node = queue.pop();

        for (let neighbor of node.adjacent) {
            if (!neighbor.visited) {
                if (neighbor === end) {
                    return true; // Found a directed route from start to end.
                }
                neighbor.visited = true;
                queue.unshift(neighbor);
            }
        }
    }

    return false; // No directed route found from start to end.
}

// Create nodes and edges for a sample directed graph:
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');

nodeA.addAdjacent(nodeB);
nodeB.addAdjacent(nodeC);
nodeC.addAdjacent(nodeD);

console.log(hasRoute(nodeA, nodeA)); // Should return true (A is connected to itself)
console.log(hasRoute(nodeA, nodeD)); // Should return true (A -> B -> C -> D)
console.log(hasRoute(nodeC, nodeA)); // Should return false (No directed route from C to A)
