// GIVEN: an s x s array
// create variables for:
//   * min row idx (initial value 0)
//   * max row idx (initial value s - 1)
//   * min col idx (initial value 0)
//   * max col idx (initial value s - 1)
// capture minimum row (and add 1 to min row idx)
// capture maximum column (and subtract 1 from max col idx)
// capture maximum row (and subtract 1 from max row idx)
// capture minimum column (and add 1 to min col idx)
// REPEAT until you get to the base case
//
// Base case for ODD # rows/cols:
//   have a 1 x 2 array left (which means that:
//     * min row = max row and 
//     * max col - min col = 1)
// Base case for EVEN # rows/cols:
//   have a 2 x 2 array left (which means that:
//     * max row - min row = 1 and
//     * max col - min col = 1)

let traverseAround = require("./helpers");


function unroll(squareArray) {
  let resultArr;
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
    [ resultArr, remaining ] = traverseAround(squareArray, remaining);
    console.log("RESULTARR: ", resultArr, "REMAINING (rows, cols, numRows, numCols): ", remaining.rows, remaining.cols, remaining.numRows, remaining.numCols);
  }

  // We are left with the base case (either 2 x 2 remaining or 1 x 1 remaining)
  if (remaining.numCols === 1 && remaining.numRows === 1) {
    resultArr.push(squareArray[remaining.rows[0]][remaining.cols[0]]);
  } else if (remaining.numCols === 2 && remaining.numRows === 2) {
    // 1 - capture elements in minimum row index (and add 1 to min row idx) - traversing columns
    for (let c = remaining.cols[0]; c <= remaining.cols[1]; c++) {
      resultArr.push(squareArray[remaining.rows[0]][c]);
    }
    remaining.rows[0]++;
    console.log("FOR1: ", "REMAINING (rows, cols, numRows, numCols): ", remaining.rows, remaining.cols, remaining.numRows, remaining.numCols);
    console.log("FOR1 SQUAREARRAY: ", squareArray);
    console.log("TEMPARR: ", resultArr);
    // 2 - capture elements in maximum column index (and subtract 1 from max col idx) - traversing rows
    for (let r = remaining.rows[0]; r <= remaining.rows[1]; r++) {
      resultArr.push(squareArray[r][remaining.cols[1]]);
    }
    remaining.cols[1]--;
    console.log("FOR2: ", "REMAINING (rows, cols, numRows, numCols): ", remaining.rows, remaining.cols, remaining.numRows, remaining.numCols);
    console.log("TEMPARR: ", resultArr);
    // 3 - capture elements in reverse order in maximum row index (and subtract 1 from max row idx) - traversing columns
    for (let c = remaining.cols[1]; c >= remaining.cols[0]; c--) {
      resultArr.push(squareArray[remaining.rows[1]][c]);
    }
    remaining.rows[1]--;
    console.log("FOR3: ", "REMAINING (rows, cols, numRows, numCols): ", remaining.rows, remaining.cols, remaining.numRows, remaining.numCols);
    console.log("TEMPARR: ", resultArr);
  } else {
    return ("Error");
  }
  console.log("RESULTARR: ", resultArr);

  return resultArr;
}

// function traverseAround(squareArray, remaining) {
//   // create variables
//   const resultArr = [];
//   const numRows = squareArray.length;
//   const numCols = numRows;    // because the array is square


//   // 1 - capture elements in minimum row index - traversing columns
//   for (let c = remaining.cols[0]; c <= remaining.cols[1]; c++) {
//     resultArr.push(squareArray[remaining.rows[0]][c]);
//   }
//   remaining.rows[0]++;

//   // 2 - capture elements in maximum column index (and subtract 1 from max col idx) - traversing rows
//   for (let r = remaining.rows[0]; r <= remaining.rows[1]; r++) {
//     resultArr.push(squareArray[r][remaining.cols[1]]);
//   }
//   remaining.cols[1]--;

//   // 3 - capture elements in reverse order in maximum row index (and subtract 1 from max row idx) - traversing columns
//   for (let c = remaining.cols[1]; c >= remaining.cols[0]; c--) {
//     resultArr.push(squareArray[remaining.rows[1]][c]);
//   }
//   remaining.rows[1]--;

//   // 4 - capture elements in reverse order in minimum column index (and add 1 to min col idx) - traversing rows
//   for (let r = remaining.rows[1]; r >= remaining.rows[0]; r--) {
//     resultArr.push(squareArray[r][remaining.cols[0]]);
//   }
//   remaining.cols[0]++;
  
//   return [resultArr, remaining];
// }


console.log("4 x 4: ", unroll([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
console.log("5 x 5: ", unroll([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]));

module.exports = unroll;
