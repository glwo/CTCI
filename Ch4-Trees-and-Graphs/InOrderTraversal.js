class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Create a binary tree:
//        1
//       / \
//      2   3
//     / \
//    4   5

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

function inOrderTraversal(root){
    if(root !== null){
        inOrderTraversal(root.left);
        console.log(root.value);
        inOrderTraversal(root.right);
    }
}

console.log("In-Order Traversal:");
inOrderTraversal(root);
// 4 2 5 1 3 
