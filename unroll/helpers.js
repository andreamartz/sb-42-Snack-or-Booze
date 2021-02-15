function traverseAround(squareArray, remaining) {
  // create variables
  const resultArr = [];
  const numRows = squareArray.length;
  const numCols = numRows;    // because the array is square


  // 1 - capture elements in minimum row index - traversing columns
  for (let c = remaining.cols[0]; c <= remaining.cols[1]; c++) {
    resultArr.push(squareArray[remaining.rows[0]][c]);
  }
  remaining.rows[0]++;

  // 2 - capture elements in maximum column index (and subtract 1 from max col idx) - traversing rows
  for (let r = remaining.rows[0]; r <= remaining.rows[1]; r++) {
    resultArr.push(squareArray[r][remaining.cols[1]]);
  }
  remaining.cols[1]--;

  // 3 - capture elements in reverse order in maximum row index (and subtract 1 from max row idx) - traversing columns
  for (let c = remaining.cols[1]; c >= remaining.cols[0]; c--) {
    resultArr.push(squareArray[remaining.rows[1]][c]);
  }
  remaining.rows[1]--;

  // 4 - capture elements in reverse order in minimum column index (and add 1 to min col idx) - traversing rows
  for (let r = remaining.rows[1]; r >= remaining.rows[0]; r--) {
    resultArr.push(squareArray[r][remaining.cols[0]]);
  }
  remaining.cols[0]++;
  
  return [resultArr, remaining];
}


module.exports = traverseAround;
