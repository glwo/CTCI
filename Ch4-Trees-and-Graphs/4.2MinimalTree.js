/*
Given a sorted (increasing order) array with unique integer elements, write an alogrithm to create a binary search tree with minimal height.

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
*/
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function sortedArrayToBST(nums) {
    if (nums.length === 0) {
        return null;
    }

    const middleIndex = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[middleIndex]);

    // Recursively construct left and right subtrees
    root.left = sortedArrayToBST(nums.slice(0, middleIndex));
    root.right = sortedArrayToBST(nums.slice(middleIndex + 1));

    return root;
}

// Helper function to print the BST for visualization
function printBST(root, prefix = "", isLeft = true) {
    if (root === null) {
        return [];
    }

    const result = [`${prefix}${isLeft ? "├──" : "└──"} ${root.val}`];
    const leftPrefix = `${prefix}${isLeft ? "│   " : "    "}`;
    const left = printBST(root.left, leftPrefix, true);
    const right = printBST(root.right, leftPrefix, false);
    return result.concat(left, right);
}

// Example usage:
const nums1 = [-10, -3, 0, 5, 9];
const bst1 = sortedArrayToBST(nums1);
console.log(printBST(bst1).join("\n"));
