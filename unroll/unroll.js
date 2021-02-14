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

function unroll(squareArray) {
  // create variables
  const resultArr = [];
  const rows = squareArray.length;
  const cols = rows;
  console.log("SQR[0][0]: ", squareArray[0][0]);
  let minRowIdx = 0;
  let maxRowIdx = rows - 1;
  let minColIdx = 0;
  let maxColIdx = cols - 1;
  let colsRemaining = maxColIdx - (minColIdx - 1);
  let rowsRemaining = maxRowIdx - (minRowIdx - 1);

  // while the remaining array is square and larger than 2 x 2
  // It must be larger than 2 x 2 in order to get through all four for loops
  while (colsRemaining === rowsRemaining && rowsRemaining > 2) {
    console.log("COLS REM: ", colsRemaining, "ROWS REM: ", rowsRemaining);
    // capture elements in minimum row index (and add 1 to min row idx) - traversing columns
    for (let c = minColIdx; c <= maxColIdx; c++) {
      // console.log("RESULTARR: ", resultArr, "MINROWIDX: ", minRowIdx, "MAXROWIDX: ", maxRowIdx, "MINCOLIDX: ", minColIdx, "MAXCOLIDX: ", maxColIdx, "C: ", c);
      resultArr.push(squareArray[minRowIdx][c]);
    }
    minRowIdx += 1;
    rowsRemaining = maxRowIdx - (minRowIdx - 1);
    console.log("FOR1: ", minRowIdx, maxRowIdx, minColIdx, maxColIdx);
    console.log("COLS REM: ", colsRemaining, "ROWS REM: ", rowsRemaining);
    // capture elements in maximum column index (and subtract 1 from max col idx) - traversing rows
    for (let r = minRowIdx; r <= maxRowIdx; r++) {
      resultArr.push(squareArray[r][maxColIdx]);
    }
    maxColIdx -= 1;
    colsRemaining = maxColIdx - (minColIdx - 1);
    console.log("FOR2: ", minRowIdx, maxRowIdx, minColIdx, maxColIdx);
    console.log("COLS REM: ", colsRemaining, "ROWS REM: ", rowsRemaining);
    // capture elements in reverse order in maximum row index (and subtract 1 from max row idx) - traversing columns
    for (let c = maxColIdx; c >= minColIdx; c--) {
      resultArr.push(squareArray[maxRowIdx][c]);
    }
    maxRowIdx -= 1;
    rowsRemaining = maxRowIdx - (minRowIdx - 1);
    console.log("FOR3: ", minRowIdx, maxRowIdx, minColIdx, maxColIdx);
    console.log("COLS REM: ", colsRemaining, "ROWS REM: ", rowsRemaining);
    // capture elements in reverse order in minimum column index (and add 1 to min col idx) - traversing rows
    for (let r = maxRowIdx; r >= minRowIdx; r--) {
      resultArr.push(squareArray[r][minColIdx]);
    }
    minColIdx += 1;
    colsRemaining = maxColIdx - (minColIdx - 1);
    console.log("FOR4: ", minRowIdx, maxRowIdx, minColIdx, maxColIdx);
    console.log("COLS REM: ", colsRemaining, "ROWS REM: ", rowsRemaining);
  }

  // We are left with the base case (either 2 x 2 remaining or 1 x 1 remaining)
  if (colsRemaining === 2 && rowsRemaining === 2) {
    // capture elements in minimum row index (and add 1 to min row idx) - traversing columns
    for (let c = minColIdx; c <= maxColIdx; c++) {
      // console.log("RESULTARR: ", resultArr, "MINROWIDX: ", minRowIdx, "MAXROWIDX: ", maxRowIdx, "MINCOLIDX: ", minColIdx, "MAXCOLIDX: ", maxColIdx, "C: ", c);
      resultArr.push(squareArray[minRowIdx][c]);
    }
    minRowIdx += 1;
    rowsRemaining = maxRowIdx - (minRowIdx - 1);
    console.log("FOR1: ", minRowIdx, maxRowIdx, minColIdx, maxColIdx);
    console.log("COLS REM: ", colsRemaining, "ROWS REM: ", rowsRemaining);
    // capture elements in maximum column index (and subtract 1 from max col idx) - traversing rows
    for (let r = minRowIdx; r <= maxRowIdx; r++) {
      resultArr.push(squareArray[r][maxColIdx]);
    }
    maxColIdx -= 1;
    colsRemaining = maxColIdx - (minColIdx - 1);
    console.log("FOR2: ", minRowIdx, maxRowIdx, minColIdx, maxColIdx);
    console.log("COLS REM: ", colsRemaining, "ROWS REM: ", rowsRemaining);
    // capture elements in reverse order in maximum row index (and subtract 1 from max row idx) - traversing columns
    for (let c = maxColIdx; c >= minColIdx; c--) {
      resultArr.push(squareArray[maxRowIdx][c]);
    }
    maxRowIdx -= 1;
    rowsRemaining = maxRowIdx - (minRowIdx - 1);
    console.log("FOR3: ", minRowIdx, maxRowIdx, minColIdx, maxColIdx);
    console.log("COLS REM: ", colsRemaining, "ROWS REM: ", rowsRemaining);
  } else if (colsRemaining === 1 && rowsRemaining === 1) {
    resultArr.push(squareArray[minRowIdx][minColIdx]);
  } else {
    return ("Error");
  }
  console.log("RESULTARR: ", resultArr);

  return resultArr;
}

console.log("4 x 4: ", unroll([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
// console.log("5 x 5: ", unroll([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]));

module.exports = unroll;
