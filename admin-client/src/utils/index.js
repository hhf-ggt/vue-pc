import Vue from 'vue';
import utils from '../utils/index'

const utilsPlugin = {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$utils', { value: utils })
  }
}
Vue.use(utilsPlugin)