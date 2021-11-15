import ExampleHttp from '../../service/example/index'

export default {
  name: 'Example',
  data: function () {
    return {
      msg: 'example dir',
      data: []
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    async getInfo() {
      try {
        const res = await ExampleHttp.get('/example', {name: 'huhu'})
        if (res.code === 200) {
          this.data = res.content
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}