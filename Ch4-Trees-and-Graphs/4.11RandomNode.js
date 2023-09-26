/*
You are implementing a binary tree class from scratch which, in addition to insert, find, and delete, has a method getRandomNode() which returns a random node from the tree.

All nodes should be equally likely to be chosen.

Design and implement an algorithm for getRandomNode, and explain how you would implement the rest of the methods.
*/
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.size = 1; // Size of the subtree rooted at this node
    }
  }

  class BinaryTree {
    constructor() {
      this.root = null;
    }

    // Insert a new node with a given value into the binary tree
    insert(value) {
      this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
      if (!node) {
        return new TreeNode(value);
      }

      node.size++;
      if (value < node.value) {
        node.left = this._insert(node.left, value);
      } else {
        node.right = this._insert(node.right, value);
      }

      return node;
    }

    // Find a node with a given value in the binary tree
    find(value) {
      return this._find(this.root, value);
    }

    _find(node, value) {
      if (!node) return null;
      if (value === node.value) return node;
      if (value < node.value) {
        return this._find(node.left, value);
      } else {
        return this._find(node.right, value);
      }
    }

    // Delete a node with a given value from the binary tree
    delete(value) {
      this.root = this._delete(this.root, value);
    }

    _delete(node, value) {
      if (!node) return node;

      node.size--;

      if (value < node.value) {
        node.left = this._delete(node.left, value);
      } else if (value > node.value) {
        node.right = this._delete(node.right, value);
      } else {
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        // Node has two children, replace it with the in-order successor
        let minValueNode = this._findMin(node.right);
        node.value = minValueNode.value;
        node.right = this._delete(node.right, minValueNode.value);
      }

      return node;
    }

    _findMin(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }

    // Get a random node from the binary tree
    getRandomNode() {
      if (!this.root) return null;
      const randomIndex = Math.floor(Math.random() * this.root.size) + 1;
      return this._getRandomNode(this.root, randomIndex);
    }

    _getRandomNode(node, index) {
      const leftSize = node.left ? node.left.size : 0;

      if (index === leftSize + 1) {
        return node;
      } else if (index <= leftSize) {
        return this._getRandomNode(node.left, index);
      } else {
        return this._getRandomNode(node.right, index - leftSize - 1);
      }
    }
  }

  // Usage example
  const tree = new BinaryTree();
  tree.insert(4);
  tree.insert(2);
  tree.insert(6);
  tree.insert(1);
  tree.insert(3);
  tree.insert(5);
  tree.insert(7);

  console.log(tree.getRandomNode().value); // Get a random node value

