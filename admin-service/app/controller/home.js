const Controller = require('egg').Controller // 基类

class HomeController extends Controller {
  async index () {
    const { ctx } = this
    let data = [{name: 'huhu', age: 24, sex: 1}]
    let res = {
      code: 200,
      msg: '成功',
      status: 'success',
      content: data
    }
    ctx.body = res
  }
}

module.exports = HomeController