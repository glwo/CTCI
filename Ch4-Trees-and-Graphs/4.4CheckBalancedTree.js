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

// // Example 1: Balanced binary tree
// const tree1 = {
//     val: 3,
//     left: { val: 9, left: null, right: null },
//     right: {
//       val: 20,
//       left: { val: 15, left: null, right: null },
//       right: { val: 7, left: null, right: null },
//     },
//   };
//   console.log(isBalanced(tree1)); // Output: true

//   // Example 2: Unbalanced binary tree
//   const tree2 = {
//     val: 1,
//     left: {
//       val: 2,
//       left: { val: 3, left: { val: 4, left: null, right: null }, right: { val: 4, left: null, right: null } },
//       right: { val: 3, left: null, right: null },
//     },
//     right: {
//       val: 2,
//       left: null,
//       right: null,
//     },
//   };
//   console.log(isBalanced(tree2)); // Output: false

//   // Example 3: Empty tree (balanced by definition)
//   const tree3 = null;
//   console.log(isBalanced(tree3)); // Output: true

//   // Example 4: Single node tree (balanced by definition)
//   const tree4 = { val: 5, left: null, right: null };
//   console.log(isBalanced(tree4)); // Output: true
