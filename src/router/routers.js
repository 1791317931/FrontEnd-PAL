import Index from '@/view/Index.vue'

export default [
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Index,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/view/Front/Home.vue')
      }
    ]
  }
]
