/*
Implement a function to check if a binary tree is a binary search tree.

Input: root = [2,1,3]
Output: true

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/
var isValidBST = function(root, min, max) {
    if(root === null){
        return true
    }

    if (root.val <= min || root.val >= max) {
        return false;
    }

    // Recursively check the left and right subtrees with updated min and max values
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
