import { createRouter, createWebHistory } from "vue-router";
// import Vue from 'vue'
// import Router from 'vue-router'
import authList from './authList'
import NotFound from '../pages/NotFound.vue'

// 1、导入路由
import HomeRouter from './home'
import PersonalRouter from './personal'
import ExampleRouter from './example'

// 2、定义路由
// Vue.use(Router)
const router = new createRouter({
  // mode: 'history',
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    ...HomeRouter,
    // {
    //   path: /\*/,
    //   component: NotFound
    // }
    ...PersonalRouter
  ]
})

// 权限判断 菜单级别和页面级别
const routerAuth = () => {
  const allRouters = [
    ...PersonalRouter,
    ...ExampleRouter
  ]

  const routerNames = authList.map(el => el.name)
  // 过滤一级路有
  const hasRouters = allRouters.filter(item => {
    if (routerNames.includes(item.name)) {
      const index = routerNames.indexOf(item.name)
      if (index > -1) {
        const authItem = authList[index]
        if (authList && authList.title) {
          item.meta.title = authItem.title
        }
      }
      return true
    }
  })

  // 过滤二级路由

  hasRouters.forEach(item => {
    if (item.children && item.children.length) {
      const childrenItem = item.children.filter(subItem => {
        if (routerNames.includes(subItem.name)) {
          const index = routerNames.indexOf(subItem.name)
          if (index > -1) {
            const authItem = authList[index]
            if (authList && authList.title) {
              item.meta.title = authItem.title
            }
          }
          return true
        }
      })
      item.children = childrenItem
    }
  })

  const newHasAuthRoutes = JSON.parse(JSON.stringify(hasRouters))
  const rootMenuRoutes = newHasAuthRoutes.filter((item) => item.meta.isMenu)
  rootMenuRoutes.forEach((item) => {
    if (item.children && item.children.length > 0) {
      const childItem = item.children.filter((subitem) => subitem.meta.isMenu)
      item.children = childItem
    }
  })
  // 动态路由
  // 提供路由传参数： params 形式
  router.dynamicRouters = [...hasRouters]
  hasRouters.length && router.addRoute(...hasRouters)
}

routerAuth()

router.beforeEach((to, from, next) => {
  const { title } = to.meta
  if (title) {
    document.title = title
  }
  next()
})

export default router