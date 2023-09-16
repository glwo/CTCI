/*
Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.

If x is contained within the list, the values of x only need to be after the elements less than x (see below).

The partition element x can appear anywhere in the "right partition"; it does not need to appear between the right and the left partitions.

Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
*/

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


const partition = (head, x) => {
    let firstHalf = new ListNode(0);
    let secondHalf = new ListNode(0);

    let firstPoint = firstHalf;
    let secondPoint = secondHalf;

    let curr = head;

    while (curr) {
        if (curr.val < x) {
            firstPoint.next = curr;
            firstPoint = firstPoint.next;
        } else {
            secondPoint.next = curr;
            secondPoint = secondPoint.next;
        }
        curr = curr.next;
    }

    // Connect the two halves
    firstPoint.next = secondHalf.next;

    // Set the next of secondHalf to null to terminate the list
    secondPoint.next = null;

    // Return the next of firstHalf to exclude the placeholder
    return firstHalf.next;
}

function displayLinkedList(head) {
    let current = head;
    const values = [];
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    console.log(values.join(" -> "));
}

const node7 = new ListNode(1);
const node6 = new ListNode(2, node7);
const node5 = new ListNode(10, node6);
const node4 = new ListNode(5, node5);
const node3 = new ListNode(8, node4);
const node2 = new ListNode(5, node3);
const head = new ListNode(3, node2);


console.log("Original Linked List:");
displayLinkedList(head);

// Call the partition function here with appropriate arguments
// and display the linked list after partitioning

console.log("Linked List after Partitioning:");
let newHead = partition(head, 5)
displayLinkedList(newHead); // Replace `newHead` with the result of the partitioning
