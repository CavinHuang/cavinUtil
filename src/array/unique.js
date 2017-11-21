/**
 * 去掉array中的重复项
 * @param {Array} arr 需要去重的数组
 * @returns {Array} 去重后的新数组
 */
function unique(arr) {
  var i, _arr = arr.sort(), duplicateIdx = [], idxLength = 0;

  if (!arr || arr.length <= 1) {
    return arr;
  }
  for (i = 1; i < _arr.length; i++) {
    if (_arr[i] === _arr[i - 1]) {
      idxLength = duplicateIdx.push(i);
    }
  }
  if (idxLength > 0) {
    while (idxLength--) {
      _arr.splice(duplicateIdx[idxLength], 1);
    }
    arr = _arr;
  }
  return arr;
}

module.exports = unique;
