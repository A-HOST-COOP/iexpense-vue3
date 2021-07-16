import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthLayout from '../views/auth/Layout.vue'
import DashboardLayout from '../views/dashboard/Layout.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
  },
  {
    path: '/',
    name: 'DashboardLayout',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home page and report" */ '../views/dashboard/Report.vue')
      },
      {
        path: '/expense',
        name: 'ExpenseIndex',
        component: () => import(/* webpackChunkName: "expense page" */ '../views/dashboard/expense/Index.vue')
      },
      {
        path: '/expense/create',
        name: 'ExpenseCreate',
        component: () => import(/* webpackChunkName: "expense create page" */ '../views/dashboard/expense/Create.vue')
      },
    ]
  },
  {
    path: '/auth',
    name: 'AuthLayout',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login page" */ '../views/auth/Login.vue')
      },
      {
        path: '/forgot',
        name: 'Forgot',
        component: () => import(/* webpackChunkName: "forgot password page" */ '../views/auth/ForgotPassword.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
