
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!(Array.isArray(matrix)) || !(matrix.length)){
    return [];
  }
  let array = [];
  for (let i = 0; i < matrix.length; i++) {
    let innerArrayLength = matrix[i].length;
    if (i%2 === 0) {
      for (let j = 0; j < innerArrayLength; j++) {
        array.push(matrix[i][j]);
      }
    } else if (i%2 !== 0) {
      for (let j = innerArrayLength-1; j >= 0; j--) {
        array.push(matrix[i][j]);
      }
    }
  }
  array.filter(Boolean);
  return array;
}
