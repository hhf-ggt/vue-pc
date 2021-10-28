### 安装egg

```bash
$ mkdir egg-server
$ cd egg-server

$ npm init
$ npm i egg --save
$ npm i egg-bin --save-dev
```

### 配置启动脚本

```javascript
{
  "scripts": {
+   "dev": "egg-bin dev"
  }
}
```

### egg 约定大于配置、创建controller&router(mvc)

**创建文件**
```bash
$ mkdir app
$ cd app
$ mkdir controller
$ cd controller
$ mkdir home.js
```

**controller.js**

```javascript
const Controller = require('egg').Controller // 基类

class HomeController extends Controller {
  async index () {
    const { ctx } = this
    ctx.body = 'hello world!'
  }
}

module.exports = HomeController
```

**router.js**

```javascript
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
};
```

```bash
$ mkdir config
$ cd config
$ touch config.default.js
# 配置cookie 安全字符串
exports.keys = <此处改为你自己的 Cookie 安全字符串>
```

**目前结构**
```javascript
egg-example
├── app
│   ├── controller
│   │   └── home.js
│   └── router.js
├── config
│   └── config.default.js
└── package.json
```

**启动项目**

```bash
$ npm run dev
$ open in your browser http://localhost:7001
```

**截止目前、一切正常、已将项目启动成功**