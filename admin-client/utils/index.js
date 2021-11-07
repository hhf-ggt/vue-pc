const _parseCookie = function (cookie) {
  let _cookie = cookie.split(';')
  let cookies = {}
  _cookie.forEach(item => {
    let arr = item.split('=')
    cookies[arr[0].trim()] = arr[1]
  })
  return cookies
}
const getCookie = function (c_name) {
  const cookies = _parseCookie(document.cookie)
  return cookies ? cookies[c_name] : ""
}

export default {
  getCookie
}