import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import config from '../views/config/config'
import main from '../views/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: main,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      }
    ]
  },
  {
    path: '/config',
    name: 'config',
    component: config
  }
]

const router = new VueRouter({
  routes
})

export default router
