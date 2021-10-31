// const Personal = () => import(/* webpackChunkName: 'pages/personal' */ '@/personal/personal.vue')

import Personal from '@/personal/personal.vue'

const PersonalRouter = [{
  path: '/personal',
  name: 'PersonalPage',
  component: Personal
}]

export default PersonalRouter