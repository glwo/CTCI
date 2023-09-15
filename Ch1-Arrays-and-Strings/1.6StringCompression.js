/*
Implement a method to perform basic string compression using the counts of repeated characters.

If the "compressed" string would not become smaller than the original string, your method should return the original string.

You can assume the string has only uppercase and lowercase letters (a - z).

Input: "aabcccccaaa"
Output: "a2b1c5a3"
*/
function StringCompression(string){
   let currChar = string[0]
   let charCount = 1;
   let compressedStr = "";

   for(let i = 1; i < string.length; i++){
    if(currChar === string[i]){
        charCount++
    } else {
        compressedStr += currChar + charCount.toString();
        charCount = 1;
        currChar = string[i];
    }
   }
   compressedStr += currChar + charCount.toString();

   return compressedStr
}

console.log(StringCompression("aabcccccaaa"));
