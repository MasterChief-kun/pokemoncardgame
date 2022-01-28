import { createRouter, createWebHistory } from "vue-router"

const routes = 
[
  {
    path: '/pokemoncardgame/',
    name: 'Main Menu',
    component: () => import('../views/main_menu.vue')
  },
  {
    path: '/pokemoncardgame/guess_the_mon',
    name: 'Play',
    component: () => import('../views/game.vue')
  },
  {
    path: '/pokemoncardgame/game_over',
    name: 'Game Over',
    component: () => import('../views/game_over.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router