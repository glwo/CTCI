/*
Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree.

Avoid storing additional nodes in a data strucutre

NOTE: this is not necessarily a binary search tree

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

Input: root = [1,2], p = 1, q = 2
Output: 1
*/

var lowestCommonAncestor = function(root, p, q) {
    function findLCA(node) {
    if (!node) return null;

    if (node.val === p.val || node.val === q.val) {
      return node;
    }

    const leftLCA = findLCA(node.left);
    const rightLCA = findLCA(node.right);

    if (leftLCA && rightLCA) {
      return node; // Current node is the LCA
    }

    return leftLCA || rightLCA; // Return the non-null result
  }

  return findLCA(root);
};
