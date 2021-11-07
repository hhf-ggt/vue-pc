import ExampleHttp from '../../service/example/index'

export default {
  name: 'Example',
  data: function () {
    return {
      msg: 'example dir'
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    async getInfo() {
      try {
        const res = await ExampleHttp.get('/example', {name: 'huhu'})
        if (res.code === 1) {
          console.log(res)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}