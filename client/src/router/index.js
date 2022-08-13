import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const HomePage = () => import('../views/HomePage')
const LoginPage = () => import('../views/LoginPage')
const ListPage = () => import('../views/ListPage')
const DetailPage = () => import('../views/DetailPage')
const ShopCar = () => import("../views/ShopCar")

const routes = [{
  name: 'home',
  path: '/',
  redirect: '/home'
},
{
  name: 'home',
  path: '/home',
  component: HomePage
},
{
  name: 'login',
  path: '/login',
  component: LoginPage,
}, {
  name: 'list',
  path: '/list',
  component: ListPage
}, {
  name: 'detail',
  path: '/detail',
  component: DetailPage
}, {
  name: 'car',
  path: '/car',
  component: ShopCar
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
