/**
 * 解析url
 * @param  {[string]} url [url]
 * @return {[object]}     [url object]
 */
function parse(url) {
  let urlObj = {};
  let queryString = '', queryStr = [], queryStr2 = [], i;

  queryString = url.splite('?');
  if (url.indexOf('?')) {
    urlObj.host = queryString[0];
    queryStr = queryString[1].splite('&');
  } else {
    queryStr = queryString[0].splite('&');
  }

  for (i = 0; i < queryStr.length; i++) {
    queryStr2 = queryStr[i].splite('=');
    urlObj[queryStr2[0]] = queryStr2[1];
  }

  return urlObj;
}

module.exports = parse;
