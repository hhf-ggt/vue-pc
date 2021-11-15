// 这里的 key是用来给cookie 进行加签名 和 加密使用的、如果配置多个 则会遍历进行匹配
// 这里就防止我们修改了密钥、并且客户手中的cookie是不过期的
module.exports = appInfo => {
  const config = (exports = {})
  config.keys = appInfo.name + 'ggt'
  config.security = {
    csrf: {
        enable: false,
        ignoreJSON: true
    },
    domainWhiteList: ['*']
}
config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    // credentials: true //获得前端的cookie
    // origin: () => 'http://127.0.0.1:3000'//这边不能为*号，需要指定明确的、与请求网页一致的域名
}
  return {
    ...config
  }
}
