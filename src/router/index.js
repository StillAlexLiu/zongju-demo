import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import main from '../views/main'
import deptIndex from '../views/departmentIndex.vue'
import metering from '../views/metering'
import foodIndex from '../views/foodIndex.vue'
import superviseIndex from '../views/superviseIndex.vue'
import productIndex from '../views/productIndex.vue'
import countryIndex from '../views/countryIndex'
import provinceIndex from '../views/provinceIndex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: main,
    redirect: '/countryIndex',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/countryIndex',
        name: 'countryIndex',
        component: countryIndex
      },
      {
        path: '/provinceIndex',
        name: 'provinceIndex',
        component: provinceIndex
      }, {
        path: '/deptIndex',
        name: 'deptIndex',
        component: deptIndex
      },
      {
        path: '/metering',
        name: 'metering',
        component: metering
      },
      {
        path: '/foodIndex',
        name: 'foodIndex',
        component: foodIndex
      },
      {
        path: '/superviseIndex',
        name: 'superviseIndex',
        component: superviseIndex
      },
      {
        path: '/productIndex',
        name: 'productIndex',
        component: productIndex
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
