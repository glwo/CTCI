/*
Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list,
given only access to that node

Input:node = c, a->b->c->d->e->f
Output: a->b->d->e->f
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

  // Your code to delete a node in the middle goes here
  deleteFromMiddle(node) {
    // let curr = this.head;

    // while(curr && curr.next){
    //     if (curr.next.data === node){
    //         curr.next = curr.next.next
    //         curr = curr.next;
    //     } else{
    //         curr = curr.next;
    //     }
    // }
    // return this.head;

    if (node === null || node.next === null) {
      return; // Cannot delete the last node or a null node
    }

    node.data = node.next.data;
    node.next = node.next.next;
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
  linkedList.append("a");
  linkedList.append("b");
  linkedList.append("c");
  linkedList.append("d");
  linkedList.append("e");
  linkedList.append("f");

  console.log("Original Linked List:");
  linkedList.display();

  // Call your delete node in the middle function here
  // For example: linkedList.deleteNodeInMiddle(someNode);
  let nodeToDelete = null;
  let current = linkedList.head;

  while (current && current.data !== "c") {
    current = current.next;
  }

  if (current && current.data === "c") {
    nodeToDelete = current;
  }
  linkedList.deleteFromMiddle(nodeToDelete);

  console.log("Linked List after deleting node in the middle:");
  linkedList.display();
}
