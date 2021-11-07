// 这里的 key是用来给cookie 进行加签名 和 加密使用的、如果配置多个 则会遍历进行匹配
// 这里就防止我们修改了密钥、并且客户手中的cookie是不过期的
module.exports = appInfo => {
  const config = (exports = {})
  config.keys = appInfo.name + 'ggt'
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: false,
      cookieName: 'csrfToken',
    },
    domainWhiteList: ['*']
  };

  config.cors = {
    // credentials: true,
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  return config
}
