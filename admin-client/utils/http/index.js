/**
 * @desc 封装axios、请求拦截和响应拦截
 * @time 2021-11-07
*/

import axios from 'axios'
let csrfToken = null

// 需要携带csrf的method
function csrfSafeMethod(method = '') {
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method.toUpperCase()));
}

function requestHandle(config) {
  if (!csrfSafeMethod(config.method)) {
    // csrfToken = utils.getCookie('csrfToken')
    // config.headers['x-csrf-token'] = csrfToken
  }
  return config
}

function requestError(error) {
  message.error('请求错误')
  return Promise.reject(error)
}

const whiteList = []

function responseHandle(response) {
  const { url } = response.config
  const isWhite = whiteList.some(ret => ret.test(url))
  const { data } = response
  if (!isWhite) {
    if ((data.code === 7) || data.code === 5) {
      message.error(data.msg)
      notLoginMessage = false
      return setTimeout(() => {
        window.location = window.location.origin + '/logout'
      }, 1000)
    }
  }
  return data
}

function responseError(error) {
  console.log(error)
  const { url } = error.config
  // 超时
  if (error instanceof Error && error.toJSON().message.includes('timeout')) {
    if (exportTimeoutList.some(regex => regex.test(url))) {
      message.error('响应超时')
    }
    return Promise.reject(error)
  }
  if (error.response.status === 401) {
    message.error('超时')
    return setTimeout(() => {
      window.location = window.location.origin + `/logout?from=${encodeURIComponent(window.location.pathname)}`
    }, 1000)
  }
  if (error.response.status === 504 || error.response.status === 404) {
    message.error('服务器错误' + '⊙﹏⊙∥');
  } else if (error.response.status === 403) {
    message.error('没有权限')
  } else {
    message.error('未知错误')
  }
  return Promise.reject(error)
}

export default class Http {
  constructor() {
    axios.defaults.timeout = 
    this.http = axios.create({
      baseURL: 'http://127.0.0.1:7001'
    })

    // 请求拦截器
    this.http.interceptors.request.use(requestHandle, requestError)
    this.http.interceptors.response.use(responseHandle, responseError);
  }

  get(url = '', data) {
    if (this.onLine()) {
      const params = Object.assign({}, data, {t: Date.now()})
      return this.http.get(url, {
        params
      }).catch(err => err)
    }
  }

  post(url = '', data) {
    if (this.onLine()) {
      return this.http.post(url, data).catch(err => err)
    }
  }

  onLine() {
    if (navigator.onLine) {
      return true
    } else {
      message.error('暂未连接网络！')
      return false
    }
  }
}