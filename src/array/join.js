/**
 * 将一个或者多个数组合并一个字符串
 * @param  {[type]} separator [指定分隔符]
 * @param  {[type]} args      [数组]
 * @return {[string]}           [返回字符串]
 */
function join(separator, args) {
  let source = [], i = 1;

  if (arguments.length > 2) {
    for (; i < arguments.length; i++) {
      source = source.concat(arguments[i]);
    }
  } else {
    source = args;
  }

  return source.join(separator);
}

module.exports = join;
