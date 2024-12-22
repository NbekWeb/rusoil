import {
  createRouter,
  createWebHistory
} from 'vue-router'
import MainView from '../views/MainView.vue'
import Home from '../views/dashboard/Home.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'main',
      component: MainView,
      children: [{
        path: '',
        component: Home,
        name: 'home'
      }]
    },

  ],
})

export default router