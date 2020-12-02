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
        meta: { name: '文献资源' }
    },
    {
        path: '/lent',
        name: 'Lent',
        meta: { name: '借阅服务' }
    },
    {
        path: '/study',
        name: 'Study',
        meta: { name: '学习支持' }
    },
    {
        path: '/reseach',
        name: 'Reseach',
        meta: { name: '研究支持' }
    },
    {
        path: '/scholar',
        name: 'Scholar',
        meta: { name: '互动交流' }
    },
    {
        path: '/about',
        name: 'About',

        meta: { name: '关于' },
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]