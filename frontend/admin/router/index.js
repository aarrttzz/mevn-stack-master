import Vue from 'vue'
import Router from 'vue-router'

import usersPage from '../pages/users.vue'
import homePage from '../pages/home.vue'

Vue.use(Router)

const router = new Router ({
  root: '/admin',
  routes: 
  [
    {
      path: '/users',
      name: 'users',
      component: usersPage
    },
    {
      path: '/admin',
      name: 'home',
      component: homePage
    },
    {
      path: '/',
      redirect: '/admin'
    }
  ]
})

export default router