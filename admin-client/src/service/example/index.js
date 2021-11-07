import Http from '../../../utils/http/index'

class ExampleHttp extends Http {
  exampleRequest(methods, data) {
    if (methods === 'exampleApi') {
      return this.get('/example', data)
    }
  }
}

export default new ExampleHttp()

