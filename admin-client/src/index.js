import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import { setupAntd } from "./antd-vue" // 引用ant组件文件 index.js

const app = createApp(App);
  app.use(router)
  app.mount('#app')
  setupAntd(app)