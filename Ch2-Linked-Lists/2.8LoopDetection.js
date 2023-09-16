/*
Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop

DEFINITION:
Circular linked lists: A (corrupt) linked list in which a node's next pointer points to an earlierr node, so as to make a loop in the linked list

Example:
Input: A -> B -> C -> D -> E -> C [the same C as earlier]
Output: C
*/
const detectCycle = function(head) {
    let slow = head;
    let fast = head;
    let hasCycle = false;

    // Use Floyd's cycle-finding algorithm
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        hasCycle = true;
        break;
      }
    }

    if (!hasCycle) {
      return null; // No cycle found
    }

    // Reset one of the pointers to the head
    slow = head;

    // Move both pointers at the same pace until they meet again
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow; // Return the node where the cycle begins
  };
