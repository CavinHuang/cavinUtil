/**
 * 模仿php time()获取 当前时间戳
 * @return {[int]} [当前时间戳]
 */
function time() {
  return (new Date()).getTime() / 1000;
}

module.exports = time;
