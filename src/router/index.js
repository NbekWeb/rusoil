import {
  createRouter,
  createWebHistory
} from 'vue-router'
import MainView from '@/views/MainView.vue'
import AuthView from '@/views/auth/AuthView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'main',
      component: MainView,
      children: [{
          path: '',
          component: () => import('../views/dashboard/Home.vue'),
          name: 'home'
        },
        {
          path: 'catalog',
          component: () => import('../views/dashboard/Catalog.vue'),
          name: 'catalog'
        },
        {
          path: 'price-list',
          component: () => import('../views/dashboard/PriceList.vue'),
          name: 'priceList'
        },
        {
          path: 'basket',
          component: () => import('../views/dashboard/Basket.vue'),
          name: 'basket'
        },
        {
          path: 'lubricants/motor-oils',
          component: () => import('../views/dashboard/MotorOil.vue'),
          name: 'motorOil'
        },
        {
          path: 'lubricants/card-item',
          component: () => import('../views/dashboard/CardItem.vue'),
          name: 'item'
        },

        {
          path: 'settlements',
          component: () => import('../views/dashboard/Settlements.vue'),
          name: 'settlements',

        },
        {
          path: 'settlements-item',
          component: () => import('../views/dashboard/SettlementsItem.vue'),
          name: 'settlementsItem',
        },

        {
          path: 'complaints',
          component: () => import('../views/dashboard/Complaints.vue'),
          name: 'complaints',
        },
        {
          path: 'my-account',
          component: () => import('../views/dashboard/MyAccount.vue'),
          name: 'myAccount',
        },
        {
          path: 'contact',
          component: () => import('../views/dashboard/Contact.vue'),
          name: 'contact',
        },
        {
          path: 'news',
          component: () => import('../views/dashboard/News.vue'),
          name: 'news',
        },
        {
          path: 'services',
          component: () => import('../views/dashboard/News.vue'),
          name: 'services',
        },
        {
          path: 'bonus',
          component: () => import('../views/dashboard/News.vue'),
          name: 'bonus',
        },
        {
          path: 'msg',
          component: () => import('../views/dashboard/News.vue'),
          name: 'msg',
        },
        {
          path: 'favorite',
          component: () => import('../views/dashboard/News.vue'),
          name: 'favorite',
        },
        {
          path: 'bonusApp',
          component: () => import('../views/dashboard/News.vue'),
          name: 'bonusApp',
        },
        {
          path: 'help',
          component: () => import('../views/dashboard/News.vue'),
          name: 'help',
        },
        {
          path: 'news-item',
          component: () => import('../views/dashboard/NewsItem.vue'),
          name: 'newsItem',
        },
        {
          path: 'aksi',
          component: () => import('../views/dashboard/Aksi.vue'),
          name: 'aksi',
        }, {
          path: 'aksi-item',
          component: () => import('../views/dashboard/AksiItem.vue'),
          name: 'aksiItem',
        },


      ]
    },

    {
      path: '',
      component: AuthView,
      name: 'auth',
      children: [{
          path: '',
          component: () => import('../views/auth/login.vue'),
          name: 'login'
        },
        {
          path: 'regis',
          component: () => import('../views/auth/regis.vue'),
          name: 'regis'
        },

      ]
    }

  ],
})

export default router