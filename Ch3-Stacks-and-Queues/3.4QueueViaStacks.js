/*
Implement a MyQueue class which implements a queue using two stacks.

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]
*/

class MyQueue {
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
        if(this.stack.length === 0){
            this.front = x;
        }
        this.stack.push(x);
    }
    /**
     * @return {number}
     */
    pop() {
        if(this.temp.length === 0){
            while(this.stack.length !== 0){
                this.temp.push(this.stack.pop());
            }
        }
        return this.temp.pop();
    }
    /**
     * @return {number}
     */
    peek() {
        return this.temp.length == 0 ? this.front : this.temp.at(-1);
    }
    /**
     * @return {boolean}
     */
    empty() {
        return this.stack.length == 0 && this.temp.length == 0;
    }
}

const myQueue = new MyQueue();

console.log(myQueue.push(1)); // Should return null
console.log(myQueue.push(2)); // Should return null
console.log(myQueue.peek());   // Should return 1
console.log(myQueue.pop());    // Should return 1
console.log(myQueue.empty());  // Should return false




/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
