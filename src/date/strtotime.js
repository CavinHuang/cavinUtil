/**
 * 模仿PHP的strtotime()函数
 * strtotime('2012-07-27 12:43:43') OR strtotime('2012-07-27') OR strtotime('2012/07/27 12:43:43')
 * @return 时间戳
 */
function strtotime(str){
  var _arr = str.split(' ');
  var _day = [];

  if(_arr[0].indexOf('-') != -1){
    _day = _arr[0].split('-');
  }else if(_arr[0].indexOf('/') != -1) {
    _day = _arr[0].split('/');
  }

  _arr[1] = (_arr[1] == null) ? '0:0:0' :_arr[1];
  var _time = _arr[1].split(':');
  for (var i = _day.length - 1; i >= 0; i--) {
      _day[i] = isNaN(parseInt(_day[i])) ? 0 :parseInt(_day[i]);
  };
  for (var i = _time.length - 1; i >= 0; i--) {
      _time[i] = isNaN(parseInt(_time[i])) ? 0 :parseInt(_time[i]);
  };
  var _temp = new Date(_day[0],_day[1]-1,_day[2],_time[0],_time[1],_time[2]);
  return _temp.getTime() / 1000;
}

module.exports = strtotime;
