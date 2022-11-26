import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import DashBoard from '../views/DashBoard.vue'
import ProfileView from '../views/ProfileView.vue'
import NotesView from '../views/NotesView.vue'
import AddUserView from '../views/AddUserView.vue'
import AddNotesView from '../views/AddNotesView.vue'
import UpdateUserView from '../views/UpdateUserView.vue'
import UpdateNoteView from '../views/UpdateNoteView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/dash',
    name: 'dashboard',
    component: DashBoard,
    beforeEnter: (to,from, next) => {
      if(!store.state.auth){
        next('/login')
      }else{
        next()
      }
    },
    meta: {
      title: 'Dash'
    }
  },
  {
    path: '/notes',
    name: 'notes',
    component: NotesView,
    beforeEnter: (to,from, next) => {
      if(!store.state.auth){
        next('/login')
      }else{
        next()
      }
    },
    meta: {
      title: 'Notes',
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    beforeEnter: (to,from, next) => {
      if(!store.state.auth){
        next('/login')
      }else{
        next()
      }
    },
    meta: {
      title: 'Profile',
    }
  },
  {
    path: '/register',
    name: 'register',
    component: AddUserView,
    beforeEnter: (to,from, next) => {
      if(!store.state.Admin || !store.state.auth){
        next('/')
      }else{
        next()
      }
    },
    meta: {
      title: 'Register',
    }
  },
  {
    path: '/addNotes',
    name: 'add-notes',
    component: AddNotesView,
    beforeEnter: (to,from, next) => {
      if(!store.state.auth){
        next('/login')
      }else{
        next()
      }
    },
    meta: {
      title: 'Notes',
    }
  },
  {
    path: '/update-user/:id',
    name: 'updateUser',
    component: UpdateUserView,
    beforeEnter: (to,from, next) => {
      if(!store.state.auth){
        next('/login')
      }else{
        next()
      }
    },
    meta: {
      title: 'Update',
      needsAuth: true,
      adminAuth: false,
    }
  },
  {
    path: '/update-note/:id',
    name: 'updateNote',
    component: UpdateNoteView,
    beforeEnter: (to,from, next) => {
      if(!store.state.auth){
        next('/login')
      }else{
        next()
      }
    },
    meta: {
      title: 'Update',
      needsAuth: true,
      adminAuth: false,
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  // mode: 'history',
  routes
})

router.beforeEach((to,from,next) => {
  document.title = `${to.meta.title} | MEVN`;
  next()
})

export default router
