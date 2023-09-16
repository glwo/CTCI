/*
You have two numbers represented by a linked list, where each node contains a single digit.

The digits are stored in reverse order, such that the 1's digit is at the head of the list.

Write a function that adds two numbers and returns the sum as a linked list.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function sumLists(l1, l2){
    let carry = 0; // Initialize carry to 0
    let dummyHead = new ListNode(0); // Create a dummy head to simplify the code
    let current = dummyHead;

    let curr1 = l1;
    let curr2 = l2;

    while (curr1 || curr2 || carry) {
        let sum = (curr1 ? curr1.val : 0) + (curr2 ? curr2.val : 0) + carry;
        carry = Math.floor(sum / 10); // Calculate carry

        current.next = new ListNode(sum % 10); // Create a new node with the digit
        current = current.next;

        if (curr1) curr1 = curr1.next;
        if (curr2) curr2 = curr2.next;
    }

    return dummyHead.next; // Skip the dummy head
}


// l1 = [2, 4, 3]
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));

// l2 = [5, 6, 4]
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(sumLists(l1, l2));
