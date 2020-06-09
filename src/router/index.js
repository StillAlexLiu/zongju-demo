import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'
import main from '../views/main'
import deptIndex from '../views/deptIndex/departmentIndex.vue'
import metering from '../views/metering/metering'
import foodIndex from '../views/foodConfig/foodIndex.vue'
import superviseIndex from '../views/superIndex/superviseIndex.vue'
import productIndex from '../views/productIndex/productIndex.vue'
import LawIndex from '../views/Topic/Law/LawIndex'
import ConsultationIndex from '../views/Consultation/ConsultationIndex'
import Province from '../views/province/Province'

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
      },
      {
        path: '/province',
        name: 'province',
        component: Province
      },
      {
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
      },
      {
        path: '/LawIndex',
        name: 'LawIndex',
        component: LawIndex
      },
      {
        path: '/ConsultationIndex',
        name: 'ConsultationIndex',
        component: ConsultationIndex
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
