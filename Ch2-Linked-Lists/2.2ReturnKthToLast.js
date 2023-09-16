/*
Implement an algorithm to find the kth to last element of a singly linked list
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  findKthElement(k) {
    // Your code to find the kth element goes here
    // Return the kth element's data
    let slow = this.head;
    let fast = this.head;

    // Move the fast pointer k nodes ahead
    for (let i = 0; i < k; i++) {
      if (fast === null) {
        return null; // k is greater than the length of the list
      }
      fast = fast.next;
    }

    // Move both slow and fast pointers until fast reaches the end
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow !== null ? slow.data : null;
  }

  display() {
    let current = this.head;
    while (current) {
      process.stdout.write(`${current.data} -> `);
      current = current.next;
    }
    console.log("null");
  }
}

// Test Case
if (typeof module !== "undefined" && !module.parent) {
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.append(5);

  const k = 1; // Replace with the k value you want to find
  const kthElement = linkedList.findKthElement(k);
  console.log(`The ${k}th element is: ${kthElement}`);
}
