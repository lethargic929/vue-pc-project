import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/Home.vue'),
    children: [
      { path: '/', component: () => import('../views/home/Welcome.vue') },
     {path:'/article',component:() => import('../views/home/Article.vue')},
     {path:'/image',component:() => import('../views/home/Image.vue')},
     {path:'/publish',component:() => import('../views/home/Publish.vue')},
     {path:'/comment',component:() => import('../views/home/Comment.vue')},
     {path:'/fans',component:() => import('../views/home/Fans.vue')},
     {path:'/setting',component:() => import('../views/home/Setting.vue')},
      
    ]
  }
  
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active'
})

export default router
