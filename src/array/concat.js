/**
 * 合并多个数组为一个数组
 * @param {Array} args 要合并的数组参数，如：arr1,arr2,arr3...
 * @returns {Array} 合并后的结果数组
 */
function concat(args) {
  return [].concat.apply([], args);
}

module.exports = concat;
