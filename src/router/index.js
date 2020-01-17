import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "login" */  '../views/Signup.vue') 
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: () => import(/* webpackChunkName: "login" */  '../views/UserProfile.vue') 
  },
  {
    path: '/yourprofile',
    name: 'yourprofile',
    component: () => import(/* webpackChunkName: "login" */  '../views/YourProfile.vue') 
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import(/* webpackChunkName: "login" */  '../views/Edit.vue') 
  },
  {
    path: '/profilescity',
    name: 'profilescity',
    component: () => import(/* webpackChunkName: "login" */  '../views/ProfilesCity.vue') 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
