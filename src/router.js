import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Uyanış from './views/Uyanış.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/uyanış',
      name: 'uyanış',
      component: Uyanış
    }
  ],
  scrollBehavior (to, from, savedPosition){
    if (savedPosition) {
      return savedPosition
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 })
        }, 1000)
      })
    }
  }
})
