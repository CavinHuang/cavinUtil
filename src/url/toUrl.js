/**
 * object to queryString
 * @param  {[object]} obj [需要转换过的对象]
 * @return {[string]}     [querystring]
 */
function toUrl(obj) {
  let queryStr = '', k;

  if (typeof obj !== 'object') return queryStr;

  for (k in obj) {
    queryStr += k + '=' + obj[k] + '&';
  }

  return queryStr.substr(0, queryStr.length - 1);
}

module.exports = toUrl;
