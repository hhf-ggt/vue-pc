<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary" @click="goHome">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>

<script>

export default {
  name: 'NotFound',
  data: () => {
    return {
      msg: '暂未找到页面'
    }
  },
  methods: {
    goHome() {
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>
