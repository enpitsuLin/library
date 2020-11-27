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

        meta: { name: '关于' },
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]
