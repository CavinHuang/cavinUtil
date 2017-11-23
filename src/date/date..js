/**
 * 模仿PHP的date()函数
 * strtotime('Y-m-d H:i:s');
 * @param format 只支持 'Y-m-d H:i:s','Y-m-d','H:i:s' 三种调用方式
 * @param time 为空时，取当前时间
 * @return 日期格式化的字符串
 */
function date(format, time){
  var _temp = (time != null) ? new Date(time*1000) : new Date();
  var _return = '';
}
