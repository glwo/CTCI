/*
Write a program to sort a stack such that the smallest items are on top.

You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array).

The stack supports the following operations: push, pop, peek, and isEmpty.
*/
class SortedStack {
    constructor() {
        this.stack = [];
        this.temp = [];
        this.front = null;
    }
    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        if(x <= this.stack.at(-1)){
            this.stack.push(x);
        } else{
            while(x > this.stack.at(-1) && this.stack.length){
                this.temp.push(this.stack.pop());
            }

            this.stack.push(x);

            while(this.temp.length){
                this.stack.push(this.temp.pop());
            }
        }
    }
    /**
     * @return {number}
     */
    pop() {
        return this.stack.pop();
    }
    /**
     * @return {number}
     */
    peek() {
        return this.stack.at(-1);
    }
    /**
     * @return {boolean}
     */
    empty() {
        return this.stack.length === 0 ? true : false;
    }
}

const sortedStack = new SortedStack();

sortedStack.push(5);
sortedStack.push(3);
sortedStack.push(7);
sortedStack.push(1);

console.log(sortedStack.stack)

console.log("Peek:", sortedStack.peek()); // Expected output: 1
console.log("Pop:", sortedStack.pop());   // Expected output: 1
console.log("Pop:", sortedStack.pop());   // Expected output: 3

sortedStack.push(2);
sortedStack.push(8);

console.log("Peek:", sortedStack.peek()); // Expected output: 2
console.log("Pop:", sortedStack.pop());   // Expected output: 2
console.log("Pop:", sortedStack.pop());   // Expected output: 5
console.log("Pop:", sortedStack.pop());   // Expected output: 7
console.log("Pop:", sortedStack.pop());   // Expected output: 8
console.log("Is Empty?", sortedStack.empty()); // Expected output: true
