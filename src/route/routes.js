import Layout from "@/components/layout.vue"

export default [
    {
        path: '/',
       
        component: Layout,
        name: 'Home',
        hidden: true,
        meta: { title: 'home', icon: 'home' },
        redirect: '/about',
        children: [{
            path: 'about',
            name: 'about',
            component: () => import('@/views/About'),
            meta: { title: 'about', icon: 'about' },
            children: [{
                path: 'welcome',
                name: 'welcome',
                component: () => import('@/views/welcome'),
                meta: { title: 'welcome', icon: 'welcome' }
            },{
                path: 'hello',
                name: 'hello',
                component: () => import('@/views/hello'),
                meta: { title: 'hello', icon: 'hello' }
            }],
        }, {
            path: 'home',
            name: 'home',
            component: () => import('@/views/Home'),
            meta: { title: 'home', icon: 'home' }
        }],
    },
    {   
        path: 'hello',
        name: 'hello',
        component: Layout,
        meta: { title: 'hello', icon: 'hello' },
        children: [{
            path: '',
            component: () => import('@/views/hello')
        }]
    }
]