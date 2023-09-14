/*
There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.

Given two strings, write a function to check if they are one edit (or zero edits) away.

Input: pale, ple
Output: true

Input: pales, pale
Output: true

Input: pale, bale
Output: true

Input: pale, bake
Output: false
*/
const OneAway = (s1, s2) => {
    let offs = 0;

    let countS1 = {};
    let countS2 = {};

    for(let c of s1){
        countS1[c] = (countS1[c] || 0) + 1;
    }

    for(let c of s2){
        countS2[c] = (countS2[c] || 0) + 1;
    }

    for(let c in countS1){
        if(countS1[c] !== countS2[c]){
            offs += 1;
            if(offs > 1){
                return false
            }
        }
    }

    return true
}


console.log(OneAway("pale", "bake")); // false
console.log(OneAway("pale", "bale")); // true
