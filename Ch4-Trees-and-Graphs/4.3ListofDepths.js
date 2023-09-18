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

function createLevelLinkedList(root) {
    if (root === null) {
        return [];
    }

    const result = [];
    let queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let currentLevel = null;
        let current = null;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            const newNode = new ListNode(node.val);

            if (current === null) {
                current = newNode;
                currentLevel = newNode;
            } else {
                current.next = newNode;
                current = newNode;
            }

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        result.push(currentLevel);
    }

    return result;
}

// Helper function to convert array representation to binary tree
function arrayToTree(arr, index = 0) {
    if (index >= arr.length || arr[index] === null) {
        return null;
    }

    const root = new TreeNode(arr[index]);
    root.left = arrayToTree(arr, 2 * index + 1);
    root.right = arrayToTree(arr, 2 * index + 2);

    return root;
}

// Example usage with test cases:
const testCases = [
    [3, 9, 20, null, null, 15, 7], // Expected Output: [[3],[9,20],[15,7]]
    [1], // Expected Output: [[1]]
    [], // Expected Output: []
];

for (const testCase of testCases) {
    const root = arrayToTree(testCase);
    const linkedLists = createLevelLinkedList(root);
    console.log(linkedLists);
}
