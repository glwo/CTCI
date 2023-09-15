/*
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

You must do it in place.

Input: matrix = [[1,1,1],
                [1,0,1],
                [1,1,1]]
Output: [[1,0,1],
        [0,0,0],
        [1,0,1]]

Input: matrix = [[0,1,2,0],
                [3,4,5,2],
                [1,3,1,5]]
Output: [[0,0,0,0],
        [0,4,5,0],
        [0,3,1,0]]
*/

const zeroMatrix = (matrix) => {
  let zeros = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeros.push([i, j]);
      }
    }
  }
  for (let indexes of zeros) {
    let i = indexes[0];
    let j = indexes[1];

    for (let cols = 0; cols < matrix[0].length; cols++) {
      matrix[i][cols] = 0;
    }
    for (let rows = 0; rows < matrix.length; rows++) {
      matrix[rows][j] = 0;
    }
  }
  return matrix;
};

console.log(
  zeroMatrix([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

console.log(
  zeroMatrix([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
