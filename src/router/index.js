import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const ProFile = () => import('views/profile/ProFile')
const GoodsInfo = () => import('views/goods/GoodsInfo')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: ProFile
  },
  {
    path: '/goods',
    component: GoodsInfo
  },
]

const router = new VueRouter({
  routes
})

export default router
