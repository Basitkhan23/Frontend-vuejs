import Vue from 'vue'
import VueParticles from 'vue-particles'


import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueParticles)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  }
  // {
  //   path: '/Secondpage',
  //   name: 'SecondPage',
  //   component: () => import ('../components/SecondPage.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
