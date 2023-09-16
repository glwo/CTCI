/*
Given two (singly) linked lists, determine if two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value.

That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are interesecting

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'

Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
*/
// First Solve
var getIntersectionNode = function(headA, headB) {
    let resA = [];

    let currA = headA;
    let currB = headB;

    while(currA){
        resA.push(currA);
        currA = currA.next;
    }

    while(currB){
        if(resA.includes(currB)){
            return currB
        }
        currB = currB.next;
    }
    return null
};

// Better Solution
const getIntersectionNode = (headA, headB) => {
    let currA = headA;
    let currB = headB;

    while (currA !== currB) {
      // If currA reaches the end of its list, move it to the head of B's list.
      if (!currA) {
        currA = headB;
      } else {
        currA = currA.next;
      }

      // If currB reaches the end of its list, move it to the head of A's list.
      if (!currB) {
        currB = headA;
      } else {
        currB = currB.next;
      }
    }

    // If there's an intersection, currA (or currB) will be the intersection point.
    // If there's no intersection, both currA and currB will reach the end (null) together.
    return currA;
  };
