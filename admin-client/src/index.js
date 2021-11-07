import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import './antd-vue/index'

const app = new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})

Vue.use(app)