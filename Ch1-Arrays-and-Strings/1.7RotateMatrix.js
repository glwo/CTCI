/*
Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.

Can you do this in place?

Input: matrix = [[1,2,3],
                [4,5,6],
                [7,8,9]]
Output: [[7,4,1],
        [8,5,2],
        [9,6,3]]

Input: matrix = [[5,1,9,11],
                [2,4,8,10],
                [13,3,6,7],
                [15,14,12,16]]
Output: [[15,13,2,5],
        [14,3,4,1],
        [12,6,8,9],
        [16,7,10,11]]
*/

// In place solution
// function RotateMatrix(matrix){
//     let n = matrix.length;
//     let half = Math.floor(n / 2);

//     for (let layer = 0; layer < half; layer++) {
//         let layerLength = n - 2 * layer - 1;
//         let lastIdx = n - 1 - layer;

//         for (let offset = 0; offset < layerLength; offset++) {
//             let top = matrix[layer][layer + offset];
//             let left = matrix[lastIdx - offset][layer];
//             let bottom = matrix[lastIdx][lastIdx - offset];
//             let right = matrix[layer + offset][lastIdx];

//             // Rotate values
//             matrix[layer][layer + offset] = left;
//             matrix[lastIdx - offset][layer] = bottom;
//             matrix[lastIdx][lastIdx - offset] = right;
//             matrix[layer + offset][lastIdx] = top;
//         }
//     }
//     return matrix
// }

function RotateMatrix(matrix) {
    const n = matrix.length;
    const rotatedMatrix = new Array(n).fill(null).map(() => []);

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            rotatedMatrix[col][n - 1 - row] = matrix[row][col];
        }
    }

    return rotatedMatrix;
}

console.log(RotateMatrix([[1,2,3],[4,5,6],[7,8,9]]));
console.log(RotateMatrix([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));
