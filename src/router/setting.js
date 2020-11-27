import Home from '../views/Home.vue'

export const routerMap = [
  //
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { name: '首页' }
  },
  {
    path: '/resuorce',
    name: 'Resuorce',
    meta: { name: '资源' }
  },
  {
    path: '/lent',
    name: 'Lent',
    meta: { name: '借阅' }
  },
  {
    path: '/study',
    name: 'Study',
    meta: { name: '学习' }
  },
  {
    path: '/reseach',
    name: 'Reseach',
    meta: { name: '研究' }
  },
  {
    path: '/scholar',
    name: 'Scholar',
    meta: { name: '学术' }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
