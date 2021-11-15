<template>
  <div>
    <h1>name: {{ data[0].name }}</h1>
    <h1>age: {{ data[0].age }}</h1>
    <h1>sex: {{ data[0].sex === 1 ? '男' : '女' }}</h1>
  </div>
</template>

<script>
import Example from './Example'
export default Example
</script>

<style lang="less" scoped>
@import './Example.less';
</style>