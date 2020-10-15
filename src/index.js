module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length < 1) {
    return [];
  } else {
    return matrix.reduce(function(previousValue, currentValue, index) {
      if (index % 2 !== 0) {
          return previousValue.concat(currentValue.reverse())
      } else {
        return previousValue.concat(currentValue)
      }
    });
  }
}
