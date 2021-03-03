let traverseAround = require("./helpers");
let traverseThreeQuarters = require("./helpers");

/** 
 * unroll:
 *   * takes a square array as a parameter
 *   * returns a flat array (resultArr) containing elements pulled off by traversing the nested arrays in a clockwise spiral
 */

function unroll(squareArray) {
  let resultArr = [];

  /** remaining:
   * 'rows' and 'cols' contain the min and max indices left to traverse in squareArray
   */
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
  while (remaining.numCols === remaining.numRows && remaining.numRows > 2) {
    [ resultArr, remaining ] = traverseAround(squareArray, resultArr, remaining);
  }

  // 2 x 2 array left to traverse 
  if (remaining.numCols === 1 && remaining.numRows === 1) {
    resultArr.push(squareArray[remaining.rows[0]][remaining.cols[0]]);
    return resultArr;

  // 1 x 1 array left to "traverse"
  } else if (remaining.numCols === 2 && remaining.numRows === 2) {
    [ resultArr, remaining ] = traverseThreeQuarters(squareArray, resultArr, remaining);
    return resultArr;
  }
}

module.exports = unroll;
