const Personal = () => import(/* webpackChunkName: 'pages/personal' */ '../../pages/personal/personal.vue')
const SmallPage = () => import(/* webpackChunkName: 'pages/personal/smallPage' */ '../../pages/personal/smallPage.vue')

const PersonalRouter = [{
  path: '/personal',
  name: 'PersonalPage',
  component: Personal,
  meta: {
    title: '个人中心',
    isMenu: true
  },
  children: [
    {
      path: 'smallPage',
      name: 'SmallPage',
      component: SmallPage,
      meta: {
        title: '小页面',
        isMenu: true
      }
    }
  ]
}]

export default PersonalRouter