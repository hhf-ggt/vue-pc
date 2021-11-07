import Home from '../../pages/home/home.vue'

const HomeRouter = [{
  path: '/home',
  component: Home,
  name: 'HomePage',
  meta: {
    title: '首页',
    isMenu: true
  }
}]

export default HomeRouter