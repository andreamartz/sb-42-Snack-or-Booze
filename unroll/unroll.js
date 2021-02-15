let traverseAround = require("./helpers");
let traverseThreeQuarters = require("./helpers");

function unroll(squareArray) {
  // create variables
  let resultArr = [];
  let remaining = {
    rows: [0, squareArray.length - 1], 
    cols: [0, squareArray.length - 1],
    get numRows() {
      return this.rows[1] - (this.rows[0] - 1); 
    },
    get numCols() {
      return this.cols[1] - (this.cols[0] - 1);
    }
  };
  
  // while the remaining array is square and larger than 2 x 2
  // It must be larger than 2 x 2 in order to get through all four for loops
  while (remaining.numCols === remaining.numRows && remaining.numRows > 2) {
    [ resultArr, remaining ] = traverseAround(squareArray, resultArr, remaining);
  }

  // We are left with the base case (either 2 x 2 remaining or 1 x 1 remaining)
  if (remaining.numCols === 1 && remaining.numRows === 1) {
    resultArr.push(squareArray[remaining.rows[0]][remaining.cols[0]]);
    return resultArr;
  } else if (remaining.numCols === 2 && remaining.numRows === 2) {
    [ resultArr, remaining ] = traverseThreeQuarters(squareArray, resultArr, remaining);
    return resultArr;
  }
}


console.log("4 x 4: ", unroll([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
console.log("3 x 3: ", unroll([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]));

module.exports = unroll;
