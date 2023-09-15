/*
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true

Example 2:

Input: s = "abcde", goal = "abced"
Output: false
*/

function stringRotation(string, goal){
    for(let i = 0; i < string.length; i++){
        let newstr = string.slice(i) + string.slice(0,i);

        if(newstr === goal){
            return true
        }
    }
    return false
}

console.log(stringRotation("abcde","cdeab"));
console.log(stringRotation("abcde","abced"));
