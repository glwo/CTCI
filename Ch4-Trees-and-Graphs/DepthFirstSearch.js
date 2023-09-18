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

// Create nodes and edges for a sample graph:
//   1 -- 2 -- 3
//   |     \    |
//   4 ------- 5

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.addAdjacent(node2);
node1.addAdjacent(node4);

node2.addAdjacent(node1);
node2.addAdjacent(node3);
node2.addAdjacent(node5);

node3.addAdjacent(node2);
node3.addAdjacent(node5);

node4.addAdjacent(node1);
node4.addAdjacent(node5);

node5.addAdjacent(node2);
node5.addAdjacent(node3);
node5.addAdjacent(node4);

function DFS(root){
    if(root === null) {
        return
    }
    console.log(root.data);
    root.visited = true;
    root.adjacent.forEach(node => {
        if(node.visited === false){
            DFS(node);
        }
    });
}

console.log("DFS starting from Node 1:");
DFS(node1);
