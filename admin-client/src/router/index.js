import Vue from 'vue'
import Router from 'vue-router'

import HomeRouter from "./home"
import PersonalRouter from "./personal"

console.log(PersonalRouter)
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/personal'
    },
    ...HomeRouter,
    ...PersonalRouter
  ]
})


export default router