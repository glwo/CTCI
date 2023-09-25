/*
Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth(e.g., if you have a tree with depth D, you'll have D linked lists)

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
*/
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function createLevelLinkedList(root, lists, level) {
    if (root === null) {
        return;
    }

    // Ensure that the level exists in the 'lists' array
    if (lists.length === level) {
        lists.push([]);
    }

    // Get the linked list for the current level
    let list = lists[level];

    // Add the current node to the linked list for the current level
    list.push(root.val);

    // Recursively process the left and right subtrees with an incremented level
    createLevelLinkedList(root.left, lists, level + 1);
    createLevelLinkedList(root.right, lists, level + 1);

    // No need to reset 'lists' here; it should accumulate the results correctly
}
function createBinaryTree() {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    return root;
}

// Usage example:
const lists = [];
const root = createBinaryTree();
createLevelLinkedList(root, lists, 0);
console.log(lists);
