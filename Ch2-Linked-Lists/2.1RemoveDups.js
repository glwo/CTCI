/*
Write code to remove duplicates from an unsorted linked list

FOLLOW UP:

How would you solve this problem if a temporary buffer is not allowed?
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
if (typeof module !== 'undefined' && !module.parent) {
    // Create a linked list with duplicates
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(4);
    linkedList.append(5);

    console.log("Original Linked List:");
    linkedList.display();

    // Call your duplicate removal function here
    removeDups(linkedList.head);
    console.log("Linked List after removing duplicates:");
    // Call a display method to show the result
    linkedList.display();
}

// with hash table
// function removeDups(head){
//     let current = head;
//     let hash = {};

//     while (current && current.next) {
//         if (!hash[current.next.data]) {
//             hash[current.next.data] = true;
//             current = current.next;
//         } else {
//             current.next = current.next.next;
//         }
//     }
//     return head;
// }

// two pointers
function removeDups(head){
    let slow = head
    let fast = head.next

    while(slow && slow.next){
        if(slow.data === fast.data){
            slow.next = fast.next;
            fast = fast.next;
        } else {
            slow = slow.next;
            fast = fast.next
        }
    }
    return head
}
