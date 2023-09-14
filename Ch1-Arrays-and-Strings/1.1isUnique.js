/*
Implement an algorithm to determine if a string has all unique characters.

What if you cannot use additional data structures?
*/

// Input: "Movie"
// Output: True

// Input: "Tree"
// Output: False


// function isUnique(string){
//     let count = {};

//     for(let s of string){
//         count[s] = (count[s] || 0) + 1
//     }

//     for(let c in count){
//         if(count[c] !== 1){
//             return false
//         }
//     }
//     return true
// }

// If we cannot use additional data structures
function isUnique(string){
    for(let i = 0; i < string.length; i ++){
        for(let j = i + 1; j < string.length; j ++){
            if(string[i] === string[j]){
                return false
            }
        }
    }
    return true
}


console.log(isUnique("Movie")); // true
console.log(isUnique("Tree")); // false
