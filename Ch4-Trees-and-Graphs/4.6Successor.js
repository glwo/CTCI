/*
Write an algorithm to find the "next" node (i.e. in-order successor) of a given node in a binary search tree.

You may assume that each node has a link to its parent.
*/

class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

// Function to insert a new node into the BST
function insert(root, data) {
    if (root === null) {
        return new Node(data);
    } else {
        let temp = null;
        if (data <= root.data) {
            temp = insert(root.left, data);
            root.left = temp;
            temp.parent = root;
        } else {
            temp = insert(root.right, data);
            root.right = temp;
            temp.parent = root;
        }
        return root;
    }
}

// Function to find the in-order successor of a given node
function inOrderSuccessor(root, node) {
    if (node.right !== null) {
        // If the node has a right subtree, successor is the minimum value in the right subtree
        return findMinValue(node.right);
    }

    // If the node doesn't have a right subtree, backtrack to find the successor
    let parent = node.parent;
    while (parent !== null && node === parent.right) {
        node = parent;
        parent = parent.parent;
    }
    return parent;
}

// Function to find the minimum value node in a BST
function findMinValue(node) {
    let current = node;
    while (current.left !== null) {
        current = current.left;
    }
    return current;
}

// Driver program to test the above functions
let root = null;
root = insert(root, 20);
root = insert(root, 8);
root = insert(root, 22);
root = insert(root, 4);
root = insert(root, 12);
root = insert(root, 10);
root = insert(root, 14);

let targetNode = root.left.right.right;
let successor = inOrderSuccessor(root, targetNode);

if (successor !== null) {
    console.log(`In-order successor of ${targetNode.data} is ${successor.data}`);
} else {
    console.log(`In-order successor does not exist for ${targetNode.data}`);
}

