import Vue from 'vue'
import Router from 'vue-router'

import articlesPage from '../pages/articles.vue'
import homePage from '../pages/home.vue'

Vue.use(Router)

const router = new Router ({
  root: '/articles',
  routes: 
  [
    {
      path: '/articles',
      name: 'articles',
      component: articlesPage
    },
    {
      path: '/home',
      name: 'home',
      component: homePage
    },
    {
      path: '/',
      redirect: '/articles'
    }
  ]
})

export default router