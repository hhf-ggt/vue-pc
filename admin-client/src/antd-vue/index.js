import Vue from 'vue'

import { Button, message, Result } from 'ant-design-vue'

Vue.use(Button)
Vue.use(Result)


Vue.config.productionTip = false
Vue.prototype.$message = message