import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import BoardGame from '../views/BoardGame.vue'
import Welcome from '../views/Welcome.vue'
import GameOver from '../views/Gameover'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/board-game',
    name: 'BoardGame',
    component: BoardGame
  },
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/gameover',
    name: 'GameOver',
    component: GameOver
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
