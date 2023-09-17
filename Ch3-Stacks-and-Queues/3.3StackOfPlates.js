/*
Imagine a (literal) stack of plates. If the stack gets too high, it might topple.

Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.

Implement a data structure SetOfStacks that mimics this.

SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.

SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same valuse as it would if there was just a single stack).

FOLLOW UP:
Implement a function popAt(int index) which performs a pop operation on a specific sub-stack

Input
["DinnerPlates", "push", "push", "push", "push", "push", "popAtStack", "push", "push", "popAtStack", "popAtStack", "pop", "pop", "pop", "pop", "pop"]
[[2], [1], [2], [3], [4], [5], [0], [20], [21], [0], [2], [], [], [], [], []]
Output
[null, null, null, null, null, null, 2, null, null, 20, 21, 5, 4, 3, 1, -1]
*/


/**
 * @param {number} capacity
 */
class DinnerPlates {
    constructor(capacity) {
        this.capacity = capacity;
        this.SetOfStacks = [];

    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let added = false;

        for (let stack of this.SetOfStacks) {
          if (stack && stack.length < this.capacity) {
            stack.push(val);
            added = true;
            break;
          }
        }

        if (!added) {
          this.SetOfStacks.push([val]);
        }
      }
    /**
     * @return {number}
     */
    pop() {
        while (this.SetOfStacks.length > 0 && (!this.SetOfStacks.at(-1) || this.SetOfStacks.at(-1).length === 0)) {
          // Remove empty stacks from the end of SetOfStacks
          this.SetOfStacks.pop();
        }

        if (this.SetOfStacks.length === 0) {
          return -1; // If there are no stacks, return -1 to indicate empty.
        }

        return this.SetOfStacks.at(-1).pop();
      }
    /**
     * @param {number} index
     * @return {number}
     */
    popAtStack(index) {
        return this.SetOfStacks.at(index).pop();
    }
}

const D = new DinnerPlates(2);  // Initialize with capacity = 2
D.push(1);
D.push(2);
D.push(3);
D.push(4);
D.push(5);

console.log(D.popAtStack(0));   // Returns 2.

D.push(20);

D.push(21);

console.log(D.popAtStack(0));   // Returns 20.

console.log(D.popAtStack(2))   // Returns 21.

console.log(D.pop())           // Returns 5.

console.log(D.pop())            // Returns 4.

console.log(D.pop())            // Returns 3.

console.log(D.pop())            // Returns 1.

console.log(D.pop())            // Returns -1.


/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */
