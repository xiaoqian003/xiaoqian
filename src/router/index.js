import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/layout/index.vue')
    },
    {
      path: '/one',
      name: 'TestOne',
      component: () => import('@/components/TestDemo.vue')
    },
    {
      path: '/two',
      name: 'TestTwo',
      component: () => import('@/views/Test2/ProductList.vue')
    },
    {
      path: '/three',
      name: 'TestThree',
      component: () => import('@/views/Test3/index.vue')
    },
    {
      path: '/five',
      name: 'TestFive',
      component: () => import('@/views/Test5/UserManagementComponent.vue')
    }
  ]
})

export default router
