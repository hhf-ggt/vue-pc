<template>
  <div>
    <h1>
      {{ msg }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'PersonalPage',
  data: function () {
    return {
      msg: '个人中心'
    }
  }
}
</script>