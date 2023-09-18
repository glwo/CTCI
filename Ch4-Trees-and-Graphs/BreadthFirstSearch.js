class Node {
    constructor(data) {
        this.data = data;
        this.adjacent = [];
        this.marked = false;
    }

    addAdjacent(node) {
        this.adjacent.push(node);
    }
}

// Create nodes and edges for a sample graph:
//   1 -- 2 -- 3
//   |         |
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

function BFS(root){
    let queue = [];
    root.marked = true;
    queue.unshift(root);

    while(queue.length){
        let node = queue.pop();
        console.log(node.data);

        node.adjacent.forEach(node => {
            if(node.marked === false){
                node.marked = true;
                queue.unshift(node);
            }
        });
    }
}

console.log("BFS starting from Node 1:");
BFS(node1);
