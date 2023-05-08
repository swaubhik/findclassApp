import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/routine/:id',
      name: 'routine',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RoutineView.vue')
    },
    {
      path: '/teacher/:code/:sem',
      name: 'teacher',
      component: () => import('../views/TeacherView.vue')
    },
    {
      path: '/drop',
      name: 'drop',
      component: () => import('../views/DropdownView.vue')
    }
  ]
})

export default router
