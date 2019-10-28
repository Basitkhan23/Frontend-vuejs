import Vue from 'vue'
import VueStripeMenu from 'vue-stripe-menu'
import Vuesax from 'vuesax'

// Import styles
import 'vue-stripe-menu/dist/vue-stripe-menu.css'
import 'vuesax/dist/vuesax.css' 

import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueStripeMenu)
Vue.use(Vuesax)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
