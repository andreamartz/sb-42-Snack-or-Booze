const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
  it("correctly unrolls a 6 x 6 square array", function () {
    const squareArray = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35, 36]
    ];
    expect(unroll(squareArray)).toEqual([
      1, 2, 3, 4, 5, 6, 12, 18, 24, 30, 36, 35,
      34, 33, 32, 31, 25, 19, 13, 7, 8, 9, 10, 11,
      17, 23, 29, 28, 27, 26, 20, 14, 15, 16, 22, 21
    ]);
  });
  it("correctly unrolls a 5 x 5 square array of strings", function () {
    const squareArray = [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', 'i', 'j'],
      ['k', 'l', 'm', 'n', 'o'],
      ['p', 'q', 'r', 's', 't'],
      ['u', 'v', 'w', 'x', 'y']
    ];
    expect(unroll(squareArray)).toEqual([
      'a', 'b', 'c', 'd', 'e', 'j', 'o', 't', 'y', 'x', 'w', 'v', 'u', 'p', 'k', 'f', 'g', 'h', 'i', 'n', 's', 'r', 'q', 'l', 'm'
    ]);
  });
  it("correctly unrolls a 5 x 5 square array of numbers", function () {
    const squareArray = [
      [-1, -2, -3, -4, -5],
      [6, 7, 8, 9, 10],
      [-11, -12, -13, -14, -15],
      [16, 17, 18, 19, 20],
      [-21, -22, -23, -24, -25]
    ];
    expect(unroll(squareArray)).toEqual([-1, -2, -3, -4, -5, 10, -15, 20, -25, -24, -23, -22, -21, 16, -11, 6, 7, 8, 9, -14, 19, 18, 17, -12, -13]);
  });
  it("correctly unrolls a 4 x 4 square array", function () {
    const squareArray = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    expect(unroll(squareArray)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });
  it("correctly unrolls a 3 x 3 square array", function () {
    const squareArray = [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i']
    ];
    expect(unroll(squareArray)).toEqual(['a', 'b', 'c', 'f', 'i', 'h', 'g', 'd', 'e']);
  });
  it("correctly unrolls a 2 x 2 square array", function () {
    const squareArray = [[1, 2], [3, 4]];
    expect(unroll(squareArray)).toEqual([1, 2, 4, 3]);
  });
  it("correctly unrolls a 1 x 1 square array", function () {
    const squareArray = [[5]];
    expect(unroll(squareArray)).toEqual([5]);
  });

});
