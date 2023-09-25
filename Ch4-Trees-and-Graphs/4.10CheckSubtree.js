/*
T1 and T2 are two very large binary trees, with T1 muchy bigger than T2. Create an algorithm to determine if T2 is a subtree of T1.

A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2.

That is, if you cut off the tree at node n, the two trees would be identical.

Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
*/
function isSubtree(root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;

  if (sameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function sameTree(s, t) {
  if (!s && !t) {
    return true;
  }

  if (s && t && s.val === t.val) {
    return sameTree(s.left, t.left) && sameTree(s.right, t.right);
  }

  return false;
}
