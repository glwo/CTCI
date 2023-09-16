/*
Implement a function to check if a linked list is a palindrome

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false

Follow up: Could you do it in O(n) time and O(1) space?
*/
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to create a linked list from an array
const createLinkedListFromArray = (arr) => {
  let head = null;
  let current = null;

  for (const val of arr) {
    const newNode = new ListNode(val);
    if (!head) {
      head = newNode;
      current = newNode;
    } else {
      current.next = newNode;
      current = newNode;
    }
  }

  return head;
};

// First solution
const isPalindrome = (head) => {
  let res = [];
  let curr = head;

  while (curr) {
    res.push(curr.val);
    curr = curr.next;
  }

  // console.log(res.reverse());
  return res.join("") === res.reverse().join("");
};

// Follow up: Could you do it in O(n) time and O(1) space?
// const isPalindrome = (head) => {
//   if (!head || !head.next) {
//     return true; // Empty list or single-node list is a palindrome.
//   }

//   // Step 1: Find the middle of the linked list using the two-pointer technique.
//   let slow = head;
//   let fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   // Step 2: Reverse the second half of the linked list.
//   let prev = null;
//   let current = slow;
//   while (current) {
//     const nextNode = current.next;
//     current.next = prev;
//     prev = current;
//     current = nextNode;
//   }

//   // Step 3: Compare the first half with the reversed second half.
//   let left = head;
//   let right = prev;
//   while (right) {
//     if (left.val !== right.val) {
//       return false; // Not a palindrome.
//     }
//     left = left.next;
//     right = right.next;
//   }

//   return true; // It's a palindrome.
// };

// Test case 1: Palindromic linked list
const linkedList1 = createLinkedListFromArray([1, 2, 2, 1]);
console.log(isPalindrome(linkedList1)); // Should output: true

// Test case 2: Non-palindromic linked list
const linkedList2 = createLinkedListFromArray([1, 2]);
console.log(isPalindrome(linkedList2)); // Should output: false
