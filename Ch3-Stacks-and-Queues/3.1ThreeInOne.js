/*
Describe how you could use a single array to implement three stacks.

Create and array with three nested arrays that we will use as stacks.

[[],[],[]]

we can push and pop from each one to form stack.
*/

// Much more space efficient!
/*
Divide the single array into three equal segments.

Maintain separate pointers or indices for each stack:

top1 for the first stack

top2 for the second stack

top3 for the third stack

Initialize these pointers to the start of their respective segments.

When pushing an element onto one of the stacks, increment the corresponding pointer and store the element at the updated index.

When popping an element from one of the stacks, retrieve the element at the corresponding pointer, decrement the pointer, and return the element.

*/
class ThreeStacks {
  constructor(stackSize) {
    this.stackSize = stackSize;
    this.array = new Array(3 * stackSize);
    this.top1 = -1;
    this.top2 = stackSize - 1;
    this.top3 = 2 * stackSize - 1;
  }

  push(stackNum, value) {
    if (stackNum === 1) {
      if (this.top1 < this.top2) {
        this.top1++;
        this.array[this.top1] = value;
      } else {
        throw new Error("Stack 1 is full.");
      }
    } else if (stackNum === 2) {
      if (this.top2 < this.top3) {
        this.top2++;
        this.array[this.top2] = value;
      } else {
        throw new Error("Stack 2 is full.");
      }
    } else if (stackNum === 3) {
      if (this.top3 < this.array.length - 1) {
        this.top3++;
        this.array[this.top3] = value;
      } else {
        throw new Error("Stack 3 is full.");
      }
    } else {
      throw new Error("Invalid stack number.");
    }
  }

  pop(stackNum) {
    if (stackNum === 1) {
      if (this.top1 >= 0) {
        const value = this.array[this.top1];
        this.top1--;
        return value;
      } else {
        throw new Error("Stack 1 is empty.");
      }
    } else if (stackNum === 2) {
      if (this.top2 >= this.stackSize) {
        const value = this.array[this.top2];
        this.top2--;
        return value;
      } else {
        throw new Error("Stack 2 is empty.");
      }
    } else if (stackNum === 3) {
      if (this.top3 >= 2 * this.stackSize) {
        const value = this.array[this.top3];
        this.top3--;
        return value;
      } else {
        throw new Error("Stack 3 is empty.");
      }
    } else {
      throw new Error("Invalid stack number.");
    }
  }
}

// Example usage
const threeStacks = new ThreeStacks(3);

threeStacks.push(1, 1);
threeStacks.push(1, 2);
threeStacks.push(2, 3);
threeStacks.push(3, 4);

console.log(threeStacks.pop(1)); // Output: 2
console.log(threeStacks.pop(2)); // Output: 3
console.log(threeStacks.pop(3)); // Output: 4
