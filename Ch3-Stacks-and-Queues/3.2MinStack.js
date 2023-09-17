/*
How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element?

Push, pop and min should all operate in O(1) tine.
*/

class MinStack {
  constructor() {
    this.minStack = [];
    this.stack = [];
  }
  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack.at(-1)) {
      this.minStack.push(val);
    }
  }
  /**
   * @return {void}
   */
  pop() {
    if (this.stack.length > 0) {
        if (this.stack.at(-1)=== this.minStack.at(-1)) {
            this.minStack.pop();
        }
        this.stack.pop();
    }
  }
  /**
   * @return {number}
   */
  top() {
    return this.stack.at(-1);
  }
  /**
   * @return {number}
   */
  getMin() {
    return this.minStack.at(-1);
  }
}

const minStack = new MinStack();

minStack.push(5);
minStack.push(2);
minStack.push(7);
minStack.push(1);

console.log(minStack.top()); // Should return 1
console.log(minStack.getMin()); // Should return 1

minStack.pop();
console.log(minStack.top()); // Should return 7
console.log(minStack.getMin()); // Should return 2

minStack.pop();
console.log(minStack.top()); // Should return 2
console.log(minStack.getMin()); // Should return 2

minStack.push(0);
console.log(minStack.top()); // Should return 0
console.log(minStack.getMin()); // Should return 0
