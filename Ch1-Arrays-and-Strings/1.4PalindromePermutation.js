/*
Given a string, write a function to check if it is a permutation of a palindrome.

A palindrome is a word or phrase that is the same forwards and backwards.

A permuatation is a rearrangement of letters.

The palindrome does not need to be limited to just dictionary words

Input: "Tact Coa"
Output: true

*/

function PalindromePermutation(string){
    let count = {};
    let oddsCount = 0;

    for (let s of string.toLowerCase()) {
        if (s !== " ") {
            count[s] = (count[s] || 0) + 1;
        }
    }

    for (let c in count) {
        if (count[c] % 2 !== 0) {
            oddsCount++;
            if (oddsCount > 1) {
                return false;
            }
        }
    }

    return true;
}

console.log(PalindromePermutation("Tact Coa")); // true
console.log(PalindromePermutation("race")); // false
