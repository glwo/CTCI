/*
Write a method to replace all spaces in a string with "%20".

You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

Can you perform this operation in place?

Input: "Mr John Smith", 13
Output: "Mr%20John%20Smith"
*/

// const Urlify = function(string, length){
//     let newstr = "";

//     for(let c of string){
//         if(c === " "){
//             newstr+="%20";
//         } else {
//             newstr += c;
//         }
//     }

//     return newstr
// }

// console.log(Urlify("Mr John Smith", 13));

// In place solution
const urlifyInPlace = function(string, length) {
    // Convert the string to an array of characters so that we can modify it in-place
    const strArr = string.split('');
    let spaceCount = 0;

    // Count the number of spaces in the first 'length' characters
    for (let i = 0; i < length; i++) {
        if (strArr[i] === ' ') {
            spaceCount++;
        }
    }

    // Calculate the final length of the modified string
    let newIndex = length + spaceCount * 2 - 1;

    // Iterate through the original string from the end and replace spaces with '%20'
    for (let i = length - 1; i >= 0; i--) {
        if (strArr[i] === ' ') {
            strArr[newIndex] = '0';
            strArr[newIndex - 1] = '2';
            strArr[newIndex - 2] = '%';
            newIndex -= 3;
        } else {
            strArr[newIndex] = strArr[i];
            newIndex--;
        }
    }

    // Join the modified array back into a string
    return strArr.join('');
};

const inputString = "Mr John Smith    ";
const length = 13; // The true length of the string (excluding trailing spaces)

const result = urlifyInPlace(inputString, length);
console.log(result); // Output: "Mr%20John%20Smith"
