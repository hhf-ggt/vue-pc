import Http from '../../../utils/http/index'

class ExampleHttp extends Http {
  exampleRequest(methods, data) {
    if (methods === 'exampleApi') {
      return this.post('example', data)
    }
  }
}

export default new ExampleHttp()

