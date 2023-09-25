/*
Implement a function to check if a binary tree is balanced.

For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.


Input: root = [3,9,20,null,null,15,7]
Output: true

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Input: root = []
Output: true
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

function getHeight(root) {
  if (root === null) {
    return -1;
  }
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}
var isBalanced = function (root) {
  if (root === null) {
    return true;
  }

  let heightDiff = getHeight(root.left) - getHeight(root.right);

  if (Math.abs(heightDiff) > 1) {
    return false;

  } else {
    return isBalanced(root.left) && isBalanced(root.right);
  }
};

// Better Solution
function checkHeight(root) {
  if(root === null) return -1;

  let leftHeight = checkHeight(root.left);
  if(leftHeight === Error) return Error;

  let rightHeight = checkHeight(root.right);
  if(rightHeight === Error) return Error;

  let heightDiff = leftHeight - rightHeight;
  if(Math.abs(heightDiff) > 1){
    return Error
  } else{
    return Math.max(leftHeight, rightHeight) + 1;
  }
}


function isBalanced(root){
  return checkHeight(root) !== Error
}

// Define the TreeNode class and the checkHeight and isBalanced functions here

// Create a balanced tree
const balancedRoot = new TreeNode(1);
balancedRoot.left = new TreeNode(2);
balancedRoot.right = new TreeNode(3);
balancedRoot.left.left = new TreeNode(4);
balancedRoot.left.right = new TreeNode(5);

// Check if the balanced tree is balanced
console.log("Is the balanced tree balanced?", isBalanced(balancedRoot)); // Should print true

// Create an unbalanced tree
const unbalancedRoot = new TreeNode(1);
unbalancedRoot.left = new TreeNode(2);
unbalancedRoot.right = new TreeNode(3);
unbalancedRoot.left.left = new TreeNode(4);
unbalancedRoot.left.left.left = new TreeNode(5); // This makes the tree unbalanced

// Check if the unbalanced tree is balanced
console.log("Is the unbalanced tree balanced?", isBalanced(unbalancedRoot)); // Should print false
