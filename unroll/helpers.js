/**
 * traverseAround captures items from a square array by traveling in a spiraling clockwise direction. 
 * 
 * It returns the flat array.
 * 
 */

function traverseAround(squareArray, resultArr, remaining) {
  [ resultArr, remaining ] = traverseThreeQuarters(squareArray, resultArr, remaining);
  [ resultArr, remaining ] = traverseLastQuarter(squareArray, resultArr, remaining);
  
  return [resultArr, remaining];
}

function traverseThreeQuarters(squareArray, resultArr, remaining) {
  // 1 - Traverse columns of top remaining row
  for (let c = remaining.cols[0]; c <= remaining.cols[1]; c++) {
    resultArr.push(squareArray[remaining.rows[0]][c]);
  }
  remaining.rows[0]++;

  // 2 - Traverse rows of outermost remaining column
  for (let r = remaining.rows[0]; r <= remaining.rows[1]; r++) {
    resultArr.push(squareArray[r][remaining.cols[1]]);
  }
  remaining.cols[1]--;

  // 3 - Traverse columns of bottom remaining row in reverse order
  for (let c = remaining.cols[1]; c >= remaining.cols[0]; c--) {
    resultArr.push(squareArray[remaining.rows[1]][c]);
  }
  remaining.rows[1]--;

  return [resultArr, remaining];
}

function traverseLastQuarter(squareArray, resultArr, remaining) {
  // create variables
  const numRows = squareArray.length;
  const numCols = numRows;    // because the array is square

  // 4 - Traverse rows of leftmost remaining column in reverse order
  for (let r = remaining.rows[1]; r >= remaining.rows[0]; r--) {
    resultArr.push(squareArray[r][remaining.cols[0]]);
  }
  remaining.cols[0]++;
  
  return [resultArr, remaining];
}

module.exports = traverseAround;
