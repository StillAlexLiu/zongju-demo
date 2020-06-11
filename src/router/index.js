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
import Product from '../views/product/Product'
import Login from '../views/login/Login'
import Risk from '../views/Topic/Risk/Risk'
import Industry from '../views/Industry/Industry'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: main,
    meta: {
      login_require: true
    },
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          login_require: true
        },
        component: Index
      },
      {
        path: '/province',
        name: 'province',
        meta: {
          login_require: true
        },
        component: Province
      },
      {
        path: '/deptIndex',
        name: 'deptIndex',
        meta: {
          login_require: true
        },
        component: deptIndex
      },
      {
        path: '/metering',
        name: 'metering',
        meta: {
          login_require: true
        },
        component: metering
      },
      {
        path: '/foodIndex',
        name: 'foodIndex',
        meta: {
          login_require: true
        },
        component: foodIndex
      },
      {
        path: '/superviseIndex',
        name: 'superviseIndex',
        meta: {
          login_require: true
        },
        component: superviseIndex
      },
      {
        path: '/productIndex',
        name: 'productIndex',
        meta: {
          login_require: true
        },
        component: productIndex
      },
      {
        path: '/LawIndex',
        name: 'LawIndex',
        meta: {
          login_require: true
        },
        component: LawIndex
      },
      {
        path: '/product',
        name: 'Product',
        meta: {
          login_require: true
        },
        component: Product
      },
      {
        path: '/ConsultationIndex',
        name: 'ConsultationIndex',
        meta: {
          login_require: true
        },
        component: ConsultationIndex
      }, {
        path: '/Risk',
        name: 'Risk',
        meta: {
          login_require: true
        },
        component: Risk
      }, {
        path: '/Industry',
        name: 'Industry',
        meta: {
          login_require: true
        },
        component: Industry
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      login_require: false
    },
    component: Login
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  if (to.meta.login_require) {
    // 需要登录
    const loginStr = sessionStorage.getItem('login')
    console.log(loginStr)
    if (loginStr !== null && loginStr === 'true') {
      console.log('已登录')
      next()
      // 已登录
    } else {
      // 未登录 跳转
      console.log('未登录')
      next({ path: 'login' })
    }
  } else {
    next()
  }
})
export default router
