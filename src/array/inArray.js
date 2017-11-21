/**
* 判断指定val是否在数组array中
* @param {Object} val 需要判断的值
* @param {Array} array 所在的数组
* @param {Number} idx 从数组array的idx处开始判断，若未指定，则从整个数组array中判断
* @returns {Number} val在array中的位置，若不在，则返回-1
*/
function InArray(val, array, idx) {
  var arrLen = array.length;

  if (!array) return -1;
  idx = idx || 0;
  idx = (idx < 0 || idx > array.length - 1) ? 0 : idx;
  for (; idx < arrLen; idx++) {
    if (array[idx] === val) {
      return idx;
    }
  }
  return -1;
}
module.exports = InArray;
