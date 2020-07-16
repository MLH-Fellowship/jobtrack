import Vue from 'vue'
import VueRouter from 'vue-router'

// import { authGuard } from '../utils/auth'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "logout" */ '../views/auth/Logout.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // beforeEnter: authGuard,
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  },
  {
    path: '/demo/jobs-board',
    name: 'demo-jobs-board',
    // beforeEnter: authGuard,
    component: () => import(/* webpackChunkName: "jobs-board" */ '../views/demo/DemoJobsPipeline.vue')
  },
  {
    path: '/demo/job/create',
    name: 'add-job',
    // beforeEnter: authGuard,
    component: () => import(/* webpackChunkName: "jobs-board" */ '../views/demo/AddJob.vue')
  },
  {
    path: '/demo/job/edit',
    name: 'edit-job',
    // beforeEnter: authGuard,
    component: () => import(/* webpackChunkName: "edit-jobs-board" */ '../views/demo/EditJob.vue')
  },
  {
    path: '/demo/jobs-board/filtered',
    name: 'demo-filtered-jobs-board',
    // beforeEnter: authGuard,
    component: () => import(/* webpackChunkName: "filtered-jobs-board" */ '../views/demo/JobsFilterView.vue')
  },
  {
    path: '/demo/jobs-board/tags',
    name: 'demo-tag-jobs-board',
    // beforeEnter: authGuard,
    component: () => import(/* webpackChunkName: "filtered-jobs-board" */ '../views/demo/JobsTagView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/demo/DemoJobsPipeline.vue')
  },
  {
    path: '/user/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/user/Settings.vue')
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/user/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
