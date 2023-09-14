/*
Given two strings, write a method to decide if one is a permutation of the other


Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

*/

// time complexity O(n * log(n))
// space complexity O(n)

const checkPermutation = (s, t) => {
    if(t.length !== s.length){
        return false
    }

    let sSorted = s.split("").sort().join(" ");
    let tSorted = t.split("").sort().join(" ");

    return sSorted === tSorted;
}


console.log(checkPermutation("anagram", "nagaram")); // true
console.log(checkPermutation("rat", "car")); // false
