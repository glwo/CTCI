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

function PreOrderTraversal(root){
    if(root !== null){
        console.log(root.value)
        PreOrderTraversal(root.left);
        PreOrderTraversal(root.right);
    }
}

console.log("Pre-Order Traversal:");
PreOrderTraversal(root);
// 1 2 4 5 3
