/*
A Binary search tree was created by traversing through an array from left to right and inserting each element.

Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

Example:
INPUT:
     2
    / \
   1   3

OUTPUT:
[2, 1, 3], [2, 3, 1]
*/
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function allPossibleArrays(root) {
    function weave(left, right, prefix, results) {
        if (left.length === 0 || right.length === 0) {
            results.push([...prefix, ...left, ...right]);
            return;
        }

        const leftHead = left.shift();
        prefix.push(leftHead);
        weave(left, right, prefix, results);
        prefix.pop();
        left.unshift(leftHead);

        const rightHead = right.shift();
        prefix.push(rightHead);
        weave(left, right, prefix, results);
        prefix.pop();
        right.unshift(rightHead);
    }

    function generateArrays(node) {
        if (!node) {
            return [[]];
        }

        const leftArrays = generateArrays(node.left);
        const rightArrays = generateArrays(node.right);
        const results = [];

        for (const left of leftArrays) {
            for (const right of rightArrays) {
                weave(left, right, [node.value], results);
            }
        }

        return results;
    }

    return generateArrays(root);
}

// Example usage:
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

const possibleArrays = allPossibleArrays(root);
console.log(possibleArrays);

