<template>
  <div>
    <h1>{{ msg }}</h1>
    <a-button type="primary" @click="go">go personal page</a-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      msg: 'home 页面'
    }
  },
  created () {
    // console.log('我是created')
  },
  methods: {
    go: function () {
      this.$router.push({
        path: '/personal'
      })
    }
  }
}
</script>

