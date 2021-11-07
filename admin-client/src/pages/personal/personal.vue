<template>
  <div>
    <h1>
      {{ msg }}
    </h1>
    <button @click="goSmall(2)">click me</button>
  </div>
</template>

<script>
import SmallPage from './smallPage.vue'
export default {
  name: 'PersonalPage',
  components: {
    SmallPage
  },
  data: function () {
    return {
      msg: '个人中心'
    }
  },
  methods: {
    goSmall(type) {
      this.$router.push({
        path: '/personal/smallPage'
      })
    }
  }
}
</script>