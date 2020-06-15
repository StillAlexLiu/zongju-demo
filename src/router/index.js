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
import Hotspot from '../views/Hotspot/Hotspot'
import DrugSafety from '../views/DrugSafety/DrugSafety'
import Business from '../views/Business/Business'

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
        name: '国家局',
        meta: {
          login_require: true
        },
        component: Index
      },
      {
        path: '/province',
        name: '河北',
        meta: {
          login_require: true
        },
        component: Province
      },
      {
        path: '/deptIndex',
        name: '登记注册局',
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
        name: '食品安全',
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
        name: '执法稽查局',
        meta: {
          login_require: true
        },
        component: LawIndex
      },
      {
        path: '/product',
        name: '产品质量安全监督管理司',
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
        name: '综合风险',
        meta: {
          login_require: true
        },
        component: Risk
      }, {
        path: '/Industry',
        name: '工业品和消费品',
        meta: {
          login_require: true
        },
        component: Industry
      }, {
        path: '/Hotspot',
        name: '舆情热点',
        meta: {
          login_require: true
        },
        component: Hotspot
      }, {
        path: '/DrugSafety',
        name: '药品安全',
        meta: {
          login_require: true
        },
        component: DrugSafety
      }, {
        path: '/Business',
        name: '营商环境',
        meta: {
          login_require: true
        },
        component: Business
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

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  // if (to.meta.login_require) {
  //   // 需要登录
  //   const loginStr = sessionStorage.getItem('login')
  //   console.log(loginStr)
  //   if (loginStr !== null && loginStr === 'true') {
  //     console.log('已登录')
  //     next()
  //     // 已登录
  //   } else {
  //     // 未登录 跳转
  //     console.log('未登录')
  //     next({ path: 'login' })
  //   }
  // } else {
  //   next()
  // }
  next()
})
export default router
