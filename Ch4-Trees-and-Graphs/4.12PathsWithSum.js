/*
You are given a binary search tree in which each node contains an integer value (which might be positive or negative).

Design an algorithm to count the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
*/
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  function countPaths(root, targetSum) {
    if (!root) {
      return 0;
    }

    const pathCount = dfs(root, 0, targetSum);

    // Recursively count paths in the left and right subtrees
    const leftCount = countPaths(root.left, targetSum);
    const rightCount = countPaths(root.right, targetSum);

    return pathCount + leftCount + rightCount;
  }

  function dfs(node, currentSum, targetSum) {
    if (!node) {
      return 0;
    }

    // Include the current node in the path sum
    currentSum += node.val;

    // Check if the current path sums up to the targetSum
    let pathCount = currentSum === targetSum ? 1 : 0;

    // Recursively explore left and right subtrees
    pathCount += dfs(node.left, currentSum, targetSum);
    pathCount += dfs(node.right, currentSum, targetSum);

    return pathCount;
  }

  // Example usage:
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(-3);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(2);
  root.right.right = new TreeNode(11);
  root.left.left.left = new TreeNode(3);
  root.left.left.right = new TreeNode(-2);
  root.left.right.right = new TreeNode(1);

  const targetSum = 8;

  const result = countPaths(root, targetSum);
  console.log(result); // Output: 3

